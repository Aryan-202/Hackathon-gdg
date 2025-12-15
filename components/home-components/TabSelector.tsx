'use client';

import { Upload, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TabSelectorProps {
  activeTab: 'upload' | 'manual';
  setActiveTab: (tab: 'upload' | 'manual') => void;
  isDark: boolean;
}

export default function TabSelector({ 
  activeTab, 
  setActiveTab, 
  isDark 
}: TabSelectorProps) {
  return (
    <div className="container mx-auto px-6 mb-8">
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => setActiveTab('upload')}
          variant={activeTab === 'upload' ? 'default' : 'outline'}
          size="lg"
          className={`flex items-center gap-2 ${
            activeTab === 'upload' && !isDark 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : ''
          }`}
        >
          <Upload className="w-5 h-5" />
          Upload Resume
        </Button>
        <Button
          onClick={() => setActiveTab('manual')}
          variant={activeTab === 'manual' ? 'default' : 'outline'}
          size="lg"
          className={`flex items-center gap-2 ${
            activeTab === 'manual' && !isDark 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : ''
          }`}
        >
          <FileText className="w-5 h-5" />
          Fill Details
        </Button>
      </div>
    </div>
  );
}

