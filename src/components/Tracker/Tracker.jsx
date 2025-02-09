import { useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import "./Tracker.css";
import Mood from "../Mood/Mood";

export default function Tracker() {
  const [lastPeriod, setLastPeriod] = useState(null);
  const cycleLength = 28;

  const handleDateSelect = (event) => {
    setLastPeriod(new Date(event.target.value));
  };

  const nextPeriod = lastPeriod ? addDays(lastPeriod, cycleLength) : null;
  const daysRemaining = lastPeriod
    ? differenceInDays(nextPeriod, new Date())
    : null;
  const progress =
    daysRemaining !== null
      ? ((cycleLength - daysRemaining) / cycleLength) * 100
      : 0;

  return (
    <>
      <div
        className="tracker tracker-container"
        style={{
          backgroundColor: "#ffe6f2",
          color: "#ff66b2",
          textAlign: "center",
          padding: "2rem",
          maxWidth: "600px",
          margin: "2rem auto",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="tracker-title" style={{ fontSize: "2rem" }}>
          Menstrual Health Tracker 🌸
        </h2>
        <p
          className="tracker-subtext"
          style={{ fontSize: "1.1rem", marginBottom: "1rem" }}
        >
          Select the start date of your last period:
        </p>
        <input
          type="date"
          onChange={handleDateSelect}
          className="tracker-input"
          style={{
            borderColor: "#ff66b2",
            padding: "0.5rem",
            borderRadius: "8px",
            fontSize: "1rem",
            marginBottom: "1.5rem",
          }}
        />

        {lastPeriod && (
          <div className="tracker-info" style={{ marginTop: "1.5rem" }}>
            <p style={{ fontSize: "1.1rem" }}>
              Last period: {format(lastPeriod, "PPP")}
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
              Next estimated period: {format(nextPeriod, "PPP")}
            </p>
            <div
              className="tracker-progress-container"
              style={{
                margin: "1rem 0",
                padding: "0.5rem",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <progress
                value={progress}
                max="100"
                className="tracker-progress"
                style={{
                  width: "100%",
                  height: "20px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  appearance: "none",
                }}
              ></progress>
            </div>
            <p
              className="tracker-days-remaining"
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#ff3366",
              }}
            >
              {daysRemaining} days until your next period
            </p>
          </div>
        )}
        <button
          className="tracker-button"
          onClick={() => setLastPeriod(null)}
          style={{
            backgroundColor: "#ff66b2",
            color: "#fff",
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Reset
        </button>
      </div>
      <Mood days={daysRemaining} />
    </>
  );
}
