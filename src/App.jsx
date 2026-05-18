import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBookReader, FaChalkboardTeacher, FaUserGraduate, FaLaptopCode, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, 
  FaInstagram, FaFacebookF, FaYoutube, FaBars, FaTimes, FaLinkedinIn,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaStar, FaMapSigns
} from 'react-icons/fa';
import './App.css';

// CountUp Component
const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentPoster, setCurrentPoster] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prev) => (prev + 1) % posters.length);
    }, 4500); // changes every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const courses = [
    {
      id: 'foundation',
      title: 'Foundation Courses',
      icon: <FaBookReader />,
      desc: 'Building a strong base for future competitive exams from early classes.',
      features: ['Concept Clarity', 'Olympiad Prep', 'Regular Assessments']
    },
    {
      id: 'boards',
      title: 'Class 8-12 & AL Coaching',
      icon: <FaChalkboardTeacher />,
      desc: 'Comprehensive syllabus coverage to excel in board examinations.',
      features: ['NCERT Focus', 'Doubt Sessions', 'Mock Tests']
    },
    {
      id: 'iit-jee',
      title: 'IIT-JEE & NEET Prep',
      icon: <FaLaptopCode />,
      desc: 'Intensive coaching with expert strategies for top engineering & medical entrance.',
      features: ['Expert Faculty', 'Advanced Study Material', 'Test Series']
    },
    {
      id: 'commerce',
      title: 'Commerce & GATE',
      icon: <FaUserGraduate />,
      desc: 'Specialized batches for Commerce students and GATE aspirants.',
      features: ['Industry Experts', 'Practical Approach', 'Career Guidance']
    }
  ];

  const achievers = [
    { name: 'Manjeet Deep', exam: 'Board Exam - 93.4%', img: '/assets/student_1.png' },
    { name: 'Nitin Ranjan', exam: 'Board Exam - 92.0%', img: '/assets/student_2.png' },
    { name: 'Rishu Kumar', exam: 'Board Exam - 92.0%', img: '/assets/student_3.png' },
    { name: 'Ayush Gupta', exam: 'Board Exam - 92.0%', img: '/assets/student_4.png' },
    { name: 'Ranjeet Baitha', exam: 'Board Exam - 89.0%', img: '/assets/student_5.png' },
    { name: 'Ashish Ranjan', exam: 'Board Exam - 88.0%', img: '/assets/student_6.png' },
    { name: 'Sonu Sahu', exam: 'Board Exam - 87.0%', img: '/assets/student_7.png' },
    { name: 'Manish Mahto', exam: 'Board Exam - 85.0%', img: '/assets/student_8.png' }
  ];

  const faculty = [
    { name: 'Prakash Sir', qual: 'B.Tech / M.Tech & GATE Qualified', subject: 'Founder & Senior Mathematics Specialist', img: '/assets/prakash_sir.png' },
    { name: 'Sagar Sir', qual: 'M.Sc in Mathematics & B.Ed', subject: 'Co-Founder & Science / Mathematics Faculty', img: '/assets/sagar_sir.png' },
    { name: 'Dr. A. K. Sen', qual: 'Ph.D. in Physics (IIT Kharagpur)', subject: 'Senior Physics Expert (JEE & NEET)', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Prof. Rajesh Mishra', qual: 'M.Sc. in Chemistry (IIT Delhi), CSIR NET', subject: 'Chemistry Specialist (JEE & Board)', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Anjali Mehta', qual: 'Ph.D. in Botany & Zoology', subject: 'Biology Expert (NEET Specialist)', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Sanjay Verma', qual: 'MCA, B.Ed', subject: 'Computer Science (C/C++ & IT Batches)', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Ramanuj Prasad', qual: 'CA, M.Com', subject: 'Senior Faculty for Commerce & Accounts', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Shruti Ojha', qual: 'MA in English Literature', subject: 'Spoken English & Communication Coach', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300' }
  ];

  const posters = [
    {
      src: "/assets/poster_achievers.jpg",
      title: "Our Star Achievers & Top Rankers",
      subtitle: "Celebrating outstanding scores in board exams and competitive selections. Expert guidance by Prakash Sir and Sagar Sir.",
      tag: "Achievers Batch"
    },
    {
      src: "/assets/poster_courses.jpg",
      title: "IIT-JEE / NEET / Foundation & Commerce Batches",
      subtitle: "Comprehensive curriculum coverage for Class 6th to 12th, Olympiad Prep, Spoken English, and C/C++ classes.",
      tag: "All Courses"
    },
    {
      src: "/assets/poster_hometuition.jpg",
      title: "Specialized Home Tuition Services in Ranchi",
      subtitle: "Personalized home tutoring for Class 11-12 Maths (Board & JEE) and Class 9-10 Maths & Science. 10+ years expert experience.",
      tag: "Home Tuition"
    },
    {
      src: "/assets/celebration_1.png",
      title: "Saraswati Puja Celebrations 2026",
      subtitle: "Prakash Sir, Sagar Sir, and faculty members celebrating Vasant Panchami with divine prayers for our students' success.",
      tag: "Events & Culture"
    },
    {
      src: "/assets/celebration_2.png",
      title: "Worshipping the Goddess of Learning",
      subtitle: "Prakash Institute students and teachers gathered together to seek the blessings of Goddess Saraswati on this auspicious day.",
      tag: "Puja Celebrations"
    }
  ];

  const faqs = [
    {
      q: "Which is the best coaching near RTC School, Ranchi?",
      a: "Prakash Institute is widely recognized as the top coaching institute near RTC School, Booty More, Ranchi. We provide expert maths tuition, science coaching, and comprehensive preparation for JEE, NEET, and board exams."
    },
    {
      q: "Do you provide maths coaching in Bariatu and Morabadi?",
      a: "Yes, our coaching center is easily accessible from Bariatu, Morabadi, Bargain, and Kanke Road. We provide the best maths tuition in Ranchi with dedicated batches for Class 10, 11, and 12."
    },
    {
      q: "Are there home tuition services available in Ranchi?",
      a: "Yes, Prakash Institute also provides excellent home tuition services across Ranchi for students who need personalized one-on-one attention in subjects like physics, chemistry, and maths."
    },
    {
      q: "What makes Prakash Institute the top coaching institute in Ranchi?",
      a: "We offer highly experienced faculty, including Prakash Sir (Mathematics Expert), comprehensive study materials, regular mock tests, and a track record of producing top rankers in JEE, NEET, and board exams."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Prakash Institute",
    "description": "Top coaching institute in Ranchi providing expert tuition for IIT-JEE, NEET, Foundation, and Board exams. Located near RTC High School, Booty More, Ranchi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jugnu Complex, Near RTC High School, Booty More",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834009",
      "addressCountry": "IN"
    },
    "telephone": "+91 79036 31674",
    "email": "prakash96089kumar@gmail.com",
    "url": "https://www.prakashinstituteranchi.online",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.4028075,
      "longitude": 85.3780167
    },
    "priceRange": "₹₹",
    "areaServed": [
      "RTC School area",
      "Bariatu",
      "Booty More",
      "Bargain",
      "Bargawan",
      "Morabadi",
      "Kanke Road",
      "Ranchi"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.prakashinstituteranchi.online/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "IIT-JEE & NEET Coaching",
      "item": "https://www.prakashinstituteranchi.online/#courses"
    }]
  };

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const course = formData.get('course');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const text = `Hello Prakash Sir,%0A%0AI want to enquire about coaching.%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Course Interested:* ${course}%0A*Message:* ${message}`;
    window.open(`https://wa.me/917903631674?text=${text}`, '_blank');
  };

  return (
    <div className="app-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <FaBookReader className="text-primary" />
            Prakash <span>Institute</span>
          </a>
          
          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#courses" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Courses</a></li>
              <li><a href="#achievers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Achievers</a></li>
              <li><a href="#gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Notice Board</a></li>
              <li><a href="#faculty" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Faculty</a></li>
              <li><a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
              <li><a href="#enquiry" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Enquiry</a></li>
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero bg-pattern">
          <div className="container hero-content">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp}>
                Best Coaching Institute Near <span>RTC School, Ranchi</span>
              </motion.h1>
              <motion.p variants={fadeInUp}>
                Join Prakash Institute for premium maths tuition, science coaching, and comprehensive preparation for IIT-JEE, NEET, and Board Exams. Proudly serving Booty More, Bariatu, Morabadi, and nearby areas.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeInUp} style={{ flexWrap: 'wrap' }}>
                <a href="#courses" className="btn btn-primary">Explore Courses</a>
                <a href="#enquiry" className="btn btn-outline">Book a Demo</a>
                <a href="https://youtube.com/@mathswithprakashsir5191?si=qxJS-bHrnd1jCkBv" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#dc2626', borderColor: '#dc2626' }}>
                  <FaYoutube /> Watch Demo Videos
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600" alt="Top Coaching Institute Ranchi Students" loading="lazy" />
              <div className="floating-badge">
                <FaUserGraduate size={30} color="var(--accent-orange)" />
                <div>
                  <strong>500+</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Successful Students</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="container stats-grid">
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}><CountUp end={10} suffix="+" /></h2>
              <p>Years of Excellence in Ranchi</p>
            </motion.div>
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}><CountUp end={500} suffix="+" /></h2>
              <p>Selections in JEE/NEET</p>
            </motion.div>
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}><CountUp end={20} suffix="+" /></h2>
              <p>Expert Tutors</p>
            </motion.div>
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}><CountUp end={100} suffix="%" /></h2>
              <p>Commitment to Results</p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="section-padding bg-pattern">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="section-title">Why Choose Prakash Institute?</h2>
              <p className="section-subtitle">We are rated as the top coaching center in Booty More and Bariatu because of our proven teaching methodology.</p>
            </motion.div>
            
            <div className="why-choose-us">
              <motion.div className="feature-box" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <FaChalkboardTeacher className="feature-icon" />
                <h3>Expert Faculty in Ranchi</h3>
                <p>Learn from the top maths teacher in Ranchi and experienced science educators dedicated to your child's success in CBSE and JAC boards.</p>
              </motion.div>
              <motion.div className="feature-box" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <FaStar className="feature-icon" />
                <h3>Proven Track Record</h3>
                <p>Consistently producing top rankers in JEE, NEET, and scoring highest percentages in Class 10 and 12 board exams year after year.</p>
              </motion.div>
              <motion.div className="feature-box" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <FaBookReader className="feature-icon" />
                <h3>Comprehensive Study Material</h3>
                <p>Access well-structured, modern notes and continuous mock tests to ensure you are fully prepared for your targeted examinations.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="section-padding" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="section-title">Top Coaching Courses in Ranchi</h2>
              <p className="section-subtitle">Affordable and comprehensive tuition classes near you for science, commerce, and competitive exams.</p>
            </motion.div>
            
            <motion.div 
              className="courses-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {courses.map((course) => (
                <article key={course.id} className="course-card">
                  <div className="course-icon">{course.icon}</div>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <ul className="course-features">
                    {course.features.map((feature, idx) => (
                      <li key={idx}><FaCheckCircle size={12} /> {feature}</li>
                    ))}
                  </ul>
                  <a href="#enquiry" className="btn btn-outline" style={{ width: '100%' }}>Enquire Now</a>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Home Tuition Section */}
        <section id="home-tuition" className="section-padding" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: 'Outfit, sans-serif' }}>Best Home Tuition in Ranchi</h2>
              <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.9 }}>
                Looking for personalized attention? We provide the best home tuition in Ranchi for Class 10 maths, Class 11 science, and specialized JEE/NEET coaching right at your doorstep.
              </p>
              <a href="#enquiry" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-blue)', boxShadow: 'none' }}>
                Request a Home Tutor
              </a>
            </motion.div>
          </div>
        </section>

        {/* Achievers Section */}
        <section id="achievers" className="achievers">
          <div className="container">
            <h2 className="section-title">Outstanding Results & Student Achievers</h2>
            <p className="section-subtitle">Meet our proud students from the Bariatu and Booty More areas who turned their dreams into reality with sheer hard work and our expert guidance.</p>
          </div>
          
          <div className="carousel-container">
            {[...achievers, ...achievers].map((achiever, index) => (
              <article key={index} className="achiever-card">
                <img src={achiever.img} alt={`Successful student ${achiever.name} from Prakash Institute Ranchi`} className="achiever-img" loading="lazy" />
                <div className="achiever-info">
                  <h3>{achiever.name}</h3>
                  <p>{achiever.exam}</p>
                  <span className="exam">Prakash Institute Alumni</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery/Notice Board Section */}
        <section id="gallery" className="section-padding bg-pattern" style={{ backgroundColor: '#f7fafc' }}>
          <div className="container">
            <h2 className="section-title">Notice Board & Announcements</h2>
            <p className="section-subtitle">Explore our latest course announcements, star achiever details, and tuition programs in Booty More, Ranchi.</p>

            {/* Part 1: Auto-Rotating Poster Slideshow */}
            <div className="poster-slideshow-container" style={{ margin: '3rem auto', maxWidth: '900px', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', background: '#1e293b', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '32%', minHeight: '260px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPoster}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <img 
                      src={posters[currentPoster].src} 
                      alt={posters[currentPoster].title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer', background: '#1a202c' }}
                      onClick={() => setLightboxImage(posters[currentPoster].src)}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls Overlay */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ color: 'white', maxWidth: '75%' }}>
                  <span style={{ display: 'inline-block', backgroundColor: 'var(--accent-orange)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {posters[currentPoster].tag}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f7fafc', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                    {posters[currentPoster].title}
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#cbd5e0', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }} className="slider-subtitle">
                    {posters[currentPoster].subtitle}
                  </p>
                </div>

                {/* Indicator Dots */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  {posters.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPoster(idx)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        background: idx === currentPoster ? 'var(--accent-orange)' : 'rgba(255,255,255,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="section-padding bg-pattern">
          <div className="container">
            <h2 className="section-title">Top Maths & Science Teachers in Ranchi</h2>
            <p className="section-subtitle">Learn from the best minds who are passionate about teaching and committed to your success.</p>
            
            <motion.div 
              className="faculty-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {faculty.map((member, index) => {
                const isRealImage = member.img.startsWith('/assets/');
                const getInitials = (name) => {
                  const cleanName = name.replace(/(Dr\.|Prof\.|Sir)/g, '').trim();
                  const parts = cleanName.split(' ');
                  const initials = parts.map(p => p ? p[0] : '').join('');
                  return initials.slice(0, 2).toUpperCase() || name[0].toUpperCase();
                };
                const getFacultyBg = (name) => {
                  if (name.includes("Sen")) return "linear-gradient(135deg, #6366f1, #3b82f6)"; // Physics
                  if (name.includes("Mishra")) return "linear-gradient(135deg, #4f46e5, #06b6d4)"; // Chemistry
                  if (name.includes("Mehta")) return "linear-gradient(135deg, #10b981, #3b82f6)"; // Biology
                  if (name.includes("Verma")) return "linear-gradient(135deg, #475569, #1e293b)"; // CS
                  if (name.includes("Prasad")) return "linear-gradient(135deg, #f59e0b, #d97706)"; // Commerce
                  if (name.includes("Ojha")) return "linear-gradient(135deg, #ec4899, #f43f5e)"; // English
                  return "linear-gradient(135deg, #1c3b7b, #0b1c3c)"; // fallback
                };

                return (
                  <motion.article key={index} className="faculty-card" variants={fadeInUp}>
                    {isRealImage ? (
                      <img src={member.img} alt={`${member.name} - ${member.subject}`} className="faculty-img" loading="lazy" />
                    ) : (
                      <div className="faculty-avatar-placeholder" style={{ background: getFacultyBg(member.name) }}>
                        {getInitials(member.name)}
                      </div>
                    )}
                    <h3>{member.name}</h3>
                    <p className="qualifications">{member.qual}</p>
                    <p className="subject">{member.subject}</p>
                  </motion.article>
                );
              })}
            </motion.div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="https://youtube.com/@mathswithprakashsir5191?si=qxJS-bHrnd1jCkBv" target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaYoutube style={{ fontSize: '1.2rem' }} /> Watch Demo Videos of Prakash Sir
              </a>
            </div>
          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '2rem' }}
              onClick={() => setLightboxImage(null)}
            >
              <button 
                onClick={() => setLightboxImage(null)} 
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', zIndex: 1010 }}
              >
                &times;
              </button>
              
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                src={lightboxImage} 
                alt="Enlarged gallery view of Prakash Institute Ranchi" 
                style={{ maxWidth: '90%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Locations SEO Section */}
        <section className="section-padding seo-block">
          <div className="container">
            <div className="seo-content text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FaMapSigns size={40} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
              <h2>Coaching Classes Near Me</h2>
              <p>Conveniently located near RTC School, Prakash Institute proudly serves students from all major surrounding localities. Whether you are searching for tuition classes in Bariatu, coaching in Bargain, or science coaching near Morabadi, we are easily accessible and recognized as the top choice for parents and students in the region.</p>
              
              <div className="seo-tags" style={{ justifyContent: 'center' }}>
                <span className="seo-tag">Tuition near Booty More</span>
                <span className="seo-tag">Maths coaching in Bariatu</span>
                <span className="seo-tag">Coaching near RTC School</span>
                <span className="seo-tag">Institute in Bargawan</span>
                <span className="seo-tag">Coaching near Kanke Road</span>
                <span className="seo-tag">Science coaching Morabadi</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding faq-section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common queries about our coaching institute, batches, and locations.</p>
            
            <div style={{ marginTop: '2rem' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question" onClick={() => toggleFaq(index)}>
                    {faq.q}
                    {openFaq === index ? <FaChevronUp color="var(--accent-orange)" /> : <FaChevronDown color="var(--primary-blue)" />}
                  </h3>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="faq-answer">
                          <p style={{ margin: 0 }}>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section id="enquiry" className="enquiry">
          <div className="container enquiry-container">
            <motion.div className="enquiry-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2>Join the Best Coaching Institute Near You</h2>
              <p>Take the first step towards a bright future. Fill out the form, and our academic counselors will get back to you with all the details regarding fees, batch timings, and course structure.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'white' }}>Address</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>Jugnu Complex, Near RTC High School, Booty More, Ranchi</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'white' }}>Phone</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>+91 79036 31674</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="enquiry-form-wrapper" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <form className="enquiry-form" onSubmit={handleWhatsAppEnquiry}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)', fontSize: '1.5rem' }}>Enquiry Form</h3>
                
                <div className="form-group">
                  <label>Student Name</label>
                  <input type="text" name="name" className="form-control" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label>WhatsApp Number</label>
                  <input type="tel" name="phone" className="form-control" placeholder="Enter your 10-digit number" required />
                </div>
                
                <div className="form-group">
                  <label>Interested Course</label>
                  <select name="course" className="form-control" required>
                    <option value="">Select a Course</option>
                    <option value="IIT-JEE">IIT-JEE Preparation</option>
                    <option value="NEET">NEET Preparation</option>
                    <option value="Foundation">Foundation (Class 8-10)</option>
                    <option value="Boards">Class 11-12 Boards / AL Coaching</option>
                    <option value="HomeTuition">Home Tuition</option>
                    <option value="Commerce">Commerce</option>
                    <option value="GATE">GATE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message / Requirements (Optional)</label>
                  <textarea name="message" className="form-control" rows="3" placeholder="Any specific requirements or fee details query?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Send Enquiry via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding pb-0">
          <div className="container">
            <h2 className="section-title">Our Location - Booty More, Ranchi</h2>
            <div className="map-container">
              <iframe 
                title="Prakash Institute Location Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5965717010554!2d85.3780167!3d23.402807499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3bbd5a07adb%3A0xe7fcfff8676bf00a!2sPrakash%20Institute!5e0!3m2!1sen!2sin!4v1779091589377!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                Prakash <span>Institute</span>
              </div>
              <p className="footer-desc">
                The top-rated coaching institute near RTC School, Ranchi, empowering students to achieve their academic goals with expert faculty and proven success.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com/@mathswithprakashsir5191?si=qxJS-bHrnd1jCkBv" className="social-link" aria-label="YouTube"><FaYoutube /></a>
                <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#why-choose-us">Why Choose Us</a></li>
                <li><a href="#courses">Courses offered</a></li>
                <li><a href="#achievers">Our Results</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#enquiry">Admissions</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'white' }}>Courses</h3>
              <ul className="footer-links">
                <li><a href="#">IIT-JEE Coaching</a></li>
                <li><a href="#">NEET (UG) Preparation</a></li>
                <li><a href="#">Foundation (8th - 10th)</a></li>
                <li><a href="#">Class 11th & 12th / AL</a></li>
                <li><a href="#">Home Tuition Ranchi</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'white' }}>Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>Jugnu Complex, Near RTC High School, Booty More, Ranchi</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+91 79036 31674</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>prakash96089kumar@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <p>&copy; {new Date().getFullYear()} Prakash Institute. All rights reserved. | Best Coaching Institute in Ranchi.</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.85, color: '#a0aec0', margin: '0.5rem 0 0 0' }}>
              Built by <a href="https://www.linkedin.com/company/webbybuilder/" target="_blank" rel="noopener noreferrer" style={{ color: '#63b3ed', textDecoration: 'none', fontWeight: 'bold' }}>WebbyBuilder</a> | Developer: <span style={{ color: '#e2e8f0', fontWeight: '600' }}>Aman Raj</span> (<a href="mailto:alexaman000r@gmail.com" style={{ color: '#63b3ed', textDecoration: 'none' }}>alexaman000r@gmail.com</a>)
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917903631674?text=Hello%20Prakash%20Sir,%20I%20want%20to%20know%20more%20about%20your%20coaching%20classes." 
        className="floating-wa"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
