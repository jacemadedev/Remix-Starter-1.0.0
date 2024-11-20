import { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Pricing } from "~/components/Pricing";
import { Footer } from "~/components/Footer";
import { useDarkMode } from "~/hooks/useDarkMode";

export const meta: MetaFunction = () => {
  return [
    { title: "Pricing - Composers.dev" },
    { 
      name: "description", 
      content: "Choose the perfect plan for your development needs. From individual developers to enterprise teams, we have a solution that fits your requirements." 
    },
    { 
      property: "og:title", 
      content: "Pricing - Composers.dev" 
    },
    { 
      property: "og:description", 
      content: "Choose the perfect plan for your development needs. From individual developers to enterprise teams, we have a solution that fits your requirements." 
    },
  ];
};

export default function PricingPage() {
  const { isDark } = useDarkMode();

  return (
    <div className={`min-h-screen w-full bg-background text-foreground ${isDark ? 'dark' : ''}`}>
      {/* Grid Background with Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-transparent dark:from-background dark:via-background">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:100px_100px] opacity-20">
        </div>
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4">
          <Header className="py-6" />
        </div>

        <Pricing />

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="grid gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What's included in the Composer Kit plan?",
    answer: "The Composer Kit plan includes access to all our boilerplates, regular updates, community support, and basic documentation to help you get started quickly."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all our plans. If you're not satisfied with our service, we'll provide a full refund."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include community support through our Discord channel. Pro and Enterprise plans include priority support with guaranteed response times."
  },
]; 