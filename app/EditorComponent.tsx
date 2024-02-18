'use client'
// InitializedMDXEditor.tsx
import type { ForwardedRef } from 'react'
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  frontmatterPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  toolbarPlugin ,
  UndoRedo,
  BoldItalicUnderlineToggles,
  ListsToggle,
  CodeToggle,
  codeBlockPlugin,
  CreateLink,
  linkDialogPlugin,
  BlockTypeSelect,
  codeMirrorPlugin,
  type MDXEditorMethods,
  type MDXEditorProps
} from '@mdxeditor/editor'




// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        frontmatterPlugin(),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        linkDialogPlugin(),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),
        codeBlockPlugin({defaultCodeBlockLanguage: 'js'}),

        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <ListsToggle/>
              <BlockTypeSelect/>
              <CreateLink />

            </>
          )
        })
      ]}
      {...props}
      ref={editorRef}
      contentEditableClassName="prose"
    />
  )
}