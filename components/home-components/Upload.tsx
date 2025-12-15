'use client';

import { useState, DragEvent, ChangeEvent } from 'react';
import { Upload, Sparkles } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface UploadTabProps {
  isDark: boolean;
  onGenerate: (file: File) => void;
}

export default function UploadTab({ isDark, onGenerate }: UploadTabProps) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <Card 
      className={`max-w-2xl mx-auto ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white shadow-xl'
      }`}
    >
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : ''}>
          Upload Your Resume
        </CardTitle>
        <CardDescription className={isDark ? 'text-gray-400' : ''}>
          Upload your existing resume and let AI enhance it
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer ${
            dragActive
              ? isDark 
                ? 'border-purple-400 bg-purple-900/20' 
                : 'border-purple-500 bg-purple-50'
              : isDark 
                ? 'border-gray-600 hover:border-gray-500' 
                : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <Upload 
            className={`w-16 h-16 mx-auto mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-400'
            }`} 
          />
          {uploadedFile ? (
            <div>
              <p 
                className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {uploadedFile.name}
              </p>
              <p 
                className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                File uploaded successfully!
              </p>
            </div>
          ) : (
            <div>
              <p 
                className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Drag and drop your resume here
              </p>
              <p 
                className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                } mb-4`}
              >
                Supports PDF, DOC, DOCX files
              </p>
            </div>
          )}
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileInput}
          />
          <label htmlFor="file-upload">
            <Button 
              asChild 
              variant="outline" 
              className={isDark ? 'border-gray-600' : ''}
            >
              <span className="cursor-pointer">Browse Files</span>
            </Button>
          </label>
        </div>
        {uploadedFile && (
          <Button 
            className={`w-full mt-6 ${
              !isDark ? 'bg-purple-600 hover:bg-purple-700' : ''
            }`}
            size="lg"
            onClick={() => onGenerate(uploadedFile)}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Generate AI Resume
          </Button>
        )}
      </CardContent>
    </Card>
  );
}