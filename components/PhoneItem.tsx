"use client";
import { Smartphone } from "lucide-react";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone);
  };

  return (
    <div key={phone} className="flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <Smartphone />
        <p className="text-sm">{phone}</p>
      </div>

      {/* RIGHT */}
      <button
        className="rounded bg-secondary px-4 py-1 text-sm text-white"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copy
      </button>
    </div>
  );
};

export default PhoneItem;
