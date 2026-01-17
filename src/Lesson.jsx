import { useEffect, useState } from "react";
import { speak } from "./utils/speech";
import VideoPlayer from "./components/VideoPlayer";
import AIHelp from "./components/AIHelp";
import './styles.css';

const steps = [
  { text: "Open the video calling app.", videoId: "" },
  { text: "Choose the person you want to call.", videoId: "pmFNwMeaugw" },
  { text: "Press the video button.", videoId: "" },
  { text: "Make sure your camera is on.", videoId: "" },
];

export default function Lesson() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    speak(steps[step].text);
  }, [step]);

  if (step >= steps.length) {
    localStorage.setItem("sahejLessonCompleted", "yes");
    return (
      <div className="container">
        <h2>🎉 Lesson Completed!</h2>
        <p>Congratulations! You’ve completed the lesson.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="step-title">Step {step + 1}</h2>
      <p className="step-text">{steps[step].text}</p>

      <div className="button-group">
        <button onClick={() => speak(steps[step].text)}>🔊 Repeat</button>
        <button onClick={() => setStep(step + 1)}>Next ➡️</button>
      </div>

      <AIHelp text={steps[step].text} />

      {steps[step].videoId && (
        <div className="video-wrapper">
          <VideoPlayer videoId={steps[step].videoId} />
        </div>
      )}
    </div>
  );
}
