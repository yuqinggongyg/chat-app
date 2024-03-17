function handleNetworkError() {
    return Promise.reject({ error: 'networkError' });
}
function handleResponse(response) {
    if (response.ok) {
        return response.json();
    }
    return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
}

export function fetchSession() {
    return fetch('/api/v1/session', {
        method: 'GET',
    })
        .catch(handleNetworkError)
        .then(handleResponse);
}

export function fetchLogin(username) {
    return fetch('/api/v1/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ username }),
    })
        .catch(handleNetworkError)
        .then(handleResponse);
}

export function fetchLogout() {
    return fetch('/api/v1/session', {
        method: 'DELETE',
    })
        .catch(handleNetworkError)
        .then(handleResponse);
}

export function fetchTodos() {
    return fetch('/api/v1/todos')
        .catch(handleNetworkError)
        .then(handleResponse);
}

export function fetchAddTodo(task) {
    return fetch('/api/v1/todos', {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ task }),
    })
        .catch(handleNetworkError)
        .then(handleResponse);
}

export function fetchLoggedInUsers() {
    return fetch('/api/v1/loggedInUsers')
        .catch(handleNetworkError)
        .then(handleResponse);
}
