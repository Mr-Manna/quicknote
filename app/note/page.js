'use client'

import { useEffect } from "react"
import { Editable, useEditor } from "@wysimark/react"
import { useState } from "react"
export default function Note(){
    useEffect(()=>{
        if ('speechSynthesis' in window) {
            // Speech Synthesis is supported 🎉
            console.log('speech');
           }else{
             // Speech Synthesis is not Supported 😞 
             console.log('no speech');
           }
    })
    const [markdown, setMarkdown] = useState("# Hello World")
    const editor = useEditor({ authToken: false })
    return<>
      <Editable editor={editor} value={markdown} onChange={setMarkdown} />
    </>    
}