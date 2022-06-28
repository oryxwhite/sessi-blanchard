import Button from "../shop/components/Button"
export default function Success() {
  return (
    <div className="flex items-center justify-center h-full mt-20 m m-30">
        <div className="mt-30">
        {/* <Button>Your purchase was successful! <br/> Thank you!</Button> */}
        <button className=" text-red-100 bg-transparent max-w-100 max-w-6/12 font-semibold  py-4 px-8 border border-white-500 hover:border-slate-500 rounded cursor-pointer">Your purchase was successful! <br/> Thank you!</button>
        </div>
    </div>
  )
}
