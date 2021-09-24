import CakeCard from "./CakeCard";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useState } from "react";
import cakes from "./cakes";
import CakeDetail from "./CakeDetail";
import CakeForm from "./CakeForm";

function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);
  const [cakeList, setCakes] = useState(cakes);

  function handleAddCake(cake) {
    setCakes([
      ...cakeList, cake
    ])
  }

  return (
    <>
      <Header />
      <CakeForm handleAddCake={handleAddCake}/>
      {visible ? <SearchBar /> : null}
      <br/>

      <button onClick={() => setVisible(!visible)}>{visible ? "x" : "Form"}</button>
      <br/>

      {selectedCake ? <CakeDetail cake={selectedCake} /> : null}

      {cakeList.map(cake => <CakeCard setSelectedCake={setSelectedCake} cake={cake}/>)}
    </>
  );
}

export default App;
