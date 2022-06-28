import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);


  async function handleOnSubmit(e) {
    e.preventDefault()
    const formData = {}
     Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.id ) return;
      formData[field.id] = field.value
    })
    setButtonText('Sending')
    const res = await fetch('/api/sendgrid', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    
    const { error } = await res.json()
    if (error) {
      setShowSuccessMessage(false)
      setShowFailureMessage(true)
      return
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText('Sent!')
    
    console.log(res)
  }



  return (
    <div>
    <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className="flex flex-col justify-center items-center">
    
    <h1 className="text-white text-3xl underline-offset-4 m-auto font-sans capitalize tracking-wider mt-20">Send me a message!</h1>
    <div className="w-11/12 max-w-[500px] h-100 p-2 rounded-xl border-2 mt-20 py-10">
    <form className="w-11/12 xs:w-10/12 sm:max-w-[400px] m-auto " method="post" onSubmit={handleOnSubmit}>

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
        <div className="flex items-center justify-center">
          <button disabled={buttonText==="Sent!"?true:false} className={`shadow hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${buttonText == "Sent!"?'bg-red-500':'bg-purple-900'}`} type="submit">
            {buttonText}
          </button>
        </div> 
      </div>
    </form> 
    </div>
    </main>
    </div>
  )
}
