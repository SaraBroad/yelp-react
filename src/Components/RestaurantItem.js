import React from "react";

const RestaurantItem = ({ establishment }) => {
    console.log('restaurant item', establishment)
    return (
        <div>
            <div>
                 Name: {establishment.name} 
            </div>
            <div>
                Phone: {establishment.display_phone}
            </div>
            <div>
                Rating: {establishment.rating}
            </div>
            <div>
                Pickup?: {establishment.transactions[0] === 'pickup' ? 'pickup' : 'no pickup'}
            </div>
            <div>
                Delivery?: {establishment.transactions[1] === 'delivery' ? 'delivery' : 'no delivery'}
            </div>
        </div>
    )
}

export default RestaurantItem