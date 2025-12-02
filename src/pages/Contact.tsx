import { useState } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooIdea: "",
    preferredDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi! I'd like to book an appointment.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Tattoo Idea: ${formData.tattooIdea}
Preferred Date: ${formData.preferredDate}`;

    const whatsappUrl = `https://wa.me/917406008294?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be taken to WhatsApp to complete your booking.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your tattoo vision to life? Contact us today for a consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit us at our studio or reach out through any of the channels below. We're here to answer your questions and help you get started.
                </p>
              </div>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      # 8, 1st Floor, CA-8, 60 Feet Road,<br />
                      18th Main Rd, next to Royal Mart,<br />
                      Padmanabhanagar, Bengaluru,<br />
                      Karnataka 560070
                    </p>
                    <a
                      href="https://maps.google.com/?q=DC+Art+Tattoo+Studio+Padmanabhanagar+Bengaluru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary text-sm hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:07406008294"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      074060 08294
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/917406008294"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                    <p className="text-muted-foreground">Open Daily</p>
                    <p className="text-muted-foreground">Closes 8:00 PM</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Card className="p-8 bg-card border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Book Your <span className="text-primary">Consultation</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tattooIdea" className="text-foreground">Tattoo Idea *</Label>
                    <Textarea
                      id="tattooIdea"
                      name="tattooIdea"
                      required
                      value={formData.tattooIdea}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border text-foreground min-h-[120px]"
                      placeholder="Describe your tattoo idea, preferred style, size, and placement..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredDate" className="text-foreground">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border text-foreground"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you'll be redirected to WhatsApp to complete your booking
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Visit Our <span className="text-primary">Studio</span>
              </h2>
              <p className="text-muted-foreground">
                Located in the heart of Padmanabhanagar, Bengaluru
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9898!2d77.5508!3d12.9116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQxLjgiTiA3N8KwMzMnMDIuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DC Art & Tattoo Studio Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;