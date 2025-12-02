import { Palette, Heart, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import artistWorking from "@/assets/artist-working.png";
import raamImage from "@/assets/raam.jpg";
import dcImage from "@/assets/dc.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">DC Art & Tattoo Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where passion for art meets precision in tattooing—creating masterpieces on skin since years
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                DC Art & Tattoo Studio was born from a deep passion for both fine art and body art. Located in the heart of Padmanabhanagar, Bengaluru, we've built a reputation as one of the area's most trusted and creative tattoo studios.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What sets us apart is our commitment to treating every tattoo as a unique piece of art. Whether it's a bold realism portrait, delicate minimal linework, or a meaningful couple's tattoo, we approach each project with the same level of artistic dedication and technical precision.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our perfect 5.0★ rating from 241+ clients reflects not just our artistic skills, but our friendly approach, reasonable pricing, and unwavering commitment to client satisfaction.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <img
                src={dcImage}
                alt="DC Art & Tattoo Studio"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Artists</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented artists behind DC Art & Tattoo Studio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Geetha D C */}
            <div className="animate-fade-up">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={artistWorking}
                  alt="Geetha D C"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Geetha D C</h3>
              <div className="flex items-center mb-4">
                <span className="text-primary font-semibold">Lead Artist & Founder</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-primary font-bold text-lg">5+ yrs</p>
                  <p className="text-muted-foreground text-sm">Tattoo Experience</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-primary font-bold text-lg">10+ yrs</p>
                  <p className="text-muted-foreground text-sm">Art Experience</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">
                With 5+ years specializing in tattoo artistry and over a decade in fine arts, Geetha D C is the creative force behind DC Art & Tattoo Studio. Her journey began with traditional art forms and evolved into mastering the delicate art of skin illustration.
              </p>
              <p className="text-muted-foreground">
                Geetha's expertise spans realism portraits, intricate linework, and custom designs that tell your unique story. Her meticulous attention to detail and deep understanding of color theory ensure each tattoo is not just ink on skin, but a lifelong masterpiece that ages beautifully.
              </p>
            </div>

            {/* Ram */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={raamImage}
                  alt="Ram"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Ram</h3>
              <div className="flex items-center mb-4">
                <span className="text-primary font-semibold">Senior Tattoo Artist</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-primary font-bold text-lg">7+ yrs</p>
                  <p className="text-muted-foreground text-sm">Tattoo Experience</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-primary font-bold text-lg">12+ yrs</p>
                  <p className="text-muted-foreground text-sm">Art Experience</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">
                Ram brings over 7 years of dedicated tattoo expertise and more than 12 years in diverse artistic disciplines. His artistic journey encompasses traditional art forms, digital design, and specialized tattoo techniques that blend seamlessly in his work.
              </p>
              <p className="text-muted-foreground">
                Specializing in geometric designs, blackwork, and vibrant color compositions, Ram is known for his precision, creativity, and ability to translate abstract concepts into stunning visual realities. His client-focused approach ensures every tattoo reflects your personal vision while maintaining artistic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every tattoo we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Palette className="w-10 h-10 text-primary" />,
                title: "Artistic Excellence",
                description: "Every tattoo is a unique masterpiece, crafted with precision and creativity.",
              },
              {
                icon: <Heart className="w-10 h-10 text-primary" />,
                title: "Client-Centered",
                description: "Friendly artists who listen to your vision and bring it to life perfectly.",
              },
              {
                icon: <Shield className="w-10 h-10 text-primary" />,
                title: "Safety First",
                description: "Highest hygiene standards with sterilized equipment and professional practices.",
              },
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "5-Star Quality",
                description: "Our perfect rating reflects our commitment to excellence in every project.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diverse artistic skills to bring any vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Tattoos",
                description: "Black & grey, color, realism, minimal, portrait, geometric—we do it all with precision.",
              },
              {
                title: "Piercing Services",
                description: "Professional body piercing with sterile equipment and expert technique.",
              },
              {
                title: "Pencil Sketches",
                description: "Detailed portrait and custom sketch work for personal keepsakes or gifts.",
              },
              {
                title: "Paintings",
                description: "Original artwork and commissioned pieces in various styles and mediums.",
              },
              {
                title: "Mixed Media Art",
                description: "Innovative combinations of techniques and materials for unique artistic expressions.",
              },
              {
                title: "Dream Catcher Art",
                description: "Handcrafted dream catchers with intricate designs and personal symbolism.",
              },
            ].map((expertise, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">{expertise.title}</h3>
                <p className="text-muted-foreground text-sm">{expertise.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              "A tattoo is more than just ink on skin—it's a story, a memory, a piece of art you carry forever. That's why we treat every client and every design with the respect and attention it deserves."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At DC Art & Tattoo Studio, we believe in combining artistic vision with technical mastery, creating tattoos that not only look stunning but also stand the test of time. Our friendly artists work closely with you from concept to completion, ensuring your tattoo exceeds your expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;