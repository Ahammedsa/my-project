import { useState } from "react";
import { useEffect } from "react"
import SingleProduct from "./Components/SingleProduct/SingleProduct";


function App() {
  const [products, setProducts] = useState([])
  const [cart , setCart] = useState([]);
   
  useEffect(() => {
    fetch('../public/fakedata.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, []);
  const  handleAddToCart = (p) => {
    const isExsiting = cart.find(item => item .id == p.id);
    if(!isExsiting){
      setCart([...cart,p])
    }
    else{
      alert("Eta agei selected")
    }
  };

  const removeToCart = (pd) => {
    const isExsit = cart.filter(item => item .id != pd.id);
      setCart(isExsit);
  };
   
  return (
    <>
      <h1 className="text-red-600">Hello</h1>
      <div className="flex justify-around gap-5">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4" >
         {
          products.map(product => <SingleProduct
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          ></SingleProduct>)
        }
         </div>

        <div className="  cart-container shadow-lg w-96 text-center border border-lg border-solid lg:mt-4">
        <h1 >Cart</h1>
          <div className="flex justify-around bg-red-500">
          <h1 >Name</h1>
           <h1>Price</h1>
          </div>
          <div >
        {
          cart.map((item, index )=> (
            <>
           <div className="flex justify-around">
            <p>{index+1}</p>
           <h1 >{item.title.slice(0,10)}</h1>
           <h1>{item.price}</h1>
           <button  onClick={(e) => removeToCart(item)} className=" btn max-h-10  bg-success p-4 border border-3xl text-white ">Delete</button>
           </div>
            </>
          ))
        }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
