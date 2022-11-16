const LoadPlace = ({ places }) => {
    return (
        <article className='location md:grid-cols-2 lg:grid-cols-3'>
            {places.map(place => (
                <img src={place.img} key={place.id}
                    className="photo" />
            ))}
        </article>
    )
}

export default LoadPlace
