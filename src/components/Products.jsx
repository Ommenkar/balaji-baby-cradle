import { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { products, whatsapp } from '../data';
import { Heading, WhatsApp, ProductPhoto } from './Shared';

export default function Products() {
  const [category, setCategory] = useState('All Products');
  const categories = ['All Products', ...products.map((product) => product.category)];

  return <section id="products" className="section products-section"><div className="container">
    <div className="section-top"><Heading eyebrow="OUR COLLECTION" title="Made for comfort. Built to last.">Discover our final collection of baby furniture, mosquito nets and baby essentials.</Heading><a className="text-link" href="#enquiry">Find the right product <ArrowUpRight size={17}/></a></div>
    <div className="tabs" aria-label="Filter products">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="product-grid">{products.filter((product) => category === 'All Products' || product.category === category).map((product) => <article className="product-card" key={product.title}><div className="product-image-wrap"><ProductPhoto image={product.image} crop={product.crop}/><span className="product-category">{product.category}</span><a className="image-arrow" href={whatsapp(product.message)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${product.title}`}><ArrowUpRight size={18}/></a></div><div className="product-content"><span className="product-eyebrow">{product.tag}</span><h3>{product.title}</h3><p>{product.description}</p><ul>{product.features.map((feature) => <li key={feature}><Check size={14}/>{feature}</li>)}</ul><WhatsApp message={product.message}/></div></article>)}</div>
  </div></section>;
}
