import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image
          src={Logo}
          alt="Barbershop"
          width={120}
          height={18}
          priority={true}
        />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
