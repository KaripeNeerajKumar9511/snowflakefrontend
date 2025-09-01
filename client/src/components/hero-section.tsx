import RegistrationForm from "./registration-form";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="gradient-bg hero-pattern pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Become Job-Ready in <span className="text-accent">Snowflake</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Expert-led training program designed to get you job-ready in Snowflake through hands-on training and real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-blue-100">17+ Years Expert Trainer</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-blue-100">SnowPro Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-blue-100">Project-Based Learning</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-center">
                <div className="text-accent text-lg font-semibold mb-2">Limited Seats Available</div>
                <div className="text-3xl font-bold mb-2">6-Weekend Program</div>
                <div className="text-blue-100">Next batch starts soon</div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
