
import { useContext } from "react";
import { Person } from "./Person";
import { Locale, translate, TranslateContext } from "./TranslateContext";


export const PersonView = (props: { person: Person }) => {
    const locale = useContext(TranslateContext);
    const person = props.person;

    return (<>
        <h1>{translate(locale, 'person_information')}</h1>
        <div>{person.first_name} {person.last_name} </div>
        <div>{person.email}</div>
        <img style={{
            width: '40px',
            height: '40px'
        }}
            src={person.avatar} alt="" />

    </>
    )
}

