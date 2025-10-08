<script>
    /** @typedef {{id:number,name:string,description:string,toolsLanguages:string[],imageUrl:string,videoUrl:(string|null)}} Project */
    /** @type {Project[]} */
    export let projects = [];
</script>

<div id="projectholder" class="projectholder">
    {#each projects as project, index (project.id)}
        <div class="project-section" class:reverse={index % 2 === 1}>
            <div class="project-image">
                <img src={project.imageUrl} alt={project.name} />
            </div>
            
            <div class="project-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                
                <div class="tools">
                    {#each project.toolsLanguages as tool}
                        <span class="tool-tag">{tool}</span>
                    {/each}
                </div>
                
                <button class="learn-more">View Project</button>
            </div>
        </div>
    {/each}
</div>



<style>
    .projectholder {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background-color: #dcdcdc;
    }
    
    .project-section {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        background-color: #d0d0d0;
        border-radius: 8px;
        overflow: hidden;
        min-height: 400px;
    }
    
    /* Reverse layout for alternating rows */
    .project-section.reverse {
        flex-direction: row-reverse;
    }
    
    .project-image {
        flex: 1;
        min-width: 50%;
        overflow: hidden;
    }
    
    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .project-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
        background-color: #d0d0d0;
    }
    
    .project-content h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #2d2d2d;
        margin: 0 0 1rem 0;
    }
    
    .project-content p {
        font-size: 1.125rem;
        line-height: 1.6;
        color: #2d2d2d;
        margin: 0 0 1.5rem 0;
    }
    
    .tools {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
    
    .tool-tag {
        padding: 0.5rem 1rem;
        background-color: #2d2d2d;
        color: #ffffff;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .learn-more {
        width: fit-content;
        padding: 0.75rem 1.5rem;
        background-color: transparent;
        color: #2d2d2d;
        border: 2px solid #2d2d2d;
        border-radius: 24px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .learn-more:hover {
        background-color: #2d2d2d;
        color: #ffffff;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .project-section,
        .project-section.reverse {
            flex-direction: column;
        }
        
        .project-image {
            min-width: 100%;
            min-height: 300px;
        }
        
        .project-content {
            padding: 2rem;
        }
        
        .project-content h2 {
            font-size: 2rem;
        }
    }
</style>