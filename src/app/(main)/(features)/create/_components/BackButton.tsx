import {Button} from "@/components/ui/button";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import {IoChevronBack} from "react-icons/io5";

type buttonVariants = "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "spotify";

interface BackButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant: buttonVariants;
  href: string;
}

export default function BackButton({className, variant, href}: BackButtonProps) {
  return (
    <Button variant={variant} className={className} asChild>
      <Link href={href} prefetch={false}>
        <IoChevronBack />
        <span className="hidden md:inline">
          Back
        </span>
      </Link>
    </Button>
  );
}
