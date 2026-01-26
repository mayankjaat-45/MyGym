import React from "react";
import * as motion from "motion/react-client";
import { programs } from "@/lib/constaints";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Program = () => {
  return (
    <section id="programs" className="py-20 bg-foreground/4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose from our comprehensive fitness progrems designed to meet your
            specific goals and fitness level.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl active:shadow-2xl">
                <div className="relative overflow-hidden rounded-t-lg w-full h-60 md:h-56 lg:h-40">
                  <Image
                    src={program.image}
                    fill
                    alt={program.title}
                    className="object-cover  transition-transform duration-500 group-hover:scale-110 active:scale-105"
                  />
                </div>
                <CardContent className="p-6 pt-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-xl font-heading text-center font-bold mb-3 text-foreground group-hover:text-primary "
                  >
                    {program.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {program.description}
                  </motion.p>

                  <div>
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 group-hover:bg-primary
                      dark:group-hover:bg-primary group-hover:text-primary-foreground  active:bg-primary active:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
