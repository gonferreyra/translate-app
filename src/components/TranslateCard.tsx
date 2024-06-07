import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { handleSpeech } from "../lib/utils";
import { useTranslateContext } from "../lib/hooks";
import LanguageButton from "./LanguageButton";

export default function TranslateCard() {
  const {
    languageFrom,
    handleChangeLanguageFrom,
    textToTranslate,
    handleChangeTextToTranslate,
  } = useTranslateContext();

  const textLength = textToTranslate.length;

  return (
    <form className="mx-6 rounded-3xl border border-[#4D5562] bg-[#212936cc]/[0.9] px-6 text-sm font-bold lg:basis-[50%]">
      <div className="flex gap-6 overflow-x-auto px-2 py-4 text-sm">
        <LanguageButton
          language="detect"
          currentLanguage={languageFrom}
          label="Detect Language"
          disabled={true}
        />
        <LanguageButton
          language="en"
          currentLanguage={languageFrom}
          label="English"
          onClick={() => handleChangeLanguageFrom("en")}
        />
        <LanguageButton
          language="fr"
          currentLanguage={languageFrom}
          label="French"
          onClick={() => handleChangeLanguageFrom("fr")}
        />
        <LanguageButton
          language="es"
          currentLanguage={languageFrom}
          label="Spanish"
          onClick={() => handleChangeLanguageFrom("es")}
        />
      </div>
      <div className="h-[1px] bg-[#4d5562]" />
      <div className="relative">
        <textarea
          rows={6}
          className="w-full resize-none border-none bg-transparent py-6 text-[#f9fafb] outline-none"
          value={textToTranslate}
          onChange={(e) => handleChangeTextToTranslate(e.target.value)}
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
            onClick={() => handleSpeech(textToTranslate)}
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
