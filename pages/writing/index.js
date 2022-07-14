import postData from "./filterPostData.json"
import PostCard from "./components/Card.js"

export default function Writing() {
    // postData.Posts[0].postTitle\
    const postComponents = postData.Posts.map((data, index) => {
        return <PostCard imgsrc={data.imageSource} title={data.postTitle} url={data.url} key={index} />
    })

    return(
        <div className="w-9/12 m-auto">

            <div className="grid grid-cols-auto-fill gap-4 gap-x-0 mt-20 justify-items-center max-w-9/12">

                {postComponents}

            </div>

         </div>
    )
}