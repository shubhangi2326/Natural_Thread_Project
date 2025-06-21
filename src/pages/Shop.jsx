import React from 'react';

// आपकी सभी इमेज यहाँ इम्पोर्ट की गई हैं
import image1 from '../assets/men1.png';
import image2 from '../assets/men2.png';
import image3 from '../assets/men3.png';
import image4 from '../assets/woman1.jpeg';
import image5 from '../assets/woman2.jpeg';
import image6 from '../assets/woman3.jpeg';
import image7 from '../assets/woman4.jpeg';
import image8 from '../assets/men.png';

function Shop() {
  
  const productsData = [
    { id: 1, image: image1, title: "Urban Explorer Tee", description: "A comfortable and stylish black t-shirt, perfect for a casual day out." },
    { id: 2, image: image2, title: "Business Casual Shirt", description: "Look sharp and professional with this checkered business shirt." },
    { id: 3, image: image3, title: "Rugged Denim Jacket", description: "Add a layer of style with this classic denim jacket." },
    { id: 4, image: image4, title: "Elegant Summer Dress", description: "Feel the breeze in this light and elegant summer dress." },
    { id: 5, image: image5, title: "Chic Casual Top", description: "A versatile and chic top that pairs perfectly with jeans or skirts." },
    { id: 6, image: image6, title: "Bohemian Print Kurti", description: "Embrace tradition with a modern twist with this beautiful kurti." },
    { id: 7, image: image7, title: "Classic Trench Coat", description: "Stay stylish in any weather with this classic women's trench coat." },
    { id: 8, image: image8, title: "The Gentleman's Look", description: "A complete curated look with a stylish blazer and trousers." }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Products</h1>
      
      {/* g-4 क्लास कार्ड के बीच में गैप देगी */}
      <div className="row g-4">
        {productsData.map(product => (
          // रिस्पॉन्सिव कॉलम क्लास
          <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
            
            {/* Bootstrap क्लास का उपयोग करके डिज़ाइन किया गया कार्ड */}
            {/* h-100: समान ऊंचाई, shadow: शैडो, rounded-4: गोल किनारे, border-0: बॉर्डर हटाना */}
            <div className="card h-100 shadow rounded-4 border-0">
              
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.title} 
                style={{ height: '220px', objectFit: 'cover' }} // सभी इमेज को एक समान ऊंचाई देने के लिए
              />
              
              {/* d-flex और flex-column का उपयोग ताकि बटन नीचे रहे */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                
                {/* mt-auto बटन को कार्ड के निचले हिस्से में धकेलता है */}
                <a href="#" className="btn btn-primary mt-auto">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;