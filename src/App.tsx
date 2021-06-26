import React, { useState, useEffect } from 'react';
import {DtoResponse} from "./NewsService"
import NewsService from "./NewsService"

function App() {
  const [data, setData] = useState<DtoResponse[]>([]);

  useEffect(() => {
    const newsService = new NewsService()
    const fetchData = async () => {
      const result: DtoResponse[] = await newsService.getData()
      setData(result);
    };
 
    fetchData();
  }, []);

  return data.length > 0 ? (
    <ul>
      {
        data.map(item => (
          <li key={item.objectId}>
            {item.title}
          </li>
        ))
      }
  </ul>
  ) : (<div>No results!</div>);
}

export default App;
