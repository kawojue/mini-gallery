import { useContext } from 'react'
import Context from './components/Context'
import LoadPlace from './components/LoadPlace'

function App() {
  const { cities, natures } = useContext(Context)

  return (
    <main>
      <LoadPlace places={cities} />
      <LoadPlace places={natures} />
    </main>
  )
}

export default App
