

class Api {
    static endPoint = 'http://localhost:9090/';



    static doFetch(destination, id = '', method = 'GET', body = null) {
        const options = {
            method,
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: body,
        };

        let url = Api.endPoint + destination + '/' + id;

        console.log(url);
        return fetch(url, options)
            .then(res => {
                console.log(res.ok);
                if (res.ok) {
                    return res.json();
                } else {
                    Promise.reject(new Error(res.statusText));
                }
            })
            .then(data => data)
    }
}

export default Api;