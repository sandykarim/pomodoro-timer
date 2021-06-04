import React from "react";
import { secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

/**
 * Displays information about the current session, or nothing if there is no current session.
 *
 * This component violate the law of demeter by knowing too much about the implementation
 * details of the session. A loosely coupled implementation would be better.
 *
 * @param session
 *  a possibly null session object
 * @param isPaused
 *  pass true to display the "PAUSED" notification.
 * @returns {JSX.Element|null}
 *  session information or `null` if session === null
 */
 export default function SessionInformation({ session, isPaused }) {
  if (session === null) {
    return null;
  }

  return (
    <>
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session and total duration */}
          <h2 data-testid="session-title">{`${session.label} for ${session.duration} minutes`}</h2>
          {/* TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {`${secondsToDuration(session.timeRemaining)} remaining`}
          </p>
          {isPaused && <h3>PAUSED</h3>}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <ProgressBar percentComplete={session.percentComplete} />
        </div>
      </div>
    </>
  );
}