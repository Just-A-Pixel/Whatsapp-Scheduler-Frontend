import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import qr from "../public/qr.png"
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState(".")
  const [phone, setPhone] = useState("91")
  const [time, setTime] = useState("")

  return (
    <div className='container mx-auto w-3/6 content-center'>
      
      First time? Scan the QR code to opt in <br/>
      <div className='container mx-auto w-5/6 content-center'>
      <Image src = {qr} alt = ""/>
      <script async src='https://www.buildquickbots.com/gsui/js/embedScript/gs_wa_widget.js' data-appid='4e8bb5ca-be78-43a7-b466-e5821a84aae4' data-appname='Virtualization' data-source='WEB' data-env='PROD' data-lang='en_US'></script>
      </div>

      <br/>
    <input type="text" className='border-2 border-black ' placeholder='phone' onChange={e => setPhone(e.target.value)}/><br/>
    <input type="text" className='border-2 border-black ' placeholder='message' onChange={e => setText(e.target.value)}/><br/>
    <label>time</label>
    <input type="datetime-local" className='border-2 border-black ' placeholder='time' onChange={e => setTime(e.target.value)}/>
    <br/><br/><br/>
    <div className='border-2 border-black w-20 bg-black text-white' onClick={() => {
      const d = new Date(time)
      const delay = d.getTime() - Date.now()
      const route = process.env.NEXT_PUBLIC_PATH
      console.log(route)
      axios.post(`${route}/requests`, {
        
          "text": text,
          "phone": phone,
          "seconds": delay
      
      })
      alert("Submitted")
    }}  >
      Submit
    </div>

    </div>
  )
}
