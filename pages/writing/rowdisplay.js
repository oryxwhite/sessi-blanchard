import postData from "./filterPostData.json"
import PostCard from "./components/Card.js"
import Carousel from "./components/Carousel"

export default function Writing() {
    const postComponents = postData.Posts.map((data, index) => {
        return <PostCard imgsrc={data.imageSource} title={data.postTitle} key={index} index={index} url={data.url}/>
    })

    return(
        <div className="w-9/12 m-auto mt-20">

            {/* <div className="grid grid-flow-col gap-4 mt-20 justify-items-center max-w-9/12">
                {postComponents}
            </div> */}

            <Carousel />

         </div>
    )
}