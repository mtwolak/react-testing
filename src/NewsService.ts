import axios from 'axios';

interface ApiResponse {
  hits: [{
    createdAt: string,
    title: string,
    url: string,
    author: string,
    objectID: number
  }],
  query: string,
}

export interface DtoResponse {
  objectId: number,
  title: string;
}

export default class NewsService {

  async getData(): Promise<DtoResponse[]> {
    const data = await axios.get<ApiResponse>('https://hn.algolia.com/api/v1/search?query=redux').then(response => response.data)
    return this.filterData(data);
  }

  private filterData(data: ApiResponse): DtoResponse[] {
    return data.hits.map(hit => ({objectId: hit.objectID, title: hit.title}))
  }

}