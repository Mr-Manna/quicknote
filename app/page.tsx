'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import React from "react"
import styles from './page.module.css'
import { Roboto_Mono } from "next/font/google";
import Footer from './components/Footer.js'
var Airtable = require('airtable');
import { useRouter } from 'next/navigation'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE
});
var base = Airtable.base('app8zMGpnIHI1LLDi');
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})


const EditorComp = dynamic(() => import('./EditorComponent'), { ssr: false })

// const markdown = 

export default function Home() {
  const router = useRouter()

  let [text, setText] = React.useState(`
  **Delete this text and start writing here.**
 `)


  const handleSave = ()=>{
    base('Table 1').create({
        "Note" : text,
      }, 
       function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        let id = record.getId();

        router.push(`/${id}`)
    });
  }

  const handleChange = (value) =>{
    setText(value)    
  }


  return (
    <>

    <div className={styles.app_grid}>
      <aside className={styles.aside_left}>
       <a href="/"><h1 className={styles.heading + ' ' + roboto_mono.className}>QUICK NOTE</h1></a> 
      </aside>
      <main className={styles.main}> 
      <Suspense fallback={null}>
        <EditorComp markdown={text} onChange={handleChange}/>
      </Suspense>
      </main>
      <aside className={styles.aside_right}>
        <span onClick={()=>handleSave()}>
          <svg className="svg" viewBox="0 0 24 24"><path d="M21 20V8.414a1 1 0 0 0-.293-.707l-4.414-4.414A1 1 0 0 0 15.586 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM9 8h4a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm7 11H8v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg>
        </span>
        <span hidden={true}>
          <svg className="svg" viewBox="0 0 24 24"><path d="M21 10v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0  1 1 1zM6 14H5V5h9v1a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2z"/></svg>
        </span>
        <span hidden={true}>
          <svg className="svg" viewBox="0 0 24 24"><path d="M12,22a7,7,0,0,0,5-11.894V7A5,5,0,0,0,7,7v3.106A7,7,0,0,0,12,22Zm1-6.277V18a1,1,0,0,1-2,0V15.723a2,2,0,1,1,2,0ZM9,7a3,3,0,0,1,6,0V8.683a6.93,6.93,0,0,0-6,0Z"/></svg>
          </span>
        <span hidden={true}>
          <svg className="svg" viewBox="0 0 24 24"><path d="M12,22a7,7,0,0,0,5-11.894V7A5,5,0,0,0,7.67,4.5a1,1,0,1,0,1.73,1A3,3,0,0,1,15,7V8.683A7,7,0,1,0,12,22Zm0-10a1.994,1.994,0,0,1,1,3.723V18a1,1,0,0,1-2,0V15.723A1.994,1.994,0,0,1,12,12Z"/></svg>
        </span>
        <span hidden={true}>
          <svg className="svg" width="22.703" height="21.928"><path d="M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z"/></svg>
        </span>
      </aside>
    </div>
    <Footer />
    </>
  )
}

EditorComp.displayName = 'EditorComp'
