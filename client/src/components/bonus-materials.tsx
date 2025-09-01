import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Award, Book, Compass } from "lucide-react";

export default function BonusMaterials() {
  const materials = [
    {
      icon: HelpCircle,
      title: "100+ Real Interview Questions",
      description: "Practice with a collection of real questions to prepare for job interviews.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Award,
      title: "Certification Practice Pack",
      description: "Get a comprehensive practice pack to help you prepare for the certification exam.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Book,
      title: "Migration Project Guide",
      description: "A valuable e-book guide for understanding and executing migration projects.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Compass,
      title: "Job Guidance",
      description: "Dedicated guidance to help you find and secure your dream job in Snowflake.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bonus Materials</h2>
          <p className="text-xl text-muted-foreground">Additional resources to accelerate your success</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <Card key={index} className="border border-border shadow-sm text-center">
              <CardContent className="p-6">
                <div className={`${material.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <material.icon className={`w-8 h-8 ${material.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{material.title}</h3>
                <p className="text-muted-foreground">{material.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
