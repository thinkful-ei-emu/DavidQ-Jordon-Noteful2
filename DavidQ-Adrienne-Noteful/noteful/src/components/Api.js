

class Api {
    static endPoint = 'https://secure-peak-62135.herokuapp.com/';



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
                    Promise.reject(new Error(res.body));
                }
            })
            .then(data => data).catch(console.log);
    }
}

export default Api;