import React, { useState } from "react";

const messages = [
  "I will always buy flowers for you.",
  "I will make sure to have a ANI-DIGGI TIME when life gets a little hectic",
  "I will always accompany you if you want to do something.",
  "I will always cuddle you even if it hurts my neck sometimes",
  "I will always walk on the side of the road when I am with you.",
  "I will always hold your hand in crowd.",
  "I will never watch rom coms without you.",
  "I will always listen to you even when I am angry.",
  "I will always sit next to you in a restaurant (except in parla until we are TOGETHER).",
  "I would never say no to your bites and gilu nosy",
  "I will dance with you wherever you feel like dancing.",
  "I will always enjoy rain with you as it makes you happy and seeing you happy makes me happy.",
  "I will always smolu you even if we outgrow it.",
  "I will never disturb you when you are sleeping on my shoulder in a auto.",
];

const poems = [
  "I take one look at you,\nYou're takin' me out of the ordinary",
  "I want you layin' me down 'til we're dead and buried\nOn the edge of your knife, stayin' drunk on your vine",
  "The angels up in the clouds are jealous knowin' we found,\nSomethin' so out of the ordinary",
  "You got me kissin' thе ground of your sanctuary\nShatter me with your touch, oh, Lord, return mе to dust",
  "The angels up in the clouds are jealous knowin' we found"
];

const ValentineProposal = () => {
  const [yesSize, setYesSize] = useState(18); // font size in px
  const [accepted, setAccepted] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [currentPoem, setCurrentPoem] = useState(0);

  const handleNoClick = () => {
    setYesSize((prev) => prev + 6);
    setCurrentMessage((prev) => (prev + 1) % messages.length);
    setCurrentPoem((prev) => (prev + 1) % poems.length);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffd1dc, #ffe6f0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        {!accepted ? (
          <>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzl2cjFnMjloc283eHltazV1MmxsbHUyZmNmMGxub3V2NnIwYTF1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ffzhLUixCtlsc/giphy.gif"
              alt="cute gif"
              style={{ width: "150px" }}
            />
            <h1 style={{ fontSize: "35px",color: "#d63384" }}>
              WILL YOU BE MY VALENTINE?🌻🦋
            </h1>

            <p
              style={{
                whiteSpace: "pre-line",
                margin: "20px 0",
                fontStyle: "italic",
                color: "#5f0f40",
              }}
            >
              {poems[currentPoem]}
            </p>

            <div style={{ marginTop: "30px" }}>
              <button
                onClick={handleYesClick}
                style={{
                  fontSize: `${yesSize}px`,
                  padding: "12px 30px",
                  margin: "10px",
                  borderRadius: "30px",
                  border: "none",
                  backgroundColor: "#ff4d6d",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Yes 🙂‍↕️
              </button>

              <button
                onClick={handleNoClick}
                style={{
                  fontSize: "18px",
                  padding: "12px 30px",
                  margin: "10px",
                  borderRadius: "30px",
                  border: "none",
                  backgroundColor: "#6c757d",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                No 🥺
              </button>
            </div>

            <div style={{ marginTop: "30px", color: "#444" }}>
              <h2>what awaits if you say yes:</h2>
              <p>{messages[currentMessage]}</p>
            </div>
          </>
        ) : (
          <div>
            <h2 style={{ color: "#ff006e", fontSize: "36px" }}>
              She said YES! 🫠🫂
            </h2>
            <p style={{fontSize: "20px", marginTop: "20px" }}>
               I LOVE YOU SO MUCH!! ❤️
            </p>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb29lMzNicjZhdnZxOHQzMm5pNWptNzc3ZHlra2E2ajMyM2xscWM3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xULW8Bx2HlkdALCRQk/giphy.gif"
              alt="cute gif"
              style={{ width: "300px" }}
            />
            <p style={{ marginTop: "20px", fontStyle: "italic" }}>
              Be ready on 14th Feb 10PM
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentineProposal;
