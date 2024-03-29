import { Alert } from 'react-native';

class Network {
    fetchjsonResponse(url,callback) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchGET_HEADER(url, body, token, callback) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
         })
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchPOST(url, body, callback) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
         })
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchPOST_HEADER(url, body, token, callback) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
         })
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchPATCH_HEADER(url, body, token, callback) {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
         })
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchDELETE_HEADER(url, body, token, callback) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
         })
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchPUT_HEADER(url, body, token, callback) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': token
            },
            body: body
         })
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchjsonResponsePosition(url,callback,position) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData,position);
            })
            .catch((error) => {
                //console.log(error);
            });
    }

    fetchjsonResponseNotCallback(url) {
        return fetch(url).then((response) => response.json());
    }
}

const network = new Network();
export default network;