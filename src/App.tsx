import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDebounce, useSearchQuery } from "./lib/hooks";
import TranslateCard from "./components/TranslateCard";
import TranslatedCard from "./components/TranslatedCard";

// Lenguajes a agrega. it, de
// el flujo del debounde es: toma el input, devuelve el string que se va a buscar para el fetch con un delay.

function App() {
  // state
  const [textToTranslate, setTextToTranslate] = useState("Hello, how are you?");
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("fr");

  // copy to clipboard

  //debounce - devolviendo resultados cada cierto tiempo
  const { debouncedSearchText } = useDebounce(textToTranslate);
  // react-query
  const { translatedText } = useSearchQuery(
    debouncedSearchText,
    languageFrom,
    languageTo,
  );

  return (
    <div className="min-h-screen bg-[#020617]">
      <main className="bg-[url('/hero_img.jpg')] bg-top bg-no-repeat">
        <div className="w-full pb-12 pt-16">
          <img className="mx-auto" src="/logo.svg" alt="" />
        </div>
        <div className="flex flex-col gap-6 text-[#4D5562] lg:flex-row">
          <TranslateCard
            languageFrom={languageFrom}
            setLanguageFrom={setLanguageFrom}
            textToTranslate={textToTranslate}
            setTextToTranslate={setTextToTranslate}
          />

          <TranslatedCard
            setLanguageTo={setLanguageTo}
            languageTo={languageTo}
            translatedText={translatedText}
          />
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
