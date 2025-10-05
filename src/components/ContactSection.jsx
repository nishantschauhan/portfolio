import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import './ContactSection.css'; // CSS file import

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to bring your ideas to life? Let's discuss your next project</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always excited to work on new projects and collaborate with amazing people.
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon email"><Mail /></div>
                <div>
                  <p className="label">Email</p>
                  <p className="value">alex.johnson@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon phone"><Phone /></div>
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon location"><MapPin /></div>
                <div>
                  <p className="label">Location</p>
                  <p className="value">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <h4>Available for:</h4>
              <ul>
                <li><span className="dot green"></span> Full-stack development projects</li>
                <li><span className="dot blue"></span> UI/UX design consultation</li>
                <li><span className="dot purple"></span> Technical mentoring</li>
                <li><span className="dot orange"></span> Freelance opportunities</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="grid-two">
                <div>
                  <label>Name</label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Subject</label>
                <Input
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  required
                />
              </div>

              <div>
                <label>Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitted} className="submit-btn">
                {isSubmitted ? <><CheckCircle /> Message Sent!</> : <><Send /> Send Message</>}
              </Button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2024 Alex Johnson. Built with passion and modern technologies.</p>
        </div>
      </div>
    </section>
  );
}
