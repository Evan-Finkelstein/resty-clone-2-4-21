import request from 'superagent';


export async function fetchPost(url) {

    const response = await request
        .get(`${url}`);
    return response.body;

}

export async function createPost(url, json) {

    const response = await request
        .post(`${url}`)
        .send(json);
    return response.body;

}

export async function updatePost(url, json) {

    const response = await request
        .put(`${url}`)
        .send(json);
    return response.body;

}

export async function deletePost(url) {

    const response = await request
        .delete(`${url}`);
    return response.body;


}
