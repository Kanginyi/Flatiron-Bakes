function CakeCard({cake, setSelectedCake}) {
    return (
        <div onClick={() => setSelectedCake(cake)}>
            <h1>Flavor: {cake.flavor}</h1>
            <p>Price: ${cake.price}</p>
            <p>Size: {cake.size}</p>
        </div>
    );
}

export default CakeCard;