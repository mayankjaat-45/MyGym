import React from "react";
import * as motion from "motion/react-client";
import { Calendar, CheckCheck, TrendingUp, User } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCheck,
      title: "Certified Professional Trainers",
      description:
        "Train with certified fitness experts who guide you safely and effectively toward your fitness goals.",
    },
    {
      icon: TrendingUp,
      title: "Personalized Workout & Diet Plans",
      description:
        "Get customized workout routines and nutrition plans designed specifically for your body and goals.",
    },
    {
      icon: Calendar,
      title: "Flexible Training Schedules",
      description:
        "Choose training times that fit your lifestyle with flexible schedules and easy session management.",
    },
    {
      icon: User,
      title: "Community Support & Progress Tracking",
      description:
        "Stay motivated with a supportive fitness community and track your progress with regular performance insights.",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4"
          >
            Why Choose <span className="text-primary">MyGym</span> Fitness?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We provide everything you need to succeed on your fitness journey
            with proven methods and export support.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              className="group text-center p-5"
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/20 inline-flex text-primary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6  active:bg-primary active:text-primary-foreground cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <motion.h3
                className="text-xl font-bold font-heading mb-4 text-foreground"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.18,
                }}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.14,
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
