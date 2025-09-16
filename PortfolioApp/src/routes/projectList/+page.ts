export async function load() {
    const res = await fetch('http://localhost:8080/api/projects', {credentials: 'include'});
    const data = await res.json();
    return {
        projects: data
    };
}