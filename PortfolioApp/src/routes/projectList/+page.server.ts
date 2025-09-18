import {API_PASS, API_BASE, API_USER} from "$env/static/private";


export async function load({ fetch }) {
    const headers: Record<string, string> = {};

    if (API_USER && API_PASS) {
        const auth = Buffer.from(`${API_USER}:${API_PASS}`).toString('base64');
        headers.Authorization = `Basic ${auth}`;
        // console.log("Using credentials");
    }else{
        // console.log("No credentials provided");
    }

    const res = await fetch(`${API_BASE}/api/v1/projects`, { headers });
    return { projects: await res.json(),  };


}