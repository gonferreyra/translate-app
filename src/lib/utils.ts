export function handleSpeech(textToSpeech: string) {
  const text = textToSpeech;

  const value = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(value);
}
