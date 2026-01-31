import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image
          src={"/gym-image.jpg"}
          alt="Hero Image"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileTap={{ scale: 0.97 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
            Transform Your Body,{" "}
            <span className="text-primary">Transform Your Life</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Join Our Fitness programs and achieve your goals with expert
            trainers and personalized plans
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center ">
            <Link
              href="https://wa.me/919897831874?text=Hi%20I%20want%20to%20join%20your%20gym"
              target="_blank"
            >
              <Button
                size="lg"
                className="
    bg-primary text-lg font-semibold px-8
    transition-transform duration-200
    hover:bg-primary/90 hover:scale-105
    active:scale-95
  "
              >
                Start Free Trial
              </Button>
            </Link>

            <Link href={'#pricing'}>
              <Button
                size="lg"
                variant="outline"
                className="
    bg-transparent text-lg font-semibold px-8
    transition-transform duration-200
    hover:scale-105
    active:scale-95
  "
              >
                View Plans
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
