import axios from "axios"
import { z } from "zod"
// import { object, string, number, InferOutput, parse } from "valibot"
import type { SearchType } from "../types"
import { useMemo, useState } from "react"

// TYPE GUARD O ASSERTION
// function isWeatherResponse(weather: unknown): weather is Weather {
//     return (
//         Boolean(weather) &&
//         typeof weather === 'object' &&
//         typeof (weather as Weather).name === 'string' &&
//         typeof (weather as Weather).main.temp === 'number' &&
//         typeof (weather as Weather).main.temp_max === 'number' &&
//         typeof (weather as Weather).main.temp_min === 'number'
//     )
// }

// Zod
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})
// extract the inferred type
export type Weather = z.infer<typeof Weather>

const Geolocation = z.object({
    lat: z.number(),
    lon: z.number()
})

type Geolocation = z.infer<typeof Geolocation>

// Valibot
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_max: number(),
//         temp_min: number(),
//     })
// })
// Infer output TypeScript type of login schema
// type Weather = InferOutput<typeof WeatherSchema>

const INITIAL_STATE: Weather = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
    }
}

export default function useWeather() {

    const [weather, setWeather] = useState<Weather>(INITIAL_STATE)
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const fetchWeather = async (search: SearchType) => {

        setNotFound(false)

        setWeather(INITIAL_STATE)

        const appId = import.meta.env.VITE_API_KEY

        setLoading(true)

        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const { data: geolocationData } = await axios(geoUrl)
            const geolocationResult = Geolocation.safeParse(geolocationData[0])

            // if the city does not exist
            if (!geolocationResult.success) {
                setNotFound(true)
                return
            }

            const { lat, lon } = geolocationResult.data

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // Cast the type
            // const { data: weatherData } = await axios<Weather>(weatherUrl)
            // console.log(weatherData.name)


            // Type Guards
            // const { data: weatherData } = await axios(weatherUrl)
            // const weatherResult = isWeatherResponse(weatherData)
            // if (weatherResult) {
            //     console.log(weatherData.name)
            // } else {
            //     console.log('Respuesta mal formada')
            // }

            // Zod
            const { data: weatherData } = await axios(weatherUrl)
            const weatherResult = Weather.safeParse(weatherData)

            if (weatherResult.success) {
                setWeather(weatherResult.data)
            } else {
                console.log('Respuesta mal formada')
            }

            // Valibot
            // const { data: weatherData } = await axios<Weather>(weatherUrl)
            // const weatherResult = parse(WeatherSchema, weatherData)
            // if (weatherResult) {
            //     console.log(weatherResult.name);
            // }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const hasWeatherData = useMemo(() => weather.name !== '', [weather])

    return {
        weather,
        loading,
        notFound,
        fetchWeather,
        hasWeatherData
    }
}