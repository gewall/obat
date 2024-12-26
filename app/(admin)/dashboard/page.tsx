"use client";
import React, { useEffect, useState } from "react";
import SectionLayout from "./_components/SectionLayout";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Typograph from "@/components/ui/typograph";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
const Dashboard = () => {
  const [stokObat, setStokObat] = useState<[]>([]);
  const [topObat, setTopObat] = useState<[]>([]);
  useEffect(() => {
    const getStockObat = async () => {
      const obat = await fetch(`/api/obat`);
      const obatRes = await obat.json();
      const _obat = obatRes.data
        ?.sort((a: any, b: any) => a.kuantiti - b.kuantiti)
        .map((_: any) => ({
          nama: _.nama,
          kuantiti: _.kuantiti,
        }));

      setStokObat(_obat);
    };

    const getTopObat = async () => {
      const obat = await fetch(`/api/obat/keluar`);
      const obatRes = await obat.json();
      const _obat = obatRes.count
        ?.sort((a: any, b: any) => a._sum.kuantiti + b._sum.kuantiti)
        .map((_: any) => ({
          nama: _.nama,
          kuantiti: _._sum.kuantiti,
        }));

      console.log(obatRes.count);

      setTopObat(_obat);
    };

    getStockObat();
    getTopObat();
  }, []);
  // console.log(session, "ss");

  console.log(topObat, "stok");

  // if (!session) return <div>Not authenticated</div>;
  return (
    <SectionLayout title="Dashboard">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col border-slate-100 border-2 p-4 rounded-lg gap-4">
          <Typograph variant="Sub-Header">
            <span className="border-l-4 border-red-400 mr-4" />
            Obat dengan stok minimum
          </Typograph>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={stokObat.slice(0, 5)}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="nama"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                // tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="kuantiti" fill="#f87171" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="flex flex-col border-slate-100 border-2 p-4 rounded-lg gap-4">
          <Typograph variant="Sub-Header">
            <span className="border-l-4 border-cyan-400 mr-4 " />
            Obat paling diminati
          </Typograph>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={topObat.slice(0, 5)}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="nama"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                // tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="kuantiti" fill="var(--color-desktop)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Dashboard;
