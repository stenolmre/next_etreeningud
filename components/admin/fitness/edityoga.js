import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useFitState, useFitDispatch } from "./../../../context/fitness";
import { updateWorkout, getWorkout } from "./../../../actions/fitness";
import {
  useSettingsState,
  useSettingsDispatch,
} from "./../../../context/settings";
import { getSettings } from "./../../../actions/settings";

import Layout from "./../utils/layout";

export default function EditYoga() {
  const { query } = useRouter();

  const dispatchFit = useFitDispatch();
  const { workout } = useFitState();
  const dispatchSettings = useSettingsDispatch();
  const { fit_exercises, fit_categories, fit_equipment, fit_images, loading } =
    useSettingsState();

  useEffect(() => {
    getSettings(dispatchSettings);
    getWorkout(dispatchFit, query.id);
  }, [dispatchSettings, dispatchFit, query.id]);

  const [yogaData, setYogaData] = useState({
    image: "",
    name: "",
    category: "jooga",
    equipment: "joogamatt",
    length: 0,
    intro: "",
    video: "",
  });

  const onChange = (e) =>
    setYogaData({ ...yogaData, [e.target.name]: e.target.value });

  const addNewWorkout = async () => {
    setProcessing(true);
    await updateWorkout(
      dispatchFit,
      query.id,
      yogaData,
      () => {
        setSuccess(true);
        setProcessing(false);
      },
      () => {
        setError(true);
        setProcessing(false);
      },
    );
  };

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setYogaData((yogaData) => ({
      ...yogaData,
      image: !workout || !workout.image ? "" : workout.image,
      name: !workout || !workout.name ? "" : workout.name,
      category: !workout || !workout.category ? "" : workout.category,
      equipment: !workout || !workout.equipment ? "" : workout.equipment,
      length: !workout || !workout.length ? "" : workout.length,
      intro: !workout || !workout.intro ? "" : workout.intro,
      video: !workout || !workout.video ? "" : workout.video,
    }));
  }, [workout]);

  return (
    <Layout name={workout && workout.name}>
      <div className="admin_add_workout admin_page">
        <label>
          Pilt <span className="form_required">*</span>
        </label>
        <div className="admin_add_workout_select_img">
          {fit_images &&
            fit_images.map((el) => (
              <img
                key={el}
                src={el}
                alt={el}
                onClick={() => setYogaData({ ...yogaData, image: el })}
                style={
                  yogaData.image === el
                    ? { border: "2px solid var(--dodgerblue)" }
                    : null
                }
              />
            ))}
        </div>
        <label>
          Nimi <span className="form_required">*</span>
        </label>
        <input name="name" value={yogaData.name} onChange={onChange} />
        <label>
          Kategooria <span className="form_required">*</span>
        </label>
        <select
          name="category"
          id="category"
          value={yogaData.category}
          onChange={(e) =>
            setYogaData({ ...yogaData, category: e.target.value })
          }
        >
          <option value="" disabled={yogaData.category !== ""}>
            ..
          </option>
          {fit_categories &&
            fit_categories
              .filter((el) => el === "jooga")
              .map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
        </select>
        <label>
          Kestvus (min) <span className="form_required">*</span>
        </label>
        <input
          type="number"
          name="length"
          value={yogaData.length}
          onChange={onChange}
        />
        <label>
          Lühikirjeldus (105 tähemärki) <span className="form_required">*</span>
        </label>
        <textarea
          name="intro"
          value={yogaData.intro}
          onChange={onChange}
          maxLength="105"
        />
        <label>
          Youtube Video ID <span className="form_required">*</span>
        </label>
        <input name="video" value={yogaData.video} onChange={onChange} />
        <button
          disabled={processing}
          style={{ marginLeft: "0" }}
          className="admin_add_workout_save_btn"
          onClick={addNewWorkout}
        >
          {processing ? "Salvestan.." : "Salvesta"}
        </button>
        <Link href="/private/admin/yoga" className="admin_edit_workout_go_back">
          Tagasi
        </Link>
        {success && <p className="form_success">Salvestatud.</p>}
        {error && (
          <p className="form_error">
            Ups. Midagi läks valesti. Täida kõik väljad korrektselt ja proovi
            uuesti.
          </p>
        )}
      </div>
    </Layout>
  );
}
