

export default function Button(props) {
    console.log(props.children)
  return (
    <button onClick={props.handler} id={props.id} className='text-white bg-transparent max-w-20 max-w-3/12 hover:bg-white-500 font-semibold hover:text-slate-400 py-2 px-4 border border-white-500 hover:border-slate-500 rounded'>{props.children}</button>
  )
}
