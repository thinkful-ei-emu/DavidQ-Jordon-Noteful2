

class Api {

    static doFetch(destination) {
        return fetch(`http://localhost:9090/` + destination)
            .then(res => res.json())
            .then(data => data)
    }
}

export default Api;