import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Star, Users, Target, Activity } from 'lucide-react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('global');

  const globalLeaders = [
    { rank: 1, name: 'Sarah Johnson', points: 2500, streak: 45, badges: 12 },
    { rank: 2, name: 'Michael Chen', points: 2350, streak: 38, badges: 10 },
    { rank: 3, name: 'Emma Davis', points: 2200, streak: 32, badges: 9 },
    { rank: 4, name: 'Alex Thompson', points: 2100, streak: 28, badges: 8 },
    { rank: 5, name: 'Maria Garcia', points: 2000, streak: 25, badges: 7 },
  ];

  const challengeLeaders = [
    { rank: 1, name: 'David Kim', points: 850, challenge: 'Morning Routine', progress: 95 },
    { rank: 2, name: 'Lisa Wang', points: 820, challenge: 'Morning Routine', progress: 92 },
    { rank: 3, name: 'James Wilson', points: 780, challenge: 'Morning Routine', progress: 88 },
    { rank: 4, name: 'Anna Smith', points: 750, challenge: 'Morning Routine', progress: 85 },
    { rank: 5, name: 'Tom Brown', points: 720, challenge: 'Morning Routine', progress: 82 },
  ];

  const friendLeaders = [
    { rank: 1, name: 'Rachel Green', points: 1800, mutualChallenges: 4, lastActive: '2h ago' },
    { rank: 2, name: 'Joey Tribbiani', points: 1650, mutualChallenges: 3, lastActive: '4h ago' },
    { rank: 3, name: 'Monica Geller', points: 1500, mutualChallenges: 3, lastActive: '1h ago' },
    { rank: 4, name: 'Chandler Bing', points: 1450, mutualChallenges: 2, lastActive: '5h ago' },
    { rank: 5, name: 'Ross Geller', points: 1400, mutualChallenges: 2, lastActive: '3h ago' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <Trophy className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"
        >
          Leaderboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          See how you stack up against the community and your friends
        </motion.p>
      </div>

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
              <h3 className="text-lg font-semibold">Your Rank</h3>
              <p className="text-2xl font-bold text-primary">#42</p>
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
            <Star className="w-8 h-8 text-accent-blue" />
            <div>
              <h3 className="text-lg font-semibold">Total Points</h3>
              <p className="text-2xl font-bold text-accent-blue">1,250</p>
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
              <h3 className="text-lg font-semibold">Active Challenges</h3>
              <p className="text-2xl font-bold text-accent-purple">3</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leaderboard Tabs */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { id: 'global', label: 'Global Rankings', icon: Trophy },
          { id: 'challenges', label: 'Challenge Rankings', icon: Target },
          { id: 'friends', label: 'Friend Rankings', icon: Users },
        ].map(({ id, label, icon: Icon }) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === id
                ? 'bg-background-secondary border-2 border-primary'
                : 'bg-background hover:bg-background-secondary border-2 border-gray-800'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </motion.button>
        ))}
      </div>

      {/* Leaderboard Content */}
      <div className="bg-background-secondary rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Rank</th>
                <th className="py-4 px-6 text-left">User</th>
                <th className="py-4 px-6 text-left">Points</th>
                {activeTab === 'global' && (
                  <>
                    <th className="py-4 px-6 text-left">Streak</th>
                    <th className="py-4 px-6 text-left">Badges</th>
                  </>
                )}
                {activeTab === 'challenges' && (
                  <>
                    <th className="py-4 px-6 text-left">Challenge</th>
                    <th className="py-4 px-6 text-left">Progress</th>
                  </>
                )}
                {activeTab === 'friends' && (
                  <>
                    <th className="py-4 px-6 text-left">Mutual Challenges</th>
                    <th className="py-4 px-6 text-left">Last Active</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === 'global' &&
                globalLeaders.map((leader) => (
                  <motion.tr
                    key={leader.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-b border-gray-800 hover:bg-background/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(leader.rank)}
                        <span>#{leader.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{leader.name}</td>
                    <td className="py-4 px-6">{leader.points}</td>
                    <td className="py-4 px-6">{leader.streak} days</td>
                    <td className="py-4 px-6">{leader.badges}</td>
                  </motion.tr>
                ))}

              {activeTab === 'challenges' &&
                challengeLeaders.map((leader) => (
                  <motion.tr
                    key={leader.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-b border-gray-800 hover:bg-background/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(leader.rank)}
                        <span>#{leader.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{leader.name}</td>
                    <td className="py-4 px-6">{leader.points}</td>
                    <td className="py-4 px-6">{leader.challenge}</td>
                    <td className="py-4 px-6">
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${leader.progress}%` }}
                        />
                      </div>
                    </td>
                  </motion.tr>
                ))}

              {activeTab === 'friends' &&
                friendLeaders.map((leader) => (
                  <motion.tr
                    key={leader.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-b border-gray-800 hover:bg-background/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(leader.rank)}
                        <span>#{leader.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{leader.name}</td>
                    <td className="py-4 px-6">{leader.points}</td>
                    <td className="py-4 px-6">{leader.mutualChallenges}</td>
                    <td className="py-4 px-6">{leader.lastActive}</td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;