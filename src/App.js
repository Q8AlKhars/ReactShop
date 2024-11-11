import shop from "./Images/Bakery.webp";
import "./App.css";

function App() {
  const products = [
    {
      name : "Croissant",
  
      image : "https://cdn.pixabay.com/photo/2023/06/06/07/10/ai-generated-8044029_1280.jpg",
  
      price : "200 Fils",
    },
    {
      name : "Bread",
      
      image : "https://images.nightcafe.studio/jobs/SVc4WuEVbA5W0kq9hhwQ/SVc4WuEVbA5W0kq9hhwQ--1--0dzfw.jpg?tr=w-1600,c-at_max",
  
      price : "50 Fils",
    }
  
  ];
  
  const productlist = products.map((product, index) => {
    return (
      <div key={index}>
      <img className="Products-Image" src={product.image}></img>
      <p>{product.name}</p>
      <p>{product.price}</p>
      </div>
    )
  })
  return (
    <div className="App">
      <h1>Bakery</h1>
      <p>
        Before baking powder and baking soda were developed, bakers used yeast
        as the primary leavening agent. This discovery revolutionized baking by
        introducing fluffy and airy textures to bread.
      </p>
      <img className="Image-Store" src={shop} ></img>
      <div className="Products-list">
      {productlist}
      </div>
    </div>
  );
}

export default App;
