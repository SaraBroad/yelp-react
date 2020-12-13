import React from "react";



// const getFood = (establishment) => {
//     establishment.transactions.map(e => {
//         if (e.includes('delivery')) {
//             console.log('Delivery Available')
//             return <div>Delivery Available</div>
//         }
//         if (e.includes('pickup')) {
//             console.log('Pickup Available')
//             return <div>Pickup Available</div>
//         }
//     })
// }

const RestaurantItem = ({ establishment, onFoodEstablishmentSelect }) => {

    console.log('restaurant item', establishment)
    
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
                {establishment.transactions.map(e => {
                    return (
                        <div>
                        <li>{e}</li>
                        </div>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantItem