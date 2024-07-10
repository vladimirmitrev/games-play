import * as request from '../lib/request';

const BASE_URL = 'http://localhost:3030/data/comments'

export const getAll = async (gameId) => {
    
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });
    
    const result = await request.get(`${BASE_URL}?${query}`);
    
    // const result = await request.get(BASE_URL);
    // return result.filter(comment => comment.gameId === gameId);
    return result;
}

export const create = async (gameId, username, text) => {
    const newComment = await request.post(BASE_URL, {
        gameId,
        username,
        text,
    });

    return newComment;
};