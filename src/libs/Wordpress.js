import axios from 'axios'
// const BASE_API = 'http://localhost:8000/?rest_route=';
const BASE_API = 'https://nichesnowboards.com/wp-json'

export async function PostContent() {
    return await axios.get(`${BASE_API}/wp/v2/posts/`)
}
// Pages
const PAGE_MAP = {
    'about': '9'
}
export async function AboutContent() {
    return await axios.get(`${BASE_API}/wp/v2/pages/${PAGE_MAP.about}`)
}