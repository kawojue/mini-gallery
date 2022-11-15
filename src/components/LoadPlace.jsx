const LoadPlace = ({ places }) => {
    return (
        <section className={places}>
            {places.map(place => (
                <img src={place.img} key={place.id} />
            ))}
        </section>
    )
}

export default LoadPlace
