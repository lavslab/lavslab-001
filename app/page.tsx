"use client";

import { useState } from "react";

const messages = [
  {
    heading: "OBJECTS IN MIRROR:",
    text: "may be closer to their goals\nthan they appear. ♡",
  },
  {
    heading: "JUST SAYING:",
    text: "your consistency is showing. ♡",
  },
  {
    heading: "MIRROR CHECK:",
    text: "the work is working. ♡",
  },
  {
    heading: "OBJECTS IN MIRROR:",
    text: "are hotter than expected. ♡",
  },
  {
    heading: "KEEP GOING:",
    text: "it looks good on you. ♡",
  },
  {
    heading: "PROGRESS DETECTED:",
    text: "you're getting stronger. ♡",
  },
  {
    heading: "MIRROR CHECK:",
    text: "you look amazing. ♡",
  },
  {
    heading: "REMINDER:",
    text: "small choices add up\nto big changes. ♡",
  },
  {
    heading: "CURRENT STATUS:",
    text: "stronger than yesterday. ♡",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const openMirror = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const checkAgain = () => {
    if (changing) return;

    setChanging(true);

    setTimeout(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
      setChanging(false);
    }, 350);
  };

  const message = messages[messageIndex];
  const messageLines = message.text.split("\n");

  return (
    <main className="page-shell">
      {/* Background details */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="background-grid" />

      <header className="topbar">
        <div className="lab-mark">
          <span>LAV&apos;S LAB</span>
          <span className="lab-number">/ 001</span>
        </div>

        <span className="tiny-heart">♡</span>
      </header>

      <section className="hero">
        {/* Decorative flat-lay objects */}

        <div className="desk-object dumbbell" aria-hidden="true">
          <span className="dumbbell-weight weight-left" />
          <span className="dumbbell-bar" />
          <span className="dumbbell-weight weight-right" />
        </div>

        <div className="desk-object water-bottle" aria-hidden="true">
          <span className="bottle-lid" />
          <span className="bottle-body">
            <span className="bottle-heart">♡</span>
          </span>
        </div>

        <div className="desk-object lip-gloss" aria-hidden="true">
          <span className="gloss-cap" />
          <span className="gloss-body">
            <span>♡</span>
          </span>
        </div>

        <div className="desk-object scrunchie" aria-hidden="true">
          <span />
        </div>

        <div className="desk-object lock-card" aria-hidden="true">
          <span className="card-heart">♡</span>
          <strong>LOCK IN</strong>
          <small>SHOW UP FOR YOU.</small>
        </div>

        <span className="floating-detail detail-one" aria-hidden="true">
          ✧
        </span>
        <span className="floating-detail detail-two" aria-hidden="true">
          ♡
        </span>
        <span className="floating-detail detail-three" aria-hidden="true">
          ✦
        </span>

        {/* Main heading */}

        <div className="title-wrap">
          <p className="eyebrow">A LITTLE REMINDER FOR YOU</p>

          <h1 className="main-title">
            <span className="locked-title">LOCKED IN</span>
            <span className="looks-good-title">
              looks good <span className="title-heart">♡</span>
            </span>
          </h1>

          <p className="subtitle">something you should see</p>
        </div>

        {/* Compact */}

        <div
          className={`compact-scene ${isOpen ? "is-open" : ""}`}
          onClick={openMirror}
          role={!isOpen ? "button" : undefined}
          tabIndex={!isOpen ? 0 : undefined}
          onKeyDown={(event) => {
            if (!isOpen && (event.key === "Enter" || event.key === " ")) {
              setIsOpen(true);
            }
          }}
          aria-label={!isOpen ? "Open mirror" : undefined}
        >
          <div className="compact">
            <div className="compact-lid">
              <div className="lid-outer">
                <div className="mirror-glass">
                  <div className="mirror-glow" />
                  <div className="mirror-shine" />

                  <div
                    className={`mirror-message ${
                      changing ? "message-changing" : ""
                    }`}
                  >
                    <p className="message-heading">{message.heading}</p>

                    <p className="message-text">
                      {messageLines.map((line, index) => (
                        <span key={`${messageIndex}-${index}`}>
                          {line}
                          {index < messageLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>

                  <span className="sparkle sparkle-one">✧</span>
                  <span className="sparkle sparkle-two">✦</span>
                </div>
              </div>
            </div>

            <div className="hinge">
              <span />
              <span />
              <span />
            </div>

            <div className="compact-base">
              <div className="powder">
                <div className="powder-inner">
                  <span className="embossed-heart">♡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}

        {!isOpen ? (
          <button
            className="open-button"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(true);
            }}
          >
            <span>TAP TO OPEN</span>
            <span className="button-heart">♡</span>
          </button>
        ) : (
          <button
            className="again-button"
            onClick={(event) => {
              event.stopPropagation();
              checkAgain();
            }}
          >
            <span>CHECK AGAIN</span>
            <span>♡</span>
          </button>
        )}

        <div className={`hint ${isOpen ? "hint-hidden" : ""}`}>
          <span className="hint-line" />
          <p>FOR YOU</p>
          <span className="hint-line" />
        </div>
      </section>

      <footer>
        <p>
          coded with <span>♡</span> by <strong>lavslab</strong>
        </p>

        <p className="footer-code">LAV&apos;S LAB · 001</p>
      </footer>
    </main>
  );
}