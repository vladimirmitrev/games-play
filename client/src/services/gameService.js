const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const create = async (gameData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = response.json();

    return result;
}

// export const getAll = async () => {
//     const response = await fetch(BASE_URL)
//         .then(res )
// }