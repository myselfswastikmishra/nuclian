"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export function DynamicCodeShowcase() {
  const [currentLanguage, setCurrentLanguage] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const codeExamples = [
    {
      language: "React",
      color: "bg-blue-500",
      code: `import React, { useState } from 'react';

function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(user);

  const handleSave = () => {
    // Save profile logic
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default UserProfile;`,
    },
    {
      language: "Node.js",
      color: "bg-green-500",
      code: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    },
    {
      language: "Python",
      color: "bg-yellow-500",
      code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load and prepare data
def prepare_data(file_path):
    df = pd.read_csv(file_path)
    
    # Feature engineering
    X = df.drop('target', axis=1)
    y = df['target']
    
    return train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
def train_model(X_train, y_train):
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    return model

# Main execution
X_train, X_test, y_train, y_test = prepare_data('data.csv')
model = train_model(X_train, y_train)
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"Model accuracy: {accuracy:.2f}")`,
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

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class UserService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUser(id: number): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(\`\${this.baseUrl}/users/\${id}\`);
      const data = await response.json();
      
      return {
        success: true,
        data: data as User
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export { User, UserService };`,
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentChar((prev) => {
        const currentCode = codeExamples[currentLanguage].code
        if (prev >= currentCode.length) {
          setTimeout(() => {
            setCurrentLanguage((lang) => (lang + 1) % codeExamples.length)
            setCurrentChar(0)
          }, 2000)
          return prev
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [currentLanguage, isPlaying, codeExamples])

  const handleLanguageClick = (index: number) => {
    setCurrentLanguage(index)
    setCurrentChar(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetAnimation = () => {
    setCurrentChar(0)
    setCurrentLanguage(0)
    setIsPlaying(true)
  }

  const currentCode = codeExamples[currentLanguage].code.slice(0, currentChar)
  const lines = currentCode.split("\n").length
  const characters = currentCode.length

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-gray-900 border-gray-700 overflow-hidden">
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm ml-4">
              code-showcase.{codeExamples[currentLanguage].language.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlayPause}
              className="text-gray-400 hover:text-white h-8 w-8 p-0"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetAnimation}
              className="text-gray-400 hover:text-white h-8 w-8 p-0"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex">
          <div className="bg-gray-800 p-4 border-r border-gray-700">
            <div className="space-y-2">
              {codeExamples.map((example, index) => (
                <button
                  key={example.language}
                  onClick={() => handleLanguageClick(index)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors w-full text-left ${
                    currentLanguage === index
                      ? "bg-gray-700 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${example.color}`}></div>
                  <span>{example.language}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="text-xs text-gray-500 space-y-1">
                <div>Lines: {lines}</div>
                <div>Chars: {characters}</div>
              </div>
            </div>
          </div>

          <CardContent className="flex-1 p-0">
            <pre className="text-sm text-gray-300 p-6 overflow-auto h-96 font-mono leading-relaxed">
              <code>{currentCode}</code>
              <span className="animate-pulse bg-gray-400 w-2 h-5 inline-block ml-1"></span>
            </pre>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
