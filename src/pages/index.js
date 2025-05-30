import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const programs = [
    {
      id: 1,
      title: "Personal Development Mastery",
      price: 299,
      description: "Transform your life with our comprehensive personal development program.",
      features: ["1-on-1 Coaching", "Weekly Workshops", "Personal Growth Plan", "Community Access"]
    },
    {
      id: 2,
      title: "Career Acceleration Program",
      price: 399,
      description: "Accelerate your career growth with expert guidance and proven strategies.",
      features: ["Career Planning", "Leadership Training", "Resume Building", "Interview Prep"]
    },
    {
      id: 3,
      title: "Trauma Healing Journey",
      price: 449,
      description: "Gentle, professional guidance to help you heal and thrive after trauma.",
      features: ["Trauma-Informed Coaching", "Safe Space Healing", "Coping Strategies", "24/7 Support"]
    },
    {
      id: 4,
      title: "Career Transition Mastery",
      price: 349,
      description: "Navigate career changes with confidence and clarity.",
      features: ["Skills Assessment", "Industry Transition Plan", "Network Building", "Job Search Strategy"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "The Personal Development Mastery program transformed my approach to leadership. I've seen remarkable growth in both my professional and personal life.",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Thanks to the Career Acceleration Program, I secured my dream job at a top tech company. The interview prep was invaluable!",
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "The insights and strategies I learned helped me scale my business by 300% in just one year. Absolutely life-changing!",
    }
  ];

  const specializedServices = [
    {
      title: "Trauma Recovery",
      description: "Expert guidance through trauma healing with evidence-based approaches",
      icon: "🌱",
      features: ["PTSD Support", "Anxiety Management", "Emotional Regulation", "Mindfulness Practice"]
    },
    {
      title: "Career Transition",
      description: "Support for navigating major career changes with confidence",
      icon: "🚀",
      features: ["Skills Analysis", "Market Research", "Transition Planning", "Interview Preparation"]
    },
    {
      title: "Self-Discovery",
      description: "Journey to understanding yourself and your true potential",
      icon: "🔍",
      features: ["Personality Assessment", "Values Clarification", "Goal Setting", "Life Purpose"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-20 bg-cover bg-center"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transform Your Life With Expert Coaching
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Your journey to healing, growth, and success starts here
            </motion.p>
            <motion.a 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="#programs" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300 hover:shadow-lg inline-block"
            >
              Explore Programs
            </motion.a>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Specialized Coaching Services</h2>
              <p className="text-gray-600">Expert guidance for your unique journey</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gray-50 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Our Coaching Programs</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <AnimatedSection key={program.id}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-indigo-600">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-3xl font-bold mb-6 text-indigo-600">${program.price}</div>
                    <Link 
                      href={`/products/${program.id}`}
                      className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Discovery Journey Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Your Self-Discovery Journey</h2>
              <p className="text-gray-600">Unlock your true potential through guided self-exploration</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Define Your Purpose</h3>
                <p className="text-gray-600">Discover what truly matters to you</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">💪</div>
                <h3 className="text-xl font-semibold mb-2">Build Resilience</h3>
                <p className="text-gray-600">Develop inner strength and confidence</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Embrace Growth</h3>
                <p className="text-gray-600">Transform challenges into opportunities</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold mb-2">Achieve Goals</h3>
                <p className="text-gray-600">Turn your dreams into reality</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600">Hear from our happy clients who have transformed their lives</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gray-50 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-indigo-100"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-indigo-600">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Start Your Journey Today</h2>
              <p className="text-gray-600">Take the first step towards transformation</p>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200" 
                      rows="4"
                      placeholder="Tell us about your goals and challenges..."
                    ></textarea>
                  </div>
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 hover:shadow-lg font-medium">
                  Schedule Free Consultation
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}