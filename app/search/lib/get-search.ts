export const getSearchPoke = async (inputText: string) => {
  const searchPoke = await fetch(`/search/api?input-text=${inputText}`);
  return searchPoke.json();
};
