import React from "react";

export default function ProgressBar({ percentComplete }) {
  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Percent complete"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentComplete} // TODO: Increase aria-valuenow with elapsed time
        style={{ width: `${percentComplete}%` }} // TODO: Increase width % with elapsed time
      />
    </div>
  );
}