import { Link } from "react-router-dom";
import { Star, Users, Image as ImageIcon, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import artistWorking from "@/assets/artist-working.png";
import studioFront from "@/assets/studio-front.png";
import tattooGeometric from "@/assets/tattoo-geometric.png";
import tattooDadMom from "@/assets/tattoo-dadmom.png";
import tattooWolf from "@/assets/tattoo-wolf.png";
import tattooWing from "@/assets/tattoo-wing.png";
const Home = () => {
  const whatsappUrl = "https://wa.me/917406008294?text=" + encodeURIComponent("Hi! I'd like to book an appointment at DC Art & Tattoo Studio.");
  const featuredWorks = [{
    image: tattooWolf,
    title: "Realism Wolf"
  }, {
    image: tattooGeometric,
    title: "Geometric Design"
  }, {
    image: tattooDadMom,
    title: "Custom Lettering"
  }, {
    image: tattooWing,
    title: "Minimal Art"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={studioFront} alt="DC Tattoo Studio" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            D C Art & <span className="text-primary">Tattoo Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where Creativity Meets Skin
          </p>
          <p className="text-lg text-foreground mb-12">
            Padmanabhanagar's 5-Star Tattoo & Art Studio
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </Button>
            </a>
            <a href="tel:07406008294">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              
              
            </div>
            <div className="text-center">
              
              
            </div>
            
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Premium Art & <span className="text-primary">Tattoo Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At DC Art & Tattoo Studio, we blend artistic mastery with technical precision to create tattoos that tell your story. Our experienced artists specialize in diverse styles from bold realism to delicate minimal designs.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Beyond tattoos, we offer custom pencil sketches, paintings, mixed media artwork, and dream catchers—all crafted with the same dedication to excellence that earned us a perfect 5.0★ rating.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <img src={artistWorking} alt="Artist at work" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">5+ Years</div>
                <div className="text-sm">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Featured <span className="text-primary">Artwork</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio showcasing diverse styles from bold realism to intricate minimal designs
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredWorks.map((work, index) => <Card key={index} className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="aspect-square relative overflow-hidden">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-foreground font-semibold">{work.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ImageIcon className="w-5 h-5 mr-2" />
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional tattoo and art services tailored to your vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "Custom Tattoos",
            description: "Unique designs crafted specifically for you—from concept to completion.",
            icon: <Star className="w-8 h-8 text-primary" />
          }, {
            title: "Art Commissions",
            description: "Pencil sketches, paintings, and mixed media artwork for your space.",
            icon: <ImageIcon className="w-8 h-8 text-primary" />
          }, {
            title: "Professional Care",
            description: "Hygienic practices and comprehensive aftercare guidance.",
            icon: <Users className="w-8 h-8 text-primary" />
          }].map((service, index) => <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-foreground animate-fade-up">
            Ready to Get Your <span className="text-primary">Dream Tattoo?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up">
            Book your consultation today and let's bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;