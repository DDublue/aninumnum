"use client";

import {Input} from "@/components/ui/input"; 
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import { useState } from "react";

export default function SongSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  return (
    <Popover>
      <PopoverTrigger>
        <Input type="search"/>
      </PopoverTrigger>
      <PopoverContent>

      </PopoverContent>
    </Popover>
  )
}
