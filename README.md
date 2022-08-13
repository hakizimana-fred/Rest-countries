# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*



### Mobile Detail page
![](./public/detail-mobile.png)





### Links

- Live Site URL: [live site URL here](https://rest-countries-sage.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library




To see how you can add code snippets, see below:

```html
 <img src={detail?.flags?.png} alt="flag" />
```
```css
.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
}
```
```js

import {useState,createContext, useEffect, useRef } from 'react'
// How I added The darkmode
export const ThemeContext = createContext({})

export function ThemeWrapper(props: any) {
    const [enableDarkMode, setEnableDarkMode] =  useState(false)
    const switchTheme = () => setEnableDarkMode(!enableDarkMode)

    useEffect(() => {
            if (!enableDarkMode) {
                document.body.classList.remove('dark')
                document.body.classList.add('light')
            }else{
                document.body.classList.add('dark')
            }
    }, [enableDarkMode])

    return (
        <ThemeContext.Provider value={{enabled: enableDarkMode, switchTheme: switchTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}



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


```

## Author

- Website - [Hakizamana Fred](https://www.your-site.com)
- Frontend Mentor - [@hakizimana-fred](https://www.frontendmentor.io/profile/hakizimana-fred)
- Twitter - [@hakifred201](https://www.twitter.com/hakifred201)



