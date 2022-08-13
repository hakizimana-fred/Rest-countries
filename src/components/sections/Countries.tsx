import { FC } from 'react'
import CountryCard from '../CountryCard'

const Countries: FC<{countries: object[]}> = ({countries}) => {
  

    return (
          <section className="countries__section"> 
              {countries.map((country: any) => (
                <CountryCard  country ={country} key={country.flag}/>
              ))}
            </section>
    )
}


export default Countries