import { motion } from 'framer-motion';
import { Activity, Target, Users, Heart, Code, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
      bio: 'Former product leader passionate about habit formation and personal growth.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
      bio: 'Tech enthusiast with a mission to make habit tracking simple and effective.',
    },
    {
      name: 'Emma Davis',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      bio: 'Creative mind focused on building beautiful and intuitive user experiences.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Every feature is designed with our users in mind.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We help you achieve your goals through sustainable habits.',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Building better habits together through social support.',
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'Constantly improving and adding new features.',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making habit tracking available to everyone.',
    },
    {
      icon: Activity,
      title: 'Impact',
      description: 'Measuring success through user achievements.',
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
          Our Mission
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          At HabitSync, we're passionate about helping people build better habits
          through technology, community, and proven scientific methods.
        </motion.p>
      </section>

      {/* Values Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-secondary p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors"
            >
              <Icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Story Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 animate-gradient rounded-2xl" />
        <div className="relative bg-background-secondary border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                HabitSync started in 2023 with a simple idea: make habit tracking
                more engaging and social. We noticed that while there were many
                habit tracking apps available, most focused on individual progress
                without leveraging the power of community.
              </p>
              <p>
                Our team of developers, designers, and habit formation experts came
                together to create a platform that combines proven psychological
                principles with modern technology and social features.
              </p>
              <p>
                Today, HabitSync helps thousands of users build and maintain
                positive habits through our innovative approach to habit tracking
                and community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background-secondary rounded-xl p-6 border border-gray-800 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-background"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Active Users', value: '10,000+' },
          { label: 'Habits Tracked', value: '100,000+' },
          { label: 'Countries', value: '50+' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background-secondary rounded-xl p-8 border border-gray-800 text-center"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-gray-400 mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default About;