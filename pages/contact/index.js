import { useRef } from "react";
import Head from "next/head";
export default function Contact() {
  async function handleOnSubmit(e) {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.id ) return;
      formData[field.id] = field.value
    })

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
  }
  return (
    <div>
    <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className="flex flex-col justify-center items-center">
    <h1 className="text-white text-3xl underline-offset-4 m-auto font-sans capitalize tracking-wider mt-20">Send me a message!</h1>
    <form className="w-11/12 xs:w-10/12 sm:max-w-[400px] m-auto mt-20" method="post" onSubmit={handleOnSubmit}>

      <div className="mb-6 m-auto">
        <div className="">
          <label className="block text-gray-500 font-sans font-bold mb-1 pr-4" htmlFor="name">
            Name
          </label>
        </div>
        <div className="">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" >
          </input>
        </div>
      </div>
      <div className="m-auto mb-6">
        <div className="">
          <label className="block text-gray-500 font-bold mb-1  pr-4" htmlFor="email">
            Email
          </label>
        </div>
        <div className="">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="">
          </input>
        </div>
      </div>

      <div className="m-auto mb-6">
        <div className="">
          <label className="block  text-gray-500 font-bold mb-1  pr-4" htmlFor="message">
            Message
          </label>
        </div>
        <div className="">
          <textarea className="bg-gray-200 h-40 w-70 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="message"/>
          
        </div>
      </div>

      <div className="">
        <div className=""></div>
        <div className="">
          <button className="shadow bg-purple-900 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div> 
      </div>
    </form> 

    </main>
    </div>
  )
}
