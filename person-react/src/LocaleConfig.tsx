import { getLocale, Locale } from "./TranslateContext"


export const LocaleConfig = (props:{setLocale:(locale:Locale)=>void}) => {
const setLocale = props.setLocale;

    return( 
        <>
        <button onClick={()=>{setLocale(getLocale('ro'))}}>RO</button>
        <button onClick={()=>{setLocale(getLocale('en'))}}>EN</button>
        </>
    )
}