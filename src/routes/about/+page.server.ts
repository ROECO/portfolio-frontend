// @ts-ignore
import type { PageServerLoad } from './$types';
import { API_PASS, API_BASE, API_USER } from '$env/static/private';

// @ts-ignore
export const load: PageServerLoad = async ({ fetch }) => {
    const headers: Record<string, string> = {};

    if (API_USER && API_PASS) {
        const auth = Buffer.from(`${API_USER}:${API_PASS}`).toString('base64');
        headers.Authorization = `Basic ${auth}`;
    }

    const res = await fetch(`${API_BASE}/api/v1/about`, { headers });
    
    if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
    }
    
    const aboutSections = await res.json();
    
    return { aboutSections };
};