import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, ChartScatter, HandHeart, Target } from "lucide-react";

export default function ProgramBenefits() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Experienced Trainer",
      description: "Learn from a professional with over 17 years of experience in the IT industry and more than four years of experience with Snowflake. Our trainer is a Snowflake SnowPro Certified professional who has delivered training for both corporate and retail batches.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: ChartScatter,
      title: "Project-Based Learning",
      description: "Get end-to-end experience by completing a capstone project that simulates a real-time Snowflake implementation. Work with both structured and semi-structured data in real-world scenarios.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: HandHeart,
      title: "Comprehensive Career Support",
      description: "We provide personalized interview preparation, including mock interviews and feedback. You'll also receive guidance on resume building and career planning to ensure job readiness.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Target,
      title: "Structured and Focused",
      description: "The course is designed to make you proficient in Snowflake. You'll get step-by-step guidance to help you pass your SnowPro certification and become industry-ready.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Program?</h2>
          <p className="text-xl text-muted-foreground">Four compelling reasons to start your Snowflake journey with us</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`${benefit.bgColor} p-3 rounded-lg`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
