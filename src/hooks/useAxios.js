import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (baseURL) => {
const [data, setData] = useState([]);

  const addData = async (ext = '') => {
    if (typeof ext === 'string') {
      const res = await axios.get(`${baseURL}${ext}`);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
    } else {
      const res = await axios.get(`${baseURL}`);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
    }
  };
  const clearData = () => {
    setData([]);
  };
  return [data, addData, clearData];
};

export default useAxios;