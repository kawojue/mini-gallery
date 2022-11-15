const LoadPlace = ({ places }) => {
    return (
        <section className='location md:grid-cols-2 lg:grid-cols-3'>
            {places.map(place => (
                <img src={place.img} key={place.id}
                    className="photo" />
            ))}
        </section>
    )
}

export default LoadPlace
