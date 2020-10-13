const BASE_URL = '/api/products';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(product) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        BODY: JSON.stringify(product)
    }).then(res => res.json());
}