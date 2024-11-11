import shop from "./Images/Bakery.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bakery</h1>
      <p>
        Before baking powder and baking soda were developed, bakers used yeast
        as the primary leavening agent. This discovery revolutionized baking by
        introducing fluffy and airy textures to bread.
      </p>
      <img className="Image-Store" src={shop}></img>
    </div>
  );
}

export default App;
