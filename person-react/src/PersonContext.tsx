import { useEffect } from "react";
import { Person } from "./Person";

export const usePerson = (personId: number, setPerson: (person: Person) => void) => {

    useEffect(() => {
        const load = async () => {
            let resp = await (await fetch(`https://reqres.in/api/users/${personId}`)).json();
            setPerson(resp.data);
        }
        load();
    }, [personId]);
}