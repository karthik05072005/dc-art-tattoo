import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      name: "Kishore",
      rating: 5,
      text: "Artists are very friendly, price reasonable. Wonderful experience getting my first tattoo here!",
      date: "2 weeks ago",
    },
    {
      name: "Veenashree",
      rating: 5,
      text: "Wonderful service at a reasonable price. The artist listened to exactly what I wanted and delivered perfectly.",
      date: "1 month ago",
    },
    {
      name: "Lokes Rawal",
      rating: 5,
      text: "Awesome work and very creative designs. Highly recommend for anyone looking for quality tattoos!",
      date: "2 months ago",
    },
    {
      name: "Priya M.",
      rating: 5,
      text: "The attention to detail is amazing. My tattoo turned out better than I imagined. Professional and hygienic.",
      date: "3 months ago",
    },
    {
      name: "Rahul S.",
      rating: 5,
      text: "Best tattoo studio in Padmanabhanagar! The artists are talented and the atmosphere is welcoming.",
      date: "3 months ago",
    },
    {
      name: "Anjali K.",
      rating: 5,
      text: "Got a beautiful pencil sketch done of my grandparents. It captured their essence perfectly. Thank you!",
      date: "4 months ago",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Client <span className="text-primary">Reviews</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-2xl mb-4">
              <span className="text-primary font-bold">5.0</span>
              <span className="text-muted-foreground">Perfect Rating</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on <span className="text-primary font-semibold">241+ verified reviews</span> from satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-up">
              <div className="text-4xl font-bold text-primary mb-2">241+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfied</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary opacity-20" />
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Why Clients <span className="text-primary">Love Us</span>
              </h2>
              <p className="text-muted-foreground">
                Here's what sets us apart and earns us consistent 5-star reviews
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Friendly Artists",
                  description: "Our approachable team makes you feel comfortable from consultation to completion.",
                },
                {
                  title: "Reasonable Pricing",
                  description: "Quality work at fair prices—no hidden costs, just transparent pricing.",
                },
                {
                  title: "Creative Excellence",
                  description: "Innovative designs and flawless execution that exceed expectations.",
                },
                {
                  title: "Professional Service",
                  description: "Punctual, hygienic, and dedicated to your complete satisfaction.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Experience <span className="text-primary">5-Star Service</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of satisfied clients and get your dream tattoo today
            </p>
            <a
              href="https://wa.me/917406008294?text=Hi! I'd like to book an appointment."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Your Appointment
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;