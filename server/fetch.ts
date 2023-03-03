export const useGet = async (url: string) => {
  return fetch("https://dummyjson.com/" + url, {
    method: "GET",
  }).then((res) => res.json());
};
