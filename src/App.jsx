import { useContext } from 'react'
import Context from './components/Context'
import Gallery from './components/Gallery'
import LoadPlace from './components/LoadPlace'

function App() {
  const { openModal, cities, natures } = useContext(Context)

  return (
    <main>
      <section className={`page-1 ${openModal ? 'hide' : ''}`}>
        <LoadPlace places={natures} />
        <LoadPlace places={cities} />
      </section>

      <section className={`page-2 ${!openModal ? 'hide' : ''} md:px-10`}>
        <Gallery />
      </section>
    </main>
  )
}

export default App
