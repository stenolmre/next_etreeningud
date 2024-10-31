import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  useWriterState,
  useWriterDispatch,
} from "./../../../../context/writer";
import { getWriter, updateWriter } from "./../../../../actions/writer";

const EditWriter = () => {
  const { query } = useRouter();

  const dispatchWriter = useWriterDispatch();
  const { error, writer } = useWriterState();

  useEffect(() => {
    getWriter(dispatchWriter, query.id);
  }, [dispatchWriter, query.id]);

  const [newWriter, setNewWriter] = useState({
    name: "",
    image: "",
    bio: "",
    social_links: [],
  });

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const onChange = (e) =>
    setNewWriter({ ...newWriter, [e.target.name]: e.target.value });

  const addNewSocialLink = () => {
    newWriter.social_links.push({ link: "", icon: "" });
    setNewWriter({ ...newWriter });
  };

  const saveWriter = async () => {
    setProcessing(true);
    await updateWriter(
      dispatchWriter,
      query.id,
      newWriter,
      () => setSuccess(true),
      () => setErr(true),
    );
    setProcessing(false);
  };

  useEffect(() => {
    setNewWriter((newWriter) => ({
      ...newWriter,
      name: !writer || !writer.name ? "" : writer.name,
      image: !writer || !writer.image ? "" : writer.image,
      bio: !writer || !writer.bio ? "" : writer.bio,
      social_links: !writer || !writer.social_links ? [] : writer.social_links,
    }));
  }, [writer]);

  return (
    <div className="admin_settings_page admin_settings_writers">
      <h3>Muuda Autori infot</h3>
      <label>
        Nimi <span className="form_required">*</span>
      </label>
      <input name="name" value={newWriter.name} onChange={onChange} />
      <label>
        Pildi URL <span className="form_required">*</span>
      </label>
      <input name="image" value={newWriter.image} onChange={onChange} />
      <label>
        Kirjeldus <span className="form_required">*</span>
      </label>
      <textarea name="bio" value={newWriter.bio} onChange={onChange} />
      <label>
        Sotsiaalmeedia <span className="form_required">*</span>
      </label>
      {newWriter.social_links.map((el, i) => (
        <div key={i} className="admin_settings_exercises_row">
          <select
            name="icon"
            id="icon"
            onChange={(e) => {
              newWriter.social_links[i].icon = e.target.value;
              setNewWriter({ ...newWriter });
            }}
            value={newWriter.social_links[i].icon}
          >
            <option value="" disabled={newWriter.social_links[i].icon !== ""}>
              ..
            </option>
            {social_icons_list.map((el, i) => (
              <option key={i} value={el.icon}>
                {el.name}
              </option>
            ))}
          </select>
          <input
            className="middle_input"
            name="fit_exercises_name"
            value={newWriter.social_links[i].link}
            onChange={(e) => {
              newWriter.social_links[i].link = e.target.value;
              setNewWriter({ ...newWriter });
            }}
          />
          <i
            className="fas fa-times"
            onClick={() => {
              const newArray = newWriter.social_links.filter(
                (x, index) => index !== i,
              );
              setNewWriter({ ...newWriter, social_links: newArray });
            }}
          />
        </div>
      ))}
      <div style={{ margin: "10px 0 25px 0" }}>
        <button
          onClick={addNewSocialLink}
          className="admin_settings_add_writer_btn"
        >
          <i className="fas fa-plus" />
        </button>
      </div>
      <Link
        href="/private/admin/settings?page=writers"
        className="admin_feature_add_new_btn"
      >
        Tagasi
      </Link>
      <button onClick={saveWriter} disabled={processing}>
        {processing ? "Salvestan.." : "Salvesta"}
      </button>
      {success && <p className="form_success">Salvestatud</p>}
      {err && <p>{error && error.msg}</p>}
    </div>
  );
};

export default EditWriter;

const social_icons_list = [
  { name: "Instagram", icon: "fab fa-instagram" },
  { name: "Facebook", icon: "fab fa-facebook" },
  { name: "Twitter", icon: "fab fa-twitter" },
  { name: "Youtube", icon: "fab fa-youtube" },
  { name: "Spotify", icon: "fab fa-spotify" },
  { name: "LinkedIn", icon: "fab fa-linkedin-in" },
  { name: "Mail", icon: "fas fa-envelope" },
  { name: "Phone", icon: "fas fa-mobile-alt" },
  { name: "Pinterest", icon: "fab fa-pinterest" },
  { name: "Google", icon: "fab fa-google" },
];
