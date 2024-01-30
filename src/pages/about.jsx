import React, { useState } from "react";
// Individual Merchandise Item Component
const MerchItem = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="merch-item" onClick={handleClick}>
            <div className={`merch-content ${isFlipped ? 'flipped' : ''}`}>
                <div className="merch-front">
                    <img src={item.image} alt={item.name} />
                    <div className="merch-name">{item.name}</div>
                </div>
                <div className="merch-back">
                    <div>Size: {item.size}</div>
                    <button onClick={() => console.log(`Buying ${item.name}`)}>Buy</button>
                </div>
            </div>
        </div>
    );
};

// MerchPage Component
export default function MerchPage() {
    const merchItems = [

        { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2011.png?v=1706583820112', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2011%20(1).png?v=1706586544505', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2012%20(1).png?v=1706586548343', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2012.png?v=1706586552888', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2014%20(1).png?v=1706586557289', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2014.png?v=1706586562775', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2015%20(1).png?v=1706586566341', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2015.png?v=1706586573904', size: 'M' },
      { name: 'T-Shirt', image: 'https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Rectangle%2016.png?v=1706586579566', size: 'M' },
    ];

    return (
        <div className="merch-page">
            <h1 className="merch-title">🟣 Exclusive Merchandise Collection</h1>
            {/* Your existing content */}
            
            <div className="merch-grid">
                {merchItems.map((item, index) => (
                    <MerchItem key={index} item={item} />
                ))}
            </div>

            {/* Rest of your existing content */}
        </div>
    );
}
