import { useState } from "react"
import Item from './item'
export default function Shop() {
  return ( 
    <div className="flex flex-col items-center container w-9/12 m-auto ">
      <h1 className="text-white text-[40px] mt-5">Zines</h1>
      <div className="bg-white w-48 h-1 mt-2"> </div>
      <div className="grid grid-flow-cols md:grid-flow-row mt-10 justify-center items-center ">
        <Item img='/boofitthumb.jpg' title='Boof It! (PDF)' price="$5.00" />
        <Item img="/narcan.png" title="Dude, Where's My Narcan? (PDF)" price="$5.00" />
        <Item img='/overampdthumb.png' title="Overamp'd! (PDF)" price="$5.00" />
      </div>
    </div>
  )
}