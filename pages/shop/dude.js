import { useState, useEffect } from "react"
import Button from "./components/Button";
import checkout from "../../lib/get-stripe";

export default function() {
    const [lineItems, setLineItem] = useState([]);

    function addItem(event) {
        if (lineItems.find(el => JSON.stringify(el) == JSON.stringify({price: event.target.id, quantity: 1})) == undefined) {
            setLineItem(prev => [...prev, { price: event.target.id, quantity: 1 }])
            }
    }

    function clearCart() {
        setLineItem([])
      }

    function handlecheckout() {
        checkout({lineItems})
    }

    useEffect(() => {
        const data = sessionStorage.getItem('state')
        if ( data !== null ) { setLineItem(JSON.parse(data)) }
      }, [])

    useEffect(() => {
        sessionStorage.setItem('state', JSON.stringify(lineItems))
      }, [lineItems])
    
    return(

    <div className="w-9/12 m-auto mt-">

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-[40px] mt-5"></h1>
            <img className="w-10 h-10 mr-1 mt-4" src="/cart.png" />
            <p className="text-white font-bold">{`${lineItems.length ? "("+lineItems.length+")" : ""}`}</p>
            <div className="flex gap-3">
                <Button handler={handlecheckout} className="">Checkout</Button>
                <Button handler={clearCart}>Clear Cart</Button>
            </div>
        </div>

        <div data-theme="dracula" className="card lg:card-side bg-base-100 shadow-xl  mt-10">
            <figure className=""><img className="" src="/narcan.png" alt="Album" /></figure>
            <div className="card-body lg:w-5/12">
                <h2 className="card-title text-slate-400">DUDE, WHERE'S MY NARCAN? ZINE (PDF)</h2>
                <p className="text-[#f69]">$5.00</p>
                <p className="text-white">A harm reduction guide on how to prevent and respond to opioid-involved overdoses.  The PDF is formatted for printing on 8.5” x 11” paper, and not necessarily for reading on your computer. The page is white and the graphics and text are in grayscale (black & white).  For instructions on assembling the zine, check out <a href="https://youtu.be/Ixqr9e3wCxI" className="text-[#f69] inline">this video</a>.  Or you can just Google “eight page zine.” *Note: Please do not alter the document’s text or design. Additionally, if you are interested in customized zines for your organization, please <a href='/contact' className="inline text-[#f69]">contact me</a>; do not impose your logo on the document or otherwise brand it as your own.</p>
                <div className="card-actions justify-end">
                <button onClick={addItem} id="price_1KrB0VGAvyRgIANd1x5n7YYw" className="btn btn-primary mt-5 bg-error bg-black hover:bg-[#f69]">Add to Cart</button>
                </div>
            </div>
        </div>
       
        {/* <Card img="/boofitthumb.jpg" title="Boof It! Zine (PDF)" price="$5.00" info={`A harm reduction guide for boofing—that is, the holy act of putting drugs up your butt.  The PDF is formatted for printing on 8.5” x 11” paper, and not necessarily for reading on your computer. The page is white and the graphics and text are in grayscale (black & white).  For instructions on assembling the zine, check out this video. Or you can just Google “eight page zine.” *Note: Please do not alter the document’s text or design. Additionally, if you are interested in customized zines for your organization, please contact me; do not impose your logo on the document or otherwise brand it as your own.`} /> */}
    </div> 
   )
}