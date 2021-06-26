import React, { useState, useEffect } from 'react';
import {DtoResponse} from "./NewsService"

import './App.css';
import NewsService from "./NewsService"

function App() {
  const [data, setData] = useState<DtoResponse[]>([]);
  const newsService = new NewsService()

  useEffect(() => {
    const fetchData = async () => {
      const result: DtoResponse[] = await newsService.getData()
 
      setData(result);
    };
 
    fetchData();
  }, []);

  return (
    <ul>
      {
        data.map(item => (
          <li key={item.objectId}>
            {item.title}
          </li>
        ))
      }
  </ul>
  );
}

export default App;
