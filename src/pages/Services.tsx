import { MessageCircle, Paintbrush, Scissors, Image as ImageIcon, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const whatsappUrl = "https://wa.me/917406008294?text=";

  const services = [
    {
      icon: <Paintbrush className="w-12 h-12 text-gold" />,
      title: "Custom Tattoo Design",
      description: "Unique, personalized tattoos crafted specifically for you. From concept sketches to final execution, we work closely with you to create a design that perfectly captures your vision and story.",
      features: [
        "Black & Grey Realism",
        "Color Tattoos",
        "Minimal & Fine Line",
        "Portrait Tattoos",
        "Geometric Designs",
        "Cover-Up Work",
      ],
      cta: "Book Tattoo Design",
    },
    {
      icon: <Scissors className="w-12 h-12 text-gold" />,
      title: "Professional Piercing",
      description: "Safe, hygienic body piercing services performed by experienced professionals using sterilized equipment and proper techniques. We prioritize your safety and comfort throughout the process.",
      features: [
        "Ear Piercing",
        "Nose Piercing",
        "Body Piercing",
        "Sterile Equipment",
        "Aftercare Guidance",
        "Quality Jewelry",
      ],
      cta: "Book Piercing",
    },
    {
      icon: <ImageIcon className="w-12 h-12 text-gold" />,
      title: "Pencil Sketch Commissions",
      description: "Detailed, lifelike pencil sketches perfect for gifts or personal keepsakes. We create stunning portrait work and custom illustrations that capture emotions and memories.",
      features: [
        "Portrait Sketches",
        "Custom Illustrations",
        "Pet Portraits",
        "Memorial Art",
        "Family Portraits",
        "Character Design",
      ],
      cta: "Commission Sketch",
    },
    {
      icon: <Palette className="w-12 h-12 text-gold" />,
      title: "Paintings & Canvas Art",
      description: "Original paintings and commissioned artwork in various styles and mediums. Whether you want abstract, realistic, or contemporary art, we create pieces that transform your space.",
      features: [
        "Acrylic Paintings",
        "Oil Paintings",
        "Abstract Art",
        "Landscape Art",
        "Custom Commissions",
        "Gallery-Quality Work",
      ],
      cta: "Order Painting",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-gold" />,
      title: "Mixed Media Artwork",
      description: "Innovative combinations of different artistic techniques and materials to create unique, textured pieces. Perfect for those seeking something truly one-of-a-kind.",
      features: [
        "Collage Art",
        "Textured Paintings",
        "3D Elements",
        "Experimental Designs",
        "Custom Materials",
        "Unique Compositions",
      ],
      cta: "Create Mixed Media",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-gold" />,
      title: "Dream Catcher Art",
      description: "Handcrafted dream catchers with intricate designs, personal symbolism, and beautiful detailing. Each piece is created with care and spiritual intention.",
      features: [
        "Custom Designs",
        "Traditional Styles",
        "Modern Variations",
        "Personalized Symbols",
        "Quality Materials",
        "Handmade with Care",
      ],
      cta: "Order Dream Catcher",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional tattoo and art services tailored to bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-gold transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gold mb-3">What's Included:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`${whatsappUrl}${encodeURIComponent(`Hi! I'm interested in ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gold hover:bg-gold-light text-background">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {service.cta}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Professional <span className="text-gold">Aftercare</span>
              </h2>
              <p className="text-muted-foreground">
                We provide comprehensive aftercare guidance to ensure your tattoo heals perfectly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Hygiene Standards",
                  description: "All equipment is sterilized, and we follow strict hygiene protocols for your safety.",
                },
                {
                  title: "Aftercare Kit",
                  description: "Receive detailed instructions and recommended products for optimal healing.",
                },
                {
                  title: "Follow-Up Support",
                  description: "We're available for questions and concerns throughout your healing process.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gold">{item.title}</h3>
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
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss your project and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${whatsappUrl}${encodeURIComponent("Hi! I'd like to book a consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gold hover:bg-gold-light text-background">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book on WhatsApp
                </Button>
              </a>
              <a href="tel:07406008294">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
