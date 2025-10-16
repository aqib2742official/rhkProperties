'use client';

import { useState } from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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

    console.log("Form submitted:", formData);
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
    <div className="w-full py-8 md:py-10 lg:px-20 overflow-x-hidden">
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
                  <p className="text-muted-foreground text-sm">
                    +971 4 589 0333
                  </p>
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
                  <p className="text-muted-foreground text-sm">
                    info@rhkproperties.com
                  </p>
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
                hint={errors.name}
                required
                leftIcon={<span className="text-lg">
                  <User className="h-5 w-5 text-accent" />
                </span>}
              />

              <InputField
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                leftIcon={<Phone className="h-5 w-5 text-accent" />}
              />

              <InputField
                label="Subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                error={!!errors.subject}
                hint={errors.subject}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span className="text-error-500 ml-1">*</span>
                </label>
                <TextArea
                  placeholder="Tell us more about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(value) => setFormData({ ...formData, message: value })}
                  error={!!errors.message}
                  hint={errors.message}
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
        {/* Map Placeholder */}
        <div className="mt-12 md:mt-16">
          <div className="bg-secondary rounded-xl h-64 md:h-80 lg:h-96 flex items-center justify-center dark:bg-gray-800  border border-gray-200 dark:border-gray-700">
            <div className="text-center text-muted-foreground text-sm px-4">
              <MapPin className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-accent" />
              <h3 className="mb-2 text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">Find Us Here</h3>
              <p>Office 2304 Prime Tower, Burj Khalifa Blvd</p>
              <p>Business Bay, Dubai, UAE</p>
              <p className="text-xs mt-2">Google Maps integration available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
