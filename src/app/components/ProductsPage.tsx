import ProductListing from "@/app/components/ProductsList";

// Sample data (you'd typically fetch this from an API)
const products = [
  { id: '1', name: 'Ensemble de 3 valise Shine', price: 151.90, image: '/images/Brillant/Blanc Cassé/mmpllml.png', description: 'Roues démontables Color Brillant' },
  { id: '2', name: 'Ensemble de 3 valise Mat', price: 151.90, image: "/images/Mat/Vert d'eau/Capture d'écran 2024-03-30 125749.jpg", description: 'Roues démontables  Color Mat Pro' },
  { id: '3', name: 'Ensemble de 3 valise Multicolor', price: 151.90, image: '/images/Multicouleur/Beige Accessoires Bleu Turquoise/DSC09882.jpg', description: 'Roues démontables Multi Color Pro' },
  { id: '4', name: 'Ensemble de 2 valise Shine', price: 151.90, image: '/images/7.png', description: '256 GB - Black' },

];


const filters = [
  { 
    title: 'Brand', 
    options: [
      { id: 'apple', label: 'Apple', count: 24 },
      { id: 'samsung', label: 'Samsung', count: 13 },
      { id: 'xyz', label: 'Xyz', count: 12 },
      // ... more options
    ]
  },
  // ... more filter sections
];

export default function ProductPage() {
  return <ProductListing products={products} filters={filters} />;
}