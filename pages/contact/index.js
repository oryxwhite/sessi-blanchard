import { useRef } from "react";
import Head from "next/head";
export default function Contact() {

  return (
    <div>
    <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className="flex flex-col justify-center items-center">
    {/* <h1 className="text-white text-4xl  ml-28  mt-20">Contact</h1> */}
    <form className="w-11/12 xs:w-10/12 sm:max-w-[400px] md:max-w-[600px] m-auto mt-40" method="post">

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-sans font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="full-name">
            Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="full-name" type="text" >
          </input>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="">
          </input>
        </div>
      </div>

      <div className="md:flex md:items-start mb-6">
        <div className="md:w-1/3">
          <label className="block  text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message">
            Message
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea className="bg-gray-200 h-40 w-70 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email"/>
          
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-purple-900 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Send
          </button>
        </div>
      </div>
    </form>

    </main>
    </div>
  )
}
