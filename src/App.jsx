import { useContext } from 'react'
import Context from './components/Context'
import LoadPlace from './components/LoadPlace'

function App() {
  const { cities, natures } = useContext(Context)

  return (
    <main>
      <LoadPlace places={natures} />
      <LoadPlace places={cities} />
    </main>
  )
}

export default App
