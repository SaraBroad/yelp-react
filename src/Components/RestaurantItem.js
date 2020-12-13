import React from "react";

const RestaurantItem = ({ establishment, onFoodEstablishmentSelect }) => {

    // console.log('restaurant item', establishment)
    
    return (
        <div onClick={() => onFoodEstablishmentSelect(establishment)} className="ui segment">
            <div>
                 Name: {establishment.name} 
            </div>
            <div>
                Phone: {establishment.display_phone}
            </div>
            <div>
                Rating: {establishment.rating}
            </div>
            <div style={{  marginTop: "4px" }}>
                How can I get my food?
            <ul>
                {establishment.transactions.map((e, index) => {
                    return (
                        // <div>
                        <li key={index}>
                            {e}
                        </li>
                        // </div>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantItem