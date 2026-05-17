import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBookReader, FaChalkboardTeacher, FaUserGraduate, FaLaptopCode, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, 
  FaInstagram, FaFacebookF, FaYoutube, FaBars, FaTimes, FaLinkedinIn
} from 'react-icons/fa';
import './App.css';

// CountUp Component
const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // Assuming 60fps
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
  const [activeTab, setActiveTab] = useState('iit-jee');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Rahul Kumar', exam: 'IIT-JEE Adv - AIR 452', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Sneha Singh', exam: 'NEET - Score 685', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Amit Patel', exam: 'CBSE 12th - 98.4%', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Priya Verma', exam: 'GATE - Rank 120', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Vikash Rao', exam: 'IIT-JEE Mains - 99.8 PR', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Anjali Sharma', exam: 'NEET - Score 670', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300&h=300' },
  ];

  const faculty = [
    { name: 'Prakash Sir', qual: 'B.Tech + M.Tech (GATE Qualified)', subject: 'Mathematics Expert', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Sagar Sir', qual: 'M.Sc & B.Ed in Mathematics', subject: 'Science & Maths', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Neha Verma', qual: 'Ph.D in Biology', subject: 'Botany & Zoology', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Ravi Sir', qual: 'CA, M.Com', subject: 'Commerce & Accounts', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300' },
  ];

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
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <FaBookReader className="text-primary" />
            Prakash <span>Institute</span>
          </a>
          
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#courses" className="nav-link">Courses</a></li>
            <li><a href="#achievers" className="nav-link">Achievers</a></li>
            <li><a href="#faculty" className="nav-link">Faculty</a></li>
            <li><a href="#enquiry" className="nav-link">Enquiry</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

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
                Your Path to <span>Success</span> Starts Here
              </motion.h1>
              <motion.p variants={fadeInUp}>
                "Education is not the learning of facts, but the training of the mind to think." Join Prakash Institute for premium coaching in IIT-JEE, NEET, Commerce, and foundation courses.
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
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600" alt="Students studying" />
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
              <h3><CountUp end={10} suffix="+" /></h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3><CountUp end={500} suffix="+" /></h3>
              <p>Selections in Top Exams</p>
            </motion.div>
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3><CountUp end={20} suffix="+" /></h3>
              <p>Expert Faculty Members</p>
            </motion.div>
            <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3><CountUp end={100} suffix="%" /></h3>
              <p>Dedication & Focus</p>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="section-padding bg-pattern">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="section-title">Our Premium Courses</h2>
              <p className="section-subtitle">Comprehensive learning programs designed by experts to help you ace your academic goals.</p>
            </motion.div>
            
            <motion.div 
              className="courses-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {courses.map((course) => (
                <motion.div key={course.id} className="course-card" variants={fadeInUp}>
                  <div className="course-icon">{course.icon}</div>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <ul className="course-features">
                    {course.features.map((feature, idx) => (
                      <li key={idx}><FaBookReader size={12} /> {feature}</li>
                    ))}
                  </ul>
                  <a href="#enquiry" className="btn btn-outline" style={{ width: '100%' }}>Enquire Now</a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Home Tuition Section */}
        <section id="home-tuition" className="section-padding" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: 'Outfit, sans-serif' }}>Looking for Home Tuition?</h2>
              <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.9 }}>
                Get personalized, one-on-one attention from the comfort of your home. We provide expert home tutors for Class 8-12, IIT-JEE, NEET, and Foundation courses across Ranchi.
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
            <h2 className="section-title">Our Top Achievers</h2>
            <p className="section-subtitle">Meet our proud students who turned their dreams into reality with sheer hard work and our expert guidance.</p>
          </div>
          
          <div className="carousel-container">
            {[...achievers, ...achievers].map((achiever, index) => (
              <div key={index} className="achiever-card">
                <img src={achiever.img} alt={achiever.name} className="achiever-img" />
                <div className="achiever-info">
                  <h4>{achiever.name}</h4>
                  <p>{achiever.exam}</p>
                  <span className="exam">Prakash Institute Alumni</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="section-padding bg-pattern">
          <div className="container">
            <h2 className="section-title">Meet Our Expert Faculty</h2>
            <p className="section-subtitle">Learn from the best minds who are passionate about teaching and committed to your success.</p>
            
            <motion.div 
              className="faculty-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {faculty.map((member, index) => (
                <motion.div key={index} className="faculty-card" variants={fadeInUp}>
                  <img src={member.img} alt={member.name} className="faculty-img" />
                  <h4>{member.name}</h4>
                  <p className="qualifications">{member.qual}</p>
                  <p className="subject">{member.subject}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="https://youtube.com/@mathswithprakashsir5191?si=qxJS-bHrnd1jCkBv" target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaYoutube style={{ fontSize: '1.2rem' }} /> Watch Demo Videos of Prakash Sir
              </a>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section id="enquiry" className="enquiry">
          <div className="container enquiry-container">
            <motion.div className="enquiry-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2>Start Your Journey With Us</h2>
              <p>Take the first step towards a bright future. Fill out the form, and our academic counselors will get back to you with all the details regarding fees, batch timings, and course structure.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Address</h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>Jugnu Complex, Near RTC High School, Booti More, Ranchi</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Phone</h4>
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
            <h2 className="section-title">Find Us Here</h2>
            <div className="map-container">
              {/* Replace the src with actual Google Maps embed link for the address */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14652.548487770851!2d85.349692!3d23.418706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3c155555555%3A0x1234567890abcdef!2sBooti%20More%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy">
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
                Empowering students to achieve their academic goals with top-tier coaching, expert faculty, and a proven track record of success in competitive exams.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="https://youtube.com/@mathswithprakashsir5191?si=qxJS-bHrnd1jCkBv" className="social-link"><FaYoutube /></a>
                <a href="#" className="social-link"><FaLinkedinIn /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#courses">Courses offered</a></li>
                <li><a href="#achievers">Our Results</a></li>
                <li><a href="#faculty">Expert Faculty</a></li>
                <li><a href="#enquiry">Admissions</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Courses</h4>
              <ul className="footer-links">
                <li><a href="#">IIT-JEE (Mains & Advanced)</a></li>
                <li><a href="#">NEET (UG) Preparation</a></li>
                <li><a href="#">Foundation (8th - 10th)</a></li>
                <li><a href="#">Class 11th & 12th / AL</a></li>
                <li><a href="#">Commerce & GATE</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>Jugnu Complex, Near RTC High School, Booti More, Ranchi</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+91 79036 31674</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@prakashinstitute.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Prakash Institute. All rights reserved. | Designed for Excellence.</p>
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
