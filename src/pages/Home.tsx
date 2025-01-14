import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Award, Users, Zap, CheckCircle, X } from 'lucide-react';

const Home = () => {
  const competitors = [
    { name: 'Basic Habit Apps', price: '$5/mo' },
    { name: 'Generic Trackers', price: '$10/mo' },
    { name: 'HabitSync', price: '$8/mo', highlight: true },
  ];

  const features = [
    'Habit Tracking',
    'Social Challenges',
    'Gamification',
    'Progress Analytics',
    'Custom Themes',
    'API Access',
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 animate-gradient" />
        <div className="relative max-w-5xl mx-auto text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-blue to-accent-pink bg-clip-text text-transparent"
          >
            Transform Habits into Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Track, gamify, and conquer your goals with friends and community challenges
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/signup"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/features"
              className="bg-background-secondary hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Activity className="w-8 h-8 text-primary" />,
            title: 'Smart Habit Tracking',
            description: 'Intelligent tracking with streak monitoring and insights',
          },
          {
            icon: <Users className="w-8 h-8 text-accent-blue" />,
            title: 'Social Challenges',
            description: 'Compete and grow with friends in group challenges',
          },
          {
            icon: <Award className="w-8 h-8 text-accent-purple" />,
            title: 'Gamified Progress',
            description: 'Earn rewards and badges as you achieve your goals',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-background-secondary p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Features</th>
                {competitors.map((comp) => (
                  <th
                    key={comp.name}
                    className={`py-4 px-6 text-center ${
                      comp.highlight ? 'text-primary' : ''
                    }`}
                  >
                    {comp.name}
                    <div className="text-sm text-gray-400">{comp.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature}
                  className={index % 2 === 0 ? 'bg-background-secondary' : ''}
                >
                  <td className="py-4 px-6">{feature}</td>
                  <td className="py-4 px-6 text-center">
                    {index < 2 ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {index < 3 ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 animate-gradient rounded-2xl" />
        <div className="relative max-w-3xl mx-auto text-center py-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Habits?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of users who are already achieving their goals with HabitSync
          </p>
          <Link
            to="/signup"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;