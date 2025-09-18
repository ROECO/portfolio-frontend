<script>
    /** @typedef {{id:number,name:string,description:string,toolsLanguages:string[],imageUrl:string,videoUrl:(string|null)}} Project */
    /** @type {Project[]} */
    export let projects = [];
</script>

<div class="Projects">
    {#each projects as project (project.id)}
        <div class="Project Card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.name} />

            <ul>
                {#each project.toolsLanguages as tool}
                    <li>{tool}</li>
                {/each}
            </ul>
        </div>
    {/each}
</div>