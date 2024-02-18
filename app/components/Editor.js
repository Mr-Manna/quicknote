'use client'

import { Editable, useEditor } from "@wysimark/react"
import { useState } from "react"

const Editor = ({text, handleChange}) => {
  const editor = useEditor({ authToken: process.env.NEXT_PUBLIC_AUTH_TOKEN })
  return <Editable editor={editor} value={text} onChange={handleChange} />
}

export default Editor