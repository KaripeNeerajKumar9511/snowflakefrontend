import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProgramBenefits from "@/components/program-benefits";
import CurriculumSection from "@/components/curriculum-section";
import BonusMaterials from "@/components/bonus-materials";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Star, Users } from "lucide-react";

export default function Home() {
  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Why Choose Our Program */}
      <ProgramBenefits />
      
      {/* Who Should Join */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who Should Join?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                This training is ideal for a variety of professionals and aspiring data experts
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Data Professionals</h4>
                    <p className="text-muted-foreground">Data Engineers, Data Analysts, and BI Developers who want to master cloud data platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Career Transitioners</h4>
                    <p className="text-muted-foreground">Professionals transitioning into cloud data roles and looking to upskill.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fresh Graduates</h4>
                    <p className="text-muted-foreground">Freshers with basic SQL or database knowledge who are aspiring to get a role in Snowflake.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Prerequisites</h5>
                    <p className="text-muted-foreground">
                      Basic SQL knowledge is essential to get started, but coding knowledge like Python or Java is not required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaborating on data projects" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
              <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground">Professionals Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learning Outcomes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Learning Outcomes</h2>
            <p className="text-xl text-muted-foreground">What you'll achieve by the end of this program</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Hands-on Project Experience</h3>
              <p className="text-muted-foreground">
                Gain end-to-end experience by completing a Snowflake project with both structured and semi-structured data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Job Readiness</h3>
              <p className="text-muted-foreground">
                Receive guidance on resume building, mock interviews, and career paths to prepare for the job market.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Certification Readiness</h3>
              <p className="text-muted-foreground">
                Get prepared to pass the SnowPro Core Certification and guidance for Advanced certifications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Performance Optimization</h3>
              <p className="text-muted-foreground">
                Learn key skills to optimize Snowflake performance and implement best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurriculumSection />
      <BonusMaterials />

      {/* Support After Training */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Support After Training</h2>
            <p className="text-xl text-muted-foreground">We're with you even after the training ends</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Lifetime Access</h3>
                  <p className="text-muted-foreground">
                    You'll have access to all course materials and recordings after the training is complete. Learn at your own pace forever.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Dedicated Q&A Sessions</h3>
                  <p className="text-muted-foreground">
                    Get your questions answered through dedicated Q&A sessions. Our expert trainer is always available to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg hero-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Seat Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't miss this opportunity to transform your career with expert Snowflake training
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-blue-100">Weekend Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">17+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-blue-100">Job Support</div>
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-accent text-accent-foreground px-8 py-4 text-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            data-testid="cta-enroll-button"
          >
            <GraduationCap className="w-5 h-5 mr-3" />
            Enroll Now - Limited Seats
          </Button>
          
          <div className="mt-8 text-blue-100">
            <Clock className="w-4 h-4 inline mr-2" />
            Next batch starts soon - Don't wait!
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <GraduationCap className="w-6 h-6 inline mr-2" />
                SkillVedika
              </div>
              <p className="text-background/80">
                Empowering professionals with expert-led training programs in cutting-edge technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#program" className="hover:text-background transition-colors">Program Details</a></li>
                <li><a href="#curriculum" className="hover:text-background transition-colors">Curriculum</a></li>
                <li><a href="#benefits" className="hover:text-background transition-colors">Benefits</a></li>
                <li><a href="#enroll" className="hover:text-background transition-colors">Enroll Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <div>
                  rafimohammad055@gmail.com
                </div>
                <div>
                  Contact for more details
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2024 SkillVedika. All rights reserved. | Snowflake Training Program</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
