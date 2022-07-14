
export default function PostCard(props) {
    return (
        <div key={props.index} data-theme="luxury" className="card w-40 h-40 bg-base-100 shadow-xl image-full relative snap-start carousel-item">
            
            <figure><img src={props.imgsrc} alt="" /></figure>

            <div className="card-body flex items-center justify-center p-3"> 
                <a href={props.url}><h2 className="card-title text-center text-[14px]">{props.title}</h2></a>
            </div>
        </div>  
    )
}