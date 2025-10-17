'use client';

import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, User, Maximize2, ExternalLink } from "lucide-react";
import { Button } from "@/components/atoms";
import InputField from "../components/molecules/form/input/InputField";
import TextArea from "../components/molecules/form/input/TextArea";
import { toast } from "sonner";
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleFullscreen = () => {
    if (mapContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        mapContainerRef.current.requestFullscreen().catch((err) => {
          toast.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    }
  };

  const validateField = (field: keyof ContactFormData, value: string) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "phone":
        if (value.trim() && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/i.test(value)) {
          error = "Invalid phone number";
        }
        break;
      case "subject":
        if (!value.trim()) {
          error = "Subject is required";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.phone.trim() && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/i.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Thank you for your inquiry! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="w-full py-8 md:py-10 lg:px-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="mb-2 text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Get in touch with our team. We're here to help you find your perfect property in UAE.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">Get In Touch</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Whether you're looking to buy, sell, or invest in Dubai real estate, our expert team is ready to assist you. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold">Our Office</h3>
                  <p className="text-muted-foreground text-sm">
                    Office 2304 Prime Tower, Burj Khalifa Blvd<br />
                    Business Bay, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold">Phone</h3>
                  <a 
                    href="tel:+97145890333" 
                    className="text-muted-foreground text-sm hover:text-accent transition-colors cursor-pointer"
                  >
                    +971 4 589 0333
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold">Email</h3>
                  <a 
                    href="mailto:info@rhkproperties.com" 
                    className="text-muted-foreground text-sm hover:text-accent transition-colors cursor-pointer"
                  >
                    info@rhkproperties.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6 bg-secondary rounded-xl p-5 dark:bg-gray-800  border border-gray-200 dark:border-gray-700">
              <h3 className="mb-3 text-base font-semibold">Office Hours</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday - Thursday</span>
                  <span className="font-medium">9:00 - 18:00 (UAE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Friday - Saturday</span>
                  <span className="font-medium">By appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-4 md:p-5 dark:bg-gray-800  border border-gray-200 dark:border-gray-700">
            <h2 className="mb-4 md:mb-5 text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">Send us a Message</h2>
            <p className="text-xs text-muted-foreground mb-4">
              We'll use your details only to respond to your inquiry. Tell us your budget, area, and timing, and we'll tailor recommendations to fit.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <InputField
                label="Full Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) validateField("name", e.target.value);
                }}
                onBlur={(e) => validateField("name", e.target.value)}
                error={!!errors.name}
                hint={errors.name}
                required
                maxLength={50}
                leftIcon={<User className="h-5 w-5 text-accent" />}
              />

              <InputField
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) validateField("email", e.target.value);
                }}
                onBlur={(e) => validateField("email", e.target.value)}
                error={!!errors.email}
                hint={errors.email}
                required
                leftIcon={<Mail className="h-5 w-5 text-accent" />}
              />

              <InputField
                label="Phone Number"
                type="tel"
                placeholder="+971 XX XXX XXXX"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) validateField("phone", e.target.value);
                }}
                onBlur={(e) => validateField("phone", e.target.value)}
                error={!!errors.phone}
                hint={errors.phone}
                leftIcon={<Phone className="h-5 w-5 text-accent" />}
              />

              <InputField
                label="Subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (errors.subject) validateField("subject", e.target.value);
                }}
                onBlur={(e) => validateField("subject", e.target.value)}
                error={!!errors.subject}
                hint={errors.subject}
                required
                maxLength={100}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span className="text-error-500 ml-1">*</span>
                </label>
                <TextArea
                  placeholder="Tell us more about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(value) => {
                    setFormData({ ...formData, message: value });
                    if (errors.message) validateField("message", value);
                  }}
                  onBlur={(value) => validateField("message", value)}
                  error={!!errors.message}
                  hint={errors.message}
                  maxLength={1500}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                variant="primary"
                disabled={isSubmitting}
                loading={isSubmitting}
                loadingText="Sending..."
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </div>
        </div>
        {/* Google Map */}
        <div className="mt-12 md:mt-16">
          <div 
            ref={mapContainerRef}
            className="fullscreen-map relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg group"
          >
            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 p-2.5 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group-hover:scale-105 transform duration-200"
              title="Toggle Fullscreen"
              aria-label="Toggle fullscreen map view"
              type="button"
            >
              <Maximize2 className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4276584425896!2d55.269144!3d25.186722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d47c2fb8b3%3A0x42b25c8e4b3e4f1c!2sPrime%20Tower%2C%20Business%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RHK Properties LLC Office Location - Prime Tower, Business Bay, Dubai"
              className="map-iframe w-full h-64 md:h-80 lg:h-96 transition-all duration-300"
            />
          </div>
          
          {/* Map Actions */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.google.com/maps/dir//Prime+Tower,+Business+Bay,+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to RHK Properties office in Prime Tower, Business Bay, Dubai"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
            <span className="hidden sm:inline text-gray-400" aria-hidden="true">•</span>
            <a
              href="https://www.google.com/maps/place/Prime+Tower,+Business+Bay,+Dubai/@25.186722,55.269144,17z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View larger map of RHK Properties office location"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              View Larger Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
