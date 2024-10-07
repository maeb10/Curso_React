import { useEffect, useMemo } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import Spinner from "./components/Spinner"

function App() {

  const fetchCryptos = useCryptoStore(state => state.fetchCryptos)
  const result = useCryptoStore(state => state.result)
  const loading = useCryptoStore(state => state.loading)
  const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
          {loading ? <Spinner /> : hasResult && <CryptoPriceDisplay />}
        </div>
      </div>
    </>
  )
}

export default App
