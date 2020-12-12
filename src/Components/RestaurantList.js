import React from "react";
import RestaurantItem from './RestaurantItem'

const RestaurantList = ({ foodEstablishments, onFoodEstablishmentSelect }) => {
    console.log('food est. list', foodEstablishments)
    // // check if restaurant has pick-up or delivery
    const renderedList = foodEstablishments.map((establishment) => {
        // return <div key={establishment.id}>{establishment.name}</div>
        return <RestaurantItem key={establishment.id} establishment={establishment} />
    })
    return (
        <div className="ui relaxed divided list">Restaurant List: {renderedList}</div>
    )
}

export default RestaurantList