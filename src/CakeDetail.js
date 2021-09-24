import React from 'react';

function CakeDetail({cake}) {
    return (
        <>
            <img src={cake.image} style={{width:"200px"}}/>
            <p>{cake.flavor}</p>
            <p>{cake.size}</p>
            <p>${cake.price}</p>
            <p>{cake.description}</p>
        </>
    );
}

export default CakeDetail;