const fetchData = async (
  textToTranslate: string,
  lenguageFrom: string,
  lenguageTo: string,
) => {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${textToTranslate}?&langpair=${lenguageFrom}|${lenguageTo}`,
  );
  if (!response.ok) {
    // const errorData = await response.json();
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data.responseData.translatedText;
};
