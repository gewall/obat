import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    // Parsing data dari request body
    const data = await request.json();
    const _data = data.map((_:any)=> ({idtransaksi:_.idtransaksi,kuantiti:_.kuantiti,nama:_.nama,satuan:_.satuan,status:_.status}))
    console.log(_data,"data");
    
    // Validasi data (opsional, disarankan menggunakan library seperti zod)
    if (!data) {
      return new Response(
        JSON.stringify({ msg: "Invalid data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Membuat transaksi menggunakan Prisma
    const transaksi = await prisma.obatKeluar.createMany({
      data:_data
    });

    
    data.forEach(async (_:any)=>{
        const obat = await prisma.obat.findFirst({where:{id:_.id}})

        if (!obat) {
            return new Response(
              JSON.stringify({ msg: "Error processing obat" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        const updateObat = await prisma.obat.update({
            where:{id: obat.id},data:{kuantiti: obat?.kuantiti - _.kuantiti}
        });
        if (!updateObat) {
            return new Response(
              JSON.stringify({ msg: "Error processing update obat" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
    })


    if (!transaksi) {
      return new Response(
        JSON.stringify({ msg: "Error creating transaction" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Berhasil membuat transaksi
    return new Response(
      JSON.stringify({
        msg: "Success",
    
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error:any) {
   console.log("ERror", error);
   
    // Mengembalikan respons error
    return new Response(
      JSON.stringify({ msg: "Internal server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
