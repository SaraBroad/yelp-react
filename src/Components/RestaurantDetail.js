import React from "react";

const RestaurantDetail = ({ foodEstablishment }) => {
    console.log('RestaurantDetail', foodEstablishment)
    if (!foodEstablishment) {
        return ( 
            <div className="ui header" style={{ marginTop: '10px' }}>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h3 className="ui header" style={{ marginTop: '10px' }}>More information</h3>
            <div className="ui segment">
                {foodEstablishment.name}
            </div>
        </div>
    )

}

export default RestaurantDetail