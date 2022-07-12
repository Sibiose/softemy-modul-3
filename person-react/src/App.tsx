import { useState } from "react";
import { PersonView } from "./PersonView";

function App() {

  const [showPerson, setShowPerson] = useState(true);

  return (
    <>
      <PersonView personId={10} />
      <button onClick={() => {
        setShowPerson(!showPerson);
      }}>Toggle Person</button>
    </>
  );
}

export default App;
