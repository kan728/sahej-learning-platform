import './styles.css';
import { useState } from "react";
import Lesson from "./Lesson";
import './styles.css';

export default function App() {
  const [started, setStarted] = useState(false);
  const completed = localStorage.getItem("sahejLessonCompleted");

  if (started) return <Lesson />;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Sahej</h1>
      <p>Learn digital skills step by step.</p>

      <button
        style={{ fontSize: "1.5rem", padding: "16px 24px" }}
        onClick={() => setStarted(true)}
      >
        Start Lesson
      </button>

      {completed && <p style={{ marginTop: "20px" }}>✅ You have completed the lesson!</p>}
    </div>
  );
}


