import React from 'react';

function CakeDetail({cake, handleDelete, handleUpdate}) {
    return (
        <>
            <img src={cake.image} alt={cake.flavor} style={{width:"200px"}}/>
            <h1>{cake.flavor}</h1>
            <h1>{cake.size}</h1>
            <p>${cake.price}</p>
            <p>{cake.description}</p>
            <button onClick={() => handleUpdate(cake)}>{cake.liked ? "❤️" : "♡"}</button>
            <button onClick={() => handleDelete(cake.id)}>Delete</button>
        </>
    );
}

export default CakeDetail;