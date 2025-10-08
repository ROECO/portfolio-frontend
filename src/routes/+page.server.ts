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

    const [projectsRes, aboutRes] = await Promise.all([
        fetch(`${API_BASE}/api/v1/projects?limit=2`, { headers }),
        fetch(`${API_BASE}/api/v1/about`, { headers })
    ]);
    
    if (!projectsRes.ok) {
        throw new Error(`Projects API request failed: ${projectsRes.status}`);
    }
    
    if (!aboutRes.ok) {
        throw new Error(`About API request failed: ${aboutRes.status}`);
    }
    
    const projects = await projectsRes.json();
    const aboutSections = await aboutRes.json();
    
    console.log('Projects count:', projects.length);
    console.log('About sections count:', aboutSections.length);
    
    return { projects, aboutSections };
};
