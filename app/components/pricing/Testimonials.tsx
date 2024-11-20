import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This boilerplate saved us weeks of development time. The code quality is exceptional.",
    author: "Sarah Chen",
    role: "CTO at TechStart",
    rating: 5
  },
  {
    quote: "Finally, a production-ready template that doesn't need to be rewritten from scratch.",
    author: "Michael Rodriguez",
    role: "Lead Developer",
    rating: 5
  },
  {
    quote: "The authentication and payment integration just works. It's incredible.",
    author: "Emily Thompson",
    role: "Indie Developer",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by Developers</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Join hundreds of developers building better applications
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-card p-6 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 