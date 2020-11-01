import axios from "./axios";

const getData = () => {
  return axios.get('https://atg-scrapper-api-external-eks.eu-west-1.prod.hbi.systems/api/getproductlist?path=vitamins-supplements/new-in-vitamins-supplements/');
};

export default getData;
