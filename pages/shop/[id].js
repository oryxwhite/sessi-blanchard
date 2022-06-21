import { useRouter } from "next/router"

export default function ItemDetail() {
    const  router = useRouter()
    const id = router.query.id
    return (
    <div>
        <h1 className=" text-white"> {id}</h1>
    </div>
  )
}

export async function getStaticPaths() {
    const itemPaths = [
        { params: { id: 'boof' } },
        { params: { id: 'dude' } },
        { params: { id: 'overampd' } }
    ]
    return {
        paths: itemPaths,
        fallback: false
    }
}