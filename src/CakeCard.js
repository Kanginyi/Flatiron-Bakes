function CakeCard({flavor, price, size = 6}) {
    return (
        <div>
            <h1>Flavor: {flavor}</h1>
            <p>Price: {price}</p>
            <p>Size: {size}</p>
        </div>
    );
}

export default CakeCard;