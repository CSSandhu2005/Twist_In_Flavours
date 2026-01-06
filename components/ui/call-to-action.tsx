"use client";
import { ShoppingBag, Menu, FileDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 rounded-md bg-transparent p-4 text-center lg:p-14">
          {/* Badge */}
          <div>
            <Badge className="bg-[#03335a]">Order with ease</Badge>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-3">
            <h3 className="max-w-2xl text-3xl font-semibold tracking-tighter md:text-5xl">
              Fresh flavours, just a click away
            </h3>
            <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground">
              From handcrafted dishes to signature specials, enjoy
              restaurant-quality food wherever you are. Order online or explore
              our menu before you visit.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              className="gap-3 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.swiggy.com/city/aurangabad/twist-in-flavours-zostel-nirala-bazar-rest884776?is_retargeting=true&media_source=GooglePlaceOrder",
                  "_blank"
                );
              }}
            >
              Order Online <ShoppingBag className="h-4 w-4" />
            </Button>

            <a href="/Menu_Twist_In_Flavours_.pdf" download={true}>
              <Button className="gap-3 bg-[#03335a] hover:bg-[#fed7a2] hover:text-black cursor-pointer">
                Download Menu <FileDown className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
