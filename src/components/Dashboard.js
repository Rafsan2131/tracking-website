import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    // Fetch goals and progress
    const fetchGoals = async () => {
      const res = await axios.get('/api/goals');
      setGoals(res.data);
    };
    const fetchProgress = async () => {
      const res = await axios.get('/api/progress');
      setProgress(res.data);
    };
    fetchGoals();
    fetchProgress();
  }, []);

  return (
    <div>
      <h2>Your Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.title}</li>
        ))}
      </ul>
      <h2>Your Progress</h2>
      <ul>
        {progress.map(p => (
          <li key={p.id}>{p.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
