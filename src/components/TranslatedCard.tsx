import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { handleSpeech } from "../lib/utils";
import Spinner from "./Spinner";

type TranslatedCardProps = {
  setLanguageTo: (language: string) => void;
  languageTo: string;
  translatedText: string;
  isLoading: boolean;
};

export default function TranslatedCard({
  setLanguageTo,
  languageTo,
  translatedText,
  isLoading,
}: TranslatedCardProps) {
  return (
    <div className="relative mx-6 rounded-3xl border border-[#4D5562] bg-[#121826]/[0.9] px-6 text-sm font-bold lg:basis-[50%]">
      {isLoading && <Spinner />}

      <div className="flex items-center justify-between overflow-x-auto text-sm">
        <div className="flex gap-6 py-4">
          <button
            onClick={() => setLanguageTo("en")}
            className={`px-2 py-2 ${languageTo === "en" ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white`}
          >
            English
          </button>
          <button
            onClick={() => setLanguageTo("fr")}
            className={`px-2 py-2 ${languageTo === "fr" ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white`}
          >
            French
          </button>
          <button
            onClick={() => setLanguageTo("es")}
            className={`px-2 py-2 ${languageTo === "es" ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white`}
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
          <button
            className="mr-2 rounded-xl border-2 border-[#4D5562] px-1 py-1"
            onClick={() => handleSpeech(translatedText)}
          >
            <img src="/sound_max_fill.svg" alt="" />
          </button>
          <button
            className="mr-2 rounded-xl border-2 border-[#4D5562] px-1 py-1"
            onClick={() => {
              copy(translatedText);
              toast.success("Text copied to clipboard");
            }}
          >
            <img src="/Copy.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
