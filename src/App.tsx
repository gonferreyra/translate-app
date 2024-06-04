import { useEffect, useState } from "react";

// Hacer active clases para los botones

function App() {
  const [textToTranslate, setTextToTranslate] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");
  const [lenguageFrom, setLenguageFrom] = useState("en");
  const [lenguageTo, setLenguageTo] = useState("fr");

  const textLength = textToTranslate.length;

  const handleTextToTranslate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToTranslate(e.target.value);
  };

  useEffect(() => {
    const fetchUrl = async () => {
      const url = `https://api.mymemory.translated.net/get?q=${textToTranslate}?&langpair=${lenguageFrom}|${lenguageTo}`;
      const res = await fetch(url);
      const data = await res.json();
      setTranslatedText(data.responseData.translatedText);
    };
    fetchUrl();
  }, []);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textToTranslate.length < 4) return;

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${textToTranslate}?&langpair=${lenguageFrom}|${lenguageTo}`,
    );
    if (!response.ok) {
      // const errorData = await response.json();
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    // return data.responseData.translatedText;
    setTranslatedText(data.responseData.translatedText);
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      <main className="bg-[url('/hero_img.jpg')] bg-top bg-no-repeat">
        <div className="w-full pb-12 pt-16">
          <img className="mx-auto" src="/logo.svg" alt="" />
        </div>
        <div className="flex flex-col gap-6 text-[#4D5562] sm:mx-8 lg:flex-row">
          <form
            onSubmit={handleSubmit}
            className="mx-6 rounded-3xl border border-[#4D5562] bg-[#212936cc]/[0.9] px-6 text-sm font-bold lg:basis-[50%]"
          >
            <div className="flex gap-6 px-2 py-4 text-sm">
              <button type="button">Detect Language</button>
              <button
                type="button"
                onClick={() => setLenguageFrom("en")}
                className={`px-2 py-2 transition ${lenguageFrom === "en" ? "rounded-xl bg-[#4D5562] text-white" : ""}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLenguageFrom("fr")}
                className={`px-2 py-2 transition ${lenguageFrom === "fr" ? "rounded-xl bg-[#4D5562] text-white" : ""}`}
              >
                French
              </button>
              <button
                type="button"
                onClick={() => setLenguageFrom("es")}
                className={`px-2 py-2 transition ${lenguageFrom === "es" ? "rounded-xl bg-[#4D5562] text-white" : ""}`}
              >
                Spanish
              </button>
            </div>
            <div className="h-[1px] bg-[#4d5562]" />
            <div className="relative">
              <textarea
                rows={6}
                className="w-full resize-none border-none bg-transparent py-6 text-[#f9fafb] outline-none"
                value={textToTranslate}
                onChange={handleTextToTranslate}
                maxLength={500}
              />
              <p className="absolute bottom-0 right-0 text-xs font-medium">
                {textLength}/500
              </p>
            </div>
            <div className="my-6 flex items-center justify-between">
              <div className="">
                <button
                  type="button"
                  className="mr-2 rounded-xl border-2 border-[#4D5562] px-1 py-1"
                >
                  <img src="/sound_max_fill.svg" alt="" />
                </button>
                <button
                  type="button"
                  className="mr-2 rounded-xl border-2 border-[#4D5562] px-1 py-1"
                >
                  <img src="/Copy.svg" alt="" />
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center rounded-lg bg-[#3662E3] px-6 py-2 text-white"
                >
                  <img src="/Sort_alfa.svg" alt="" />
                  Translate
                </button>
              </div>
            </div>
          </form>
          <div className="mx-6 rounded-3xl border border-[#4D5562] bg-[#212936cc]/[0.9] px-6 text-sm font-bold lg:basis-[50%]">
            <div className="flex items-center justify-between text-sm">
              <div className="flex gap-6 py-4">
                <button
                  onClick={() => setLenguageTo("en")}
                  className={`px-2 py-2 transition ${lenguageTo === "en" && "rounded-xl bg-[#4D5562] text-white"}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLenguageTo("fr")}
                  className={`px-2 py-2 transition ${lenguageTo === "fr" && "rounded-xl bg-[#4D5562] text-white"}`}
                >
                  French
                </button>
                <button
                  onClick={() => setLenguageTo("es")}
                  className={`px-2 py-2 transition ${lenguageTo === "es" && "rounded-xl bg-[#4D5562] text-white"}`}
                >
                  Spanish
                </button>
              </div>
              <div>
                <button className="rounded-xl border-2 border-[#4D5562] px-1 py-1">
                  <img src="/Horizontal_top_left_main.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-[#4d5562]" />
            <div className="relative">
              <textarea
                rows={6}
                disabled
                value={translatedText}
                className="w-full resize-none border-none bg-transparent py-6 text-[#f9fafb] outline-none"
              />
            </div>
            <div className="my-6 flex items-center justify-between">
              <div className="">
                <button className="mr-2 rounded-xl border-2 border-[#4D5562] px-1 py-1">
                  <img src="/sound_max_fill.svg" alt="" />
                </button>
                <button className="mr-2 rounded-xl border-2 border-[#4D5562] px-1 py-1">
                  <img src="/Copy.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
