export default function Card(props) {
    return(
        <div data-theme="dracula" className="card lg:card-side bg-base-100 shadow-xl">
            <figure className=""><img className="" src={props.img} alt="Album" /></figure>
            <div className="card-body lg:w-5/12">
                <h2 className="card-title text-slate-400">{props.title}</h2>
                <p>{props.price}</p>
                <p className="text-white">{props.info}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary mt-5 bg-error bg-black hover:bg-[#f69]">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}