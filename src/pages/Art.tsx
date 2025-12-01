import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ArtCategoryKey =
  | "wallArt"
  | "customised"
  | "handPaintings"
  | "acrylic"
  | "oil"
  | "water"
  | "allArtMaterial"
  | "sketches"
  | "bloodArt"
  | "pencilSketch"
  | "colourPencilSketch";

type ArtCategory = {
  id: ArtCategoryKey;
  title: string;
  subtitle?: string;
  description: string;
  accent: string;
  images: string[];
};

const categories: ArtCategory[] = [
  {
    id: "wallArt",
    title: "Wall Art",
    subtitle: "Statement pieces for bold spaces",
    description:
      "Large-scale artworks that transform your walls into immersive stories with texture, depth, and rich color.",
    accent: "from-red-500 via-red-400 to-rose-400",
    images: [
      "/art/wall-art/wall-art-1.jpg",
      "/art/wall-art/wall-art-2.jpg",
      "/art/wall-art/wall-art-3.jpg",
      "/art/wall-art/wall-art-4.jpg",
      "/art/wall-art/wall-art-5.jpg",
      "/art/wall-art/wall-art-6.jpg",
      "/art/wall-art/wall-art-7.jpg",
      "/art/wall-art/wall-art-8.jpg",
    ],
  },
  {
    id: "customised",
    title: "Customised Art",
    subtitle: "Made just for you",
    description:
      "One-of-one concepts designed around your story, space, and personality – from intimate pieces to large commissions.",
    accent: "from-amber-500 via-orange-400 to-red-400",
    images: [
      "/art/customised/customised-1.jpg",
      "/art/customised/customised-2.jpg",
      "/art/customised/customised-3.jpg",
      "/art/customised/customised-4.jpg",
      "/art/customised/customised-5.jpg",
      "/art/customised/customised-6.jpg",
      "/art/customised/customised-7.jpg",
      "/art/customised/customised-8.jpg",
    ],
  },
  {
    id: "handPaintings",
    title: "Hand Paintings",
    subtitle: "Pure hand-crafted detail",
    description:
      "Traditional hand-painted work with visible brush strokes, textures, and character in every inch.",
    accent: "from-rose-500 via-pink-400 to-fuchsia-400",
    images: [
      "/art/hand-paintings/hand-painting-1.jpg",
      "/art/hand-paintings/hand-painting-2.jpg",
      "/art/hand-paintings/hand-painting-3.jpg",
      "/art/hand-paintings/hand-painting-4.jpg",
      "/art/hand-paintings/hand-painting-5.jpg",
      "/art/hand-paintings/hand-painting-6.jpg",
      "/art/hand-paintings/hand-painting-7.jpg",
      "/art/hand-paintings/hand-painting-8.jpg",
    ],
  },
  {
    id: "acrylic",
    title: "Acrylic",
    subtitle: "Bold color & texture",
    description:
      "Fast-drying, vibrant acrylics ideal for expressive, layered artworks with strong contrasts and modern energy.",
    accent: "from-sky-500 via-cyan-400 to-teal-400",
    images: [
      "/art/acrylic/acrylic-1.jpg",
      "/art/acrylic/acrylic-2.jpg",
      "/art/acrylic/acrylic-3.jpg",
      "/art/acrylic/acrylic-4.jpg",
      "/art/acrylic/acrylic-5.jpg",
      "/art/acrylic/acrylic-6.jpg",
      "/art/acrylic/acrylic-7.jpg",
      "/art/acrylic/acrylic-8.jpg",
    ],
  },
  {
    id: "oil",
    title: "Oil Paintings",
    subtitle: "Classic & timeless depth",
    description:
      "Rich, layered oil works with smooth blends, high detail, and a timeless fine-art finish.",
    accent: "from-emerald-500 via-lime-400 to-amber-300",
    images: [
      "/art/oil/oil-1.jpg",
      "/art/oil/oil-2.jpg",
      "/art/oil/oil-3.jpg",
      "/art/oil/oil-4.jpg",
      "/art/oil/oil-5.jpg",
      "/art/oil/oil-6.jpg",
      "/art/oil/oil-7.jpg",
      "/art/oil/oil-8.jpg",
    ],
  },
  {
    id: "water",
    title: "Watercolour",
    subtitle: "Soft, atmospheric washes",
    description:
      "Delicate transparencies, gradients, and organic textures for dreamy, fluid compositions.",
    accent: "from-indigo-500 via-blue-400 to-sky-400",
    images: [
      "/art/watercolour/watercolour-1.jpg",
      "/art/watercolour/watercolour-2.jpg",
      "/art/watercolour/watercolour-3.jpg",
      "/art/watercolour/watercolour-4.jpg",
      "/art/watercolour/watercolour-5.jpg",
      "/art/watercolour/watercolour-6.jpg",
      "/art/watercolour/watercolour-7.jpg",
      "/art/watercolour/watercolour-8.jpg",
    ],
  },
  {
    id: "allArtMaterial",
    title: "All Art Material",
    subtitle: "Complete creative toolkit",
    description:
      "From canvases and brushes to specialty inks and tools – everything needed to bring complex concepts to life.",
    accent: "from-fuchsia-500 via-purple-400 to-indigo-400",
    images: [
      "/art/all-art-material/all-art-material-1.jpg",
      "/art/all-art-material/all-art-material-2.jpg",
      "/art/all-art-material/all-art-material-3.jpg",
      "/art/all-art-material/all-art-material-4.jpg",
      "/art/all-art-material/all-art-material-5.jpg",
      "/art/all-art-material/all-art-material-6.jpg",
      "/art/all-art-material/all-art-material-7.jpg",
      "/art/all-art-material/all-art-material-8.jpg",
    ],
  },
  {
    id: "sketches",
    title: "Sketches",
    subtitle: "Raw ideas & concepts",
    description:
      "Freehand explorations that capture movement, proportion, and character before final execution.",
    accent: "from-slate-500 via-slate-400 to-zinc-300",
    images: [
      "/art/sketches/sketch-1.jpg",
      "/art/sketches/sketch-2.jpg",
      "/art/sketches/sketch-3.jpg",
      "/art/sketches/sketch-4.jpg",
      "/art/sketches/sketch-5.jpg",
      "/art/sketches/sketch-6.jpg",
      "/art/sketches/sketch-7.jpg",
    ],
  },
  {
    id: "bloodArt",
    title: "Blood Art",
    subtitle: "Conceptual & experimental",
    description:
      "Powerful experimental pieces that play with symbolism, contrast, and emotion in unconventional mediums.",
    accent: "from-red-700 via-red-500 to-rose-500",
    images: [
      "/art/blood-art/blood-art-1.jpg",
      "/art/blood-art/blood-art-2.jpg",
      "/art/blood-art/blood-art-3.jpg",
      "/art/blood-art/blood-art-4.jpg",
      "/art/blood-art/blood-art-5.jpg",
      "/art/blood-art/blood-art-6.jpg",
      "/art/blood-art/blood-art-7.jpg",
    ],
  },
  {
    id: "pencilSketch",
    title: "Pencil Sketch",
    subtitle: "Monochrome precision",
    description:
      "Clean graphite work with sharp detailing and strong control over light, shade, and expression.",
    accent: "from-neutral-500 via-zinc-500 to-stone-400",
    images: [
      "/art/pencil-sketch/pencil-sketch-1.jpg",
      "/art/pencil-sketch/pencil-sketch-2.jpg",
      "/art/pencil-sketch/pencil-sketch-3.jpg",
      "/art/pencil-sketch/pencil-sketch-4.jpg",
      "/art/pencil-sketch/pencil-sketch-5.jpg",
      "/art/pencil-sketch/pencil-sketch-6.jpg",
      "/art/pencil-sketch/pencil-sketch-7.jpg",
    ],
  },
  {
    id: "colourPencilSketch",
    title: "Colour Pencil Sketch",
    subtitle: "Soft color & fine detail",
    description:
      "Layered colored-pencil illustrations that mix sketch energy with vivid palettes and smooth blending.",
    accent: "from-orange-400 via-red-400 to-pink-400",
    images: [
      "/art/colour-pencil-sketch/colour-pencil-sketch-1.jpg",
      "/art/colour-pencil-sketch/colour-pencil-sketch-2.jpg",
      "/art/colour-pencil-sketch/colour-pencil-sketch-3.jpg",
      "/art/colour-pencil-sketch/colour-pencil-sketch-4.jpg",
      "/art/colour-pencil-sketch/colour-pencil-sketch-5.jpg",
      "/art/colour-pencil-sketch/colour-pencil-sketch-6.jpg",
      "/art/colour-pencil-sketch/colour-pencil-sketch-7.jpg",
    ],
  },
];

const Art = () => {
  const [activeCategory, setActiveCategory] = useState<ArtCategoryKey>("wallArt");

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-charcoal to-background">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Fine Art Collection
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Explore Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              Art Gallery
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A curated showcase of original artwork across multiple mediums – from bold wall art to
            intimate pencil sketches. Each section highlights a different side of our creative
            practice.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-gold hover:bg-gold-light text-background shadow-lg shadow-red-500/30"
                    : "border-border text-foreground hover:border-gold hover:text-gold bg-charcoal"
                }
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Active category detail */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 items-start">
            {/* Text panel */}
            <div className="space-y-6 animate-fade-up">
              <div
                className={`rounded-3xl border border-border bg-gradient-to-br ${current.accent} p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.7)]`}
              >
                <div className="rounded-3xl bg-gradient-to-b from-charcoal/95 via-background/95 to-charcoal/90 px-6 py-7 md:px-8 md:py-9">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    {current.subtitle ?? "Art Category"}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {current.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="rounded-2xl bg-charcoal/80 border border-border/60 p-4 backdrop-blur">
                  <p className="font-semibold text-foreground mb-1">Ideal for</p>
                  <p>
                    Homes, studios, and commercial spaces that want a{" "}
                    <span className="text-gold">strong artistic identity</span>.
                  </p>
                </div>
                <div className="rounded-2xl bg-charcoal/80 border border-border/60 p-4 backdrop-blur">
                  <p className="font-semibold text-foreground mb-1">Commission Options</p>
                  <p>
                    Fully custom sizes, concepts, and color palettes to match your{" "}
                    <span className="text-gold">interior or brand.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-gradient-to-r from-background/80 via-charcoal/80 to-background/80 p-5 flex flex-col gap-3">
                <p className="text-sm text-muted-foreground">
                  Looking for a specific idea or size? Share your wall, reference photos, or theme –
                  we’ll design a{" "}
                  <span className="text-gold font-semibold">personalised art concept</span> around
                  it.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/917406008294?text=Hi! I'd like to discuss a custom art piece."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-gold hover:bg-gold-light text-background">
                      Book Art Consultation
                    </Button>
                  </a>
                  <a href="tel:07406008294">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-background"
                    >
                      Call Studio
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 animate-fade-up">
              {current.images.map((src, index) => (
                <Card
                  key={src}
                  className="group overflow-hidden bg-card/80 border-border/70 hover:border-gold transition-all duration-300 cursor-zoom-in backdrop-blur"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={src}
                      alt={`${current.title} artwork ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index > 3 ? "lazy" : "eager"}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Art;