import PhoneItem from "@/components/PhoneItem";
import ServiceItem from "@/components/ServiceItem";
import { db } from "@/lib/prisma";
import {
  ChevronLeftIcon,
  MapPinIcon,
  MenuIcon,
  Smartphone,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params }: BarbershopProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
    include: {
      services: true,
    },
  });

  if (!barbershop) return <div>Barbershop not found</div>;

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt="banner"
          fill
          className="object-cover"
        />
        <button className="absolute left-4 top-4 rounded bg-secondary">
          <Link href="/">
            <ChevronLeftIcon className="h-8 w-8" />
          </Link>
        </button>
        <button className="absolute right-4 top-4 rounded bg-secondary">
          <MenuIcon className="h-8 w-8" />
        </button>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-semibold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="ml-1 text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p className="ml-1 text-sm">5.0 (899 Rattings)</p>
        </div>
      </div>

      {/* DESCRIPTION ABOUT */}
      <div className="border-b border-solid p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-400">
          About Us
        </h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVICES */}
      <div className="border-b border-solid p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-400">
          Services
        </h2>
        <div className="space-y-3">
          {barbershop?.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-400">
          Contact
        </h2>
        {barbershop?.phone.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;
