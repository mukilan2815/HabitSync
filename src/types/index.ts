export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  streakCount: number;
  habits: Habit[];
  challenges: string[];
}

export interface Habit {
  id: string;
  title: string;
  description: string;
  frequency: 'daily' | 'weekly';
  streak: number;
  completed: boolean;
  createdAt: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: string[];
  startDate: string;
  endDate: string;
  type: 'fitness' | 'productivity' | 'mindfulness';
  difficulty: 'easy' | 'medium' | 'hard';
}