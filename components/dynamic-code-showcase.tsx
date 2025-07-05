"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeSnippets = [
  {
    language: "React",
    color: "bg-blue-500",
    code: `function Welcome({ name }) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}`,
  },
  {
    language: "Node.js",
    color: "bg-green-500",
    code: `const express = require('express');
const app = express();

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
  },
  {
    language: "Python",
    color: "bg-yellow-500",
    code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

def train_model(data):
    X = data.drop('target', axis=1)
    y = data['target']
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)
    
    return model, X_test, y_test`,
  },
  {
    language: "TypeScript",
    color: "bg-blue-600",
    code: `interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
}

class UserService {
  private users: User[] = [];

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Date.now(),
      ...userData
    };
    
    this.users.push(newUser);
    return newUser;
  }

  getUsersByRole(role: User['role']): User[] {
    return this.users.filter(user => user.role === role);
  }
}`,
  },
]

export function DynamicCodeShowcase() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [typingIndex, setTypingIndex] = useState(0)

  const currentCode = codeSnippets[currentSnippet].code

  // Auto-advance to next snippet
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
      setTypingIndex(0)
      setDisplayedCode("")
    }, 8000) // Change snippet every 8 seconds

    return () => clearInterval(interval)
  }, [isPlaying])

  // Typing animation effect
  useEffect(() => {
    if (!isPlaying) return

    setIsTyping(true)
    const timeout = setTimeout(() => {
      if (typingIndex < currentCode.length) {
        setDisplayedCode(currentCode.slice(0, typingIndex + 1))
        setTypingIndex(typingIndex + 1)
      } else {
        setIsTyping(false)
      }
    }, 30) // Typing speed

    return () => clearTimeout(timeout)
  }, [typingIndex, currentCode, isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setCurrentSnippet(0)
    setTypingIndex(0)
    setDisplayedCode("")
    setIsPlaying(true)
  }

  const handleLanguageClick = (index: number) => {
    setCurrentSnippet(index)
    setTypingIndex(0)
    setDisplayedCode("")
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-gray-900 border-gray-700 overflow-hidden">
        <CardContent className="p-0">
          {/* Code Editor Header */}
          <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium ml-4">
                {codeSnippets[currentSnippet].language.toLowerCase()}.
                {codeSnippets[currentSnippet].language === "Python"
                  ? "py"
                  : codeSnippets[currentSnippet].language === "Node.js"
                    ? "js"
                    : codeSnippets[currentSnippet].language === "TypeScript"
                      ? "ts"
                      : "jsx"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePlayPause}
                className="text-gray-300 hover:text-white hover:bg-gray-700 h-8 w-8 p-0"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-gray-300 hover:text-white hover:bg-gray-700 h-8 w-8 p-0"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Language Tabs */}
          <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
            {codeSnippets.map((snippet, index) => (
              <button
                key={index}
                onClick={() => handleLanguageClick(index)}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  index === currentSnippet
                    ? "bg-gray-900 text-white border-b-2 border-blue-500"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-700"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${snippet.color}`}></div>
                <span>{snippet.language}</span>
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-gray-900 p-6 min-h-[300px] font-mono text-sm">
            <pre className="text-gray-300 leading-relaxed">
              <code>
                {displayedCode}
                {isTyping && <span className="animate-pulse bg-blue-500 w-2 h-5 inline-block ml-1"></span>}
              </code>
            </pre>
          </div>

          {/* Footer Stats */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-4">
              <span>Lines: {currentCode.split("\n").length}</span>
              <span>Chars: {displayedCode.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                Live Demo
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack Indicators */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className={`text-center p-3 rounded-lg transition-all cursor-pointer ${
              index === currentSnippet
                ? "bg-blue-50 border-2 border-blue-200"
                : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
            }`}
            onClick={() => handleLanguageClick(index)}
          >
            <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${snippet.color}`}></div>
            <div className={`text-sm font-medium ${index === currentSnippet ? "text-blue-600" : "text-gray-600"}`}>
              {snippet.language}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
