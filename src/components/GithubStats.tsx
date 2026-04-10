"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

interface Stats {
  publicRepos: number;
  followers: number;
  totalStars: number;
}

export default function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const username = personalInfo.githubUsername;
        if (!username) {
          setError(true);
          setLoading(false);
          return;
        }

        // Fetch basic user profile
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();

        // Fetch repos to calculate stars
        // Note: This only fetches up to 100 public repos. For more, pagination is needed.
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const reposData = await reposRes.json();

        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalStars,
        });
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubStats();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 w-24 rounded-lg bg-zinc-800/50 animate-pulse border border-zinc-700/30" />
        ))}
      </div>
    );
  }

  if (error || !stats) {
    return null; // Fail silently, don't break the UI
  }

  return (
    <div className="mt-8">
      <p className="font-mono text-zinc-500 text-xs mb-4 uppercase tracking-widest">
        Live GitHub Stats
      </p>
      <div className="grid grid-cols-3 gap-3">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 text-center hover:border-accent-500/50 transition-colors"
        >
          <p className="text-2xl font-bold text-white">{stats.publicRepos}</p>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Repos</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 text-center hover:border-accent-500/50 transition-colors"
        >
          <p className="text-2xl font-bold text-accent-400">{stats.totalStars}</p>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Stars</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 text-center hover:border-accent-500/50 transition-colors"
        >
          <p className="text-2xl font-bold text-white">{stats.followers}</p>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Followers</p>
        </motion.div>
      </div>
    </div>
  );
}
