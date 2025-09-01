import { Card, CardContent } from "@/components/ui/card";

export default function CurriculumSection() {
  const weekends = [
    {
      number: 1,
      title: "Introduction to Cloud & Snowflake",
      description: "Learn the basics of cloud computing and Snowflake's unique architecture and capabilities.",
      accent: false
    },
    {
      number: 2,
      title: "Core Setup & Data Loading",
      description: "Understand core setup and object creation, with a deep dive into data loading techniques and best practices.",
      accent: false
    },
    {
      number: 3,
      title: "Semi-Structured Data & Time Travel",
      description: "Get hands-on experience with semi-structured data and learn about Snowflake's powerful Time Travel feature.",
      accent: false
    },
    {
      number: 4,
      title: "Performance Optimization & Automation",
      description: "Learn how to optimize performance and use Streams and Tasks for automation in Snowflake.",
      accent: false
    },
    {
      number: 5,
      title: "Security & Capstone Project",
      description: "Explore security and access control features, and begin setting up your capstone project.",
      accent: false
    },
    {
      number: 6,
      title: "Project Execution & Career Readiness",
      description: "Complete your capstone project and focus on career readiness, including interview preparation and job guidance.",
      accent: true
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">6-Weekend Training Agenda</h2>
          <p className="text-xl text-muted-foreground">Comprehensive curriculum covering all key aspects of Snowflake</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {weekends.map((weekend) => (
              <Card key={weekend.number} className="border border-border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${weekend.accent ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'} w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg`}>
                      {weekend.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{weekend.title}</h3>
                      <p className="text-muted-foreground">{weekend.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
