
export default function Item(props) {
  return (
    <div className="flex flex-col items-center my-8">
        <img src={props.img}></img>
        <h2 className=" text-white font-bold mt-6">{props.title}</h2>
        <p className="text-white mt-3 ">{props.price}</p>
    </div>
  )
}
