import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import banner01 from "../assets/banner01.png";

export default function Home() {
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

        <div className="relative w-full h-[150px] mt-6 ">
          <Image src={banner01} alt="banner" fill className="object-cover rounded-xl" />
        </div>
      </div>
    </main>
  );
}
