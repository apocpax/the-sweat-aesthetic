import tokenService from '../utils/tokenService';
const BASE_URL = '/api/variants';


export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(newVariant) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(newVariant)
    }).then(res => res.json());
}


export function deleteMany(id) {
    return fetch(`${BASE_URL}/productvariants/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

export function incrementInventory(variantId) {
    return fetch(`${BASE_URL}/orderconfirmed/${variantId.sizeId}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(variantId)
    }).then(res => res.json());
}

export function updateInventory(variant) {
    return fetch(`${BASE_URL}/${variant._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(variant)
    }).then(res => res.json());
}