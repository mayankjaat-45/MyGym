export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const programs = [
  {
    title: "Strength Training",
    description:
      "Build lean muscle, increase strength, and improve overall performance with structured weight and resistance training.",
    image: "/strength.jpg",
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Enhance flexibility, balance, and mental focus through guided yoga sessions designed for recovery and mobility.",
    image: "/yoga.jpg",
  },
  {
    title: "Cardio Workout",
    description:
      "Boost endurance, burn calories, and strengthen your heart with high-energy cardio workouts and routines.",
    image: "/cardio.jpg",
  },
  {
    title: "Nutrition & Diet",
    description:
      "Fuel your body the right way with personalized nutrition plans that support muscle growth and fat loss.",
    image: "/nutrition.jpg",
  },
];

export const testimonials = [
  {
    name: "Vikas Sharma",
    story: "I lost 10kg in just 4 months",
    details:
      "The structured workout plans and nutrition guidance kept me on track. The trainers constantly motivated me to push harder.",
    image: "/testimonials/vikas.jpg",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    story: "Gained strength and confidence",
    details:
      "I started as a beginner, and the trainers made everything simple and achievable. The atmosphere here is very supportive.",
    image: "/testimonials/anjali.jpg",
    rating: 4,
  },
  {
    name: "Rahul Mehta",
    story: "Transformed my lifestyle completely",
    details:
      "This gym helped me build discipline and consistency. The flexible timings made it easy to balance work and fitness.",
    image: "/testimonials/rahul.jpg",
    rating: 4.5,
  },
  {
    name: "Neha Kapoor",
    story: "Improved fitness and energy levels",
    details:
      "The group classes and personal guidance helped me stay active and energetic throughout the day. Highly recommended!",
    image: "/testimonials/neha.jpg",
    rating: 3.5,
  },
];

export const plans = [
  {
    name: "Basic",
    price: 699,
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Gym Access",
      "Basic Equipment Usage",
      "Locker Room Access",
      "Monthly Progress Tracking",
    ],
    cta: "Join Now ",
  },
  {
    name: "Pro",
    price: 1299,
    period: "month",
    description: "Best for regular gym-goers who want guided training",
    features: [
      "Full Gym Access",
      "All Equipment Usage",
      "Personalized Workout Plan",
      "Diet Guidance",
      "Weekly Progress Tracking",
      "Group Fitness Classes",
    ],
    cta: "Join Now ",
    popular: "true",
  },
  {
    name: "Elite",
    price: 1999,
    period: "month",
    description: "For serious fitness enthusiasts and transformation goals",
    features: [
      "Unlimited Gym Access",
      "Dedicated Personal Trainer",
      "Customized Workout & Diet Plan",
      "Body Composition Analysis",
      "Priority Trainer Support",
      "Monthly Fitness Assessment",
    ],
    cta: "Join Now ",
  },
];
