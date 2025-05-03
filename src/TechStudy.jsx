import { useState, useEffect, useRef } from 'react';
import { 
  Code, Book, Shield, Trophy, Users, Briefcase, 
  ChevronRight, CheckCircle, Smartphone, Star,
  Video, Play, Pause, Volume2, VolumeX, Maximize, Minimize
} from 'lucide-react';

export default function TechStudy() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef([]);
  const videoContainerRef = useRef(null);

  // Sample video data
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming concepts and logic',
      duration: '15:22'
    },
    {
      id: 'pQN-pnXPaVg',
      title: 'Web Development Fundamentals',
      description: 'HTML, CSS and JavaScript crash course',
      duration: '25:45'
    },
    {
      id: 'rfscVS0vtbw',
      title: 'Python for Beginners',
      description: 'Complete Python tutorial for absolute beginners',
      duration: '4:30:12'
    }
  ];

  useEffect(() => {
    // Check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Testimonial slider
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const togglePlayPause = () => {
    const iframe = document.querySelector(`iframe[data-video-id="${activeVideo}"]`);
    if (iframe) {
      const player = iframe.contentWindow.postMessage;
      if (isPlaying) {
        player('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        player('{"event":"command","func":"playVideo","args":""}', '*');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const iframe = document.querySelector(`iframe[data-video-id="${activeVideo}"]`);
    if (iframe) {
      const player = iframe.contentWindow.postMessage;
      if (isMuted) {
        player('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        player('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      } else if (videoContainerRef.current.webkitRequestFullscreen) {
        videoContainerRef.current.webkitRequestFullscreen();
      } else if (videoContainerRef.current.msRequestFullscreen) {
        videoContainerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Features data
  const features = [
    { 
      title: "Coding Basics", 
      icon: <Code className="h-8 w-8 text-blue-500" />,
      description: "Start your journey with beginner-friendly programming tutorials"
    },
    { 
      title: "AI Learning Paths", 
      icon: <Book className="h-8 w-8 text-green-500" />,
      description: "Explore artificial intelligence through structured learning paths"
    },
    { 
      title: "Cybersecurity Modules", 
      icon: <Shield className="h-8 w-8 text-red-500" />,
      description: "Learn to protect systems and data from digital threats"
    },
    { 
      title: "Gamified Challenges", 
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      description: "Practice your skills with fun, competitive coding challenges"
    },
    { 
      title: "Community Forums", 
      icon: <Users className="h-8 w-8 text-purple-500" />,
      description: "Connect with peers and mentors to solve problems together"
    },
    { 
      title: "Career Development", 
      icon: <Briefcase className="h-8 w-8 text-indigo-500" />,
      description: "Prepare for tech careers with industry-aligned projects"
    }
  ];

  // How it works steps
  const steps = [
    {
      title: "Choose a Module",
      description: "Select from our wide range of ICT topics based on your interests",
      icon: <Book className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Learn with Labs",
      description: "Practice in our interactive coding environment with real-time feedback",
      icon: <Code className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Track & Grow",
      description: "Monitor your progress and celebrate achievements as you advance",
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />
    }
  ];

  // Personalized learning features
  const personalizedFeatures = [
    {
      title: "AI-powered Suggestions",
      description: "Get content recommendations based on your learning style and goals",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Progress Tracking",
      description: "Visualize your journey with detailed analytics and insights",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Adaptive Content",
      description: "Content that adjusts to your skill level as you learn and improve",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Developer",
      quote: "TechStudy's hands-on approach helped me transition from a complete beginner to landing my first developer job in just 6 months.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Cybersecurity Analyst",
      quote: "The cybersecurity modules are comprehensive and up-to-date with industry standards. Exactly what I needed to advance my career.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Computer Science Student",
      quote: "The community forums and peer support make learning complex topics much easier. I'm grateful for this platform!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl">Techly</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Features</a>
                <a href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">How It Works</a>
                <a href="#video-courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Video Courses</a>
                <a href="#personalized" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Personalized</a>
                <a href="#mobile" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Mobile</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Techly: Learn ICT the Smart Way
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Built by Diamond Champions to make digital education accessible for all.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="hidden md:block absolute right-0 bottom-0 w-1/3 h-full overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-57.9,79.6,-43.5C87.4,-29.1,90.1,-11.7,88.3,5.1C86.4,21.9,79.9,38.1,69.8,51.5C59.7,64.9,45.9,75.5,30.7,79.2C15.5,82.9,-1.1,79.6,-16.8,74.7C-32.4,69.7,-47.1,63,-58.4,52.2C-69.7,41.4,-77.7,26.4,-82.3,9.8C-86.9,-6.8,-88.1,-25.2,-81.6,-40.2C-75.1,-55.3,-60.9,-67,-45.6,-74.1C-30.2,-81.3,-13.8,-83.8,1.1,-85.7C16,-87.5,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Learning Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of ICT learning resources designed to help you master digital skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Courses Section */}
      <section id="video-courses" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Video Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts with our high-quality video tutorials and courses.
            </p>
          </div>

          {activeVideo ? (
            <div 
              ref={videoContainerRef}
              className="relative bg-black rounded-xl overflow-hidden shadow-xl mb-8"
              style={{ aspectRatio: '16/9' }}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?enablejsapi=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-video-id={activeVideo}
              ></iframe>
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlayPause}
                      className="text-white hover:text-blue-400 transition"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-blue-400 transition"
                    >
                      {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </button>
                  </div>
                  <button 
                    onClick={toggleFullscreen}
                    className="text-white hover:text-blue-400 transition"
                  >
                    {isFullscreen ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div 
                  key={video.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <div className="relative" style={{ aspectRatio: '16/9' }}>
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-4">
                        <Play className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center mx-auto">
              <Video className="h-5 w-5 mr-2" />
              Browse All Video Courses
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our simple three-step process makes learning technology skills straightforward and effective.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center md:w-1/3">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block text-blue-500 self-center mt-4">
                    <ChevronRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Learning Section */}
      <section id="personalized" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personalized Learning Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform adapts to your unique learning style and pace, creating a customized educational journey.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {personalizedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} text-white rounded-xl p-6 shadow-lg md:w-1/3`}
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Accessibility Section */}
      <section id="mobile" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl w-64 mx-auto">
                <div className="bg-gray-900 h-6 flex items-center justify-center">
                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>
                <div className="bg-blue-600 p-4 text-white">
                  <div className="text-sm font-medium mb-2">TechStudy Mobile</div>
                  <div className="text-xs opacity-80">Continue learning your Python course</div>
                  <div className="mt-2 bg-blue-700 rounded-lg p-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium">Python Fundamentals</div>
                        <div className="text-xs opacity-70">4/10 lessons completed</div>
                      </div>
                      <div className="bg-blue-500 p-1 rounded">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="text-sm font-medium mb-2">Recommended Next</div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                    <div className="text-xs font-medium">Data Types & Variables</div>
                    <div className="text-xs text-gray-600">15 min lesson</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <div className="text-xs font-medium">Functions in Python</div>
                    <div className="text-xs text-gray-600">20 min lesson</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn Anywhere, Anytime</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access your courses on the go with our fully responsive mobile experience. 
                Continue your learning journey wherever you are, whenever you have time.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <p>Download lessons for offline learning</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <p>Sync progress across all your devices</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <p>Receive notifications for new content and achievements</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our community about how TechStudy has helped them achieve their goals.
            </p>
          </div>
          
          <div className="relative bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="flex mb-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonials[activeTestimonial].quote}"</p>
                <div>
                  <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are building their digital skills with TechStudy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 text-lg">
              Get Started For Free
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Techly</h3>
              <p className="text-sm">Making digital education accessible for everyone, everywhere.</p>
              <div className="mt-4">
                <h4 className="text-white text-sm font-medium mb-2">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 text-white px-3 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-blue-700 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white text-md font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Browse Courses</a></li>
                <li><a href="#" className="hover:text-white">Learning Paths</a></li>
                <li><a href="#" className="hover:text-white">Certification</a></li>
                <li><a href="#" className="hover:text-white">Career Guide</a></li>
                <li><a href="#" className="hover:text-white">Video Library</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">For Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 TechStudy. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.02c.37-.59 1.07-.92 1.77-.92 1.66 0 2.23 1.17 2.23 2.68V19z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}