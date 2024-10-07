import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import type { Pair } from "../types"
import Alert from "./Alert"

export default function CriptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: '',
    })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <Alert>{error}</Alert>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select id="currency" onChange={handleChange} value={pair.currency}>
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select id="criptocurrency" onChange={handleChange} value={pair.criptocurrency}>
                    <option value="">-- Seleccione --</option>
                    {cryptocurrencies.map(crypto => (
                        <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
