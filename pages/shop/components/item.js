import Link from "next/dist/client/link"

export default function Item(props) {
  return (
    <div className="flex flex-col items-center my-8">
        <Link className=' cursor-pointer' href={`/shop/${props.id}`}><img className="cursor-pointer" src={props.img}></img></Link>
        <h2 className=" text-white font-bold mt-6 text-center">{props.title}</h2>
        <p className="text-white mt-3 ">{props.price}</p>
    </div>
  )
}
