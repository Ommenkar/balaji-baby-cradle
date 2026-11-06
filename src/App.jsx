import { useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Header, Footer } from './components/Layout';
import { Hero, About, WhyChoose, Ordering, Delivery } from './components/Story';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { whatsapp } from './data';
export default function App(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target);}}),{threshold:0.08});document.querySelectorAll('.section-heading, .about-visual, .benefit, .bulk-card').forEach(el=>{el.classList.add('reveal');observer.observe(el);});return()=>observer.disconnect();},[]);return <><a className="skip-link" href="#products">Skip to products</a><Header/><main><Hero/><About/><Products/><WhyChoose/><Gallery/><Ordering/><Delivery/><Contact/></main><Footer/><a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Balaji Baby Cradle on WhatsApp"><MessageCircle size={26}/><span>Let’s chat</span></a><a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={17}/></a></>;}
