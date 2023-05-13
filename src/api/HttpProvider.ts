import { localSettings } from '../utils/LocalSettings';

interface IAPIRequestOptions {
  headers: HeadersInit;
}

interface ICreateAPIRequestOptions extends IAPIRequestOptions {
  body?: object;
}

export class HttpProvider {

  private static async createAPIRequest<Result>(path: string, options: ICreateAPIRequestOptions): Promise<Result> {

    // @todo remove in the future
    const token = localSettings.getValue('token');

    const headers = Object.assign(token ? { 'x-token': token } : {}, options.headers, {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    const requestOptions = Object.assign(options, {
      headers,
      body: options.body ? JSON.stringify(options.body) : null,
    });

    return fetch(`${process.env.REACT_APP_API_PATH}${ path }`, requestOptions)
      .then(async (response) => {
        const contentType = response.headers.get('Content-Type');
        const jsonResult = contentType?.includes('application/json');

        const result = jsonResult ? await response.json() : await response.text();

        if (response.ok) {
          return result
        }

        return Promise.reject(result);
      });
  }

  public async get<Result>(path: string, options?: IAPIRequestOptions): Promise<Result> {
    return HttpProvider.createAPIRequest<Result>(path, Object.assign({}, options, { method: 'GET' }));
  }

  public async post<Result>(path:any, body?: object, options?: IAPIRequestOptions): Promise<Result> {
    return HttpProvider.createAPIRequest<Result>(path, Object.assign({}, options, { method: 'POST', body }));
  }

  public async put<Result>(path: string, body?: object, options?: IAPIRequestOptions): Promise<Result> {
    return HttpProvider.createAPIRequest<Result>(path, Object.assign({}, options, { method: 'PUT', body }));
  }

  public async delete<Result>(path: string, body?: object, options?: IAPIRequestOptions): Promise<Result> {
    return HttpProvider.createAPIRequest<Result>(path, Object.assign({}, options, { method: 'DELETE', body }));
  }

  public async patch<Result>(path: any, body?: object, options?: IAPIRequestOptions): Promise<Result> {
    return HttpProvider.createAPIRequest<Result>(path, Object.assign({}, options, { method: 'PATCH', body }));
  }
}
