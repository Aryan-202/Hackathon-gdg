"use client";

import React, { useState, useEffect } from "react";
import ResumeTab from "./ResumeTab";
import ResumePreviewModal from "./ResumePreviewModal";
import { useSession } from "next-auth/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ResumeDocument, COLLECTIONS } from "@/lib/resume";
import Particles from "../Particles";
const TEST_MD = `
# SWAYAM SANJAY WAKODIKAR

+91 9764433698 | swayam.24bec7056@vitapstudent.ac.in | Hingna, Maharashtra

---

## SUMMARY

Highly motivated and quick-learning student.  
**Mention your major / field of interest here.**

---

## EDUCATION

**VIT-AP University**, *City, State*  
Bachelor of Technology in Electronics and Communication Engineering  
Student ID: 24BEC7056  

**Relevant Coursework:**  
- Digital Logic Design  
- Signals and Systems  
- Embedded Systems  
- Microprocessors  

**GPA:** 3.6 / 4.0

---

## SKILLS

**Programming Languages**
- C++
- Python
- JavaScript

**Technical Skills**
- Embedded Systems (ESP32)
- Verilog
- Web Development

**Soft Skills**
- Teamwork
- Communication
- Problem Solving
`;

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [resumeMarkdown, setResumeMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      if (status === "loading") return;

      if (status === "unauthenticated") {
        setLoading(false);
        return;
      }

      if (session?.user?.email) {
        try {
          const docRef = doc(db, COLLECTIONS.RESUMES, session.user.email);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data() as ResumeDocument;
            setResumeMarkdown(data.markdown);
          }
        } catch (error) {
          console.error("Error fetching resume:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResume();
  }, [session, status]);

  const hasResume = Boolean(resumeMarkdown);

  return (
    <div className="p-8 flex-1 flex flex-col">
      

      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-purple-600">
          VPlace
        </h1>
      </div>

      <div className="flex-1 flex flex-col relative">
        <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full relative z-10">
          {loading ? (
            <div className="flex justify-start p-10">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600" />
            </div>
          ) : hasResume ? (
            <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:border-purple-500/40 flex flex-col items-start gap-6">
              <h2 className="text-xl font-semibold text-white">
                Your Generated Resume
              </h2>
              <ResumeTab
                onView={() => setShowModal(true)}
                resumeData={resumeMarkdown}
                hasResume
              />
            </div>
          ) : (
            <div className="w-full min-h-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-8 shadow-2xl transition-all duration-300 hover:border-purple-500/40">
              <div className="text-center max-w-lg">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  No Resume Found
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  You haven't generated an AI resume yet. Create one to see it
                  appear here.
                </p>
              </div>
              <a
                href="/resume/home"
                className="whitespace-nowrap px-8 py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all text-center shadow-lg shadow-purple-600/20"
              >
                Generate Resume
              </a>
            </div>
          )}
        </div>
      </div>

      <ResumePreviewModal
        open={showModal && hasResume}
        onClose={() => setShowModal(false)}
        markdown={resumeMarkdown}
      />
    </div>
  );
};

export default Dashboard;