import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Mail, Globe, MessageSquare, BarChart, Users, CheckCircle, Clock, Star, X, Menu, ChevronRight, Zap, Eye, Lock, Award, TrendingUp, Bell, Coffee, Download, MessageCircle, Smartphone } from 'lucide-react';

const ScamShieldLanding = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Working Professional",
      image: "/api/placeholder/48/48",
      content: "ScamShield has been a game-changer for my family. My parents were constantly targeted by scammers, but since installing this, they haven't fallen for a single one!"
    },
    {
      name: "Robert Chen",
      role: "Small Business Owner",
      image: "/api/placeholder/48/48",
      content: "As a small business, we can't afford dedicated IT security staff. ScamShield provides enterprise-level protection at a fraction of the cost. It's detected 15 potential threats in just two months!"
    },
    {
      name: "Maria Garcia",
      role: "Retiree",
      image: "/api/placeholder/48/48",
      content: "The interface is so simple to use, even for someone like me who isn't tech-savvy. I feel much safer online knowing ScamShield is watching out for me."
    },
    {
      name: "James Thompson",
      role: "IT Manager",
      image: "/api/placeholder/48/48",
      content: "We've integrated ScamShield's API into our corporate systems. The detection rate is impressive, and it's reduced phishing incidents by 94% across our organization."
    }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Web Dashboard",
      description: "Access a centralized view for risk assessment and scam alerts across all your devices and accounts."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Browser Extension",
      description: "Get real-time notifications while browsing the web, protecting you from malicious websites and content."
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Protection",
      description: "Automated scam detection in incoming emails, preventing phishing attempts before they reach you."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "Mobile App",
      description: "Protect your mobile devices from SMS scams, suspicious links, and fraudulent calls."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Real-Time Alerts",
      description: "Instant notifications when potential threats are detected across any of your protected channels."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "AI Monitoring",
      description: "Advanced algorithms constantly scan for new scam patterns and adapt to emerging threats."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Fixed Notification Banner */}
      {showNotification && (
        <div className="fixed top-4 right-4 max-w-md z-50 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out">
          <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="ml-2 font-semibold">Special Launch Offer</span>
              </div>
              <button onClick={closeNotification} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Get 30% off the annual Premium plan when you sign up today!
            </p>
            <div className="flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-md font-medium">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className={`h-8 w-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>ScamShield</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`font-medium hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>Features</a>
              <a href="#how-it-works" className={`font-medium hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>How It Works</a>
              <a href="#pricing" className={`font-medium hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>Pricing</a>
              <a href="#testimonials" className={`font-medium hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>Testimonials</a>
              <a href="#faq" className={`font-medium hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>FAQ</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className={`font-medium hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>Login</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <div className="pt-3 border-t border-gray-200">
                <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium mb-2">Login</a>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 bg-blue-500 opacity-10 rounded-full w-96 h-96 -mt-24 -mr-24"></div>
          <div className="absolute bottom-0 left-0 bg-blue-400 opacity-10 rounded-full w-96 h-96 -mb-24 -ml-24"></div>
          <div className="absolute top-1/2 left-1/4 bg-blue-300 opacity-10 rounded-full w-64 h-64 transform -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-6 bg-blue-800 bg-opacity-50 rounded-full px-4 py-2 inline-block">
                <Zap className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">AI-Powered Protection for Everyone</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Stay One Step Ahead of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">Online Scams</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                ScamShield uses advanced AI to protect you, your family, and your business from sophisticated scams across email, web, and messaging platforms.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Extension
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition duration-300 ease-in-out">
                  Watch Demo
                </button>
              </div>
        
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Browser window mockup */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full transform transition-all hover:scale-105 duration-500 ease-in-out">
                  <div className="bg-gray-200 p-2 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto bg-white rounded-md text-gray-600 text-xs px-2 py-1 flex items-center">
                      <Shield className="h-3 w-3 text-blue-600 mr-1" />
                      <span>secure.example.com</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4">
                    {/* ScamShield Alert */}
                    <div className="bg-white border border-red-200 rounded-lg shadow-lg mb-3 overflow-hidden animate-pulse">
                      <div className="p-0.5 bg-gradient-to-r from-red-500 to-red-600"></div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                            <span className="ml-2 font-semibold text-red-600">High Risk Detected</span>
                          </div>
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Phishing Attempt</span>
                        </div>
                        <div className="p-3 bg-red-50 rounded-md mb-3 text-sm text-gray-700">
                          <p className="mb-1"><span className="font-medium">Warning:</span> This website is attempting to steal your banking credentials.</p>
                          <p>It mimics a legitimate banking portal but is hosted on a suspicious domain.</p>
                        </div>
                        <div className="flex justify-between">
                          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium">
                            Report False Positive
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm font-medium">
                            Block & Navigate Away
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fake Email Preview */}
                    <div className="border border-gray-200 rounded-md p-3 mb-3">
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium text-gray-800">support@bankofinvest.com</div>
                        <div className="text-xs text-gray-500">10:45 AM</div>
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">Urgent: Verify Your Account</div>
                      <div className="text-xs text-gray-600 truncate">Your account has been temporarily locked. Please verify...</div>
                    </div>
                    
                    {/* ScamShield Badge */}
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3 flex items-center">
                      <Shield className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-blue-800">Protected by ScamShield</div>
                        <div className="text-xs text-blue-600">10 threats blocked this week</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full py-1 px-3 text-sm font-medium shadow-lg">
                  AI-Powered
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-full p-2 shadow-lg">
                  <Bell className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          </svg>
        </div>
      </section>


      {/* Key Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 font-bold text-4xl mb-2">10M+</div>
              <p className="text-gray-600">Scams Detected</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 font-bold text-4xl mb-2">98.7%</div>
              <p className="text-gray-600">Detection Accuracy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 font-bold text-4xl mb-2">500K+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 font-bold text-4xl mb-2">$1.5B</div>
              <p className="text-gray-600">Potential Losses Prevented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">COMPREHENSIVE PROTECTION</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All-in-One Scam Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ScamShield provides multi-platform protection through various integrated tools that work together to keep you safe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
              >
                <div className="p-3 bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {feature.description}
                </p>
                <a href="#" className="text-blue-600 font-medium flex items-center mt-auto">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
<section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Background decoration elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-32 -mt-32"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 -ml-40 -mb-40"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20">
      <div className="inline-block bg-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-4 shadow-sm transform transition-transform hover:scale-105 duration-300">INNOVATIVE TECHNOLOGY</div>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">How ScamShield <span className="text-blue-600">Protects You</span></h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our AI-powered technology constantly evolves to stay ahead of emerging scam tactics
      </p>
    </div>
    
    <div className="relative">
      {/* Timeline */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full"></div>
      
      {/* Steps */}
      <div className="space-y-24">
        {/* Step 1 - Left side text, right side card */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-16 md:text-right mb-10 md:mb-0">
            <div className="mb-2 inline-flex items-center md:justify-end">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mr-2">STEP 01</span>
              <div className="h-px w-10 bg-blue-200"></div>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Real-Time Analysis</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              ScamShield analyzes text, voice, and image content to provide instant risk assessments using advanced natural language processing.
            </p>
          </div>
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-white font-bold text-xl">1</span>
          </div>
          <div className="flex-1 md:pl-16 md:text-left">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Advanced algorithms detect suspicious patterns in communications, flagging potential threats in milliseconds before they can cause harm.
              </p>
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-5 transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Step 2 - Right side text, left side card */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-16 md:text-right mb-10 md:mb-0">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Machine learning models calculate risk scores based on multiple factors including language patterns, sender reputation, and content analysis.
              </p>
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-5 transition-all duration-500 rounded-full"></div>
            </div>
          </div>
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-white font-bold text-xl">2</span>
          </div>
          <div className="flex-1 md:pl-16 md:text-left">
            <div className="mb-2 inline-flex items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mr-2">STEP 02</span>
              <div className="h-px w-10 bg-blue-200"></div>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Risk Assessment</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our AI evaluates potential threats and assigns a risk level to suspicious content, categorizing by scam type and severity.
            </p>
          </div>
        </div>
        
        {/* Step 3 - Left side text, right side card */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-16 md:text-right mb-10 md:mb-0">
            <div className="mb-2 inline-flex items-center md:justify-end">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mr-2">STEP 03</span>
              <div className="h-px w-10 bg-blue-200"></div>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Alert & Protection</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Users receive immediate notifications about potential scams with clear, actionable recommendations tailored to the threat.
            </p>
          </div>
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-white font-bold text-xl">3</span>
          </div>
          <div className="flex-1 md:pl-16 md:text-left">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Clear alerts help users make informed decisions about suspicious content, with options to block, report, or proceed with caution.
              </p>
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-5 transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Step 4 - Right side text, left side card */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-16 md:text-right mb-10 md:mb-0">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our system continuously learns from new scam patterns to improve detection, updating its knowledge base in real-time across all protected devices.
              </p>
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-5 transition-all duration-500 rounded-full"></div>
            </div>
          </div>
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-white font-bold text-xl">4</span>
          </div>
          <div className="flex-1 md:pl-16 md:text-left">
            <div className="mb-2 inline-flex items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mr-2">STEP 04</span>
              <div className="h-px w-10 bg-blue-200"></div>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Continuous Learning</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              ScamShield evolves with new scam patterns, staying ahead of fraudsters through crowdsourced threat intelligence and AI adaptation.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-24 text-center">
      <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
        <span>See ScamShield in Action</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</section>

      {/* Use Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">FOR EVERYONE</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Protection for All User Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ScamShield is designed to protect individuals, families, and businesses from scams
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Individual Users */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl group">
              <div className="h-3 bg-blue-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Individual Protection</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for everyday internet users who want to stay safe from phishing emails, scam texts, and fraudulent websites.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Email & message protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Safe browsing alerts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Personal information protection</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Family Protection */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl group md:scale-110 border-2 border-blue-500 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
              <div className="h-3 bg-blue-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Family Protection</h3>
                <p className="text-gray-600 mb-6">
                  Protect your entire family, especially those most vulnerable to scams, like elderly parents or teenage children.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Coverage for up to 4 accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Centralized family dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Activity monitoring & alerts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Simplified interface for seniors</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Business Protection */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl group">
              <div className="h-3 bg-blue-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Business Protection</h3>
                <p className="text-gray-600 mb-6">
                  Enterprise-grade protection for companies of all sizes, protecting employees and sensitive customer data.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Employee account protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">API integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Admin dashboard & analytics</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">FLEXIBLE OPTIONS</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for you or your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Basic</h3>
                <div className="mb-4 flex items-end">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                  <span className="text-gray-500 ml-2">forever</span>
                </div>
                <p className="text-gray-600 mb-6 border-b border-gray-200 pb-6">
                  Essential protection for individuals
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Basic scam detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Browser extension</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Limited AI insights</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Email protection</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 py-3 rounded-lg font-semibold transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-white rounded-xl border-2 border-blue-500 shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl md:scale-105 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Premium</h3>
                <div className="mb-4 flex items-end">
                  <span className="text-4xl font-bold text-gray-900">$30</span>
                  <span className="text-gray-500 ml-2">/year</span>
                </div>
                <p className="text-gray-600 mb-6 border-b border-gray-200 pb-6">
                  Complete protection for one user
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced scam detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Browser extension</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Full AI insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Email & message protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
            
            {/* Family Tier */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Family</h3>
                <div className="mb-4 flex items-end">
                  <span className="text-4xl font-bold text-gray-900">$50</span>
                  <span className="text-gray-500 ml-2">/year</span>
                </div>
                <p className="text-gray-600 mb-6 border-b border-gray-200 pb-6">
                  Protection for up to four accounts
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cover up to 4 accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Shared family dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Activity monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Family account management</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition duration-300">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Enterprise */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise Solutions</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Looking to protect your business or integrate ScamShield into your products? Get custom pricing and features tailored to your organization's needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">SUCCESS STORIES</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Users Like You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about ScamShield
            </p>
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-4xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <img 
                    src={testimonials[activeTestimonialIndex].image} 
                    alt={testimonials[activeTestimonialIndex].name} 
                    className="w-16 h-16 rounded-full border-4 border-blue-100"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonialIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeTestimonialIndex].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 text-lg italic mb-8">
                "{testimonials[activeTestimonialIndex].content}"
              </blockquote>
              
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                      activeTestimonialIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="ml-3 font-semibold text-gray-900">94%</div>
              </div>
              <p className="text-gray-600">
                Of users report feeling safer online after using ScamShield
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-yellow-500" />
                <div className="ml-3 font-semibold text-gray-900">3.5M+</div>
              </div>
              <p className="text-gray-600">
                Hours of worry-free browsing protected by our technology
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-500" />
                <div className="ml-3 font-semibold text-gray-900">24/7</div>
              </div>
              <p className="text-gray-600">
                Customer support available to help with any security questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">GOT QUESTIONS?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ScamShield
            </p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(0)}
              >
                <span className="font-semibold text-lg text-gray-900">How does ScamShield detect scams?</span>
                <span className={`text-blue-600 transition-transform duration-300 transform ${activeFaq === 0 ? 'rotate-180' : ''}`}>
                  <ChevronRight className="h-5 w-5" />
                </span>
              </button>
              {activeFaq === 0 && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">
                    ScamShield uses advanced AI and machine learning algorithms to analyze the content, context, and patterns in communications. Our technology evaluates text, voice, and images to identify suspicious elements that match known scam tactics or exhibit unusual patterns that could indicate fraud. The system is constantly learning from new threats to improve its detection capabilities.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(1)}
              >
                <span className="font-semibold text-lg text-gray-900">Will ScamShield slow down my device?</span>
                <span className={`text-blue-600 transition-transform duration-300 transform ${activeFaq === 1 ? 'rotate-180' : ''}`}>
                  <ChevronRight className="h-5 w-5" />
                </span>
              </button>
              {activeFaq === 1 && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">
                    No, ScamShield is designed to be lightweight and efficient. Most of the processing happens in the cloud, minimizing the impact on your device's performance. The browser extension and email plugins have been optimized to use minimal resources, ensuring your devices continue to run smoothly while staying protected.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(2)}
              >
                <span className="font-semibold text-lg text-gray-900">Is my data private and secure?</span>
                <span className={`text-blue-600 transition-transform duration-300 transform ${activeFaq === 2 ? 'rotate-180' : ''}`}>
                  <ChevronRight className="h-5 w-5" />
                </span>
              </button>
              {activeFaq === 2 && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">
                    Absolutely. ScamShield only analyzes content for scam detection and does not store personal communications. All data is encrypted and processed following strict privacy standards. We never sell your data to third parties and only use it to improve our scam detection systems. Our privacy-first approach means your sensitive information remains protected at all times.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(3)}
              >
                <span className="font-semibold text-lg text-gray-900">Can I use ScamShield for my business?</span>
                <span className={`text-blue-600 transition-transform duration-300 transform ${activeFaq === 3 ? 'rotate-180' : ''}`}>
                  <ChevronRight className="h-5 w-5" />
                </span>
              </button>
              {activeFaq === 3 && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">
                    Yes, ScamShield offers enterprise solutions for businesses of all sizes. We provide API access for integration with your existing systems, as well as bulk licenses for employees. Our business solutions include additional features like admin dashboards, detailed analytics, and custom training for your team. Contact our sales team for custom pricing based on your organization's specific needs.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(4)}
              >
                <span className="font-semibold text-lg text-gray-900">How do I set up ScamShield for elderly family members?</span>
                <span className={`text-blue-600 transition-transform duration-300 transform ${activeFaq === 4 ? 'rotate-180' : ''}`}>
                  <ChevronRight className="h-5 w-5" />
                </span>
              </button>
              {activeFaq === 4 && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">
                    Our Family plan is perfect for this situation. You can manage up to four accounts from a single dashboard, making it easy to help protect elderly family members. We've designed the user interface to be simple and intuitive, with clear alerts that don't require technical knowledge to understand. You can also receive notifications when potential threats are detected on their devices.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shield Yourself from Scams?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who trust ScamShield to protect themselves and their loved ones from increasingly sophisticated online scams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" />
              Download Extension
            </button>
            <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              See Plans & Pricing
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <p className="font-medium">Download our extension</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="font-medium">Create your account</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <p className="font-medium">Set your preferences</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <p className="font-medium">Stay protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">TRUSTED PARTNERS</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Working with Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with top organizations to keep you safe online
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Financial Partner</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Tech Company</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Security Firm</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Telecom Provider</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated on the Latest Scam Threats</h2>
                <p className="text-gray-600">
                  Subscribe to our newsletter for tips, alerts, and updates on emerging online threats
                </p>
              </div>
              
              <form className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                  Subscribe
                </button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">ScamShield</span>
              </div>
              <p className="text-gray-400 mb-6">
                Protecting you from online scams with AI-powered detection technology.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400">
                    <span className="sr-only">Twitter</span>
                    <span className="text-sm">T</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400">
                    <span className="sr-only">Facebook</span>
                    <span className="text-sm">F</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400">
                    <span className="sr-only">LinkedIn</span>
                    <span className="text-sm">L</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-100">Product</h3>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-100">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Community</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-100">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 md:flex md:justify-between md:items-center">
            <p className="text-gray-500 mb-4 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} ScamShield. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a 
        href="#"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ChevronRight className="h-6 w-6 transform rotate-270" />
      </a>
    </div>
  );
};

export default ScamShieldLanding;