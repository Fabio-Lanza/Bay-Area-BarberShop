import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import banner01 from "../assets/banner01.png";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import BarberShopItem from "@/components/BarberShopItem";
import scissors from "@/assets/scissors.png";
import razor from "@/assets/razor.png";
import edge from "@/assets/edge.png";
import BookingItem from "@/components/BookingItem";

async function Home() {
  const Barbershop = await db.barbershop.findMany();
  const popularShop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <main className="">
      <Header />
      <div className="p-5">
        <h2 className="text-2xl font-bold">Hi, Fabio! </h2>
        <p>Monday, August 05</p>

        {/* SEARCH ====================*/}
        <div className="mt-6 flex items-center gap-2">
          <Input type="text" placeholder="Search..." className="outline-none" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-white">
            <Image src={scissors} alt="hair" width={16} height={16} />
            Hair
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-white">
            <Image src={edge} alt="hair" width={16} height={16} />
            Beard
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-white">
            <Image src={razor} alt="hair" width={16} height={16} />
            Edge
          </button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src={banner01}
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* APPOINTMENT==================== */}
        <BookingItem />

        {/* RECOMMEND==================== */}
        <h2 className="mb-3 mt-6 text-xl font-bold">Recommended</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {Barbershop.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* POPULAR==================== */}
        <h2 className="mb-3 mt-6 text-xl font-bold">Popular</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularShop.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
