import axios from "axios";
import { useState, useEffect } from "react";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}



function AxiosAPI() {
  const [productData, setData] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<{ products: Product[] }>("https://dummyjson.com/products");
        console.log(res.data); 
        setData(res.data.products); 
      } catch (error) {
        console.log("Error : ", error);
        
      }
    })();
  }, []);

  return (
    <div>
      <h2>Product List (by Axios Method)</h2>

      <div style={{ display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",gap: "20px"}}>
        {productData.map((product) => (
          <div key={product.id} >
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

export default AxiosAPI;
