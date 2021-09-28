import CakeCard from "./CakeCard";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import cakes from "./cakes";
import CakeDetail from "./CakeDetail";
import CakeForm from "./CakeForm";

function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);
  const [cakeList, setCakeList] = useState([cakes]);

  useEffect(() => {
    fetch("http://localhost:4000/cakes")
    .then(resp => resp.json())
    .then(data => setCakeList(data))
  }, [])

  function handleAddCake(cake) {
    fetch("http://localhost:4000/cakes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cake)
    })
    .then(resp => resp.json())
    .then(newCake => {
      setCakeList([
        ...cakeList, newCake
      ])
    })
  }

  function handleDelete(id) {
    fetch(`http://localhost:4000/cakes/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      //removes the cake from our cakeList
      const filteredCakes = cakeList.filter(cake => cake.id !== id)
      setCakeList(filteredCakes)
      setSelectedCake(null)
    })
  }

  function handleUpdate(cake) {
    fetch(`http://localhost:4000/cakes/${cake.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({liked: !cake.liked})
    })
    .then(resp => resp.json())
    .then(updatedCake => {
      const updatedCakeList = cakeList.map(clCake => {
        if (clCake.id === cake.id) {
          return updatedCake;
        } else {
          return clCake;
        }
      })
      //Update the selectedCake
      setSelectedCake(updatedCake)
      //Updates the cake in our cakeList as well
      setCakeList(updatedCakeList)
    })
  }

  return (
    <>
      <Header />
      <CakeForm handleAddCake={handleAddCake}/>
      {visible ? <SearchBar /> : null}
      <br/>

      <button onClick={() => setVisible(!visible)}>{visible ? "x" : "Form"}</button>
      <br/>

      {selectedCake ? <CakeDetail cake={selectedCake} handleDelete={handleDelete} handleUpdate={handleUpdate}/> : null}

      {cakeList.map(cake => <CakeCard key={cake.flavor} setSelectedCake={setSelectedCake} cake={cake}/>)}
    </>
  );
}

export default App;
