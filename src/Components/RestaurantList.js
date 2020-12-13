import React from "react";
import RestaurantItem from './RestaurantItem'

const RestaurantList = ({ foodEstablishments, onFoodEstablishmentSelect }) => {
    console.log('food est. list', foodEstablishments)
    const renderedList = foodEstablishments.map((establishment) => {
        // return <div key={establishment.id}>{establishment.name}</div>
        return <RestaurantItem key={establishment.id} establishment={establishment} onFoodEstablishmentSelect={onFoodEstablishmentSelect} />
    })
    return (
        <div>
            <h3 className="ui header" style={{ marginTop: '10px' }}>Restaurant List</h3>
            <div className="ui relaxed divided list">{renderedList}</div>
        </div>
    )
}

export default RestaurantList