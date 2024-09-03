import ProductListing from "@/app/components/ProductsList";

// Sample data (you'd typically fetch this from an API)
const products = [
  { id: '1', name: 'iPhone 15', price: 51.90, image: '/images/7.png', description: '256 GB - Black' },
  { id: '2', name: 'iPhone 15', price: 51.90, image: '/images/7.png', description: '256 GB - Black' },
  { id: '3', name: 'iPhone 15', price: 51.90, image: '/images/7.png', description: '256 GB - Black' },
  { id: '4', name: 'iPhone 15', price: 51.90, image: '/images/7.png', description: '256 GB - Black' },

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