"use client";

import { useEffect, useRef } from "react";

// Import logos from src/logos folder
import wipro from "../logos/wipro.png";
import techmahindra from "../logos/techmahindra.png";
import tcs from "../logos/tcs.png";
import moglix from "../logos/moglix.png";
import ford from "../logos/ford.png";
import ericsson from "../logos/ericsson.png";
import deloitte from "../logos/deloitte.png";
import capgemini from "../logos/capgemini.png";
import lt from "../logos/lt.png";

const logos = [
  { src: wipro, alt: "Wipro" },
  { src: techmahindra, alt: "Tech Mahindra" },
  { src: tcs, alt: "Tata Consultancy Services" },
  { src: moglix, alt: "Moglix" },
  { src: ford, alt: "Ford" },
  { src: ericsson, alt: "Ericsson" },
  { src: deloitte, alt: "Deloitte" },
  { src: capgemini, alt: "Capgemini" },
  { src: lt, alt: "L&T Infotech" },
];

export default function PlacementSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (carousel) {
        scrollAmount += 1;
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(scrollStep, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Placement in Top Corporates
          </h2>
          <p className="text-xl text-muted-foreground">
            Our learners are placed in leading companies across the globe
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-12"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-40 h-20"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
