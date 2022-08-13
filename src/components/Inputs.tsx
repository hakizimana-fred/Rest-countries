import React, { useContext } from 'react'
import { FC, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/theme'

type IProps = {
  continents: string
  show: (continent: string) => void
  setContinent: Function
  search: string
  setSearch: Function
  onChange: any
}


const Inputs: FC<IProps> = ({continents, show, search, onChange}) => {
const ref = useRef(null)

useEffect(() => {

  const dropDown = document.querySelector('.dropdown') as HTMLDivElement
  const handleClick = (event: any) => dropDown.classList.toggle('active')

  const element = ref.current as any
  element.addEventListener('click', handleClick)

  return () => {
    element.removeEventListener('click', handleClick)
  }
}, [])

  const value = useContext(ThemeContext) as any


    return (
        <div className="inputs">
        <div className='icon-holder'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder='search for a country' value={search} onChange={onChange} className={`country__search ${value.enabled ? 'dark' : null}`}/>
        </div>               
        
        <div className={`dropdown ${value.enabled ? 'dark' : null}`} ref={ref}>
            <input type="text" value={continents} className={`filter__search ${value.enabled ? 'dark' : ''}`} readOnly /> 
            <div className={`option ${value.enabled ? 'dark' : null}`}>
              <div onClick={() => show('Africa')}>Africa</div>
              <div onClick={() => show('America')}>America</div>
              <div onClick={() => show('Asia')}>Asia</div>
              <div onClick={() => show('Europe')}>Europe</div>
              <div onClick={() => show('Oceania')}>Oceania</div>
            </div>
        </div>
  </div>      
    )
}

export default Inputs