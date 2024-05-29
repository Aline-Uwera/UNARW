'use client'

import HeroSection from "@/components/Sections/HeroSection";
import Navbar from "@/components/Sections/NavbarSection";
import { ServicesSection } from "@/components/Sections/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      {/* <ServicesSection/> */}
    </main>
  );
}