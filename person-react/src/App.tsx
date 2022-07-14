import { useState } from "react";
import { LocaleConfig as LocaleEditor } from "./LocaleConfig";
import { Person } from "./Person";
import { usePerson } from "./PersonContext";
import { PersonEditor } from "./PersonEditor";
import { PersonView } from "./PersonView";
import { defaultLocale, Locale, TranslateContext } from "./TranslateContext";


function App() {

  const [person, setPerson] = useState<Person>({});
  usePerson(10, setPerson);

  const [locale, setLocale] = useState<Locale>(defaultLocale)

  return (
    <>
    <TranslateContext.Provider value={locale}>
      <PersonView person={person} />
      <br />
      <PersonEditor person={person} setPerson={setPerson} />
      <br />
      <LocaleEditor setLocale={setLocale} />
      </TranslateContext.Provider>
    </>
  );
}

export default App;
