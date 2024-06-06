import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type TranslationApiResponse = {
  responseData: {
    translatedText: string;
  };
};

const fetchTranslation = async (
  textToTranslate: string,
  lenguageFrom: string,
  lenguageTo: string,
): Promise<TranslationApiResponse> => {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${textToTranslate}?&langpair=${lenguageFrom}|${lenguageTo}`,
  );
  const data = await response.json();
  return data;
};

export function useSearchQuery(
  textToTranslate: string,
  languageFrom: string,
  languageTo: string,
) {
  const { data, isLoading } = useQuery({
    queryKey: ["translate", textToTranslate, languageFrom, languageTo],
    queryFn: () => fetchTranslation(textToTranslate, languageFrom, languageTo),
    staleTime: 1000 * 60 * 60, // 1 hora
    refetchOnWindowFocus: false,
    retry: false,
    enabled: Boolean(textToTranslate),
  });

  const translatedText = data?.responseData?.translatedText || "";

  return { translatedText, isLoading };
}

export function useDebounce(textToFetch: string, delay: number = 1000) {
  const [debouncedSearchText, setDebounceSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchText(textToFetch);
    }, delay);

    return () => clearTimeout(timer);
  }, [textToFetch, delay]);

  return { debouncedSearchText };
}
