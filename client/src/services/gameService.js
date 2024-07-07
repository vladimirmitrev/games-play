import * as request from "../lib/request";

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    // console.log(result);
    return Object.values(result);
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