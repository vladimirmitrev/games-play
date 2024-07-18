// const BASE_URL = 'http://localhost:3030'
// const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;


const Path = {
    Home: '/',
    Login: 'login',
    Register: 'register',
    Logout: 'logout',
    GameEdit: '/games/:gameId/edit',
    GameDelete: '/games/:gameId/delete',
    Games: '/games',
    GameDetails: '/games/:gameId',
}

export default Path;