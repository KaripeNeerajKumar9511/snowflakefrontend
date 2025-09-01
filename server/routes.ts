import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnrollmentSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your-app-password'
    }
  });

  // Enrollment submission endpoint
  app.post("/api/enrollments", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertEnrollmentSchema.parse(req.body);
      
      // Store enrollment
      const enrollment = await storage.createEnrollment(validatedData);
      
      // Send notification email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER || 'noreply@skillvedika.com',
        to: 'rafimohammad055@gmail.com',
        subject: 'New Snowflake Training Program Enrollment',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Enrollment - SkillVedika Snowflake Training</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Student Details:</h3>
              <p><strong>Full Name:</strong> ${enrollment.fullName}</p>
              <p><strong>Email:</strong> ${enrollment.email}</p>
              <p><strong>Phone:</strong> ${enrollment.phone}</p>
              <p><strong>Experience Level:</strong> ${enrollment.experience}</p>
              <p><strong>Enrollment Date:</strong> ${enrollment.createdAt.toLocaleDateString()}</p>
            </div>
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Action Required:</strong> Please follow up with the student to confirm their enrollment and provide next steps.
              </p>
            </div>
          </div>
        `
      };

      // Send thank you email to user
      const userMailOptions = {
        from: process.env.EMAIL_USER || 'noreply@skillvedika.com',
        to: enrollment.email,
        subject: 'Thank You for Enrolling - SkillVedika Snowflake Training Program',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">🎓 Welcome to SkillVedika!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Snowflake Training Program</p>
            </div>
            
            <div style="padding: 30px; background: white; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1e293b; margin-top: 0;">Dear ${enrollment.fullName},</h2>
              
              <p style="color: #475569; line-height: 1.6;">
                Thank you for enrolling in our <strong>Snowflake Training Program</strong>! We're excited to have you join our upcoming batch.
              </p>
              
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1e293b; margin-top: 0;">Your Enrollment Details:</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${enrollment.fullName}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${enrollment.email}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${enrollment.phone}</p>
                <p style="margin: 5px 0;"><strong>Experience Level:</strong> ${enrollment.experience}</p>
              </div>
              
              <div style="background: #dcfce7; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
                <h3 style="color: #065f46; margin-top: 0;">🚀 What's Next?</h3>
                <ul style="color: #047857; padding-left: 20px;">
                  <li>Our team will contact you within 24-48 hours</li>
                  <li>You'll receive detailed program information and schedule</li>
                  <li>Access to course materials will be provided before the first session</li>
                  <li>Join our dedicated WhatsApp/Slack group for updates</li>
                </ul>
              </div>
              
              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
                <h3 style="color: #92400e; margin-top: 0;">📚 Program Highlights:</h3>
                <ul style="color: #b45309; padding-left: 20px;">
                  <li><strong>6 Weekend Sessions</strong> - Comprehensive curriculum</li>
                  <li><strong>Expert Trainer</strong> - 17+ years experience, SnowPro certified</li>
                  <li><strong>Hands-on Project</strong> - Real-world Snowflake implementation</li>
                  <li><strong>Career Support</strong> - Resume building, mock interviews, job guidance</li>
                  <li><strong>Lifetime Access</strong> - All materials and recordings</li>
                </ul>
              </div>
              
              <p style="color: #475569; line-height: 1.6;">
                If you have any immediate questions, please don't hesitate to reach out to us at 
                <a href="mailto:rafimohammad055@gmail.com" style="color: #3b82f6;">rafimohammad055@gmail.com</a>
              </p>
              
              <p style="color: #475569; line-height: 1.6;">
                We look forward to helping you become job-ready in Snowflake!
              </p>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; margin: 0;">
                  Best regards,<br>
                  <strong>The SkillVedika Team</strong>
                </p>
              </div>
            </div>
          </div>
        `
      };

      // Send emails
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
      ]);
      
      res.json({ 
        message: "Enrollment submitted successfully! You will receive a confirmation email shortly.",
        enrollmentId: enrollment.id 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation failed", 
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        console.error('Enrollment error:', error);
        res.status(500).json({ 
          message: "Failed to process enrollment. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
