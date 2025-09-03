import { Card, CardContent } from "@/components/ui/card";
import myphoto from "../components/images/myphoto.jpg";
import tcs from "../components/images/tcs.png";
import hp from "../components/images/hp.png";
import amazon from "../components/images/amazon.png";

export default function TrainersSection() {
  const trainers = [
    {
      name: "Anil Kumar Ghorakavi",
      role: "Founder",
      logo:  tcs,
      description:
        "As an entrepreneur constantly finding ways to help people reach greater heights in their career and an Ex-Oracle guy, I know exactly what it takes to launch a career in the IT industry.",
      bgColor: "bg-blue-100",
      img: myphoto,
    },
    {
      name: "Rakesh Kumar",
      role: "Founder",
      logo: hp,
      description:
        "I ensure that our curriculum is up-to-date with the latest industry needs and our program delivery uses the trending tools and processes adopted by the industry.",
      bgColor: "bg-pink-100",
      img: myphoto,
    },
    {
      name: "Praveen Kumar",
      role: "Co-Founder",
      logo: amazon,
      description:
        "I believe in supplementing education with relevant and engaging experience that would prepare students for careers in the tech industry.",
      bgColor: "bg-green-100",
      img: myphoto,
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Faces Behind Our Guiding Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className={`border border-border shadow-sm text-center hover:shadow-lg transition-shadow duration-300 rounded-xl ${trainer.bgColor}`}
            >
              <CardContent className="p-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  {trainer.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {trainer.role}
                </p>
                <div className="flex justify-center mb-4">
                  <img
                    src={trainer.logo}
                    alt="Company Logo"
                    className="max-h-10 object-contain"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {trainer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
