export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}
export const getAllStoredData = () => {
  const keys = Object.keys(localStorage);
  const allData = {};

  keys.forEach((key) => {
    allData[key] = localStorage.getItem(key);
  });

  return allData;
}
