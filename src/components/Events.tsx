import React, { useState } from "react";

import "../styles/Events.css";

import Beams from "../backgrounds/Beams";
import SplitText from "../text-animations/SplitText";

import CodeRelay from "../event-poster/Code-Relay-Poster.jpeg";
import PromptBattle from "../event-poster/Prompt-Battle-Poster.jpeg";
import ReelMaking from "../event-poster/Reel-Making-Poster.jpeg";

export default function Events() {
  const [activeEvent, setActiveEvent] = useState<any>(null);

  const events = [
    {
      title: "Code Relay",
      date: "15th Sept 2025",
      team: "4 member(s)",
      fee: "₹60",
      poster: CodeRelay,
      details:
        "A fast-paced relay coding challenge where teams solve problems one after another.",
    },
    {
      title: "Prompt Battle",
      date: "15th Sept 2025",
      team: "1 member(s)",
      fee: "₹30",
      poster: PromptBattle,
      details:
        "Fast-paced AI prompt showdown where creativity and precision decide the winner",
    },
    {
      title: "Reel Making",
      date: "15th Sept 2025",
      team: "2 member(s)",
      fee: "₹30",
      poster: ReelMaking,
      details:
        "Creative reel-making contest where storytelling and editing skills shine on screen.",
    },
  ];

  return (
    <div className="events-container">
      {/* 🔹 Background Animation */}
      <div className="beams-background">
        <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
        />
    </div>

      {/* 🔹 Title */}
      <div className="page-title">
        <SplitText
          text="Upcoming Events"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
      </div>

      {/* 🔹 Cards */}
      <div className="event-cards">
        {events.map((event, idx) => (
          <div key={idx} className="event-card">
            <h3>{event.title}</h3>
            <p className="event-info">
              <b>Event Date:</b> {event.date}
            </p>
            <p className="event-info">
              <b>Team Size:</b> {event.team}
            </p>
            <p className="event-info">
              <b>Registration Fee:</b> {event.fee}
            </p>
            <button
              className="details-btn"
              onClick={() => setActiveEvent(event)}
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {activeEvent && (
        <div className="modal-overlay" onClick={() => setActiveEvent(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setActiveEvent(null)}>
              &times;
            </span>
            <div className="modal-left">
              <h2>{activeEvent.title}</h2>
              <p>
                <b>Date:</b> {activeEvent.date}
              </p>
              <p>
                <b>Team Size:</b> {activeEvent.team}
              </p>
              <p>
                <b>Fee:</b> {activeEvent.fee}
              </p>
              <p>{activeEvent.details}</p>
            </div>
            <div className="modal-right">
              <img src={activeEvent.poster} alt={activeEvent.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
