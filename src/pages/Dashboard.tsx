import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Award, Target, Zap, Plus } from 'lucide-react';
import { storage } from '../lib/storage';
import type { Habit } from '../types';

const Dashboard = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [newHabit, setNewHabit] = useState({ title: '', description: '', frequency: 'daily' });

  useEffect(() => {
    const storedHabits = storage.getHabits();
    setHabits(storedHabits);
  }, []);

  const addHabit = () => {
    const habit: Habit = {
      id: Math.random().toString(36).substring(7),
      ...newHabit,
      streak: 0,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updatedHabits = [...habits, habit];
    setHabits(updatedHabits);
    storage.setHabits(updatedHabits);
    setShowAddHabit(false);
    setNewHabit({ title: '', description: '', frequency: 'daily' });
  };

  const toggleHabit = (id: string) => {
    const updatedHabits = habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updatedHabits);
    storage.setHabits(updatedHabits);
  };

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background-secondary p-6 rounded-xl border border-gray-800"
        >
          <div className="flex items-center space-x-4">
            <Activity className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Active Habits</h3>
              <p className="text-2xl font-bold text-primary">{habits.length}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-background-secondary p-6 rounded-xl border border-gray-800"
        >
          <div className="flex items-center space-x-4">
            <Zap className="w-8 h-8 text-accent-blue" />
            <div>
              <h3 className="text-lg font-semibold">Current Streak</h3>
              <p className="text-2xl font-bold text-accent-blue">
                {Math.max(...habits.map(h => h.streak), 0)} days
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background-secondary p-6 rounded-xl border border-gray-800"
        >
          <div className="flex items-center space-x-4">
            <Target className="w-8 h-8 text-accent-purple" />
            <div>
              <h3 className="text-lg font-semibold">Completion Rate</h3>
              <p className="text-2xl font-bold text-accent-purple">
                {habits.length ? 
                  Math.round((habits.filter(h => h.completed).length / habits.length) * 100) : 0}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Habits List */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Habits</h2>
          <button
            onClick={() => setShowAddHabit(true)}
            className="flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Habit</span>
          </button>
        </div>

        {showAddHabit && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background-secondary p-6 rounded-xl border border-gray-800"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Habit name"
                value={newHabit.title}
                onChange={(e) => setNewHabit({ ...newHabit, title: e.target.value })}
                className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
              />
              <textarea
                placeholder="Description"
                value={newHabit.description}
                onChange={(e) => setNewHabit({ ...newHabit, description: e.target.value })}
                className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
              />
              <select
                value={newHabit.frequency}
                onChange={(e) => setNewHabit({ ...newHabit, frequency: e.target.value as 'daily' | 'weekly' })}
                className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddHabit(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addHabit}
                  className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Add Habit
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-4">
          {habits.map((habit, index) => (
            <motion.div
              key={habit.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-background-secondary p-6 rounded-xl border ${
                habit.completed ? 'border-primary' : 'border-gray-800'
              } hover:border-primary transition-colors`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{habit.title}</h3>
                  <p className="text-gray-400">{habit.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{habit.frequency}</span>
                    <span>•</span>
                    <span>{habit.streak} day streak</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-2 rounded-full transition-colors ${
                    habit.completed
                      ? 'bg-primary text-white'
                      : 'bg-background text-gray-400 hover:text-white'
                  }`}
                >
                  <Award className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;