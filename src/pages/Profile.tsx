import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Bell, Shield, Award, Activity, Star, Target, Edit2 } from 'lucide-react';
import { storage } from '../lib/storage';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Thompson',
    email: 'alex@example.com',
    bio: 'Building better habits, one day at a time. 🌟',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150',
  });

  const stats = {
    totalHabits: 8,
    completionRate: 85,
    currentStreak: 12,
    longestStreak: 30,
    totalPoints: 2500,
    challengesWon: 5,
  };

  const achievements = [
    { name: 'Early Bird', description: 'Complete morning routine for 7 days', progress: 100 },
    { name: 'Fitness Fanatic', description: 'Track workout habits for 30 days', progress: 75 },
    { name: 'Mindfulness Master', description: 'Meditate for 10 days straight', progress: 40 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save to localStorage
    storage.setUser({ ...profile, id: '1', points: stats.totalPoints, streakCount: stats.currentStreak, habits: [], challenges: [] });
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-xl" />
        <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-background"
          />
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-gray-400">{profile.bio}</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="absolute bottom-4 right-8 flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Edit2 className="w-4 h-4" />
          <span>{isEditing ? 'Save Profile' : 'Edit Profile'}</span>
        </button>
      </div>

      {/* Profile Content */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Stats */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-background-secondary rounded-xl p-6 border border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <span>Total Habits</span>
                </div>
                <span className="font-semibold">{stats.totalHabits}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-accent-blue" />
                  <span>Completion Rate</span>
                </div>
                <span className="font-semibold">{stats.completionRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-accent-purple" />
                  <span>Current Streak</span>
                </div>
                <span className="font-semibold">{stats.currentStreak} days</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-accent-pink" />
                  <span>Challenges Won</span>
                </div>
                <span className="font-semibold">{stats.challengesWon}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-background-secondary rounded-xl p-6 border border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </div>
                <span className="text-primary">On</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5" />
                  <span>Privacy</span>
                </div>
                <span className="text-primary">Public</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="flex space-x-4 border-b border-gray-800">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Profile Info */}
              <div className="bg-background-secondary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Bio
                      </label>
                      <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
                      />
                    </div>
                    <button
                      onClick={handleSave}
                      className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Name
                      </label>
                      <p>{profile.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Bio
                      </label>
                      <p>{profile.bio}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Recent Activity */}
              <div className="bg-background-secondary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    'Completed morning meditation',
                    'Joined "30 Days of Fitness" challenge',
                    'Achieved 7-day streak in reading habit',
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-400"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-background-secondary rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{achievement.name}</h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                    <Award
                      className={`w-8 h-8 ${
                        achievement.progress === 100
                          ? 'text-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-all duration-500"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-right text-sm text-gray-400">
                    {achievement.progress}% Complete
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="bg-background-secondary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Password
                    </label>
                    <button className="text-primary hover:text-primary-hover transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-background-secondary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
                      <input
                        type="checkbox"
                        className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
                        checked
                      />
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 transition-transform transform translate-x-6" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
                      <input
                        type="checkbox"
                        className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
                        checked
                      />
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 transition-transform transform translate-x-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;