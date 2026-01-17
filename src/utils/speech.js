export function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.8; // slow for seniors
    msg.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  }  