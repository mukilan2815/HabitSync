import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Award,
  Target,
  Zap,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: "Smart Habit Tracking",
      description:
        "Track your habits with intelligent insights and streak monitoring.",
    },
    {
      icon: <Users className="w-12 h-12 text-accent-blue" />,
      title: "Social Challenges",
      description:
        "Join community challenges or create private ones for friends.",
    },
    {
      icon: <Award className="w-12 h-12 text-accent-purple" />,
      title: "Gamified Progress",
      description:
        "Earn points, badges, and climb the leaderboard as you progress.",
    },
    {
      icon: <Target className="w-12 h-12 text-accent-pink" />,
      title: "Goal Setting",
      description:
        "Set and track personal goals with detailed progress analytics.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Real-time Insights",
      description: "Get instant feedback and progress updates on your habits.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-accent-blue" />,
      title: "Cross-platform",
      description: "Access your habits and progress from any device, anywhere.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent"
        >
          Features that Transform Habits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Discover how HabitSync helps you build and maintain positive habits
          through innovative features and social engagement.
        </motion.p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background-secondary p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors group"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Interactive Demo */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 animate-gradient rounded-2xl" />
        <div className="relative bg-background-secondary border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">See It in Action</h2>
              <p className="text-gray-400">
                Experience how HabitSync's features work together to help you
                build lasting habits and achieve your goals.
              </p>
              <ul className="space-y-4">
                {[
                  "Intuitive habit tracking interface",
                  "Real-time progress updates",
                  "Social accountability features",
                  "Customizable reminders",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-background rounded-xl p-6 border border-gray-800"
              >
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-800 rounded animate-pulse" />
                  <div className="h-32 bg-gray-800 rounded animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
