// @ts-ignore
import type { PageServerLoad } from './$types';
import { API_PASS, API_BASE, API_USER } from '$env/static/private';

// @ts-ignore
export const load: PageServerLoad = async ({ fetch }) => {
    const headers: Record<string, string> = {};

    if (API_USER && API_PASS) {
        const auth = Buffer.from(`${API_USER}:${API_PASS}`).toString('base64');
        headers.Authorization = `Basic ${auth}`;
        console.log("Using credentials");
    } else {
        console.log("No credentials provided");
    }

    const res = await fetch(`${API_BASE}/api/v1/projects`, { headers });
    const projects = await res.json();
    return { projects };
};
