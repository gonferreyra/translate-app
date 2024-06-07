import { createContext, useState } from "react";
import { useDebounce, useSearchQuery } from "../lib/hooks";

type TranslationContextProps = {
  textToTranslate: string;
  handleChangeTextToTranslate: (text: string) => void;
  languageFrom: string;
  handleChangeLanguageFrom: (language: string) => void;
  languageTo: string;
  handleChangeLanguageTo: (language: string) => void;
  translatedText: string;
  isLoading: boolean;
};

export const TranslateContext = createContext<TranslationContextProps | null>(
  null,
);

type TranslationContextProviderProps = {
  children: React.ReactNode;
};

export default function TranslationContextProvider({
  children,
}: TranslationContextProviderProps) {
  // state
  const [textToTranslate, setTextToTranslate] = useState("Hello, how are you?");
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("fr");

  //debounce
  const { debouncedSearchText } = useDebounce(textToTranslate);

  // react-query
  const { translatedText, isLoading } = useSearchQuery(
    debouncedSearchText,
    languageFrom,
    languageTo,
  );

  const handleChangeTextToTranslate = (text: string) => {
    setTextToTranslate(text);
  };

  const handleChangeLanguageFrom = (language: string) => {
    setLanguageFrom(language);
  };

  const handleChangeLanguageTo = (language: string) => {
    setLanguageTo(language);
  };

  return (
    <TranslateContext.Provider
      value={{
        textToTranslate,
        handleChangeTextToTranslate,
        languageFrom,
        handleChangeLanguageFrom,
        languageTo,
        handleChangeLanguageTo,
        translatedText,
        isLoading,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}
