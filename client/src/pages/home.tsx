import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProgramBenefits from "@/components/program-benefits";
import CurriculumSection from "@/components/curriculum-section";
import BonusMaterials from "@/components/bonus-materials";
import Coroselform from "@/components/coroselform";
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
                This training is ideal for a variety of professionals and aspiring data experts.
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
      <section className="py-20 bg-background"  id="benefits">
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
              <h3 className="text-lg font-semibold text-foreground mb-3">Job-Ready Skills</h3>
              <p className="text-muted-foreground">
                Receive guidance on resume building, mock interviews, and career paths to prepare for the job market.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Career Certification Prep</h3>
              <p className="text-muted-foreground">
                Get prepared to pass the SnowPro Core Certification and guidance for Advanced certifications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Real-World Use Cases</h3>
              <p className="text-muted-foreground">
              Gain experience with Snowflake in analytics, and reporting projects, preparing you to apply your skills directly in real job scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurriculumSection />
      {/* <BonusMaterials /> */}
      
      
      <div id="registration-form">
  <Coroselform />
</div>

      {/* Final CTA */}
      <section className="py-20 gradient-bg hero-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">Reserve Your Seat Today</h2>
          <p className="text-xl text-black mb-8">
            Don't miss this opportunity to transform your career with expert Snowflake Training.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">6</div>
              <div className="text-black">Week Sessions</div>
            </div>
            <div> 
              <div className="text-3xl font-bold text-blue-500 mb-2">17+</div>
              <div className="text-black">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-black">Job Support</div>
            </div>
          </div>
          
          <Button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="bg-green-500 text-accent-foreground px-8 py-4 text-lg hover:bg-accent/90 transition-all transform hover:scale-105"
  data-testid="cta-enroll-button"
>
  Book a Demo Now - Limited Seats
</Button>

          
          <div className="mt-8 text-black">
            <Clock className="w-4 h-4 inline mr-2" />
            Next batch starts soon - Don't wait!
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
          <div>
  <div className="mb-4">
    <img 
      src="/src/logos/Skillvedikablk.png" 
      alt="SkillVedika Logo" 
      className="h-30 w-auto"
    />
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
                <li><a href="#registration-form" className="hover:text-background transition-colors">Enroll Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <div>
                support@skillvedika.com
                  
                </div>
                <div>
                +91 9182617094
                </div>
                <div>
                501, Manjeera Majestic Commercial,KPHB, Hyderabad, India.
                </div>
                <div>
                  Contact for more details
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2025 SkillVedika. All rights reserved. | Snowflake Training Program</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
