'use client';

import React, { useState } from 'react';

// FAQ Item Component
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <button 
                className="w-full p-3 text-left flex justify-between items-center focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg text-gray-800">{question}</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="black"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="p-6 pt-0 text-gray-600">
                    {answer}
                </div>
            </div>
        </div>
    );
};

// Inline SVG for icons (replacing Lucide React for a self-contained HTML file)
const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);

const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
    </svg>
);

const DribbbleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0-7.3 3.3A14.5 14.5 0 0 0 2 12c0 1.6.3 3.2.9 4.7A14.5 14.5 0 0 0 12 22a14.5 14.5 0 0 0 7.3-3.3A14.5 14.5 0 0 0 22 12c0-1.6-.3-3.2-.9-4.7A14.5 14.5 0 0 0 12 2Z"></path>
        <path d="M8.5 12.5c.7.7 1.6 1.2 2.5 1.5"></path>
        <path d="M15.5 11.5c-.7-.7-1.6-1.2-2.5-1-5"></path>
        <path d="M12 10.5c-.7-.7-1.2-1.6-1.5-2.5"></path>
        <path d="M12 13.5c.7.7 1.2 1.6 1.5 2.5"></path>
    </svg>
);

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
);

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" x2="12" y1="15" y2="3"></line>
    </svg>
);

// --- START: Icons for Services Section ---
const UxUiIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15V12H9Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 15C10.3431 15 9 13.6569 9 12H12V15Z" fill="white"/>
    </svg>
);

const FramerIcon: React.FC = () => (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M7 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm0 8h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" fill="white"/>
    </svg>
);

const WebIcon: React.FC = () => (
    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 3h8"/>
    </svg>
);

const PaintBrushIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
);

const PaperPlaneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4 20-7z"></path>
        <path d="M22 2L11 13"></path>
    </svg>
);
// --- END: Icons for Services Section ---


// --- START: Data for Portfolio Carousel ---
const portfolioItems = [
    {
        title: "LanderOS",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project LanderOS"
    },
    {
        title: "Alter",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Alter"
    },
    {
        title: "Portfoy",
        imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        altText: "Preview project Portfoy"
    },
];

const duplicatedItems = [...portfolioItems, ...portfolioItems];
// --- END: Data for Portfolio Carousel ---


const App: React.FC = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-[#f0f4f8] font-inter">
            {/* Hero Section */}
            <section className="bg-[#f0f4f8] min-h-screen w-full flex-1 flex flex-col">
                {/* Header Section */}
                <header className="flex items-center justify-between w-full p-4 my-2">
                    <div className="font-playfair-display text-xl font-semibold !text-black opacity-100">
                        Rievan Averillio
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot"></span>
                            <span>available for work</span>
                        </div>
                        <div className="flex space-x-3">
                            <button className="icon-button text-black">
                                <InstagramIcon />
                            </button>
                            <button className="icon-button text-black">
                                <XIcon />
                            </button>
                            <button className="icon-button text-black">
                                <DribbbleIcon />
                            </button>
                        </div>
                    </div>
                </header>
                {/* Main content di tengah */}
                <div className="flex flex-1 items-center justify-center">
                    <section id="main" className="mb-12 w-full">
                        <div className="mb-6 mt-18 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                            <div className="profile-image-container">
                                <img
                                    src="https://placehold.co/60x60/A0A0A0/FFFFFF?text=PROFILE_PIC"
                                    alt="Alex Johnson"
                                    className="profile-image"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = 'https://placehold.co/60x60/A0A0A0/FFFFFF?text=AJ';
                                    }}
                                />
                            </div>
                            <h1 className="font-playfair-display text-5xl font-bold text-gray-900 md:text-6xl">
                                I'm Rievan
                            </h1>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                            <h2 className="font-playfair-display text-5xl font-bold text-gray-900 md:text-6xl">
                                Averillio Fadhlan
                            </h2>
                            <div className="flex space-x-4">
                                <div className="app-icon cloud">
                                    <img
                                        src="https://placehold.co/80x80/87CEEB/FFFFFF?text=CLOUD_APP"
                                        alt="Cloud App Icon"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = 'https://placehold.co/80x80/87CEEB/FFFFFF?text=Cloud';
                                        }}
                                    />
                                </div>
                                <div className="app-icon moon">
                                    <img
                                        src="https://placehold.co/80x80/4682B4/FFFFFF?text=MOON_APP"
                                        alt="Moon App Icon"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = 'https://placehold.co/80x80/4682B4/FFFFFF?text=Moon';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="mx-auto mt-8 mb-8 max-w-2xl text-lg text-gray-600 md:mt-4 sm:mt-8">
                            I specialize in building powerful web applications and AI solutions, creating cutting-edge technologies for startups and enterprises
                        </p>

                        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 sm:flex-col sm:space-y-4 mb-20">
                            <button className="button-gradient-dark flex items-center space-x-2 rounded-xl px-6 py-3 text-white shadow-lg transition-all hover:scale-105">
                                <DownloadIcon />
                                <span>Get Template</span>
                            </button>
                            <button className="button-gradient-light flex items-center space-x-2 rounded-xl px-6 py-3 text-gray-800 shadow-lg transition-all hover:scale-105">
                                <span>See Projects</span>
                                <ArrowRightIcon />
                            </button>
                        </div>

                        {/* Portfolio Section */}
                        <div id="portfolio" className="w-full py-8 px-0 relative overflow-x-hidden">
                            <div className="portfolio-fade-left"></div>
                            <div className="portfolio-fade-right"></div>
                            <div className="portfolio-carousel-outer">
                                <div className="portfolio-carousel-inner" id="portfolio-carousel-inner">
                                    {duplicatedItems.map((item, index) => (
                                        <div
                                        key={index}
                                        className="max-w-lg w-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 transition transform hover:scale-105 duration-300 cursor-pointer font-inter"
                                        >

                                            <div className="m-3 rounded-xl overflow-hidden">
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.altText}
                                                    className="w-full h-80 object-cover"
                                                />
                                            </div>
                                            <div className="p-2 flex items-center justify-between font-inter">
                                                <h3 className="text-sm font-semibold text-gray-400 font-inter">{item.title}</h3>
                                                <span className="text-gray-500">
                                                    <svg
                                                        width="32"
                                                        height="32"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M7 17L17 7" />
                                                        <path d="M7 7h10v10" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            
            {/* --- START: Updated Services Section --- */}
            <section className="w-full bg-[#e9edf1] py-16 px-4 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-10 text-center">
                <span className="px-5 py-1.5 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                  Services
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gray-800 mb-3">Web & AI Solutions</h2>
                <p className="text-gray-500 max-w-xl">Building powerful web applications and intelligent AI systems that drive business transformation</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Card 1: Full-Stack Development */}
                <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8">
                  <img src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=600&q=80" alt="Full-Stack Development" className="w-full md:w-2/5 h-48 object-cover rounded-2xl" />
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                      <WebIcon />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Full-Stack Development</h3>
                    <p className="text-gray-500 text-sm">Building robust, scalable web applications with modern frameworks like React, Node.js, and Next.js.</p>
                  </div>
                </div>
                {/* Card 2: AI Implementation */}
                <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
                    <UxUiIcon />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">AI Implementation</h3>
                  <p className="text-gray-500 text-sm">Integrating cutting-edge AI technologies into web applications, including machine learning models, LLMs, and intelligent data analysis.</p>
                </div>
                {/* Card 3: Cloud Architecture */}
                <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
                    <FramerIcon />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">Cloud Architecture</h3>
                  <p className="text-gray-500 text-sm">Designing and implementing scalable cloud solutions using AWS, Google Cloud, and Azure with infrastructure as code.</p>
                </div>
                {/* Card 4: Custom AI Solutions */}
                <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 md:order-2">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                      <PaintBrushIcon />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Custom AI Solutions</h3>
                    <p className="text-gray-500 text-sm">Developing tailored AI applications for business automation, data analysis, and decision support.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1677442135133-4c11bc4cf2f7?auto=format&fit=crop&w=600&q=80" alt="Custom AI Solutions" className="w-full md:w-2/5 h-48 object-cover rounded-2xl md:order-1" />
                </div>
              </div>
              <div className="flex gap-4 mt-12 justify-center">
                <button className="button-gradient-dark flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                    <PaperPlaneIcon />
                    <span>Contact Me</span>
                </button>
                <button className="bg-white flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-semibold shadow-lg border border-gray-200/80 hover:scale-105 transition-transform">
                    <span>See Projects</span>
                    <ArrowRightIcon />
                </button>
              </div>
            </section>
            {/* --- END: Updated Services Section --- */}

            {/* Profile Section */}
            <section className="w-full bg-[#f0f4f8] py-16 px-12 flex justify-center">
              <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 w-full px-0 md:px-0">
                <div className="bg-white p-2 rounded-lg shadow max-w-xs mx-auto lg:mx-0 text-xs">
                  <div className="flex justify-center mb-6">
                    <div className="w-68 h-68 rounded2xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80" 
                        alt="Sophie Carter" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex p-2 items-center justify-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-dot"></div>
                      <span className="text-gray-600 text-sm">available for work</span>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-playfair-display">Rievan Averillio</h2>
                    <p className="text-gray-600 leading-relaxed">Full-Stack & AI Developer Based in Berlin.</p>
                  </div>
                  <div className="flex justify-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                      <XIcon />
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                      <InstagramIcon />
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                      <DribbbleIcon />
                    </div>
                  </div>
                  <button className="w-40 bg-[#232a3d] text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1a2233] transition mb-4 mx-auto">
                    <ArrowRightIcon />
                    Contact Me
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-700 text-XL leading-relaxed mb-6 mt-5">
                      I'm Alex Johnson, a passionate Web & AI Developer based in the dynamic city of Berlin, Germany. I combine advanced programming expertise with AI knowledge to build powerful digital solutions that solve complex problems.
                    </p>
                    <hr className="border-1 border-dashed border-gray-900 mb-3" />
                    <div className="grid grid-cols-5 gap-1 mb-6">
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            React.js
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            Node.js
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            Next.js
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            TensorFlow
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            PyTorch
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            AWS
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            TypeScript
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            Python
                            </span>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                            <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded px-2 py-1 inline-block">
                            LangChain
                            </span>
                        </div>
                        </div>

                    <hr className="border-1 border-dashed border-gray-900" />
                  </div>
                    <div className="space-y-6">
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">Lead Developer</div>
                        <div className="flex-1 text-gray-600 text-center">TechNova AI</div>
                        <div className="w-20 text-right text-gray-500">2023</div>
                    </div>
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">AI Engineer</div>
                        <div className="flex-1 text-gray-600 text-center">DataMind Labs</div>
                        <div className="w-20 text-right text-gray-500">2021</div>
                    </div>
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">Full-Stack Developer</div>
                        <div className="flex-1 text-gray-600 text-center">CloudSphere</div>
                        <div className="w-20 text-right text-gray-500">2024</div>
                    </div>
                    <div className="bg-gray-200 rounded-xl px-6 py-4 flex items-center text-sm md:text-base">
                        <div className="flex-1 font-medium text-gray-800">Backend Engineer</div>
                        <div className="flex-1 text-gray-600 text-center">QuantumBit</div>
                        <div className="w-20 text-right text-gray-500">2022</div>
                    </div>
                    </div>

                </div>
              </div>
            </section>

            {/* Comparison Section */}
            <section className="w-full bg-[#e9f0f8] py-16 flex justify-center mx-3">
              <div className="w-full max-w-5xl px-4">
                <div className="flex flex-col items-center mb-8 text-center">
                  <button className="px-5 py-1.5 mb-6 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="m7 21 4.3-4.3c.4-.4 1-.4 1.4 0L17 21"></path>
                      <path d="m7 3 4.3 4.3c.4.4 1 .4 1.4 0L17 3"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                    Comparison
                  </button>
                  <h2 className="text-5xl font-playfair-display font-bold text-gray-800 mb-3">Advanced vs Basic</h2>
                  <p className="text-gray-600 max-w-xl mb-12">Advanced AI-driven development compared to traditional coding approaches.</p>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    {/* Me Column */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <h3 className="font-playfair-display text-2xl font-bold text-center mb-10 text-gray-800">Me</h3>
                      <hr className="border-1 border-dashed border-gray-400 mb-3" />
                      <div className="border-t border-gray-100 pt-2">
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Custom, high-performance websites</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Pixel-perfect UI/UX design</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">AI-powered solutions</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Advanced ML integration</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Cloud-native architecture</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Real-time data processing</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Automated testing & deployment</span>
                          </li>
                        </ul>
                      </div>
                      <button className="mt-10 w-full bg-[#232a3d] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#1a2233] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 10l5 5-5 5"></path>
                          <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                        </svg>
                        <span>Contact Me</span>
                      </button>
                    </div>
                    
                    {/* Others Column */}
                    <div className="bg-white rounded-xl p-8 shadow-lg h-fit">
                      <h3 className="font-playfair-display text-2xl font-bold text-center mb-10 text-gray-800">Others</h3>
                      <hr className="border-1 border-dashed border-gray-400 mb-3" />
                      <div className="border-t border-gray-100 pt-2">
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">Standard coding only</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">Basic web development</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">No AI integration</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">Limited data processing</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">Manual deployments</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">Limited automation capabilities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="w-full bg-[#f0f4f8] py-16 flex justify-center mx-3">
              <div className="w-full max-w-5xl px-4">
                <div className="flex flex-col items-center mb-10 text-center">
                  <span className="px-5 py-1.5 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    Process
                  </span>
                  <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gray-800 mb-3">From Concept to Solution</h2>
                  <p className="text-gray-600 max-w-xl">A streamlined development process that ensures robust, intelligent solutions for every project</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {/* Step 1 */}
                  <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Project Discovery</h3>
                    <p className="text-gray-600">Initial consultation to understand your business needs, technical requirements, and project goals</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step1</span>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Architecture & Planning</h3>
                    <p className="text-gray-600">Developing technical architecture, selecting frameworks, and planning AI integration for your custom solution</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step2</span>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Development & AI Training</h3>
                    <p className="text-gray-600">Building robust code, implementing AI models, and creating intelligent systems with continuous testing</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step3</span>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                      04
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Deployment & Optimization</h3>
                    <p className="text-gray-600">Launching your solution to production, with continuous monitoring, optimization and technical support</p>
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-gray-100 text-gray-500 rounded-lg px-3 py-1 text-xs">step4</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-12 justify-center">
                  <button className="bg-gray-900 text-white flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 10l5 5-5 5"></path>
                      <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                    </svg>
                    <span>Contact Me</span>
                  </button>
                  <button className="bg-white flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 font-semibold shadow-lg border border-gray-200/80 hover:bg-gray-50 transition-all">
                    <span>See Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section className="w-full bg-[#e9f0f8] py-16 flex justify-center mx-3">
              <div className="w-full max-w-5xl px-4">
                <div className="flex flex-col items-center mb-10 text-center">
                  <span className="px-5 py-1.5 rounded-full bg-white/70 text-gray-600 text-sm font-medium shadow-sm border border-gray-200/80 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    FAQs
                  </span>
                  <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gray-800 mb-3">Questions? Answers!</h2>
                  <p className="text-gray-600 max-w-xl mb-12">Find quick answers to the most common questions about the services offered</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Get In Touch Now!</h3>
                      <p className="text-gray-600 text-center mb-8">Still have questions? Feel free to get in touch with us today!</p>
                      <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 10l5 5-5 5"></path>
                          <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                        </svg>
                        <span>Ask A Question</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <FaqItem 
                      question="What web development services do you offer?" 
                      answer="I provide full-stack web development using modern frameworks like React, Next.js, and Node.js, with specialized expertise in AI integration, including custom ML models, natural language processing, computer vision, and intelligent data analysis solutions."
                    />
                    <FaqItem 
                      question="What AI technologies do you work with?" 
                      answer="I work with a wide range of AI technologies including TensorFlow, PyTorch, LangChain for LLM applications, computer vision libraries, recommendation systems, and natural language processing frameworks. I can integrate these into web applications or build standalone AI solutions."
                    />
                    <FaqItem 
                      question="How do we get started on a project?" 
                      answer="The process begins with a technical consultation where we discuss your requirements, business objectives, and technical constraints. Then I'll develop a detailed project proposal with architecture recommendations, timeline, and cost estimates. Once approved, we begin the development process with regular updates and feedback cycles."
                    />
                    <FaqItem 
                      question="What is your pricing structure?" 
                      answer="For web development projects, I charge $95-150/hour depending on complexity, or fixed project rates starting at $5,000 for smaller projects. AI integration work typically starts at $8,000 due to the specialized expertise required. Enterprise-level solutions with custom AI are priced based on specific requirements."
                    />
                    <FaqItem 
                      question="How long does a typical project take?" 
                      answer="Standard web applications typically take 6-12 weeks from concept to launch. Projects with AI integration usually require 8-16 weeks, including model training and testing. Large enterprise solutions may take 4-6 months. I provide detailed timelines during the proposal phase and maintain transparent communication throughout development."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Final Call to Action Section */}
            <section className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8">
              <div className="flex flex-col items-center text-center">
                {/* Handshake Icon in Dark Circle */}
                <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M9 14L4 19M9 14L15 8C16.1046 6.89543 18.1046 6.89543 19.2093 8C20.3139 9.10457 20.3139 11.1046 19.2093 12.2092L13 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 8L10 3L13.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 20L16 15L19 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold font-playfair-display mb-4 text-black">
                  Tell Me About Your <br/> Next Tech Challenge
                </h2>
                
                {/* Subheading */}
                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mb-10">
                  Let's create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3.5 rounded-full button-gradient-dark text-white font-medium text-lg flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 10l5 5-5 5"></path>
                      <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                    </svg>
                    <span>Contact Me</span>
                  </button>
                  <button className="px-8 py-3.5 rounded-full button-gradient-light text-gray-800 font-medium text-lg flex items-center justify-center gap-2">
                    <span>See Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Custom CSS */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');

                .font-inter { font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif; }
                .font-playfair-display { font-family: 'Playfair Display', serif; }

                .button-gradient-dark {
                    background: linear-gradient(145deg, #3b426e, #2a3050);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                .button-gradient-dark:hover {
                    background: linear-gradient(145deg, #4a5180, #3a4060);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                }

                .button-gradient-light {
                    background: linear-gradient(145deg, #e0e7ef, #ffffff);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    transition: all 0.3s ease;
                }
                .button-gradient-light:hover {
                    background: linear-gradient(145deg, #eaf1f8, #f8f8f8);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                .icon-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(5px);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    transition: all 0.2s ease;
                    border: 1px solid rgba(255, 255, 255, 0.6);
                }
                .icon-button:hover {
                    background-color: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transform: translateY(-1px);
                }

                .profile-image-container {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .profile-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 16px;
                }

                .app-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #ffffff;
                }
                .app-icon img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .app-icon.cloud { background: linear-gradient(135deg, #87CEEB, #ADD8E6); }
                .app-icon.moon { background: linear-gradient(135deg, #4682B4, #6A5ACD); }

                @media (max-width: 768px) {
                    .text-5xl { font-size: 2.5rem; }
                    .text-6xl { font-size: 3.5rem; }
                }
                @media (max-width: 480px) {
                    .text-5xl { font-size: 2rem; }
                    .text-6xl { font-size: 3rem; }
                    .app-icon { width: 50px; height: 50px; border-radius: 14px; }
                    .profile-image-container { width: 40px; height: 40px; border-radius: 12px; }
                }

                .animate-pulse-dot { animation: pulse-dot 1.2s infinite; }
                @keyframes pulse-dot {
                    0% { box-shadow: 0 0 0 0 rgba(34,197,94, 0.7); }
                    70% { box-shadow: 0 0 0 8px rgba(34,197,94, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(34,197,94, 0); }
                }

                .portfolio-carousel-outer {
                    width: 100vw;
                    overflow: hidden;
                    position: relative;
                }
                .portfolio-carousel-inner {
                    display: flex;
                    gap: 2rem;
                    width: max-content;
                    animation: carousel-scroll 24s linear infinite;
                }
                @keyframes carousel-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .portfolio-fade-left, .portfolio-fade-right {
                    position: absolute;
                    top: 0; bottom: 0;
                    width: 60px;
                    z-index: 2;
                    pointer-events: none;
                }
                .portfolio-fade-left { left: 0; background: linear-gradient(90deg, #f0f4f8 80%, transparent); }
                .portfolio-fade-right { right: 0; background: linear-gradient(-90deg, #f0f4f8 80%, transparent); }
                
                .glass-card {
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(18px) saturate(180%);
                    -webkit-backdrop-filter: blur(18px) saturate(180%);
                    border: 1.5px solid rgba(255,255,255,0.18);
                }
            `}</style>
        </div>
    );
};

export default App;