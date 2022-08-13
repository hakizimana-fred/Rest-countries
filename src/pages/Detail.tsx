import { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import axios from 'axios'
import { ThemeContext } from '../context/theme'


const baseUrl = 'https://restcountries.com/v3.1/name'

type unkonwn = any

const Detail = () => {
    const [country, setCountry] = useState([])
    const { country: c } = useParams()
    const navigate = useNavigate()

    const value = useContext(ThemeContext) as any

    useEffect(() => {
            async function fetchCountry() {
                const { data } = await axios.get(`${baseUrl}/${c}`)
                setCountry(data)
            }

            fetchCountry()
    }, [])

    const detail = country[0] as unkonwn
    const currencies = detail?.currencies
    const language = detail?.languages

    let counntry_currrency;
    let country_language;

    if (currencies) {
         counntry_currrency = currencies[Object.keys(currencies)[0]] 
    }

    if (language) {
         country_language = language[Object.keys(language)[0]] 
    }

    console.log(country_language)

  
return (
        <>
            <button onClick={() => navigate(-1)} className='btn btn-outline btn-back'>
                <FontAwesomeIcon icon={faArrowLeft} style={{marginRight: '10px'}}/>
                back
            </button> 
            <section className="detail__section grid-2">
                <div>
                    <img src={detail?.flags?.png} alt="flag" />
                </div>
                <div className='detail__inner'>
                    <div className='detail__country'>
                        <div>
                            <h3 className='text-lg'>{detail?.name.common}</h3>
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Population: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{detail?.population}</span></h4>
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Native Name: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{detail?.name.nativeName?.ara?.common}</span></h4>
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Region: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{detail?.region}</span></h4>
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Sub Region: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{detail?.subregion}</span></h4>
                        </div>
                        <div className='detail__culture'>    
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Native Name: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>Belgie</span></h4>
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Currencies: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{counntry_currrency?.symbol}</span></h4>
                            <h4 style={{color: `${ value.enabled ? "#fff": ''}`}}>Langues: <span style={{color: `${ value.enabled ? "#fff": ''}`}}>{country_language}</span></h4>

                        </div>
                    </div>
                    <div className='country__borders'>
                       <h3 className='border__header'>Borders:</h3>
                       {detail?.borders.map((border: string) => (     
                            <button className="btn btn-outline">{border}</button> 
                       ))}
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail