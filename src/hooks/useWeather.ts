import axios from "axios"
import type { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {
        const appId = '5c82ce55f06989a510f19567ff0d761e'
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const { data } = await axios(geoUrl)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return {
        fetchWeather
    }
}