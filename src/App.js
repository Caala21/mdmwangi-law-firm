import React, { useState } from 'react';
import { Scale, FileText, Home, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';

export default function LawFirmWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-amber-500" />
              <div>
                <h1 className="text-xl font-bold">M.D MWANGI</h1>
                <p className="text-xs text-amber-500">& Company Advocates</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-amber-500 transition ${
                    activeSection === section ? 'text-amber-500' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-800"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Excellence in Legal Representation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Providing professional legal services in criminal law, civil litigation, and conveyancing with integrity and dedication.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <Scale className="h-48 w-48 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Firm</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Committed to Justice</h3>
              <p className="text-gray-700 mb-4">
                M.D Mwangi & Company Advocates is a premier law firm dedicated to providing exceptional legal services to individuals and businesses. Our team brings years of experience and a deep commitment to achieving the best outcomes for our clients.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that legal matters can be complex and stressful. That's why we take a client-centered approach, ensuring clear communication and personalized attention throughout every case.
              </p>
              <p className="text-gray-700">
                Our reputation is built on integrity, professionalism, and results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Scale className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Experienced Team</h4>
                    <p className="text-gray-600">Skilled advocates with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Client-Focused</h4>
                    <p className="text-gray-600">Your interests are our top priority</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Home className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Trusted Reputation</h4>
                    <p className="text-gray-600">Built on integrity and excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Criminal Law */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Scale className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Criminal Law</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive defense representation for criminal charges, from investigation through trial and appeals.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Criminal defense & representation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bail applications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Appeals & reviews</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Plea negotiations</span>
                </li>
              </ul>
            </div>

            {/* Civil Litigation */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Civil Litigation</h3>
              <p className="text-gray-300 mb-4">
                Expert representation in civil disputes, protecting your rights and interests in court.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Contract disputes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Property disputes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Employment matters</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Debt recovery</span>
                </li>
              </ul>
            </div>

            {/* Conveyancing */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conveyancing</h3>
              <p className="text-gray-300 mb-4">
                Professional handling of property transactions, ensuring smooth and secure transfers.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Property sales & purchases</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Title transfers</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Lease agreements</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Property registration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Schedule a consultation with our experienced team</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Office Address</h4>
                    <p className="text-gray-300">Nyeri, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+254 [Your Phone Number]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">info@mdmwangiadvocates.co.ke</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-amber-500 text-black rounded-lg">
                <h4 className="font-bold mb-2">Office Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+254"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your legal matter..."
                  ></textarea>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for your inquiry. We will contact you shortly.');
                  }}
                  className="w-full bg-amber-500 text-black py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="h-8 w-8 text-amber-500" />
              <div>
                <h3 className="text-lg font-bold">M.D MWANGI</h3>
                <p className="text-xs text-amber-500">& Company Advocates</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 M.D Mwangi & Company Advocates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}