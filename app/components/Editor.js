'use client'

import { Editable, useEditor } from "@wysimark/react"
import { useState } from "react"

const Editor = () => {
  const [markdown, setMarkdown] = useState("# Hello World")
  const editor = useEditor({ authToken: false })
  return <Editable editor={editor} value={markdown} onChange={setMarkdown} />
}

export default Editor