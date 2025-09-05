"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { VITE_BASE_URL } from "../../config"
import Brochure from "../assets/brochure.pdf"


export default function RegistrationForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const handlebrochure=()=>{
      window.open(Brochure, '_blank')
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the Terms & Conditions and Privacy Policy.");
      return;
    }
    setSubmitted(true)
   
    // Simulate API call
     const response = await axios.post(`${VITE_BASE_URL}/send-email/`, formData);
      console.log("Registration data:", formData);
       console.log("Registration data:", response.data);
        setIsSubmitting(false);
         setShowSuccess(true);
        setFormData({
          name:"",
          email:"",
          phone:""
        })
           toast({ title: "Booking Successful!", description: "You will receive a confirmation email shortly.", }); // Log the form data (in a real app, this would go to your backend) console.log("Registration data:", data); };
    
    
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  if (typeof (window as any).gtag !== "undefined") {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-17526353187/0vHHCLPV_JMbEKPam6VB",
    });
  }
  return (
    <div className="max-w-lg  mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border pb-16 mt-8 border-white/20">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Book a Demo
      </h2>

      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-green-300 font-medium">
            🎉 Thank you for Booking! We’ll contact you soon.
          </p>
          <button
onClick={handlebrochure}
  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
>
  📄 View Our Brochure
</button>

        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-white">
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1"
              required
            />
          </div>



          {/* Terms & Privacy Checkbox */}
          <div className="flex items-start space-x-2 pt-4 pb-4">
            <Checkbox
              id="agree"
              checked={agree}
              onCheckedChange={(checked) => setAgree(checked as boolean)}
            />
            <Label htmlFor="agree" className="text-white text-sm leading-snug">
              I agree to the{" "}
              <Dialog>
                <DialogTrigger className="text-blue-300 underline">
                  Terms & Conditions
                </DialogTrigger>
                <DialogContent className="max-h-[70vh] overflow-y-auto">
                <DialogHeader>
  <DialogTitle>Terms & Conditions</DialogTitle>
  <DialogDescription className="text-sm text-gray-700">
    <p>
      <strong>Effective Date:</strong> 02-09-2025
    </p>
    <p>
      <strong>Company:</strong> Skillvedika Training Institute (a brand of
      Tutorkhoj Private Limited)
    </p>
    <br />

    <p>
      <strong>1. Acceptance of Terms</strong> – By accessing or using this
      website, submitting your details, or enrolling in any of our programs,
      you agree to be bound by these Terms & Conditions. If you do not agree,
      please do not use this website.
    </p>

    <p>
      <strong>2. Services Offered</strong> – Skillvedika Training Institute
      provides professional training programs, including the Snowflake Training
      Program. We reserve the right to modify, update, or discontinue any course
      or service at any time without prior notice.
    </p>

    <p>
      <strong>3. Data Collection & GDPR/DPDP Compliance</strong>
    </p>
    <ul className="list-disc list-inside ml-4">
      <li>
        By filling out our forms, you consent to the collection, processing, and
        storage of your personal data (such as name, email, phone number).
      </li>
      <li>
        Your data will only be used for purposes of course communication,
        updates, and related marketing.
      </li>
      <li>
        We will not sell, rent, or share your personal data with third parties
        without your consent, except as required by law.
      </li>
    </ul>
    <p className="mt-2">Under GDPR and India’s DPDP Act, you have the right to:</p>
    <ul className="list-disc list-inside ml-4">
      <li>Access your personal data</li>
      <li>Request correction or deletion</li>
      <li>Withdraw consent at any time</li>
    </ul>
    <p className="mt-2">
      To exercise these rights, please contact us at:{" "}
      <span className="italic">[Insert official email address]</span>.
    </p>

    <p>
      <strong>4. Payment & Refunds</strong>
    </p>
    <ul className="list-disc list-inside ml-4">
      <li>
        Course fees, once paid, are non-refundable unless otherwise stated in
        the course policy.
      </li>
      <li>
        Any promotional offers or discounts are at the sole discretion of
        Skillvedika.
      </li>
    </ul>

    <p>
      <strong>5. Intellectual Property</strong> – All training content,
      materials, videos, and documentation are the intellectual property of
      Skillvedika Training Institute and may not be copied, shared, or
      redistributed without prior written consent.
    </p>

    <p>
      <strong>6. Limitation of Liability</strong> – Skillvedika Training
      Institute does not guarantee job placement or specific outcomes from the
      training. We are not responsible for any indirect, incidental, or
      consequential damages arising from the use of our services.
    </p>

    <p>
      <strong>7. Third-Party Links & Tools</strong> – Our website may contain
      links to third-party websites. We are not responsible for the content,
      security, or privacy practices of these websites.
    </p>

    <p>
      <strong>8. Governing Law</strong> – These Terms & Conditions shall be
      governed by and construed in accordance with the laws of India. Any
      disputes shall be subject to the exclusive jurisdiction of the courts of
      Hyderabad, Telangana.
    </p>

    <p>
      <strong>9. Updates</strong> – We may update these Terms & Conditions from
      time to time. Continued use of our website or services constitutes
      acceptance of the updated terms.
    </p>
  </DialogDescription>
</DialogHeader>

                </DialogContent>
              </Dialog>{" "}
              and{" "}
              <Dialog>
                <DialogTrigger className="text-blue-300 underline">
                  Privacy Policy
                </DialogTrigger>
                <DialogContent className="max-h-[70vh] overflow-y-auto">
                <DialogHeader>
  <DialogTitle>Privacy Policy</DialogTitle>
  <DialogDescription className="text-sm text-gray-700 space-y-4 max-h-96 overflow-y-auto">
    <p><strong>Effective Date:</strong> 02-09-2025</p>
    <p><strong>Company:</strong> Skillvedika Training Institute (a brand of Tutorkhoj Private Limited)</p>

    <p><strong>1. Introduction</strong><br/>
    This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website or participate in our training programs. By submitting your details, you agree to the practices described in this policy.</p>

    <p><strong>2. Information We Collect</strong><br/>
    • Name, email address, phone number, and location<br/>
    • Educational background or professional details (if provided)<br/>
    • Payment details (for paid courses)<br/>
    • Website usage data (via cookies and analytics tools)</p>

    <p><strong>3. How We Use Your Information</strong><br/>
    • To contact you about the Snowflake Training Program and related courses<br/>
    • To send important updates, reminders, or promotional offers<br/>
    • To improve our services and website experience<br/>
    • To comply with legal and regulatory requirements</p>

    <p><strong>4. Legal Basis for Processing (GDPR Compliance)</strong><br/>
    • Consent – when you submit forms and opt-in to communication<br/>
    • Contract – when you enroll in our courses<br/>
    • Legal obligation – where required by law<br/>
    • Legitimate interest – to improve and market our training services</p>

    <p><strong>5. Data Storage & Retention</strong><br/>
    • Your personal data is securely stored in compliance with GDPR and India’s Digital Personal Data Protection (DPDP) Act.<br/>
    • We retain your data only as long as necessary to fulfill the purposes stated, or as required by law.</p>

    <p><strong>6. Data Sharing</strong><br/>
    • We do not sell or rent your personal data.<br/>
    • Data may be shared with trusted third-party service providers (e.g., email service, payment gateway) strictly for business purposes.<br/>
    • We may disclose information if required by law or to protect our rights.</p>

    <p><strong>7. Your Rights</strong><br/>
    You have the right to:<br/>
    • Access your personal data<br/>
    • Request correction or deletion<br/>
    • Withdraw consent at any time<br/>
    • Opt out of marketing communications<br/>
    • Request data portability (for EU residents under GDPR)<br/>
    To exercise your rights, contact us at <em>[Insert official email address]</em>.</p>

    <p><strong>8. Cookies & Tracking</strong><br/>
    Our website may use cookies and analytics tools to track visitor behavior, improve user experience, and measure campaign performance. You may disable cookies in your browser settings.</p>

    <p><strong>9. International Data Transfers</strong><br/>
    If you are accessing our services from outside India, your information may be transferred and processed in India. By using our services, you consent to such transfers in compliance with GDPR.</p>

    <p><strong>10. Security</strong><br/>
    We use reasonable administrative, technical, and physical safeguards to protect your data from unauthorized access, misuse, or disclosure.</p>

    <p><strong>11. Updates to This Policy</strong><br/>
    We may update this Privacy Policy periodically. Changes will be posted on this page with a revised “Effective Date.”</p>

    <p><strong>12. Contact Information</strong><br/>
    Tutorkhoj Private Limited (Skillvedika Training Institute)<br/>
    202, Serinity Diamond Appartment<br/>
    Gopanpally, Serilingampally, Hyderabad<br/>
    Email: support@skillvedika.com<br/>
    Phone: +91 9182617094</p>
  </DialogDescription>
</DialogHeader>

                </DialogContent>
              </Dialog>
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
           Submit Your Details
          </Button>
        </form>
      )}
    </div>
  );
}
