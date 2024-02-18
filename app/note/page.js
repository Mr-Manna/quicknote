'use client'

import { useEffect } from "react"
import { Editable, useEditor } from "@wysimark/react"
import { useState } from "react"
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
// import List from '@editorjs/list'; 
import Warning from '@editorjs/warning';

export default function Note(){
    useEffect(()=>{
      const editor = new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        autofocus: true,
        holder: 'editorjs',
        tools: { 
          header: Header, 
          warning: Warning, 
        }, 
      });
    })

    return<>
      <div id="editorjs"> </div>
    </>    
}