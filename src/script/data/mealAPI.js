const baseUrl = 'https://themealdb.com/api/json/v1/1/';

const arr = [];
const getListData = () => {
  fetch(`${baseUrl}filter.php?c=Seafood`)
    .then((response) => response.json())
    .then((responseJson) => arr.push(responseJson.meals))
    .catch((error) => {
      console.error(error);
    });
  return arr;
};

const data = { getListData, arr };

export default data;
