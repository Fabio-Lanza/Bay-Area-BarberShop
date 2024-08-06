import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import banner01 from "../assets/banner01.png";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { db } from "@/lib/prisma";
import BarberShopItem from "@/components/BarberShopItem";

async function Home() {
  const Barbershop = await db.barbershop.findMany();
  console.log(Barbershop);

  return (
    <main className="">
      <Header />
      <div className="p-5">
        <h2 className="text-2xl font-bold">Hi, Fabio! </h2>
        <p>Monday, August 05</p>

        <div className="mt-6 flex items-center gap-2">
          <Input type="text" placeholder="Search..." className="outline-none" />
          <Button>
            <SearchIcon />
          </Button>
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
        <h2 className="mb-3 mt-6 text-xl font-bold">Appointments</h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* LEFT_SIDE */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-medium">Hair Cut</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                    alt="user"
                  />
                </Avatar>
                <p className="text-sm">Barber Shop Name</p>
              </div>
            </div>

            {/* RIGHT_SIDE */}
            <div className="flex flex-col items-center justify-center border-l border-solid px-8">
              <p className="mb-1 text-sm">August</p>
              <p className="mb-1 text-2xl">05</p>
              <p className="text-sm">09:00 am</p>
            </div>
          </CardContent>
        </Card>

        {/* RECOMMEND==================== */}
        <h2 className="mb-3 mt-6 text-xl font-bold">Recommended</h2>
        <div className="flex gap-4  overflow-auto [&::-webkit-scrollbar]:hidden">

        {Barbershop.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
