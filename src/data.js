export const whatsapp = (message = 'Hello Balaji Baby Cradle, I would like to know more about your products. Please share your catalogue and pricing.') => `https://wa.me/919892993331?text=${encodeURIComponent(message)}`;
export const bulkMessage = 'Hello, I am interested in wholesale/bulk orders. Please share your product catalogue and pricing details.';
export const address = 'Nele, Post Kidgaon, Taluka Satara, District Satara, Maharashtra – 415015, India';
export const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
export const nav = [['Home','home'],['About Us','about'],['Products','products'],['Gallery','gallery'],['Why Choose Us','why-us'],['Contact','contact']];
export const products = [
 {title:'Baby Cradles', category:'Baby Cradles', image:'cradle-lavender.jpg', crop:'lavender', tag:'CRAFTED WITH CARE', description:'Thoughtfully made for little moments and lasting comfort.', features:['Six designs to choose from','Strong & durable construction','Customised manufacturing available'], message:'Hello Balaji Baby Cradle, I am interested in your Baby Cradle. Please share product details, available colours and pricing.'},
 {title:'Premium Light Baby Cradle',category:'Baby Cradles',image:'cradle-pink.jpg',crop:'pink',tag:'LIGHT IN WEIGHT. STRONG BY DESIGN.',description:'Everyday ease, without compromising on quality.', features:['Strong CRC steel pipes & CO₂ gas welding','Fortunecoat powder coating','Steel ball bearings','Easy assembly & lightweight design'],message:'Hello Balaji Baby Cradle, I am interested in your Premium Light Baby Cradle. Please share available colours, product details and pricing.'},
 {title:'Jumbo Round Mosquito Net',category:'Mosquito Nets',image:'nets.jpg',crop:'round',tag:'A LITTLE EXTRA PEACE OF MIND',description:'A breathable canopy for a more comfortable space.',features:['Premium-quality breathable fine mesh','Reinforced double stitching','Single, Double & King sizes'],message:'Hello, I am interested in your Jumbo Round Mosquito Net. Please share available sizes, colours and pricing.'},
 {title:'Square Mosquito Net',category:'Mosquito Nets',image:'nets.jpg',crop:'square',tag:'ROOM TO REST EASY',description:'Practical protection, thoughtfully made for everyday use.',features:['Easy installation & removal','Washable & easy to maintain','Foldable options available'],message:'Hello, I am interested in your Square Mosquito Net. Please share available sizes, colours and pricing.'}
];
// Add supplied videos as { type: 'video', src: '/videos/file.mp4', title, category }.
export const gallery = [
 {src:'/images/cradle-lavender.jpg',title:'Baby cradle · product catalogue',category:'Baby Cradles'},
 {src:'/images/cradle-pink.jpg',title:'Premium light cradle · product details',category:'Baby Cradles'},
 {src:'/images/nets.jpg',title:'Round & square mosquito nets',category:'Mosquito Nets'},
 {src:'/images/ring-nets.jpg',title:'Ring mosquito net · colour collection',category:'Mosquito Nets'},
 {src:'/images/logo.jpg',title:'Balaji Baby Cradle · original company branding',category:'Product Details'},
 {src:'/images/emblem.jpg',title:'Balaji Udyog Samuh · brand emblem',category:'Product Details'}
];
