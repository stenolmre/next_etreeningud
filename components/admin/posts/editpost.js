import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { usePostState, usePostDispatch } from './../../../context/post'
import { updatePost, getPost } from './../../../actions/post'
import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { getSettings } from './../../../actions/settings'

import Layout from './../utils/layout'

export default function EditYoga() {
  const { query } = useRouter()

  const dispatchPost = usePostDispatch()
  const { post, loading, error } = usePostState()
  const dispatchSettings = useSettingsDispatch()
  const { blog_categories } = useSettingsState()

  useEffect(() => {
    getPost(dispatchPost, query.id)
    getSettings(dispatchSettings)
  }, [dispatchPost, dispatchSettings, query.id])

  const [postData, setPostData] = useState({ image: '', name: '', category: '', excerpt: '', author: '', content: '' })

  const onChange = e => setPostData({ ...postData, [e.target.name]: e.target.value })

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const saveUpdatedPost = async () => {
    setProcessing(true)
    await updatePost(dispatchPost, query.id, postData, () => {
      setSuccess(true)
      setProcessing(false)
    }, () => {
      setErr(true)
      setProcessing(false)
    })
  }

  useEffect(() => {
    setPostData(postData => ({ ...postData,
      image: !post || !post.image ? '' : post.image,
      name: !post || !post.name ? '' : post.name,
      category: !post || !post.category ? '' : post.category,
      excerpt: !post || !post.excerpt ? '' : post.excerpt,
      author: !post || !post.author ? '' : post.author,
      content: !post || !post.content ? '' : post.content,
    }))
  }, [post])

  return <Layout name={post && post.name}>
    <div className="admin_add_workout admin_page">
      <label>Pilt <span className="form_required">*</span></label>
      <input name="image" value={postData.image} onChange={onChange}/>
      <label>Nimi <span className="form_required">*</span></label>
      <input name="name" value={postData.name} onChange={onChange}/>
      <label>Kategooria <span className="form_required">*</span></label>
      <select name="category" id="category" onChange={e => setPostData({ ...postData, category: e.target.value })} value={postData.category}>
        <option value="" disabled={postData.category !== ''}>..</option>
        {
          blog_categories && blog_categories.map((el, i) => <option key={i} value={el}>{el}</option>)
        }
      </select>
      <label>Autor <span className="form_required">*</span></label>
      <input name="author" value={postData.author} onChange={onChange}/>
      <label>Lühikirjeldus (105 tähemärki) <span className="form_required">*</span></label>
      <textarea name="excerpt" value={postData.excerpt} onChange={onChange} maxLength="104"/>
      <label>Sisu <span className="form_required">*</span></label>
      <textarea name="content" value={postData.content} onChange={onChange}/>
      <button disabled={processing} style={{ marginLeft: '0' }} className="admin_add_workout_save_btn" onClick={saveUpdatedPost}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
      <Link href="/private/admin/posts?num=10"><a className="admin_edit_workout_go_back">Tagasi</a></Link>
      {success && <p className="form_success">Salvestatud.</p>}
      {err && <p className="form_error">{error && error.msg}</p>}
    </div>
  </Layout>
}
