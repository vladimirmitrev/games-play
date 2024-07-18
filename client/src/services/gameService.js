import * as request from "../lib/request";

// const BASE_URL = 'http://localhost:3030/data/games'
const BASE_URL = `${import.meta.env.VITE_API_URL}/data/games`;


export const getAll = async () => {
    const result = await request.get(BASE_URL);

    // return Object.values(result);
    return result;
}

export const getOne = async (gameId) => {
    const result = await request.get(`${BASE_URL}/${gameId}`)
    
    return result;
}

export const create = async (gameData) => {

    const result = await request.post(BASE_URL, gameData);

    return result;
    // const response = await fetch(BASE_URL, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(gameData)
    // });

    // const result = response.json();

}

export const edit = async (gameId, gameData) => {
    const result = await request.put(`${BASE_URL}/${gameId}`, gameData)

    return result;
}

export const remove = async (gameId) => await request.remove(`${BASE_URL}/${gameId}`);
    
export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn`, //+ desc
        offSet: 0,
        pageSize: 3,
    })
    // const query = encodeURIComponent(`offset=0&pageSize=3`);
    console.log(query);
    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&${query}`);
    // const result =  await request.get(`${BASE_URL}?${query}`);

    return result;
} 