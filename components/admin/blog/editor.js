// import React, { useState, useEffect } from 'react'
//
// import { useEditor, useEditorLoad, useEditorParser } from '@hooks/useEditor'
// import { useConfigState } from '@context/config'
//
// import { usePostDispatch } from '@context/post'
// import { publishPost } from '@actions/post'
//
// import Preview from '@admin/blog/preview'
//
// const Editor = () => {
//   const dispatchPost = usePostDispatch()
//   const { blog } = useConfigState()
//
//   const [newPost, setNewPost] = useState({ title: '', content: null, author: '', category: '', image: '' })
//   const onChange = e => setNewPost({ ...newPost, [e.target.name]: e.target.value })
//
//   const { editor } = useEditor()
//   const parsedPost = useEditorParser(newPost.content)
//   useEditorLoad(editor, newPost.content)
//
//   const [showPreview, setShowPreview] = useState(false)
//
//   const initPreview = () => {
//     if (!editor) return
//
//     editor.save().then(data => {
//       setNewPost({ ...newPost, content: data })
//     })
//
//     setShowPreview(!showPreview)
//   }
//
//   const hidePreview = e => {
//     if (e.target.classList.contains('preview')) return
//     return setShowPreview(!showPreview)
//   }
//
//   const publish = async () => {
//     if (!editor) return
//
//     editor.save().then(data => {
//       if (window.confirm('Are you sure?')) return publishPost(dispatchPost, {
//         title: newPost.title,
//         content: data,
//         author: newPost.author,
//         category: newPost.category,
//         image: newPost.image
//       })
//
//       return
//     })
//   }
//
//   const getAuthorImage = () => {
//     if (blog == null || newPost.author === '') return
//     const author = blog.authors.find(author => author.name === newPost.author)
//     return author.image
//   }
//
//   useEffect(() => {
//     if (showPreview) return document.body.style.overflow = 'hidden';
//     document.body.style.overflow = 'scroll';
//   }, [showPreview])
//
//   return <div className="editor_container">
//     <input name="title" value={newPost.title} onChange={onChange} placeholder="Pealkiri"/>
//     <input name="image" value={newPost.image} onChange={onChange} placeholder="Pilt (url)"/>
//     <div id="editorjs" className="editor"/>
//     <div className="editor_select editor_select_with_img">
//       <div style={{ backgroundImage: `url(${getAuthorImage()})`}}></div>
//       <select name="author" onChange={onChange}>
//         <option value="" disabled={newPost.author !== ''}>Autor</option>
//         {blog != null && blog.authors.map(author => <option key={author._id} value={author.name}>{author.name}</option>)}
//       </select>
//     </div>
//     <div className="editor_select">
//       <select name="category" onChange={onChange}>
//         <option value="" disabled={newPost.category !== ''}>Kategooria</option>
//         {blog != null && blog.categories.map(category => <option key={category} value={category}>{category}</option>)}
//       </select>
//     </div>
//     <div className="buttons">
//       <div className="btn_secondary" onClick={initPreview}>Preview</div>
//       <div className="btn_main" onClick={publish}>Publish</div>
//     </div>
//     {
//       showPreview && <Preview post={parsedPost} close={hidePreview}/>
//     }
//   </div>
// }
//
// export default Editor

export default function Editor() {
  return <div>Editor</div>
}
