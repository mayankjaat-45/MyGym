import React from "react";
import * as motion from "motion/react-client";
import { plans } from "@/lib/constaints";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4"
          >
            Affordable <span className="text-primary">Plans</span> for Everyone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the perfect plan that fits for your Budget and fitness goals.
            All plans include our core benefits
          </motion.p>
        </div>

        {/* Plans Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              key={plan.name}
              className="relative"
            >
              <Card
                className={`${plan.popular ? "border-primary border-2 ring-1 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary  text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className={"text-center p-3 pb-0"}>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {plan.description}
                  </p>
                  <div>
                    <span className="text-4xl font-black font-heading text-foreground">
                      ₹{plan.price}
                    </span>
                    <span
                      className="text-muted-foreground ml-1
                    "
                    >
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 items-center">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-2 text-lg  font-semibold transition-colors duration-300 ${plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-primary text-primary-foreground dark:text-foreground"}`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center mt-10 "
        >
          <p className="text-muted-foreground">
            All Plans include a 7-days free trail. No Commitment Required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
