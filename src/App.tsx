import { 
  Phone, 
  MapPin, 
  Star, 
  Zap, 
  Lightbulb, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  PhoneCall,
  Home,
  Hammer,
  Search,
  Settings,
  Car,
  Cpu,
  Flashlight,
  Snowflake,
  Wind,
  Thermometer,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const SERVICES = [
  { title: "AC Repair", description: "Fast, reliable repair services for all air conditioning makes and models to restore your comfort quickly.", icon: Snowflake, category: "Most Popular" },
  { title: "System Installation", description: "Professional installation of energy-efficient HVAC systems tailored to your home's specific needs.", icon: Settings, category: "Essential" },
  { title: "Emergency Service", description: "24/7 rapid response for critical cooling failures when you need help the most in the Texas heat.", icon: Clock, category: "24/7 Service" },
  { title: "Preventative Maintenance", description: "Comprehensive seasonal tune-ups to extend the life of your system and prevent costly breakdowns.", icon: ShieldCheck, category: "Core Service" },
  { title: "Duct Cleaning", description: "Improve your indoor air quality and system efficiency with our thorough duct cleaning services.", icon: Wind, category: "Specialized" },
  { title: "Smart Thermostats", description: "Upgrade to modern, programmable thermostats for better control and energy savings.", icon: Thermometer, category: "Modern" }
];

const REVIEWS = [
  {
    name: "Lindsey Callender",
    location: "Denton, TX",
    date: "7 months ago",
    text: "Allied Solutions installed our indoor attic unit and outdoor unit, a whole new system for our house, in 2020. They were very professional and great to work with through the whole process. They've serviced our A/C over the years and are excellent.",
    stars: 5,
    url: "https://www.google.com/search?q=Allied+Air+Conditioning+Solutions+Reviews"
  },
  {
    name: "Josh Drew Music",
    location: "Denton, TX",
    date: "4 months ago",
    text: "Phil is a top rate person and one of the few knowledgeable enough to offer more than new installs. His in-depth knowledge of the trade has yielded extremely creative cost saving solutions compared to other companies I’ve called for repairs.",
    stars: 5,
    url: "https://www.google.com/search?q=Allied+Air+Conditioning+Solutions+Reviews"
  },
  {
    name: "Bethany Hodgson",
    location: "Denton, TX",
    date: "7 months ago",
    text: "Allied Solutions is the secret gem in town. They may be smaller than some of their known competitors, but they are honest and efficient. Couldn’t speak highly enough of them. They are quick to respond and diagnose issues.",
    stars: 5,
    url: "https://www.google.com/search?q=Allied+Air+Conditioning+Solutions+Reviews"
  },
  {
    name: "Haley Stevens",
    location: "Denton, TX",
    date: "8 months ago",
    text: "I would recommend Allied to everyone! Steve goes above and beyond going on calls after hours and on weekends and holidays. He is very honest and knowledgeable. He takes pride in his work, and he is kind to everyone he meets!",
    stars: 5,
    url: "https://www.google.com/search?q=Allied+Air+Conditioning+Solutions+Reviews"
  },
  {
    name: "Carmen Knotts",
    location: "Denton, TX",
    date: "7 months ago",
    text: "Coleman and his crew are exceptional at what they do. Our A/C was not working. Coleman sent out Ashton and Everado to assess the problem. Very punctual and fixed the issue in a timely manner. We even received a call later to make sure we were still getting cold air.",
    stars: 5,
    url: "https://www.google.com/search?q=Allied+Air+Conditioning+Solutions+Reviews"
  },
  {
    name: "TheLizSmith",
    location: "Denton, TX",
    date: "8 months ago",
    text: "My husband and I love Ever and the whole team. Allied Solutions is the only place we love to work with. Super friendly, knowledgeable, and caring. Highly highly recommend!",
    stars: 5,
    url: "https://www.google.com/search?q=Allied+Air+Conditioning+Solutions+Reviews"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const filteredServices = activeCategory === "All" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-accent p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Snowflake className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>ALLIED AC SOLUTIONS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors ${scrolled ? 'text-slate-600' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <a 
              href="tel:9408081990"
              className="bg-accent hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-4 h-4" />
              (940) 808-1990
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-bold text-slate-900 text-left"
                >
                  {item}
                </button>
              ))}
              <a 
                href="tel:9408081990"
                className="bg-accent text-white p-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold"
              >
                <PhoneCall />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=2000" 
            alt="HVAC background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
              Keep Your Cool <br />
              <span className="text-accent">In Denton.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Allied Air Conditioning Solutions provides expert AC repair, installation, and maintenance in Denton. 
              We specialize in energy-efficient HVAC systems that keep your home comfortable year-round.
            </p>
            <div className="inline-flex items-center gap-3 bg-accent/20 text-accent px-5 py-2 rounded-full text-sm font-bold mb-10 border border-accent/30 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5" />
              Licensed & Insured in Denton, TX
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-accent hover:bg-sky-600 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-accent/20 group"
              >
                View Our Services
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:9408081990"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all"
              >
                <Phone className="w-6 h-6" />
                (940) 808-1990
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-accent mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent" />
                  ))}
                </div>
                <span className="text-white font-bold text-lg">5.0 Rating</span>
                <span className="text-slate-400 text-sm">Verified Customer Review</span>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">24/7</span>
                <span className="text-slate-400 text-sm">Emergency Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Professional HVAC Services</h3>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We focus on the most critical air conditioning and heating needs for Denton homeowners, providing expert solutions with upfront pricing and reliable service.
            </p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-accent/20 transition-all flex flex-col h-full group"
                >
                  <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="pt-6 border-t border-slate-50 mt-auto flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:flex-[0.8] relative w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://trusteyman.com/wp-content/uploads/2020/06/AdobeStock_206545192-scaled.jpeg" 
                  alt="Allied AC Solutions expert at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 sm:p-8 rounded-[1.5rem] shadow-2xl z-20 hidden sm:block">
                <div className="text-3xl sm:text-4xl font-bold mb-1">Denton</div>
                <div className="text-xs sm:text-sm font-bold opacity-90 uppercase tracking-[0.2em]">Local Experts</div>
              </div>
              <div className="absolute -top-12 -left-12 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="lg:flex-[1.2]">
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">About Allied AC Solutions</h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Dedicated to Your Year-Round Comfort</h3>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                Located at 1210 Duncan St Building 5 Suite 100 in Denton, TX, Allied Air Conditioning Solutions has built a reputation for reliability, 
                transparency, and exceptional HVAC expertise. We specialize in residential cooling and heating solutions, 
                ensuring your home remains a sanctuary regardless of the Texas weather.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Licensed and insured HVAC contractors",
                  "Upfront, honest pricing",
                  "Energy-efficient system specialists",
                  "24/7 emergency repair services"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-6 h-6" />
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn more about our process <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white/80 font-bold uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">What Our Customers Say</h3>
          </div>

          <div className="relative max-w-4xl mx-auto min-h-[450px] sm:min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] w-full shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 sm:w-5 sm:h-5 ${j < REVIEWS[currentReview].stars ? 'fill-accent text-accent' : 'text-white/30'}`} />
                    ))}
                  </div>
                  <span className="text-white/40 text-xs sm:text-sm font-medium">{REVIEWS[currentReview].date}</span>
                </div>
                
                <p className="text-white text-lg sm:text-xl md:text-2xl italic leading-relaxed mb-8 sm:mb-10">
                  "{REVIEWS[currentReview].text}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-primary text-lg sm:text-xl shadow-lg">
                      {REVIEWS[currentReview].name[0]}
                    </div>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">{REVIEWS[currentReview].name}</div>
                      <div className="text-white/60 text-xs sm:text-sm">{REVIEWS[currentReview].location}</div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.google.com/search?sca_esv=761836ba98f04a06&sxsrf=ANbL-n7PHZ7OWHSJMzwM-kF_7Hi2_pCMFQ:1775605615339&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWWTlaPPHcbXU2PDBHSzhPNopx9dMDaAvBZb9u__TO9YE5l51T5xGBBTgv6ttWrHyRfNo-C-HdQ3kFuadzh7AaBHpVBbicFqOAhqXva9e7CJOQcyDH8IXjEb1FL7qfrC9YdRUkbk%3D&q=Allied+Air+Conditioning+Solutions+Reviews&sa=X&ved=2ahUKEwjbp9qv9tyTAxVEkyYFHSRqFjsQ0bkNegQIKxAF&biw=767&bih=730&dpr=1.25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all border border-white/10"
                  >
                    <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-4 brightness-0 invert" />
                    View on Google
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Dots */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              {REVIEWS.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentReview(i)}
                  className={`w-3 h-3 rounded-full transition-all ${currentReview === i ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-xl">
              <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-6" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-xl">4.9/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/30 text-yellow-400/30'}`} />
                  ))}
                </div>
                <span className="text-slate-500">(10 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20">
              <h2 className="text-accent font-bold uppercase tracking-widest mb-3">Contact Us</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get a Free Quote Today</h3>
              
              <div className="space-y-6 sm:y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl">
                    <MapPin className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg">Our Location</div>
                    <p className="text-slate-400 text-sm sm:text-base">1210 Duncan St Building 5 Suite 100, Denton, TX 76205, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl">
                    <Phone className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg">Call Us</div>
                    <a href="tel:9408081990" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">(940) 808-1990</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl">
                    <Clock className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg">Business Hours</div>
                    <p className="text-slate-400 text-sm sm:text-base">Open 24 Hours / 7 Days a Week<br />Emergency Service Available Anytime</p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white font-medium mb-4 text-sm sm:text-base">Need immediate help?</p>
                <a 
                  href="tel:9408081990"
                  className="bg-accent hover:bg-sky-600 text-white w-full py-3.5 sm:py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 transition-all text-sm sm:text-base"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now: (940) 808-1990
                </a>
              </div>
            </div>

            <div className="flex-1 bg-slate-800 min-h-[450px] md:min-h-full relative overflow-hidden rounded-b-[2rem] md:rounded-r-[3rem] md:rounded-bl-none shadow-inner">
              {/* The Map Iframe - Fixed with absolute positioning to fill container */}
              <iframe
                src="https://maps.google.com/maps?q=1210+Duncan+St+Building+5+Suite+100,+Denton,+TX+76205&output=embed"
                className="absolute inset-0 w-full h-full border-0 z-10 grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Allied AC Solutions Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-md">
                <Snowflake className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">ALLIED AC SOLUTIONS</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-accent transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Contact</button>
            </div>

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Allied Air Conditioning Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
