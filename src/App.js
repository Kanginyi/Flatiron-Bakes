import CakeCard from "./CakeCard";
import Header from "./Header";
import SearchBar from "./SearchBar";

const cakes = [
  {
      flavor: 'Vanilla',
      size: '6" cake',
      price: 40.00
  },
  {
      flavor: 'Raspberry Cardamon Rose',
      size: '9" cake',
      price: 50.00
  },
  {
      flavor: 'Pink Champagne',
      size: 'cup cake',
      price: 37.5
  },
  {
      flavor: 'Earl Grey',
      size: 'cup cake',
      price: 18.00
  },
  {
      flavor: 'Black Forest',
      price: 18.00
  }
];

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      {cakes.map(c => <CakeCard flavor={c.flavor} price={c.price} size={c.size}/>)}
    </>
  );
}

export default App;