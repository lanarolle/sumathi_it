"use client";

import { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.name}
            className="pl-4 basis-full md:basis-1/2"
          >
            <Card className="h-full border-slate-200 shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center">
                  <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-brand-lavender">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <Quote className="mx-auto h-10 w-10 text-brand-purple lg:mx-0" />

                    <p className="mt-4 leading-8 text-slate-700">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <h3 className="mt-6 text-xl font-semibold text-navy-950">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-brand-purple">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}