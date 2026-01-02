"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github-dark.css";

interface ResumePreviewModalProps {
  open: boolean;
  onClose: () => void;
  markdown: string;
}

const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
  open,
  onClose,
  markdown,
}) => {
  const downloadMarkdown = (content: string) => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col bg-background">
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle>Resume Preview</DialogTitle>
          <Button
            variant="outline"
            onClick={() => downloadMarkdown(markdown)}
            disabled={!markdown}
          >
            Download
          </Button>
        </DialogHeader>

        {/* Markdown Render */}
        <div className="overflow-y-auto flex-1 pr-2">
          {markdown ? (
            <div
              className="
                markdown-body
                max-w-none
                bg-transparent
                text-foreground
                [&_p]:text-foreground
                [&_li]:text-foreground
                [&_h1]:text-foreground
                [&_h2]:text-foreground
                [&_h3]:text-foreground
                [&_code]:bg-muted
                [&_pre]:bg-muted
                [&_a]:text-purple-400
              "
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>No resume to preview</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreviewModal;
