import React from "react";
import * as motion from "motion/react-client";
import { testimonials } from "@/lib/constaints";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  const MAX_STARS = 5;
  return (
    <section id="testimonials" className="py-16 bg-foreground/4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real transformations from real people who chose to change their
            lives with our program
          </motion.p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, delay: 0 },
              }}
              key={index}
              className="group"
            >
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className={"px-4 py-2 text-center"}>
                  <motion.div className="relative mb-5 h-20 w-14 mx-auto">
                    <Image
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileinview={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="flex justify-center mb-3 gap-1"
                  >
                    {Array.from({ length: MAX_STARS }).map((_, i) => {
                      const filled = i < t.rating;
                      return (
                        <Star
                          key={i}
                          className={
                            filled
                              ? "w-5 h-5 text-yellow-300"
                              : "w-5 h-5 text-neutral-300"
                          }
                          fill={filled ? "currentColor" : "none"}
                        />
                      );
                    })}
                  </motion.div>
                  <motion.blockquote
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-lg font-semibold font-heading text-foreground mb-2"
                  >
                    "{t.story}"
                  </motion.blockquote>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-muted-foreground mb-3 leading-relaxed"
                  >
                    {t.details}
                  </motion.p>
                  <motion.cite
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="font-bold text-primary"
                  >
                    - {t.name}
                  </motion.cite>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
