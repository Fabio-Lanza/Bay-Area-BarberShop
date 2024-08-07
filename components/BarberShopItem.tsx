import { Barbershop } from "@prisma/client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopProps {
  barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarbershopProps) => {
  return (
    <Card className="min-w-[159px]">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGE */}
        <div className="relative h-[160px] w-full">
          <Image
            src={barbershop.imageUrl}
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />

          <Badge className="absolute left-2 top-2" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="ml-1 text-xs">5.0</p>
          </Badge>
        </div>

        {/* TITLE */}
        <div className="py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            <Link href={`/barbershop/${barbershop.id}`}>Book</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarberShopItem;
