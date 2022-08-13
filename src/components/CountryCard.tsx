import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/theme'

const CountryCard: FC<{country: any}> = ({country}) => {

    const {name:{common}, population, region  } = country

    const value = useContext(ThemeContext) as any

    return (
        <Link to={`/detail/${country.name.common}`}>
         <div className={`card ${value.enabled ? 'dark' : null} `}>
                    <img src={country.flags.png} alt="flag" />
                    <div className="card__content">
                    <h2>{common}</h2>
                    <h5 style={{color: `${ value.enabled ? "#fff": ''}`}}>Population: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{population}</span></h5>
                    <h5 style={{color: `${ value.enabled ? "#fff": ''}`}}>Region: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{region}</span></h5>
                     {country?.capital && country.capital.map((c:any) => (
                        <h5 style={{color: `${ value.enabled ? "#fff": ''}`}} key={c}>Capital: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{c}</span></h5>
                     ))}
                    </div>
            </div>
        </Link>

    )
}

export default CountryCard