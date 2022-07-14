import { useCallback, useContext, useMemo, useRef } from "react";
import { Person } from "./Person"
import { translate, TranslateContext } from "./TranslateContext";

export const PersonEditor = (props: {
    person: Person,
    setPerson: (person: Person) => void,
}) => {
    const person = useMemo(() => props.person, [props.person]);
    const locale = useContext(TranslateContext);

    const nameEditorEl = useRef<HTMLInputElement>(null)

    const changeFirstName = useCallback(() => {
        const first_name = nameEditorEl.current?.value ?? "";
        props.setPerson({ ...person, first_name });
    }, [props.setPerson, person]);

    return (
        <>
            <h3>{translate(locale, 'edit_name')}</h3>
            <input ref={nameEditorEl} defaultValue={person.first_name} type="text" />
            <button onClick={changeFirstName}>{translate(locale, 'save')}</button>
        </>
    )
}