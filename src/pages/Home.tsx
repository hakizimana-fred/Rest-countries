import React, {useEffect, useState } from 'react'
import Countries from '../components/sections/Countries'
import Inputs from '../components/Inputs'
import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all'
const { get } = axios

const Home = () => {
    const [continents, setContinenets] = useState<string>('')
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
  

    const show = (continent: any) => { 
        setContinenets(continent)
        filter(continent)
    }


    function filter(continent: string) { 
        
        const results = countries.filter((country: any) => {
            return country.region.toLowerCase().includes(continent.toLowerCase())
        })
        setCountries(results)
    }

    function filterSearched(e: any) {
        const country = e.target.value
        const data = countries

        if (country !== '') {  
            const results = countries.filter((c: any) => {
                return c.name.common.toLowerCase().startsWith(country.toLowerCase())
            })
            setCountries(results) 
        }else{
            setCountries(data)
        }

        setSearch(country)
    }

useEffect(() => {
      async function fetchData() {
        const { data } = await get(`${baseUrl}`) 
        setCountries(data)
      }
      fetchData()

}, [search, continents])

    return(
        <>
            <Inputs 
                continents={continents} 
                show={show} 
                setContinent={setContinenets} 
                search={search} 
                setSearch={setSearch}
                onChange={filterSearched}

            />
            <Countries countries={countries} />
        </>
    )
}

export default Home