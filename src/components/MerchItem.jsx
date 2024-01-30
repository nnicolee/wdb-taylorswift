import React from "react";

const MerchItem = ({ item }) => {
    return (
        <div className="merch-item">
            <img src={item.image} alt={item.name} className="merch-image" />
            <div className="merch-details">
                <div className="merch-name">{item.name}</div>
                <div className="merch-size">Size: {item.size}</div>
                <button className="merch-buy-button" onClick={() => console.log(`Buying ${item.name}`)}>Buy</button>
            </div>
        </div>
    );
};

export default MerchItem;