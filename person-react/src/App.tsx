import { useState } from "react";
import { LocaleConfig as LocaleEditor } from "./LocaleConfig";
import { LoginView } from "./Login";
import { Person } from "./Person";
import { usePerson } from "./PersonContext";
import { PersonEditor } from "./PersonEditor";
import { PersonView } from "./PersonView";
import { RegistrationView } from "./Registration";
import { ToDoList } from "./TodoList";
import { TodoListNew } from "./TodoListNew";
import { defaultLocale, Locale, TranslateContext } from "./TranslateContext";
//import './registration.css'
import { ChatView } from "./Chat";


function App() {

  // const [person, setPerson] = useState<Person>({});
  // usePerson(10, setPerson);

  // const [locale, setLocale] = useState<Locale>(defaultLocale)

  return (
    <>
    <div>hello world</div>
      {/* <ChatView /> */}
      {/* <RegistrationView /> */}
      {/* <LoginView /> */}
      {/* <ToDoList/> */}
      {/* <TodoListNew/>
    <TranslateContext.Provider value={locale}>
      <PersonView person={person} />
      <br />
      <PersonEditor person={person} setPerson={setPerson} />
      <br />
      <LocaleEditor setLocale={setLocale} />
      </TranslateContext.Provider> */}
    </>
  );
}

export default App;
