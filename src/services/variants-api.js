const BASE_URL = '/api/variants';


export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(newVariant) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newVariant)
    }).then(res => res.json());
}


export function deleteMany(id) {
    return fetch(`${BASE_URL}/productvariants/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export function updateInventory(variantId) {
    return fetch(`${BASE_URL}/${variantId.sizeId}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(variantId)
    }).then(res => res.json());
}