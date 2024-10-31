import React, { Fragment, useEffect } from "react";
import Link from "next/link";

import {
  useSettingsState,
  useSettingsDispatch,
} from "./../../context/settings";
import { getSettings } from "./../../actions/settings";

const Completed = ({ workout }) => {
  const dispatchSettings = useSettingsDispatch();
  const { fit_ending_messages } = useSettingsState();

  useEffect(() => {
    getSettings(dispatchSettings);
  }, [dispatchSettings]);

  return (
    <Fragment>
      {workout && (
        <div className="workout_completed_container">
          {fit_ending_messages && (
            <h1>
              {fit_ending_messages.fit_ending_upper_message}
              <br />
              {fit_ending_messages.fit_ending_lower_message}
            </h1>
          )}
          <hr />
          <div className="workout_footer">
            <Link href="/">Esileht</Link>
            <Link href="/fitness">Treeningud</Link>
            <Link href="/posts">Blogi</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Completed;
