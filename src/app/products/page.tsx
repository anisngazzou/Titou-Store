'use client'

import ProductListing from "@/app/components/ProductsList";



export const categories = [
  {
    id: 'brillant',
    name: 'Ensemble de 3 valise - Brilliant',
    colors: [
      {
        color: 'Blanc Cassé',
        code: "#e3e3e3",
        images: [
     "/images/Brillant/Blanc Cassé/mmpllml.png",
        "/images/Brillant/Blanc Cassé/v17.png",
        "/images/Brillant/Blanc Cassé/Sans-titre-1sgqsdg.png",
        "/images/Brillant/Blanc Cassé/v17_d2.png",
        ]
      },
      {
        color: 'Bleu ciel',
        code: "#ADD8E6",
        images: [
          '/images/Brillant/Bleu ciel/v_2_d2.png',
          '/images/Brillant/Bleu ciel/v_2_d3.png',
          '/images/Brillant/Bleu ciel/v_2_d4.png',
          '/images/Brillant/Bleu ciel/v_2.png',
          '/images/Brillant/Bleu ciel/v2d5.png'
        ]
      },
      {
        color: 'Bleu Marine',
        code: "#000080",
        images: [
          '/images/Brillant/Bleu Marine/mmlm.png',
          '/images/Brillant/Bleu Marine/Sans-titre-3.png',
          '/images/Brillant/Bleu Marine/v4d5.png',
          '/images/Brillant/Bleu Marine/v8.png'
        ]
      },
      {
        color: 'Bleu Turquoise',
        code: "#40E0D0",
        images: [
          '/images/Brillant/Bleu Turquoise/v4_detaile2.png',
          '/images/Brillant/Bleu Turquoise/v4_detaile6.png',
          '/images/Brillant/Bleu Turquoise/v4_detaile99.png',
          '/images/Brillant/Bleu Turquoise/v4.png'
        ]
      },
      {
        color: 'Gris',
        code: "#808080",
        images: [
          '/images/Brillant/Gris/gris_1.png',
          '/images/Brillant/Gris/gris2.png',
          '/images/Brillant/Gris/v_16.png',
          '/images/Brillant/Gris/v16d3.png',
          '/images/Brillant/Gris/v16d4.png'
        ]
      },
      {
        color: 'Jaune',
        code: "#FFFF00",
        images: [
          '/images/Brillant/Jaune/Sans-titre-2.png',
          '/images/Brillant/Jaune/v1_d_2.png',
          '/images/Brillant/Jaune/v1_d_3.png',
          '/images/Brillant/Jaune/yellow.png'
        ]
      },
      {
        color: 'Rouge',
        code: "#FF0000",
        images: [
          '/images/Brillant/Rouge/v_1.png',
          '/images/Brillant/Rouge/v_2.png',
          '/images/Brillant/Rouge/v_3.png',
          '/images/Brillant/Rouge/v_5.png'
        ]
      }
    ],
    subtitle: "Découvrez notre ensemble exclusif de 3 valises avec roues fixes, l’ultime compagnon de voyage pour ceux qui recherchent à la fois la fonctionnalité et l’élégance. Chaque valise de cet ensemble est méticuleusement conçue pour offrir une expérience de voyage sans tracas.",
    price: 199.99,
    currency: "$",
    rating: 4.64,
    sizes: [],
    reviews: 6,
  storage: ["128GB", "256GB", "512GB", "1TB"],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
  features: [
      "A17 Pro chip",
      "Pro camera system",
      "Action button",
      "Always-On display"
    ],
    additionalInfo: {
      care: "Titou Care, livraison et support inclus.",
      paymentNote: ""
    },

  },
  {
    id: 'mat',
    name: 'Ensemble de 3 valise - Mat',
    colors: [
      { color: 'Bleu Turquoise', code: "#40E0D0",images:[
        '/images/Mat/Bleu Turquoise/1.jpg'
      ] },
      { color: "Vert d'eau", code: "#00FF7F",images:[
        "/images/Mat/Vert d'eau/1.jpg"
      ] }
    ],
    subtitle: "Découvrez notre ensemble exclusif de 3 valises avec roues fixes, l’ultime compagnon de voyage pour ceux qui recherchent à la fois la fonctionnalité et l’élégance. Chaque valise de cet ensemble est méticuleusement conçue pour offrir une expérience de voyage sans tracas.",
    price: 199.99,
    currency: "$",
    rating: 4.64,
    sizes: [],
    reviews: 6,
  storage: ["128GB", "256GB", "512GB", "1TB"],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
  features: [
      "A17 Pro chip",
      "Pro camera system",
      "Action button",
      "Always-On display"
    ],
    additionalInfo: {
      care: "Titou Care, livraison et support inclus.",
      paymentNote: ""
    },
   
  },
  {
    id: 'multicouleur',
    name: 'Ensemble de 3 valise - Multicouleur',
    colors: [
      {
        color: 'Beige Accessoires Bleu Marine',
        code: "#F5F5DC",
        images: [
          '/images/Multicouleur/Beige Accessoires Bleu Marine/DSC09770.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Marine/DSC09773.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Marine/DSC09776.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Marine/DSC09777.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Marine/DSC09780.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Marine/DSC09781.JPG',
        ]
      },
      {
        color: 'Beige Accessoires Bleu Turquoise',
        code: "#AFEEEE",
        images: [
          '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09882.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09883.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09885.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09887.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09888.JPG',
          '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09890.JPG',
        ]
      },
      {
        color: 'Beige Accessoires Jaune',
        code: "#FFFF99",
        images: [
          '/images/Multicouleur/Beige Accessoires Jaune/DSC09749.JPG',
          '/images/Multicouleur/Beige Accessoires Jaune/DSC09751.JPG',
          '/images/Multicouleur/Beige Accessoires Jaune/DSC09754.JPG',
          '/images/Multicouleur/Beige Accessoires Jaune/DSC09755.JPG'
        ]
      },
      {
        color: 'Beige Accessoires Rouge',
        code: "#FF6347",
        images: [
          '/images/Multicouleur/Beige Accessoires Rouge/DSC09830.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge/DSC09832.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge/DSC09834.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge/DSC09835.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge/DSC09842.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge/DSC09844.JPG',
        ]
      },
      {
        color: 'Beige Accessoires Rouge Bordeaux',
        code: "#8B0000",
        images: [
          '/images/Multicouleur/Beige Accessoires Rouge bordeaux/DSC09870.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge bordeaux/DSC09871.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge bordeaux/DSC09877.JPG',
          '/images/Multicouleur/Beige Accessoires Rouge bordeaux/DSC09881.JPG'
        ]
      },
      {
        color: 'Beige Accessoires Saumon',
        code: "#FF9999",
        images: [
          '/images/Multicouleur/Beige Accessoires Saumon/DSC09880.JPG',
          '/images/Multicouleur/Beige Accessoires Saumon/DSC09881.JPG',
          '/images/Multicouleur/Beige Accessoires Saumon/DSC09885.JPG',
          '/images/Multicouleur/Beige Accessoires Saumon/DSC09894.JPG'
        ]
      },
      {
        color: 'Face Blanc Face Gris',
        code: "#D3D3D3",
        images: [
          '/images/Multicouleur/Face Blanc Face Gris/mnnmmm.png',
          '/images/Multicouleur/Face Blanc Face Gris/Sans-titre-2.png',
          '/images/Multicouleur/Face Blanc Face Gris/Sans-titre-3.png',
          '/images/Multicouleur/Face Blanc Face Gris/v4.png'
        ]
      },
      {
        color: 'Rouge Bordeaux Accessoires Beige',
        code: "#B22222",
        images: [
          '/images/Multicouleur/Rouge Bordeaux Accessoires Beige/DSC09920.JPG',
          '/images/Multicouleur/Rouge Bordeaux Accessoires Beige/DSC09921.JPG',
          '/images/Multicouleur/Rouge Bordeaux Accessoires Beige/DSC09924.JPG',
          '/images/Multicouleur/Rouge Bordeaux Accessoires Beige/DSC09930.JPG'
        ]
      },
      {
        color: 'Rouge Bordeaux Accessoires Gris',
        code: "#696969",
        images: [
          '/images/Multicouleur/Rouge Bordeaux Accessoires Gris/DSC09894.JPG',
          '/images/Multicouleur/Rouge Bordeaux Accessoires Gris/DSC09896.JPG',
          '/images/Multicouleur/Rouge Bordeaux Accessoires Gris/DSC09903.JPG',
          '/images/Multicouleur/Rouge Bordeaux Accessoires Gris/DSC09909.JPG'
        ]
      },
      {
        color: 'Saumon Accessoires Beige',
        code: "#FFA07A",
        images: [
          '/images/Multicouleur/Saumon Accessoires Beige/DSC09779.JPG',
          '/images/Multicouleur/Saumon Accessoires Beige/DSC09791.JPG',
          '/images/Multicouleur/Saumon Accessoires Beige/DSC09797.JPG'
        ]
      }
    ],
    subtitle: "Découvrez notre ensemble exclusif de 3 valises avec roues fixes, l’ultime compagnon de voyage pour ceux qui recherchent à la fois la fonctionnalité et l’élégance. Chaque valise de cet ensemble est méticuleusement conçue pour offrir une expérience de voyage sans tracas.",
    price: 199.99,
    currency: "$",
    rating: 4.64,
    sizes: [],
    reviews: 6,
  storage: ["128GB", "256GB", "512GB", "1TB"],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
  features: [
      "A17 Pro chip",
      "Pro camera system",
      "Action button",
      "Always-On display"
    ],
    additionalInfo: {
      care: "Titou Care, livraison et support inclus.",
      paymentNote: ""
    },
   
  }
];


const filters = [
  { 
    title: 'Couleurs', 
    options: [
      { id: 'apple', label: 'Lorem', count: 24 },
      { id: 'samsung', label: 'Ipsuim', count: 13 },
      { id: 'xyz', label: 'Dolran', count: 12 },
      // ... more options
    ]
  },
  // ... more filter sections
];

export default function ProductPage() {
  return <div>
   
    <section className='bg-primary px-2 pt-20'>
    <ProductListing products={categories} filters={filters} />
   
    </section>
  </div>;
}