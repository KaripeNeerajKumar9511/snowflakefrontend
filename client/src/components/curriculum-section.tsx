import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      number: 1,
      title: "Introduction to Cloud & Snowflake",
      description: "Kick off your journey with a deep dive into cloud data warehousing fundamentals. Learn the core concepts of Snowflake architecture, its ecosystem, and unique features that set it apart from traditional databases. Discover why Snowflake is the fastest-growing cloud platform adopted by top organizations worldwide, and how it is shaping the future of data engineering.",
    },
    {
      number: 2,
      title: "Core Setup & Data Loading",
      description:
        "Gain hands-on experience with setting up Snowflake accounts, warehouses, and databases from scratch. Learn the end-to-end process of ingesting and managing data, using multiple approaches for both structured and semi-structured formats. Build the practical foundation you’ll need to succeed in real-world projects, ensuring confidence in managing core Snowflake operations.",
    },
    {
      number: 3,
      title: "Semi-Structured Data & Time Travel",
      description:
        "Develop advanced skills in working with modern data formats like JSON, Avro, and XML directly inside Snowflake. Explore the powerful Time Travel feature, which enables you to query past data, recover deleted records, and analyze historical versions. These capabilities are highly in-demand in industry projects, giving you an edge in handling complex data scenarios.",
    },
    {
      number: 4,
      title: "Performance Optimization & Automation",
      description:
        "Learn how to optimize queries, manage resources, and control costs while working on large datasets. Gain expertise in tuning Snowflake for maximum performance and applying best practices followed in top companies. Take it a step further with automation, where you’ll build pipelines using tasks, streams, and schedulers to streamline workflows and save time in real projects.",
    },
    {
      number: 5,
      title: "Security & Capstone Project",
      description:
        "Understand the critical aspects of Snowflake security and governance including role-based access control, encryption methods, and data masking for compliance. At the same time, begin your capstone project, which lets you apply everything you’ve learned in a real-world business scenario. This ensures you graduate with both knowledge and a portfolio-ready project to showcase to recruiters.",
    },
    {
      number: 6,
      title: "Project Execution & Career Readiness",
      description:
        "Bring together all your learning by executing a complete end-to-end Snowflake project, just like professionals do in the industry. Alongside, get personalized career support including resume guidance, mock interviews, and step-by-step SnowPro certification prep. By the end of this module, you will not only have technical expertise but also the career readiness to secure Snowflake roles confidently.",
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            6-Weeks Training Agenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Click each module to explore its details
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.number}
              value={`faq-${faq.number}`}
              className="border rounded-xl bg-card shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:bg-muted/50 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {faq.number}
                  </span>
                  {faq.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground text-base leading-relaxed">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
