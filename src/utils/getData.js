import axios from 'axios';

export const getData = async (url, id) => {
  try {
    if (id) {
      const { data } = await axios.get(`${url}?ID=${id}`);
      return data;
    } else {
      const { data } = await axios.get(url);
      return data;
    }
  } catch (error) {
    console.log('===== ERROR =======', error);
  }
};
