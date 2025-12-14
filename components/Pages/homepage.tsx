'use client'
import { FileUpload } from "../ui/file-upload";
import React, { useState } from "react";
const Homepage = () => {
    const [activeTab, setActiveTab] = useState<"upload" | "input">("upload");

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navbar */}
            <nav className="bg-gray-800 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Hackathon</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto p-8">
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab("upload")}
                        className={`px-6 py-3 rounded-lg font-semibold ${
                            activeTab === "upload"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 hover:bg-gray-600"
                        }`}
                    >
                        Upload Files
                    </button>
                    <button
                        onClick={() => setActiveTab("input")}
                        className={`px-6 py-3 rounded-lg font-semibold ${
                            activeTab === "input"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 hover:bg-gray-600"
                        }`}
                    >
                        Input Details
                    </button>
                </div>

                {activeTab === "upload" && (
                    <FileUpload/>
                )}

                {activeTab === "input" && (
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Skills"
                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Experience"
                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Education"
                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Academic Achievements"
                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={4}
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Homepage;