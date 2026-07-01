export const navItems = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Current Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const projects = [
  {
    title: "Roselle Residential Renovation",
    category: "In Progress",
    location: "Roselle, New Jersey",
    image: "/projects/roselle-nj/exterior-current.jpeg"
  }
];

export const roselleProject = {
  title: "Roselle Residential Renovation",
  location: "Roselle, New Jersey",
  status: "In Progress",
  type: "Residential Renovation",
  description:
    "A full residential transformation currently underway in Roselle, New Jersey. The project includes a reworked living area, updated bedrooms, and a completely refreshed exterior.",
  sections: [
    {
      title: "Living Area",
      description: "The main living space is being opened, rebuilt, and prepared for its final finishes.",
      photos: [
        { src: "/projects/roselle-nj/living-area-current.jpeg", alt: "Living area with finished walls and new ceiling lighting in progress" },
        { src: "/projects/roselle-nj/living-area-progress.jpeg", alt: "Living area opened to framing during renovation" }
      ]
    },
    {
      title: "Bedrooms",
      description: "Bedroom work progressing from the exposed structure through new drywall and ceiling preparation.",
      photos: [
        { src: "/projects/roselle-nj/bedroom-framing.jpeg", alt: "Bedroom stripped to framing during renovation" },
        { src: "/projects/roselle-nj/bedroom-drywall.jpeg", alt: "Bedroom with newly installed drywall in progress" }
      ]
    },
    {
      title: "Exterior",
      description: "The exterior transformation introduces a modern material palette, new windows, and a renewed street presence.",
      photos: [
        { src: "/projects/roselle-nj/exterior-before.jpeg", alt: "Roselle home exterior before the new facade installation" },
        { src: "/projects/roselle-nj/exterior-current.jpeg", alt: "Roselle home with modern exterior renovation in progress" }
      ]
    }
  ]
};

export const contactDetails = {
  phone: "(555) 214-8097",
  email: "info@trproperties.com",
  address: "123 Business Avenue, Your City, ST 00000"
};
