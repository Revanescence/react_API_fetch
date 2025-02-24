import  { useState, useEffect } from "react";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

function AsyncAwaitAPI() {
  const [productData, setProductData] = useState<Product[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        console.log("Error:", error);
        
      }
    };

    fetchData();
  }, []);

return (
    <div>
      <h2> Product List (by Async/Await Fetch Method)</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)",gap: "20px"}}>
        {productData.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "50%", height: "50px", objectFit: "cover" }} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default AsyncAwaitAPI;
