import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
