import { useState } from "react"
import Item from './components/item'
import checkout from "../../lib/get-stripe";
import Button from "./components/Button";


export default function Shop() {
  const [lineItems, setLineItem] = useState([]);

  function addItem(event) {
    setLineItem(prev => [...prev, { price: event.target.id, quantity: 1 }])
  }

  function handlecheckout() {
    checkout({lineItems})
  }
  
  console.log(lineItems)

  return ( 
    <div className="flex flex-col items-center container w-9/12 m-auto ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-[40px] mt-5"></h1>
        <img className="w-10 h-10 mr-1 mt-4" src="/cart.png" />
        <p className="text-white font-bold">{`${lineItems.length ? "("+lineItems.length+")" : ""}`}</p>
        <Button handler={handlecheckout}>Checkout</Button>
      </div>
      <div className=" bg-slate-300 w-10 mb-10 h-[3px] mt-2"> </div>
      <div className="grid grid-rows-3 grid-flow-cols md:grid-cols-3 md:grid-flow-row md:gap-10 justify-center items-center ">
        <div className="flex flex-col items-center">
          <Item img='/boofitthumb.jpg' id='boof' title='Boof It! (PDF)' price="$5.00" />
          <Button handler={addItem} id='test'>Add item!</Button>
        </div>

        <div className="flex flex-col items-center">
          <Item img="/narcan.png" id='dude' title="Dude, Where's My Narcan? (PDF)" price="$5.00" />
          <Button handler={addItem} id='price_1KrB0VGAvyRgIANd1x5n7YYw'>Add item!</Button>
        </div>

        <div className="flex flex-col items-center">
          <Item img='/overampdthumb.png' id='overampd' title="Overamp'd! (PDF)" price="$5.00" />
          <button onClick={addItem} id="price_1KrB0VGAvyRgIANd1x5n7YYw" className='text-white bg-transparent max-w-20 max-w-3/12 hover:bg-white-500 font-semibold hover:text-slate-400 py-2 px-4 border border-white-500 hover:border-slate-500 rounded'>Add item!</button>
        </div>
      </div>
    </div>
  )
}