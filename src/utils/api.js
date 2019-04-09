export const API_URL = `http://localhost:8000`;

export default function callApi(token, endpoint, method = 'get', body) {
    let headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    switch (method) {
        case 'get':
            return fetch(`${API_URL}/${endpoint}`, {
                headers: headers,
                method: method
            })
                .then(response => response.json().then(json => ({ json, response })))
                .then(({ json, response }) => {
                    if (!response.ok) {
                        return Promise.reject(json);
                    }
                    return json;
                })
                .then(
                    response => response,
                    error => error
                )
        default:
            return fetch(`${API_URL}/${endpoint}`, {
                headers: headers,
                method: method,
                body: JSON.stringify(body)
            })
                .then(response => response.json().then(json => ({ json, response })))
                .then(({ json, response }) => {
                    if (!response.ok) {
                        return Promise.reject(json);
                    }
                    return json;
                })
                .then(
                    response => response,
                    error => error
                )
    }
}
