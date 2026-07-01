import { Project, ServiceItem, Testimonial } from '../types';

export const DESIGNER_INFO = {
  name: "Muhammad Zakir Hussain",
  role: "Graphic Designer & UI/UX Designer",
  email: "zak2009graphicsstudio@gmail.com",
  phone: "+92 309 8780320",
  whatsappNumber: "923098780320",
  location: "Karachi, Pakistan",
  bio: "Creative Graphic & UI/UX Designer with over 1+ years of experience transforming brand ideas into visual masterpieces. Specializing in high-converting promotional flyers, clean UI/UX digital products, vector typography, and full-stack brand identity.",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Design Rating", value: "4.9/5" }
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/m-zakir-hussain-354151419",
    instagram: "https://www.instagram.com/zak2009graphicsstudio?utm_source=qr&igsh=a3g1cmphZGttMjgz",
    facebook: "https://www.facebook.com/share/1D71jKuuGr/",
    behance: "https://www.behance.net/mrzakzak2009"
  },
  skills: [
    { name: "Promotional Flyers & Posters", level: 98, color: "#22D3EE" },
    { name: "UI/UX Mobile & Web App Design", level: 94, color: "#38BDF8" },
    { name: "Brand Identity & Logo Design", level: 96, color: "#3B82F6" },
    { name: "Social Media Campaign Banners", level: 99, color: "#6366F1" },
    { name: "Print & Packaging Design", level: 92, color: "#8B5CF6" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Social Media Flyers & Ad Banners",
    description: "High-impact, conversion-focused promotional flyers for Instagram, Facebook, and LinkedIn ad campaigns.",
    iconName: "Layout",
    deliverables: ["High-Res JPEG/PNG", "Layered PSD/AI Source Files", "Multiple Size Formats", "Custom Typography"],
    turnaround: "24 - 48 Hours",
    accentColor: "#22D3EE"
  },
  {
    id: "srv-2",
    title: "UI/UX Design for Web & Mobile",
    description: "Modern, intuitive, and user-centric wireframes and interactive prototypes in Figma for web platforms and mobile apps.",
    iconName: "Smartphone",
    deliverables: ["Interactive Figma Prototype", "Design System & UI Kit", "Responsive Layouts", "Developer Handoff Ready"],
    turnaround: "3 - 7 Days",
    accentColor: "#38BDF8"
  },
  {
    id: "srv-3",
    title: "Brand Identity & Logo Monograms",
    description: "Distinctive, memorable logos and complete brand guidelines that give your business a commanding market presence.",
    iconName: "Feather",
    deliverables: ["Vector Logo (AI, EPS, SVG)", "Color Palette & Typography", "Brand Brandbook PDF", "Social Media Mockups"],
    turnaround: "2 - 4 Days",
    accentColor: "#3B82F6"
  },
  {
    id: "srv-4",
    title: "Print Design (Brochures & Cards)",
    description: "CMYK print-ready designs for corporate flyers, tri-fold brochures, business cards, and event banners.",
    iconName: "Printer",
    deliverables: ["Print-Ready Bleed PDF", "CMYK Color Optimization", "Die-Cut Templates", "Custom Print Guidelines"],
    turnaround: "2 - 3 Days",
    accentColor: "#6366F1"
  },
  {
    id: "srv-5",
    title: "Product Packaging & Labels",
    description: "Eye-catching food bakery menus, product labels, and retail box packaging that stand out on retail shelves.",
    iconName: "Package",
    deliverables: ["3D Box Mockups", "Print Label Dieline", "High-Resolution Assets", "Commercial Licensing"],
    turnaround: "3 - 5 Days",
    accentColor: "#8B5CF6"
  },
  {
    id: "srv-6",
    title: "Visual Photo Manipulation & Retouch",
    description: "Advanced Photoshop retouching, background removal, color grading, and creative composite artwork.",
    iconName: "Palette",
    deliverables: ["Flawless Color Balance", "HDR Lighting Enhancement", "Clean Cutouts", "Ultra HD Export"],
    turnaround: "1 - 2 Days",
    accentColor: "#22D3EE"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p-1",
    title: "Logo Design for Ascend Style Fashion Brand",
    category: "Logo Design",
    description: "Sleek and modern logo design featuring a stylized 'A' with gradient teal and gold accents, representing elegance and upward growth.",
    imageUrl: "/images/Logos/Logo_Design.jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Logo Design", "Brand Identity", "Modern"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 142,
    views: 1250
  },
  {
    id: "p-2",
    title: "Verma Designs Logo",
    category: "Logo Design",
    description: "Executive corporate summit promotional poster featuring modern city skylines, sharp typography, and magenta accents.",
    imageUrl: "/images/Logos/Logo_Design (1).jpeg",
    tools: ["Photoshop", "InDesign"],
    year: "2026",
    tags: ["Event Banner", "Conference", "Corporate"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 289,
    views: 3410
  },
  {
    id: "p-3",
    title: "Furniture & Home Decor Banner Design",
    category: "Flyers & Banners",
    description: "Vibrant promotional banner for a furniture and home decor sale, featuring a modern living room setup with bold typography and a 50% off callout.",
    imageUrl: "/images/Banners/Banner_Design (1).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Home Decor", "Furniture Sale", "Promotional Banner"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 198,
    views: 2100
  },
  {
    id: "p-4",
    title: "Study Abroad Visa Social Media Ad Banner",
    category: "Social Media",
    description: "Study abroad in Canada | UK | USA. Social media carousel ad banner and student lifestyle imagery for a global education campaign.",
    imageUrl: "/images/Banners/Banner_Design (2).jpeg",
    tools: ["Photoshop", "Figma"],
    year: "2025",
    tags: ["Study Abroad", "Visa Campaign", "Social Media Ad"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 165,
    views: 1890
  },
  {
    id: "p-5",
    title: "Business Card Design for Blue Cloud Solutions",
    category: "Business Cards",
    description: "Professional business card design with a clean layout, modern typography, and a subtle cloud motif to represent the tech solutions company.",
    imageUrl: "/images/Business Cards/Business_Card (1).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Business Card", "Corporate Identity", "Tech Solutions"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 310,
    views: 4200
  },
  {
    id: "p-6",
    title: "Business Card Design",
    category: "Business Cards",
    description: "Circular business card design with a modern geometric pattern, bold typography, and a vibrant color palette for a creative professional.",
    imageUrl: "/images/Business Cards/Business_Card (2).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Business Card", "Business Card Template", "Circular Design"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 215,
    views: 2650
  },
  {
    id: "p-7",
    title: "Pizza House 50% Off Special Promo",
    category: "Flyers & Banners",
    description: "Mouthwatering dark food advertising poster with high-contrast red callouts, custom badge typography, and 2x1 special deals.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    tools: ["Photoshop", "Lightroom"],
    year: "2025",
    tags: ["Food Menu", "Restaurant Ad", "Typography"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 420,
    views: 5800
  },
  {
    id: "p-8",
    title: "Build Your Perfect Body Gym Poster",
    category: "Flyers & Banners",
    description: "Dynamic fitness promotional poster with muscular athlete imagery, bold neon typography, and a dark gradient background for maximum impact.",
    imageUrl: "/images/Banners/Banner_Design (10).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Gym Poster", "Fitness Flyer", "Dark Theme"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 378,
    views: 4900
  },
  {
    id: "p-9",
    title: "CARTO LOGO",
    category: "Logo Design",
    description: "Minimalist monogram logo design featuring a stylized 'C' intertwined with a clean geometric frame, perfect for modern retail branding.",
    imageUrl: "/images/Logos/Logo_Design (5).jpeg",
    tools: ["Illustrator", "Photoshop"],
    year: "2025",
    tags: ["Logo Design", "Retail", "Monogram"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 245,
    views: 3100
  },
  {
    id: "p-10",
    title: "YETIGFX",
    category: "Logo Design",
    description: "Futuristic polygonal logo design with vibrant gradient colors, sharp geometric edges, and a 3D metallic finish for a tech-savvy brand identity.",
    imageUrl: "/images/Logos/Logo_Design (4).jpeg",
    tools: ["Illustrator", "Photoshop"],
    year: "2025",
    tags: ["Logo Design", "3D Logo", "Futuristic"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 184,
    views: 2240
  },
  {
    id: "p-11",
    title: "Quality Workouts With a Goal Gym Ad",
    category: "Flyers & Banners",
    description: "High-energy fitness promotional poster with a muscular athlete in action, bold neon typography, and a dark gradient background for maximum visual impact.",
    imageUrl: "/images/Banners/Banner_Design (15).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Print Poster", "Curved Vector", "Fitness"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 195,
    views: 2400
  },
  {
    id: "p-12",
    title: "The Famous Cookie Jar Bakery Menu",
    category: "Social Media",
    description: "Warm artisanal textured beige poster with floating double chocolate cookies, wheat gluten-free badges, and rich brown typography.",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    tools: ["Photoshop", "Figma"],
    year: "2025",
    tags: ["Bakery Ad", "Food Styling", "Warm Texture"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 512,
    views: 7200
  },
  {
    id: "p-13",
    title: "YUM Burger & Fries Promotional Banner",
    category: "Flyers & Banners",
    description: "Exciting promotional ad banner for YUM Burger & Fries, featuring mouth-watering food imagery and bold call-to-action text.",
    imageUrl: "/images/Banners/Banner_Design (7).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Fast Food", "Promotional Banner", "Food Marketing"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 468,
    views: 6100
  },
  {
    id: "p-14",
    title: "Exclusive clothing collection fashion flyer",
    category: "Flyers & Banners",
    description: "Bold and minimalist fashion sale flyer featuring a model in a sleek outfit, with clean typography and a striking color palette for maximum visual impact.",
    imageUrl: "/images/Banners/Banner_Design (5).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Fashion Flyer", "Clothing Sale", "Minimalist Design"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 395,
    views: 5200
  },
  {
    id: "p-15",
    title: "Travel & Tourism Adventure Logo",
    category: "Logo Design",
    description: "Elegant monogram logo featuring a stylized 'T' and 'A' intertwined with a modern travel silhouette, perfect for tourism branding.",
    imageUrl: "/images/Logos/Logo_Design (3).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Travel", "Tourism", "Logo Design"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 275,
    views: 3800
  },
  {
    id: "p-16",
    title: "Business Card Template",
    category: "Business Cards",
    description: "Sleek and professional business card template with a modern layout, clean typography, and a subtle geometric pattern for corporate branding.",
    imageUrl: "/images/Business Cards/Business_Card (3).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Business Card", "Corporate Identity", "Modern Design"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 340,
    views: 4500
  },
  {
    id: "p-18",
    title: "Car Wash & Detailing Service Banner",
    category: "Social Media",
    description: "Sleek and modern car wash promotional banner featuring a shiny vehicle, water splash effects, and bold typography for maximum visual impact.",
    imageUrl: "/images/Banners/Banner_Design (3).jpeg",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
    tags: ["Car Wash", "Promotional", "Modern Design"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 318,
    views: 4100
  },
  {
    id: "p-19",
    title: "Real Estate Property Showcase Logo",
    category: "Logo Design",
    description: "Elegant monogram logo featuring a stylized 'R' and 'E' intertwined with a modern house silhouette, perfect for real estate branding.",
    imageUrl: "/images/Logos/Logo_Design (2).jpeg",
    tools: ["Illustrator", "Photoshop"],
    year: "2026",
    tags: ["Logo Design", "Real Estate", "Monogram"],
    behanceUrl: "https://www.behance.net/mrzakzak2009",
    likes: 650,
    views: 9200
  }
];