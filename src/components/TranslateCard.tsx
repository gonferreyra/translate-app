import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

type TranslateCardProps = {
  languageFrom: string;
  setLanguageFrom: (language: string) => void;
  textToTranslate: string;
  setTextToTranslate: (text: string) => void;
};

export default function TranslateCard({
  languageFrom,
  setLanguageFrom,
  textToTranslate,
  setTextToTranslate,
}: TranslateCardProps) {
  const textLength = textToTranslate.length;
  return (
    <form className="mx-6 rounded-3xl border border-[#4D5562] bg-[#212936cc]/[0.9] px-6 text-sm font-bold lg:basis-[50%]">
      <div className="flex gap-6 overflow-x-auto px-2 py-4 text-sm">
        <button type="button">Detect Language</button>
        <button
          type="button"
          onClick={() => setLanguageFrom("en")}
          className={`px-2 py-2 ${languageFrom === "en" ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguageFrom("fr")}
          className={`px-2 py-2 ${languageFrom === "fr" ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white`}
        >
          French
        </button>
        <button
          type="button"
          onClick={() => setLanguageFrom("es")}
          className={`px-2 py-2 ${languageFrom === "es" ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white`}
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
          onChange={(e) => setTextToTranslate(e.target.value)}
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
            onClick={() => {
              copy(textToTranslate);
              toast.success("Text copied to clipboard");
            }}
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
  );
}
