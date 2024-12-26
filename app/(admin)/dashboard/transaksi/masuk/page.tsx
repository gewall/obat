"use client";

import React, { useEffect, useState } from "react";
import SectionLayout from "../..//_components/SectionLayout";
import { DataTable } from "../../_components/DataTable";
import { columns } from "./_lib/columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import Link from "next/link";
import { iTransaksi } from "./_lib/transaksi.type";

const data: iTransaksi[] = [
  {
    id: "T001",
    iduser: "U001",
    idobat: "1",
    kuantiti: 10,
    tanggaltransaksi: "2023-12-20",
  },
  {
    id: "T002",
    iduser: "U002",
    idobat: "2",
    kuantiti: 5,
    tanggaltransaksi: "2023-12-21",
  },
  {
    id: "T003",
    iduser: "U003",
    idobat: "3",
    kuantiti: 15,
    tanggaltransaksi: "2023-12-22",
  },
  {
    id: "T004",
    iduser: "U001",
    idobat: "4",
    kuantiti: 20,
    tanggaltransaksi: "2023-12-23",
  },
  {
    id: "T005",
    iduser: "U004",
    idobat: "5",
    kuantiti: 2,
    tanggaltransaksi: "2023-12-24",
  },
  {
    id: "T006",
    iduser: "U005",
    idobat: "3",
    kuantiti: 8,
    tanggaltransaksi: "2023-12-25",
  },
  {
    id: "T007",
    iduser: "U006",
    idobat: "1",
    kuantiti: 12,
    tanggaltransaksi: "2023-12-26",
  },
  {
    id: "T008",
    iduser: "U007",
    idobat: "4",
    kuantiti: 7,
    tanggaltransaksi: "2023-12-27",
  },
  {
    id: "T009",
    iduser: "U008",
    idobat: "2",
    kuantiti: 18,
    tanggaltransaksi: "2023-12-28",
  },
  {
    id: "T010",
    iduser: "U009",
    idobat: "5",
    kuantiti: 3,
    tanggaltransaksi: "2023-12-29",
  },
];

const Masuk = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/transaksi/masuk");
      const result = await response.json();

      setData(result.data);
    };

    getData();
  }, []);

  console.log(data);

  return (
    <SectionLayout title="Transaksi Masuk ">
      <div className="flex mb-4">
        <Button className="bg-sky-300 hover:bg-sky-400" asChild>
          <Link href={"/dashboard/transaksi/masuk/tambah"}>
            <Plus /> Tambah
          </Link>
        </Button>

        {/* <AddProject /> */}
      </div>

      <DataTable columns={columns} data={data} />
    </SectionLayout>
  );
};

export default Masuk;
