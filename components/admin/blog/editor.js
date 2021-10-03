import React, { useState, useEffect } from 'react'

import { useEditor, useEditorLoad, useEditorSave, useEditorParser } from '@hooks/useEditor'
import { useConfigState } from '@context/config'

import Preview from '@admin/blog/preview'

const Editor = () => {
  const { blog } = useConfigState()
  const [content, setContent] = useState(null)
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '', category: '', image: 'url' })
  const onChange = e => setNewPost({ ...newPost, [e.target.name]: e.target.value })

  const { editor } = useEditor()
  const { save } = useEditorSave(editor, setContent)
  const parsedPost = useEditorParser(content)
  useEditorLoad(editor, content)

  const [showPreview, setShowPreview] = useState(false)

  const initPreview = () => {
    save()
    setShowPreview(!showPreview)
  }

  const hidePreview = e => {
    if (e.target.classList.contains('preview')) return
    setShowPreview(!showPreview)
  }

  const publish = async () => {
    if (window.confirm('Are you sure?')) save()
  }

  useEffect(() => {
    if (showPreview) return document.body.style.overflow = 'hidden';
    document.body.style.overflow = 'scroll';
  }, [showPreview])

  const getAuthorImage = () => {
    if (blog == null || newPost.author === '') return
    const author = blog.authors.find(author => author.name === newPost.author)
    return author.image
  }

  return <div className="editor_container">
    <input name="title" value={newPost.title} onChange={onChange} placeholder="Post title"/>
    <div id="editorjs" className="editor"/>
    <div className="editor_select editor_select_with_img">
      <div style={{ backgroundImage: `url(${getAuthorImage()})`}}></div>
      <select name="author" onChange={onChange}>
        <option value="" disabled={newPost.author !== ''}>Autor</option>
        {blog != null && blog.authors.map(author => <option key={author._id} value={author.name}>{author.name}</option>)}
      </select>
    </div>
    <div className="editor_select">
      <select name="category" onChange={onChange}>
        <option value="" disabled={newPost.category !== ''}>Kategooria</option>
        {blog != null && blog.categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </div>
    <div className="buttons">
      <div className="btn_secondary" onClick={initPreview}>Preview</div>
      <div className="btn_main" onClick={publish}>Publish</div>
    </div>
    {
      showPreview && <Preview post={parsedPost} close={hidePreview}/>
    }
  </div>
}

export default Editor
