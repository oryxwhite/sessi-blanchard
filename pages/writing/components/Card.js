
export default function PostCard(props) {
    return (
        <div key={props.index} data-theme="luxury" className="group card w-40 h-40 bg-base-200 shadow-xl image-full relative snap-start carousel-item">
            
            <figure className="hover:opacity-20"><img src={props.imgsrc} alt="" className="transition transform hover:opacity-20"/></figure>
            
            <div className="card-body flex items-center justify-center p-3  "> 
                <a href={props.url} className=""><h2 className="card-title text-center text-[14px] transition transform group-hover:text-slate-50/0 duration-700">{props.title}</h2></a>
                <h2 className="absolute text-center text-[14px] transition transform text-slate-50/0 group-hover:text-slate-50 delay-150 duration-300"><a href={props.url}>{props.lede}</a> </h2>
            </div>

            {/* <div className="card-body flex items-center justify-center p-3  ">
                <h2 className=" z-0 absolute text-center text-[14px] transition transform text-slate-50/0 hover:text-slate-50">{props.lede}</h2>
            </div> */}
            
        </div>  
    )
}