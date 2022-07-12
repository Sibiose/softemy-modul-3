import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Person } from "./Person";


const usePerson = (personId: number, setPerson: (person: Person) => void) => {

    useEffect(() => {
        const load = async () => {
            let resp = await (await fetch(`https://reqres.in/api/users/${personId}`)).json();
            setPerson(resp.data);
        }
        load();
    }, [personId]);
}

export const PersonView = (props: { personId: number }) => {
    const [person, setPerson] = useState<Person>({});

    console.log('Rendering person view')

    usePerson(props.personId, setPerson);

    const inputEl = useRef<HTMLInputElement>(null);



    useLayoutEffect(() => {
        inputEl.current?.focus();
    })
    return (<>
        <div>{person.first_name} {person.last_name} </div>
        <div>{person.email}</div>
        <img style={{
            width: '40px',
            height: '40px'
        }}
            src={person.avatar} alt="" />
        <input ref={inputEl} type="text" />
    </>
    )
}

