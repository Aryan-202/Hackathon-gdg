// lib/questions.ts

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface CompanyQuiz {
  name: string;
  description: string;
  questions: Question[];
}

export const MOCK_QUESTIONS_DATA: Record<string, CompanyQuiz> = {
  google: {
    name: "Google",
    description: "Focus on DSA, System Design, and Go/Python.",
    questions: [
      { id: 1, question: "What is the average time complexity of QuickSort?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], answer: "O(n log n)" },
      { id: 2, question: "Which Google service is used for container orchestration?", options: ["GKE", "BigQuery", "Compute Engine", "App Engine"], answer: "GKE" },
    ]
  },
  amazon: {
    name: "Amazon",
    description: "Emphasis on Leadership Principles and Scalability.",
    questions: [
      { id: 1, question: "Which AWS service provides resizable compute capacity?", options: ["S3", "EC2", "Lambda", "RDS"], answer: "EC2" },
      { id: 2, question: "Which Leadership Principle emphasizes 'Hiring and Developing the Best'?", options: ["Ownership", "Dive Deep", "Hire and Develop the Best", "Frugality"], answer: "Hire and Develop the Best" },
    ]
  },
  microsoft: {
    name: "Microsoft",
    description: "Tests on OS fundamentals, C#, and Azure ecosystem.",
    questions: [
      { id: 1, question: "Which language is primarily used for Windows desktop development?", options: ["Swift", "C#", "Kotlin", "Go"], answer: "C#" },
    ]
  },
  apple: {
    name: "Apple",
    description: "Advanced Low-level programming and Swift/Objective-C.",
    questions: [
      { id: 1, question: "Which framework is used for building UI on iOS?", options: ["React Native", "SwiftUI", "Flutter", "Xamarin"], answer: "SwiftUI" },
    ]
  }
};