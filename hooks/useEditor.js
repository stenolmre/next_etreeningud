import React, { useState, useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@editorjs/simple-image'

export const useEditor = () => {
  const [editorInit, setEditor] = useState(null)

  useEffect(() => {
    const editor = new EditorJS({
      placeholder: 'Start typing..',
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: SimpleImage,
      },
      minHeight: 100,
      data: {}
    })

    setEditor(editor)

    return () => {
      editor.isReady.then(() => {
        editor.destroy()
        setEditor(null)
      }).catch(error => console.error(error))
    }
  }, [])

  return { editor: editorInit }
}

export const useEditorLoad = (editor, data) => {
  useEffect(() => {
    if (!editor || !data) return

    editor.isReady.then(() => {
      setTimeout(() => {
        editor.render(data)
      }, 100)
    })
  }, [editor, data])
}

export const useEditorSave = (editor, setPost) => {
  const save = async () => {
    if (!editor) return

    await editor.save().then(data => {
      setPost(data)
    }).catch(error => {
      console.log(error)
    })
  }

  return { save }
}

export const useEditorParser = post => {
  if (post == null || !post.blocks.length) return

  return post.blocks.map((block, index) => {
    if (block.type === 'paragraph') return <p key={index}>{block.data.text}</p>
    if (block.type === 'header') {
      if (block.data.level === 1) return <h1 key={index}>{block.data.text}</h1>
      if (block.data.level === 2) return <h2 key={index}>{block.data.text}</h2>
      if (block.data.level === 3) return <h3 key={index}>{block.data.text}</h3>
      if (block.data.level === 4) return <h4 key={index}>{block.data.text}</h4>
      if (block.data.level === 5) return <h5 key={index}>{block.data.text}</h5>
      if (block.data.level === 6) return <h6 key={index}>{block.data.text}</h6>
    }
    if (block.type === 'list') {
      if (block.data.style === 'ordered') return <ol key={index}>
        {block.data.items.map((item, _index) => <li key={_index}>{item}</li>)}
      </ol>
      if (block.data.style === 'unordered') return <ul key={index}>
        {block.data.items.map((item, _index) => <li key={_index}>{item}</li>)}
      </ul>
    }
    if (block.type === 'image') return <img key={index} src={block.data.url}/>
    return
  })
}
