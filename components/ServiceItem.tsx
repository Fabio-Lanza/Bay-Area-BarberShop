import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative h-[110px] min-h-[110px] w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right side */}
        <div className="w-full space-y-2">
          <h3 className="">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between pt-3">
            <p className="text-sm font-bold text-primary">
              ${Number(service.price).toFixed(2)}
            </p>
            <button className="rounded bg-secondary px-4 py-1 text-sm text-white">
              Book
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
