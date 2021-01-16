import axios from "axios";

export default {
    name: 'Api',
    isLoggedIn: () => axios.get('/api/authenticated'),
}
