import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Calendar,
  Target,
  Plus,
  CheckCircle,
  Star,
} from "lucide-react";
import { storage } from "../lib/storage";
import type { Challenge } from "../types";

const Challenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [showAddChallenge, setShowAddChallenge] = useState(false);
  const [newChallenge, setNewChallenge] = useState({
    title: "",
    description: "",
    type: "fitness",
    difficulty: "medium" as const,
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedChallenges = storage.getChallenges();
    setChallenges(storedChallenges);
  }, []);

  const addChallenge = () => {
    const challenge: Challenge = {
      id: Math.random().toString(36).substring(7),
      ...newChallenge,
      participants: [],
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    };
    const updatedChallenges = [...challenges, challenge];
    setChallenges(updatedChallenges);
    storage.setChallenges(updatedChallenges);
    setShowAddChallenge(false);
    setNewChallenge({
      title: "",
      description: "",
      type: "fitness",
      difficulty: "medium",
    });
  };

  const joinChallenge = (id: string) => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === id
        ? {
            ...challenge,
            participants: [...challenge.participants, "current-user"],
          }
        : challenge
    );
    setChallenges(updatedChallenges);
    storage.setChallenges(updatedChallenges);
  };

  const challengeTypes = [
    { type: "all", label: "All Challenges", icon: Trophy, color: "text-white" },
    { type: "fitness", label: "Fitness", icon: Trophy, color: "text-primary" },
    {
      type: "productivity",
      label: "Productivity",
      icon: Target,
      color: "text-accent-blue",
    },
    {
      type: "mindfulness",
      label: "Mindfulness",
      icon: Users,
      color: "text-accent-purple",
    },
  ];

  const filteredChallenges =
    filter === "all"
      ? challenges
      : challenges.filter((challenge) => challenge.type === filter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"
        >
          Community Challenges
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Join exciting challenges or create your own to stay motivated and
          compete with friends
        </motion.p>
      </div>

      {/* Challenge Type Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        {challengeTypes.map(({ type, label, icon: Icon, color }) => (
          <motion.button
            key={type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setFilter(type)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === type
                ? "bg-background-secondary border-2 border-primary"
                : "bg-background hover:bg-background-secondary border-2 border-gray-800"
            }`}
          >
            <Icon className={`w-5 h-5 ${color}`} />
            <span>{label}</span>
          </motion.button>
        ))}
      </div>

      {/* Add Challenge Button */}
      <div className="flex justify-end">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setShowAddChallenge(true)}
          className="flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Challenge</span>
        </motion.button>
      </div>

      {/* Add Challenge Form */}
      {showAddChallenge && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background-secondary p-6 rounded-xl border border-gray-800"
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Challenge name"
              value={newChallenge.title}
              onChange={(e) =>
                setNewChallenge({ ...newChallenge, title: e.target.value })
              }
              className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
            />
            <textarea
              placeholder="Description"
              value={newChallenge.description}
              onChange={(e) =>
                setNewChallenge({
                  ...newChallenge,
                  description: e.target.value,
                })
              }
              className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                value={newChallenge.type}
                onChange={(e) =>
                  setNewChallenge({
                    ...newChallenge,
                    type: e.target.value as
                      | "fitness"
                      | "productivity"
                      | "mindfulness",
                  })
                }
                className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
              >
                <option value="fitness">Fitness</option>
                <option value="productivity">Productivity</option>
                <option value="mindfulness">Mindfulness</option>
              </select>
              <select
                value={newChallenge.difficulty}
                onChange={(e) =>
                  setNewChallenge({
                    ...newChallenge,
                    difficulty: e.target.value as "easy" | "medium" | "hard",
                  })
                }
                className="w-full bg-background p-2 rounded-lg border border-gray-700 focus:border-primary outline-none"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddChallenge(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addChallenge}
                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create Challenge
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background-secondary rounded-xl border border-gray-800 hover:border-primary transition-colors overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
                {challenge.type === "fitness" && (
                  <Trophy className="w-6 h-6 text-primary" />
                )}
                {challenge.type === "productivity" && (
                  <Target className="w-6 h-6 text-accent-blue" />
                )}
                {challenge.type === "mindfulness" && (
                  <Users className="w-6 h-6 text-accent-purple" />
                )}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>30 days</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants.length} joined</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{challenge.difficulty}</span>
                </div>
              </div>
              <button
                onClick={() => joinChallenge(challenge.id)}
                disabled={challenge.participants.includes("current-user")}
                className={`w-full py-2 rounded-lg transition-colors ${
                  challenge.participants.includes("current-user")
                    ? "bg-green-600 text-white cursor-not-allowed"
                    : "bg-primary hover:bg-primary-hover text-white"
                }`}
              >
                {challenge.participants.includes("current-user") ? (
                  <span className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Joined</span>
                  </span>
                ) : (
                  "Join Challenge"
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
