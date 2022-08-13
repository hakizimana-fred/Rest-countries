import {useState,createContext, useEffect } from 'react'

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