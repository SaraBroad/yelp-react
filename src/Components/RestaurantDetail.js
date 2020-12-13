import React from "react";

const RestaurantDetail = ({ foodEstablishment, comments }) => {
    console.log('RestaurantDetail', foodEstablishment)
    console.log('Commentsinresdetail', comments)
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
                <div className="ui small header">
                {foodEstablishment.name}
                </div>
                <div>
                {comments.map((comment, index) => (
                    <li key={index} style={{ marginBottom: '2px'}}>
                         {comment.text}
                     </li>
                 ))}    
                </div>
                <a target="_blank" href={foodEstablishment.url} style={{marginTop: '4px'}}>Get More Info</a>
            </div>
        </div>
    )

}

export default RestaurantDetail