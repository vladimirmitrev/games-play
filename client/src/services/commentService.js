import * as request from '../lib/request';

const BASE_URL = 'http://localhost:3030/jsonstore/comments'

export const getAll = async () => {
    const result = await request.get(BASE_URL)

    return Object.values(result);
}

export const create = async (gameId, username, text) => {
    const newComment = await request.post(BASE_URL, {
        gameId,
        username,
        text,
    });

    return newComment;
};