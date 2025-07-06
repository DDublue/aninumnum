

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, {useState} from "react";

interface ServicePickerProps
  extends React.ComponentPropsWithoutRef<"div">{
    children?: React.ReactNode;
    index: number;
    current: number;
}

export default function ServicePicker({
  children,
  index,
  current,
  ...props
}: ServicePickerProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const showButtons = isHovered && index === current - 1;

  return (
    <Card
      className={cn(
        "bg-primary text-primary-foreground transition-all duration-500 justify-center h-60",
        {
          "opacity-30": index !== current - 1,
          "mix-blend-color": index !== current - 1,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="flex flex-col justify-center items-center">
        <span className="">{children}</span>

        <div
          className={cn(
            "mt-4 flex gap-4 opacity-0 transition-opacity duration-300",
            {
              "opacity-100": showButtons,
            }
          )}
        >
          <Button variant="secondary">
            <Link href="/create/mal/quick">
              Quick
            </Link>
          </Button>
          <Button variant="secondary">
            <Link href="/create/mal/full">
              Full
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
};
