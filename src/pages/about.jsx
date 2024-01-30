import React from "react";
import MerchItem from "./MerchItem"; // Import MerchItem component

const MerchPage = () => {
    // Sample merchandise data
    const merchItems = [
        { name: 'T-Shirt 1', image: 'https://via.placeholder.com/150', size: 'M' },
        { name: 'T-Shirt 2', image: 'https://via.placeholder.com/150', size: 'L' },
        // ... add more items as needed
    ];

    return (
        <div className="merch-page">
            <h1 className="merch-title">Exclusive Merchandise Collection</h1>
            <div className="merch-grid">
                {merchItems.map((item, index) => (
                    <MerchItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default MerchPage;
