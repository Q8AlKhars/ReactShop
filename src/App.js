import shop from "./Images/Bakery.webp";
import "./App.css";
import ProductItem from "./Components/ProductItem";
import productData from "./Components/productData";

function App() {
  const products = productData.map((product, index) => {
    return <ProductItem myItem={product} key={index} />;
  });
  // JSX code
  return (
    <div className="App">
      <h1>Bakery</h1>
      <p>
        Before baking powder and baking soda were developed, bakers used yeast
        as the primary leavening agent. This discovery revolutionized baking by
        introducing fluffy and airy textures to bread.
      </p>
      <img className="Image-Store" src={shop}></img>
      <div className="Products-list">{products}</div>
    </div>
  );
}

export default App;
