const ENDPOINT = 'http://192.168.99.100:8000/index.php';

export function getUsers(dispatcher) {
    let endpoint = ENDPOINT + '?request=get_data';
    return fetch(endpoint)
        .then(res => res.json())
        .then(jsonResponse => dispatcher(jsonResponse))
        .catch(err=> {
            console.log(err);
        })
}

export function addUsers(newUser){
    let endpoint = ENDPOINT + '?request=add&name=' +
        newUser.name +
        '&age=' +
        newUser.age +
        '&title=' +
        newUser.title +
        '&project=' +
        newUser.project;
    return fetch(endpoint)
        .then(res => res.json())
        .catch(err=> {
            console.log(err);
        })
}

export function deleteUser(userId){
    let endpoint = ENDPOINT + '?request=delete&id=' + userId;
    return fetch(endpoint)
        .then(res => res.json())
        .catch(err=> {
            console.log(err);
        })
}