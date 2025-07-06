"use client";

import ServicePicker from "./ServicePicker";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import React, {useEffect, useState} from "react";

const services = ["mal", "anilist", "imdb"]; // testing

export default function ServiceGrid() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    };

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-screen">
      <Carousel
        setApi={setApi}
        className="w-full max-w-md"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="basis-3/5">
              <ServicePicker index={index} current={current}>
                {service}
              </ServicePicker>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
};
