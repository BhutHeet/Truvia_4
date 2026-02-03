export interface Product {
  id: string;
  name: string;
  series: string;
  seriesSlug: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Series {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  tagline: string;
  products: Product[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  series: Series[];
}

// Image configuration for standard series products
const productImageConfig: Record<
  string,
  {
    folder: string;
    files: Record<string, string>;
  }
> = {
  "aura-series": {
    folder: "Aura Series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body bib cock.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "Long Body foam flow.png",
      "Angle Cock": "Angle cock.png",
      "Washing Machine Cock": "Washing machine cock.png",
      "Nozzle Cock": "Nozzle cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2 way bib cock.png",
      "2-Way Angle Cock": "2 way angle cock.png",
    },
  },
  "fusion-series": {
    folder: "Fusion series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body bib cock.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "long body foam flow.png",
      "Angle Cock": "Angle cock.png",
      "Washing Machine Cock": "Washing machine cock.png",
      "Nozzle Cock": "Nozzle cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2-way bib cock.png",
      "2-Way Angle Cock": "2-way angle cock.png",
    },
  },
  "charcoal-series": {
    folder: "Charcoal Series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "Long body foam flow.png",
      "Angle Cock": "Angle cock.png",
      "Washing Machine Cock": "Washing machine cock.png",
      "Nozzle Cock": "Nozzel cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2 way bib cock.png",
      "2-Way Angle Cock": "2 way angle cock.png",
    },
  },
  "royal-series": {
    folder: "Royal series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body bib cock.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "Long body foam flow.png",
      "Angle Cock": "angle cock.png",
      "Washing Machine Cock": "Washing machine.png",
      "Nozzle Cock": "Nozzle cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2 way bib cock.png",
      "2-Way Angle Cock": "2 way angle cock.png",
    },
  },
  "pprc-charcoal-series": {
    folder: "Charcoal Series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "Long body foam flow.png",
      "Angle Cock": "Angle cock.png",
      "Washing Machine Cock": "Washing machine cock.png",
      "Nozzle Cock": "Nozzel cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2 way bib cock.png",
      "2-Way Angle Cock": "2 way angle cock.png",
    },
  },
  "pprc-fusion-series": {
    folder: "Fusion series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body bib cock.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "long body foam flow.png",
      "Angle Cock": "Angle cock.png",
      "Washing Machine Cock": "Washing machine cock.png",
      "Nozzle Cock": "Nozzle cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2-way bib cock.png",
      "2-Way Angle Cock": "2-way angle cock.png",
    },
  },
  "pprc-royal-series": {
    folder: "Royal series",
    files: {
      "Short Body Bib Cock": "Short body bib cock.png",
      "Long Body Bib Cock": "Long body bib cock.png",
      "Short Body F/F Bib Cock": "Short body foam flow.png",
      "Long Body F/F Bib Cock": "Long body foam flow.png",
      "Angle Cock": "angle cock.png",
      "Washing Machine Cock": "Washing machine.png",
      "Nozzle Cock": "Nozzle cock.png",
      "Pillar Cock": "Pillar cock.png",
      "Sink Cock": "Sink cock.png",
      "Swan Neck": "Swan neck.png",
      "2-Way Bib Cock": "2 way bib cock.png",
      "2-Way Angle Cock": "2 way angle cock.png",
    },
  },
};

const getProductImage = (seriesSlug: string, productName: string): string | undefined => {
  const config = productImageConfig[seriesSlug];
  if (!config) return undefined;
  const fileName = config.files[productName];
  if (!fileName) return undefined;
  return `/assets/Products/${config.folder}/${fileName}`;
};

// Standard products for PTMT/PPRC series (12 products each)
const createStandardProducts = (seriesName: string, seriesSlug: string, prefix: string): Product[] => [
  {
    id: `${prefix}-1001`,
    name: "Short Body Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Compact and stylish short body bib cock with integrated wall flange for easy installation.",
    features: ["15MM Ceramic Spindle", "3 Years Warranty", "0% Drop", "Premium Finish"],
    image: getProductImage(seriesSlug, "Short Body Bib Cock"),
  },
  {
    id: `${prefix}-1002`,
    name: "Long Body Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Extended body bib cock perfect for filling buckets and large containers.",
    features: ["15MM Ceramic Spindle", "3 Years Warranty", "Extended Reach", "High Flow Rate"],
    image: getProductImage(seriesSlug, "Long Body Bib Cock"),
  },
  {
    id: `${prefix}-1003`,
    name: "Short Body F/F Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Short body bib cock with full flow design for maximum water output.",
    features: ["Full Flow Design", "3 Years Warranty", "Compact Design", "Drip-Free"],
    image: getProductImage(seriesSlug, "Short Body F/F Bib Cock"),
  },
  {
    id: `${prefix}-1004`,
    name: "Long Body F/F Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Long body bib cock with full flow for high water volume needs.",
    features: ["Full Flow Design", "Extended Reach", "3 Years Warranty", "High Performance"],
    image: getProductImage(seriesSlug, "Long Body F/F Bib Cock"),
  },
  {
    id: `${prefix}-1005`,
    name: "Angle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "High-quality angle cock for connecting water supply to fixtures.",
    features: ["90-Degree Angle", "Wall Flange Included", "High Flow Rate", "Durable Construction"],
    image: getProductImage(seriesSlug, "Angle Cock"),
  },
  {
    id: `${prefix}-1006`,
    name: "Washing Machine Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Specialized cock designed for washing machine water supply connections.",
    features: ["Washing Machine Compatible", "High Flow Rate", "Easy Connect", "3 Years Warranty"],
    image: getProductImage(seriesSlug, "Washing Machine Cock"),
  },
  {
    id: `${prefix}-1007`,
    name: "Nozzle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Nozzle cock with controlled water flow for precise applications.",
    features: ["Precise Control", "Durable Nozzle", "3 Years Warranty", "Easy Install"],
    image: getProductImage(seriesSlug, "Nozzle Cock"),
  },
  {
    id: `${prefix}-1008`,
    name: "Pillar Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Elegant pillar cock designed for wash basins with smooth water flow.",
    features: ["Basin Mounted", "Premium Finish", "Smooth Operation", "Long Lasting"],
    image: getProductImage(seriesSlug, "Pillar Cock"),
  },
  {
    id: `${prefix}-1009`,
    name: "Sink Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Swivel spout sink cock designed for kitchen use with 360-degree rotation.",
    features: ["Swivel Spout", "360° Rotation", "Kitchen Optimized", "Easy Cleaning"],
    image: getProductImage(seriesSlug, "Sink Cock"),
  },
  {
    id: `${prefix}-1010`,
    name: "Swan Neck",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Graceful swan neck faucet adding elegance to your wash basin.",
    features: ["Elegant Design", "High Arc", "360° Rotation", "Premium Finish"],
    image: getProductImage(seriesSlug, "Swan Neck"),
  },
  {
    id: `${prefix}-1011`,
    name: "2-Way Bib Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Dual outlet bib cock for connecting multiple fixtures from single water source.",
    features: ["Dual Outlets", "Individual Controls", "Space Saving", "3 Years Warranty"],
    image: getProductImage(seriesSlug, "2-Way Bib Cock"),
  },
  {
    id: `${prefix}-1012`,
    name: "2-Way Angle Cock",
    series: seriesName,
    seriesSlug: seriesSlug,
    description: "Dual outlet angle cock for versatile water distribution.",
    features: ["Dual Outlets", "90-Degree Angle", "High Flow Rate", "Durable"],
    image: getProductImage(seriesSlug, "2-Way Angle Cock"),
  },
];

export const categories: Category[] = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    description: "Premium quality PTMT taps with 15MM Ceramic Spindle and 3 Years Warranty",
    series: [
      {
        name: "Aura Series",
        slug: "aura-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Elegant and modern design with premium finish for contemporary bathrooms",
        tagline: "Elegance Redefined",
        products: createStandardProducts("Aura Series", "aura-series", "AUR"),
      },
      {
        name: "Fusion Series",
        slug: "fusion-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Perfect blend of style and functionality for modern homes",
        tagline: "Where Style Meets Function",
        products: createStandardProducts("Fusion Series", "fusion-series", "FUS"),
      },
      {
        name: "Charcoal Series",
        slug: "charcoal-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Bold charcoal finish with 15MM Ceramic Spindle and 3 Years Warranty",
        tagline: "Bold & Sophisticated",
        products: createStandardProducts("Charcoal Series", "charcoal-series", "CHR"),
      },
      {
        name: "Marble Series",
        slug: "marble-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Luxurious marble-finish taps with 15MM Rising Spindle and 3 Years Warranty",
        tagline: "Timeless Luxury",
        products: [
          {
            id: "MAR-1001",
            name: "Short Body Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Compact marble-finish short body bib cock with elegant design",
            features: ["15MM Rising Spindle", "3 Years Warranty", "0% Drop", "Marble Finish"],
            image: "/assets/Products/Marble series/Short body.png",
          },
          {
            id: "MAR-1002",
            name: "Long Body Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Extended marble-finish bib cock perfect for filling buckets",
            features: ["15MM Rising Spindle", "3 Years Warranty", "Extended Reach", "Marble Finish"],
            image: "/assets/Products/Marble series/Long body.png",
          },
          {
            id: "MAR-1003",
            name: "Angle Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "High-quality marble-finish angle cock for connecting water supply",
            features: ["90-Degree Angle", "Wall Flange Included", "Marble Finish", "3 Years Warranty"],
            image: "/assets/Products/Marble series/Angle.png",
          },
          {
            id: "MAR-1004",
            name: "Pillar Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Elegant marble-finish pillar cock for wash basins",
            features: ["Basin Mounted", "Premium Marble Finish", "Smooth Operation", "3 Years Warranty"],
            image: "/assets/Products/Marble series/Pillar cock.png",
          },
          {
            id: "MAR-1005",
            name: "Sink Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Swivel spout marble-finish sink cock for kitchen use",
            features: ["Swivel Spout", "360° Rotation", "Marble Finish", "Kitchen Optimized"],
            image: "/assets/Products/Marble series/Sink cock.png",
          },
          {
            id: "MAR-1006",
            name: "Swan Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Graceful marble-finish swan neck faucet for elegant wash basins",
            features: ["Elegant Design", "High Arc", "Marble Finish", "Premium Quality"],
            image: "/assets/Products/Marble series/Swan neck.png",
          },
          {
            id: "MAR-1007",
            name: "2-Way Bib Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Dual outlet marble-finish bib cock for multiple connections",
            features: ["Dual Outlets", "Individual Controls", "Marble Finish", "3 Years Warranty"],
            image: "/assets/Products/Marble series/2-way bib cock.png",
          },
          {
            id: "MAR-1008",
            name: "2-Way Angle Cock",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Dual outlet marble-finish angle cock for versatile water distribution",
            features: ["Dual Outlets", "90-Degree Angle", "Marble Finish", "Durable"],
            image: "/assets/Products/Marble series/2-way angle cock.png",
          },
          {
            id: "MAR-1009",
            name: "Wall Mixture",
            series: "Marble Series",
            seriesSlug: "marble-series",
            description: "Premium marble-finish wall mixture for hot and cold water mixing",
            features: ["Hot & Cold Mixing", "Wall Mounted", "Marble Finish", "3 Years Warranty"],
            image: "/assets/Products/Marble series/Wall-mixture.png",
          },
        ],
      },
      {
        name: "Royal Series",
        slug: "royal-series",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Premium Royal design with 15MM Ceramic Spindle and 3 Years Warranty",
        tagline: "Royalty in Every Drop",
        products: createStandardProducts("Royal Series", "royal-series", "RYL"),
      },
      {
        name: "T-Head Taps",
        slug: "t-head-taps",
        category: "PTMT Taps",
        categorySlug: "ptmt-taps",
        description: "Classic T-Head design taps with durable construction",
        tagline: "Classic Design",
        products: [
          {
            id: "TH-1001",
            name: "Short Body Bib Cock 90°",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "Compact T-Head short body bib cock with 90-degree angle",
            features: ["T-Head Design", "90° Angle", "Durable", "Easy Grip"],
            image: "/assets/Products/T-head/Short body bib cock.png",
          },
          {
            id: "TH-1002",
            name: "Long Body Bib Cock",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "Extended T-Head bib cock for convenient water access",
            features: ["T-Head Design", "Extended Reach", "Durable", "Easy Grip"],
            image: "/assets/Products/T-head/Long body bib cock.png",
          },
          {
            id: "TH-1003",
            name: "Angle Cock",
            series: "T-Head Taps",
            seriesSlug: "t-head-taps",
            description: "T-Head angle cock for water supply connections",
            features: ["T-Head Design", "90° Angle", "Wall Flange", "Durable"],
            image: "/assets/Products/T-head/Angel cock.png",
          },
        ],
      },
    ],
  },
  {
    name: "PPRC Taps",
    slug: "pprc-taps",
    description: "High-quality PPRC taps with 15MM Rising/Ceramic Spindle and warranty",
    series: [
      {
        name: "Hexa Series",
        slug: "hexa-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Hexa Series with 15MM Rising Spindle and drop warranty",
        tagline: "Precision Engineered",
        products: [
          {
            id: "HEX-1001",
            name: "Short Body Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Compact and stylish short body bib cock with integrated wall flange for easy installation.",
            features: ["15MM Rising Spindle", "Drop Warranty", "0% Drop", "Premium Finish"],
            image: "/assets/Products/Hexa series/short-body.png",
          },
          {
            id: "HEX-1002",
            name: "Long Body Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Extended body bib cock perfect for filling buckets and large containers.",
            features: ["15MM Rising Spindle", "Drop Warranty", "Extended Reach", "High Flow Rate"],
            image: "/assets/Products/Hexa series/long-body-bib-cock.png",
          },
          {
            id: "HEX-1003",
            name: "Short Body F/F Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Short body bib cock with foam flow design for maximum water output.",
            features: ["Foam Flow Design", "Drop Warranty", "Compact Design", "Drip-Free"],
            image: "/assets/Products/Hexa series/short-body-foam-flow.png",
          },
          {
            id: "HEX-1004",
            name: "Long Body F/F Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Long body bib cock with foam flow for high water volume needs.",
            features: ["Foam Flow Design", "Extended Reach", "Drop Warranty", "High Performance"],
            image: "/assets/Products/Hexa series/long-body-foam-flow.png",
          },
          {
            id: "HEX-1005",
            name: "Angle Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "High-quality angle cock for connecting water supply to fixtures.",
            features: ["90-Degree Angle", "Wall Flange Included", "High Flow Rate", "Durable Construction"],
            image: "/assets/Products/Hexa series/angle-cock.png",
          },
          {
            id: "HEX-1006",
            name: "Washing Machine Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Specialized cock designed for washing machine water supply connections.",
            features: ["Washing Machine Compatible", "High Flow Rate", "Easy Connect", "Drop Warranty"],
            image: "/assets/Products/Hexa series/Washing machine cock.png",
          },
          {
            id: "HEX-1007",
            name: "Nozzle Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Nozzle cock with controlled water flow for precise applications.",
            features: ["Precise Control", "Durable Nozzle", "Drop Warranty", "Easy Install"],
            image: "/assets/Products/Hexa series/nozzle-cock.png",
          },
          {
            id: "HEX-1008",
            name: "Pillar Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Elegant pillar cock designed for wash basins with smooth water flow.",
            features: ["Basin Mounted", "Premium Finish", "Smooth Operation", "Long Lasting"],
            image: "/assets/Products/Hexa series/pillar-cock.png",
          },
          {
            id: "HEX-1009",
            name: "Sink Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Swivel spout sink cock designed for kitchen use with 360-degree rotation.",
            features: ["Swivel Spout", "360° Rotation", "Kitchen Optimized", "Easy Cleaning"],
            image: "/assets/Products/Hexa series/sink-cock.png",
          },
          {
            id: "HEX-1010",
            name: "Swan Neck",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Graceful swan neck faucet adding elegance to your wash basin.",
            features: ["Elegant Design", "High Arc", "360° Rotation", "Premium Finish"],
            image: "/assets/Products/Hexa series/swan-neck.png",
          },
          {
            id: "HEX-1011",
            name: "2-Way Bib Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Dual outlet bib cock for connecting multiple fixtures from single water source.",
            features: ["Dual Outlets", "Individual Controls", "Space Saving", "Drop Warranty"],
            image: "/assets/Products/Hexa series/2 way bib cock.png",
          },
          {
            id: "HEX-1012",
            name: "2-Way Angle Cock",
            series: "Hexa Series",
            seriesSlug: "hexa-series",
            description: "Dual outlet angle cock for versatile water distribution.",
            features: ["Dual Outlets", "90-Degree Angle", "High Flow Rate", "Durable"],
            image: "/assets/Products/Hexa series/2 way angle cock.png",
          },
        ],
      },
      {
        name: "Charcoal Series",
        slug: "pprc-charcoal-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Charcoal Series with 15MM Ceramic Spindle and premium finish",
        tagline: "Bold & Reliable",
        products: createStandardProducts("Charcoal Series", "pprc-charcoal-series", "PCH"),
      },
      {
        name: "Fusion Series",
        slug: "pprc-fusion-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Fusion Series combining style with durability",
        tagline: "Fusion of Excellence",
        products: createStandardProducts("Fusion Series", "pprc-fusion-series", "PFS"),
      },
      {
        name: "Royal Series",
        slug: "pprc-royal-series",
        category: "PPRC Taps",
        categorySlug: "pprc-taps",
        description: "PPRC Royal Series with 15MM Ceramic Spindle and drop warranty",
        tagline: "Royal Performance",
        products: createStandardProducts("Royal Series", "pprc-royal-series", "PRL"),
      },
    ],
  },
  {
    name: "Shower & Faucets",
    slug: "shower-faucets",
    description: "Premium quality showers and health faucets for modern bathrooms",
    series: [
      {
        name: "Health Faucet",
        slug: "health-faucet",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "High-quality health faucets for hygienic bathroom use with various hose lengths",
        tagline: "Hygiene First",
        products: [
          {
            id: "HF-01",
            name: "Health Faucet Set (1 mtr)",
            series: "Health Faucet",
            seriesSlug: "health-faucet",
            description: "Complete health faucet set with 1 meter flexible hose",
            features: ["1 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
            image: "/assets/Products/Other products/Health Faucet Set (1 mtr).png",
          },
          {
            id: "HF-02",
            name: "Health Faucet Set (1.5 mtr)",
            series: "Health Faucet",
            seriesSlug: "health-faucet",
            description: "Complete health faucet set with 1.5 meter flexible hose for extended reach",
            features: ["1.5 Meter Hose", "ABS Body", "Easy Grip", "Leak-Proof"],
            image: "/assets/Products/Other products/Health Faucet Set (1.5 mtr).png",
          },
        ],
      },
      {
        name: "ABS Shower",
        slug: "abs-shower",
        category: "Shower & Faucets",
        categorySlug: "shower-faucets",
        description: "Durable ABS plastic showers for refreshing bathing experience",
        tagline: "Refreshing Experience",
        products: [
          {
            id: "SH-01",
            name: "ABS Shower 4X4",
            series: "ABS Shower",
            seriesSlug: "abs-shower",
            description: "High-quality 4X4 ABS shower head for refreshing bathing experience",
            features: ["4X4 Size", "ABS Construction", "Multiple Spray", "Easy Clean"],
            image: "/assets/Products/Other products/ABS Shower 4X4.png",
          },
        ],
      },
    ],
  },
  {
    name: "Pipes & Ball Cock",
    slug: "pipes-ball-cock",
    description: "Quality waste pipes, connection pipes, and ball cocks for plumbing needs",
    series: [
      {
        name: "Waste Pipe",
        slug: "waste-pipe",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "High-quality waste pipes for efficient bathroom and kitchen drainage",
        tagline: "Efficient Drainage",
        products: [
          {
            id: "WP-01",
            name: "Waste Pipe 36mm",
            series: "Waste Pipe",
            seriesSlug: "waste-pipe",
            description: "High-quality 36mm waste pipe for bathroom drainage",
            features: ["36mm Diameter", "Durable PVC", "Easy Install", "Leak-Proof"],
            image: "/assets/Products/Other products/Waste Pipe 36mm.png",
          },
          {
            id: "WP-02",
            name: "Waste Pipe 42mm",
            series: "Waste Pipe",
            seriesSlug: "waste-pipe",
            description: "High-quality 42mm waste pipe for kitchen and bathroom drainage",
            features: ["42mm Diameter", "Heavy Duty", "Durable PVC", "Easy Connect"],
            image: "/assets/Products/Other products/Waste Pipe 42mm.png",
          },
        ],
      },
      {
        name: "Connection Pipe",
        slug: "connection-pipe",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "Flexible connection pipes with brass fittings for tap installations",
        tagline: "Flexible Connection",
        products: [
          {
            id: "CP-01",
            name: "Connection Pipe 18\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 18 inch connection pipe with brass fittings",
            features: ["18 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/Products/Other products/Connection Pipe 18.png",
          },
          {
            id: "CP-02",
            name: "Connection Pipe 24\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 24 inch connection pipe with brass fittings",
            features: ["24 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/Products/Other products/Connection Pipe 24.png",
          },
          {
            id: "CP-03",
            name: "Connection Pipe 30\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 30 inch connection pipe with brass fittings",
            features: ["30 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/Products/Other products/Connection Pipe 30.png",
          },
          {
            id: "CP-04",
            name: "Connection Pipe 36\"",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 36 inch connection pipe with brass fittings",
            features: ["36 Inch Length", "Flexible Design", "Brass Fittings", "Leak-Proof"],
            image: "/assets/Products/Other products/Connection Pipe 36.png",
          },
          {
            id: "CP-05",
            name: "Connection Pipe 1 MTR",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 1 meter connection pipe with brass fittings",
            features: ["1 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
            image: "/assets/Products/Other products/Connection Pipe 1 MTR.png",
          },
          {
            id: "CP-06",
            name: "Connection Pipe 1.5 MTR",
            series: "Connection Pipe",
            seriesSlug: "connection-pipe",
            description: "Flexible 1.5 meter connection pipe with brass fittings",
            features: ["1.5 Meter Length", "Flexible Design", "Brass Fittings", "Heavy Duty"],
            image: "/assets/Products/Other products/Connection Pipe 1.5 MTR.png",
          },
        ],
      },
      {
        name: "Ball Cock",
        slug: "ball-cock",
        category: "Pipes & Ball Cock",
        categorySlug: "pipes-ball-cock",
        description: "High-quality ball cocks for water tank and supply control",
        tagline: "Precise Control",
        products: [
          {
            id: "PBC-01",
            name: "Ball Cock 1/2\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 1/2 inch ball cock for water control",
            features: ["1/2 Inch Size", "Heavy Duty", "High Pressure", "Durable"],
            image: "/assets/Products/Other products/Ball Cock 1-2.png",
          },
          {
            id: "PBC-02",
            name: "Ball Cock 3/4\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 3/4 inch ball cock for water control",
            features: ["3/4 Inch Size", "Full Bore", "High Flow", "Durable"],
            image: "/assets/Products/Other products/Ball Cock 3-4.png",
          },
          {
            id: "PBC-03",
            name: "Ball Cock 1\"",
            series: "Ball Cock",
            seriesSlug: "ball-cock",
            description: "High-quality 1 inch ball cock for high flow water control",
            features: ["1 Inch Size", "Full Bore", "Maximum Flow", "Industrial Grade"],
            image: "/assets/Products/Other products/Ball Cock 1.png",
          },
        ],
      },
    ],
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    description: "High-performance ball valves for water control - Coming Soon",
    series: [
      {
        name: "Coming Soon",
        slug: "ball-valve-coming-soon-1",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "New ball valve products coming soon. Stay tuned for exciting additions!",
        tagline: "Coming Soon",
        products: [],
      },
      {
        name: "Coming Soon",
        slug: "ball-valve-coming-soon-2",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "New ball valve products coming soon. Stay tuned for exciting additions!",
        tagline: "Coming Soon",
        products: [],
      },
      {
        name: "Coming Soon",
        slug: "ball-valve-coming-soon-3",
        category: "Ball Valve",
        categorySlug: "ball-valve",
        description: "New ball valve products coming soon. Stay tuned for exciting additions!",
        tagline: "Coming Soon",
        products: [],
      },
    ],
  },
];

export const getAllSeries = (): Series[] => {
  return categories.flatMap((cat) => cat.series);
};

export const getSeriesBySlug = (slug: string): Series | undefined => {
  return getAllSeries().find((series) => series.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return getAllSeries()
    .flatMap((series) => series.products)
    .find((product) => product.id === id);
};
