import { createContext } from "react"

const ro = {
    "person_information": "Informatii persoana",
    "edit_name": "Editeaza Nume",
    "save": "Salveaza"
}

const en = {
    "person_information": "Person information",
    "edit_name": "Edit name",
    "save": "Save"
}



export interface Locale {
    resources: any,
    locale: string
}

export const translate = (locale: Locale, key: string) => {
    return locale.resources[key] ?? `${key} please translate me!`
}

export const getLocale = (locale: 'ro' | 'en'):Locale => {
    let resources = en;

    if(locale === 'ro'){
        resources = ro;
    }
    return {resources, locale}
}

export const defaultLocale: Locale = getLocale('en');


export const TranslateContext = createContext<Locale>(defaultLocale);

