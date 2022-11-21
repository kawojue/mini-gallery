import Context from './Context'
import { useContext } from 'react'


const LoadPlace = ({ }) => {
    const { } = useContext(Context)
    return (
        <article className='location md:grid-cols-2 lg:grid-cols-3'>
            {places.map(place => (
                <img src={place.img} alt={place.title} className="photo"
                    key={place.id} />
            ))}
        </article>
    )
}

export default LoadPlace
