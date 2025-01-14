import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Up to 5 habits',
        'Basic progress tracking',
        'Community challenges',
        'Mobile app access',
      ],
      icon: Star,
      color: 'border-gray-800',
      buttonClass: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      name: 'Pro',
      price: '$8',
      period: '/month',
      description: 'Best for serious habit builders',
      features: [
        'Unlimited habits',
        'Advanced analytics',
        'Custom challenges',
        'Priority support',
        'Dark theme',
        'Export data',
      ],
      icon: Zap,
      color: 'border-primary',
      buttonClass: 'bg-primary hover:bg-primary-hover',
      popular: true,
    },
    {
      name: 'Team',
      price: '$15',
      period: '/user/month',
      description: 'Perfect for organizations',
      features: [
        'Everything in Pro',
        'Team challenges',
        'Admin dashboard',
        'API access',
        'SSO authentication',
        'Custom branding',
      ],
      icon: Shield,
      color: 'border-accent-purple',
      buttonClass: 'bg-accent-purple hover:bg-purple-600',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Choose the perfect plan for your habit-building journey
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-background-secondary rounded-xl p-8 border-2 ${plan.color} ${
                plan.popular ? 'shadow-lg shadow-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="ml-1 text-gray-400">{plan.period}</span>
                    )}
                  </div>
                </div>
                <Icon className="w-8 h-8 text-primary" />
              </div>

              <p className="mt-4 text-gray-400">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full ${plan.buttonClass} text-white py-3 rounded-lg transition-colors`}
              >
                Get Started
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: 'Can I switch plans later?',
              answer:
                'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
            },
            {
              question: 'Is there a free trial?',
              answer:
                'Yes! You can try HabitSync Pro free for 14 days. No credit card required.',
            },
            {
              question: 'What payment methods do you accept?',
              answer:
                'We accept all major credit cards, PayPal, and Apple Pay.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-background-secondary rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;