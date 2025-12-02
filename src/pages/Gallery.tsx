import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import tattooGeometric from "@/assets/tattoo-geometric.png";
import tattooDadMom from "@/assets/tattoo-dadmom.png";
import tattooWolf from "@/assets/tattoo-wolf.png";
import tattooWing from "@/assets/tattoo-wing.png";
import portraitTattoo1 from "@/assets/portrait-tattoo-1.jpg";
import portraitTattoo2 from "@/assets/portrait-tattoo-2.jpg";
import portraitTattoo3 from "@/assets/portrait-tattoo-3.jpg";
import portraitTattoo4 from "@/assets/portrait-tattoo-4.jpg";
import tribalBandTattoo1 from "@/assets/tribal-band-tattoo-1.jpg";
import tribalBandTattoo2 from "@/assets/tribal-band-tattoo-2.jpg";
import tribalBandTattoo3 from "@/assets/tribal-band-tattoo-3.jpg";
import tribalBandTattoo4 from "@/assets/tribal-band-tattoo-4.jpg";
import coverUpTattoo1 from "@/assets/cover-up-tattoo-1.jpg";
import coverUpTattoo2 from "@/assets/cover-up-tattoo-2.jpg";
import coverUpTattoo3 from "@/assets/cover-up-tattoo-3.jpg";
import coverUpTattoo4 from "@/assets/cover-up-tattoo-4.jpg";
import colorTattoo1 from "@/assets/color-tattoo-1.jpg";
import colorTattoo2 from "@/assets/color-tattoo-2.jpg";
import colorTattoo3 from "@/assets/color-tattoo-3.jpg";
import colorTattoo4 from "@/assets/color-tattoo-4.jpg";
import colorTattoo5 from "@/assets/color-tattoo-5.jpg";
import colorTattoo6 from "@/assets/color-tattoo-6.jpg";
import colorTattoo7 from "@/assets/color-tattoo-7.jpg";
import colorTattoo8 from "@/assets/color-tattoo-8.jpg";
import colorTattoo9 from "@/assets/color-tattoo-9.jpg";
import colorTattoo10 from "@/assets/color-tattoo-10.jpg";
import colorTattoo11 from "@/assets/color-tattoo-11.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Realism", "Geometric", "Animal", "Portrait", "Tribal", "CoverUp", "Color"];
  
  const galleryItems = [{
    image: tattooWolf,
    category: "Realism",
    title: "Wolf Portrait",
    type: "Animal"
  }, {
    image: tattooGeometric,
    category: "Geometric",
    title: "Sacred Geometry",
    type: "Geometric"
  }, {
    image: tattooDadMom,
    category: "Realism",
    title: "Family Tribute",
    type: "Realism"
  }, {
    image: tattooWing,
    category: "Animal",
    title: "Wing Symbol",
    type: "Animal"
  }, {
    image: tattooWolf,
    category: "Animal",
    title: "Wildlife Art",
    type: "Animal"
  }, {
    image: tattooGeometric,
    category: "Geometric",
    title: "Triangle Design",
    type: "Geometric"
  }, {
    image: tattooDadMom,
    category: "Realism",
    title: "Script Art",
    type: "Realism"
  }, {
    image: tattooWing,
    category: "Animal",
    title: "Feather Detail",
    type: "Animal"
  }, {
    image: portraitTattoo1,
    category: "Portrait",
    title: "Realistic Portrait 1",
    type: "Portrait"
  }, {
    image: portraitTattoo2,
    category: "Portrait",
    title: "Realistic Portrait 2",
    type: "Portrait"
  }, {
    image: portraitTattoo3,
    category: "Portrait",
    title: "Realistic Portrait 3",
    type: "Portrait"
  }, {
    image: portraitTattoo4,
    category: "Portrait",
    title: "Realistic Portrait 4",
    type: "Portrait"
  }, {
    image: tribalBandTattoo1,
    category: "Tribal",
    title: "Tribal Band Design 1",
    type: "Tribal"
  }, {
    image: tribalBandTattoo2,
    category: "Tribal",
    title: "Tribal Band Design 2",
    type: "Tribal"
  }, {
    image: tribalBandTattoo3,
    category: "Tribal",
    title: "Tribal Band Design 3",
    type: "Tribal"
  }, {
    image: tribalBandTattoo4,
    category: "Tribal",
    title: "Tribal Band Design 4",
    type: "Tribal"
  }, {
    image: coverUpTattoo1,
    category: "CoverUp",
    title: "Cover Up Design 1",
    type: "CoverUp"
  }, {
    image: coverUpTattoo2,
    category: "CoverUp",
    title: "Cover Up Design 2",
    type: "CoverUp"
  }, {
    image: coverUpTattoo3,
    category: "CoverUp",
    title: "Cover Up Design 3",
    type: "CoverUp"
  }, {
    image: coverUpTattoo4,
    category: "CoverUp",
    title: "Cover Up Design 4",
    type: "CoverUp"
  }, {
    image: colorTattoo1,
    category: "Color",
    title: "Color Design 1",
    type: "Color"
  }, {
    image: colorTattoo2,
    category: "Color",
    title: "Color Design 2",
    type: "Color"
  }, {
    image: colorTattoo3,
    category: "Color",
    title: "Color Design 3",
    type: "Color"
  }, {
    image: colorTattoo4,
    category: "Color",
    title: "Color Design 4",
    type: "Color"
  }, {
    image: colorTattoo5,
    category: "Color",
    title: "Color Design 5",
    type: "Color"
  }, {
    image: colorTattoo6,
    category: "Color",
    title: "Color Design 6",
    type: "Color"
  }, {
    image: colorTattoo7,
    category: "Color",
    title: "Color Design 7",
    type: "Color"
  }, {
    image: colorTattoo8,
    category: "Color",
    title: "Color Design 8",
    type: "Color"
  }, {
    image: colorTattoo9,
    category: "Color",
    title: "Color Design 9",
    type: "Color"
  }, {
    image: colorTattoo10,
    category: "Color",
    title: "Color Design 10",
    type: "Color"
  }, {
    image: colorTattoo11,
    category: "Color",
    title: "Color Design 11",
    type: "Color"
  }];
  
  const filteredItems = selectedCategory === "All" ? galleryItems : galleryItems.filter(item => item.category === selectedCategory || item.type === selectedCategory);
  
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Tattoo <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our diverse portfolio showcasing custom tattoos, from bold realism to delicate minimal designs
            </p>
            
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map(category => <Button key={category} onClick={() => setSelectedCategory(category)} variant={selectedCategory === category ? "default" : "outline"} className={selectedCategory === category ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-border text-foreground hover:border-primary hover:text-primary"}>
                {category}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => <Card key={index} className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer animate-fade-up" style={{
            animationDelay: `${index * 50}ms`
          }}>
                <div className="aspect-square relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                      <p className="text-primary text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Create Your <span className="text-primary">Masterpiece?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a consultation to discuss your tattoo idea with our experienced artists
            </p>
            <a href="https://wa.me/917406008294?text=Hi! I'd like to book a consultation for a tattoo." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>;
};

export default Gallery;