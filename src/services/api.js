import axios from 'axios';
export const fetchData = async () => {
  const res = await axios.get("https://62e6bd340e5d74566aebd18b.mockapi.io/api/v1/products")
  return res.data;
}