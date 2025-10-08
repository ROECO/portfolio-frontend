<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="about-page">
    <header class="about-header">
        <h1>About Me</h1>
        <p>Get to know my journey, experience, and passions</p>
    </header>

    <div class="about-sections">
        {#each data.aboutSections as section, index}
            <section 
                id={section.category} 
                class="about-section"
                class:reverse={index % 2 === 1}
            >
                <div class="section-image">
                    <img src={section.imageUrl} alt={section.title} />
                </div>
                
                <div class="section-content">
                    <h2>{section.title}</h2>
                    
                    <div class="description">
                        {section.fullDescription}
                    </div>
                </div>
            </section>
        {/each}
    </div>
</div>

<style>
    .about-page {
        background-color: #dcdcdc;
        min-height: 100vh;
        padding-bottom: 4rem;
    }
    
    .about-header {
        text-align: center;
        padding: 4rem 2rem 2rem;
        background-color: #d0d0d0;
    }
    
    .about-header h1 {
        font-size: 3rem;
        color: #2d2d2d;
        margin: 0 0 1rem 0;
    }
    
    .about-header p {
        font-size: 1.25rem;
        color: #2d2d2d;
        margin: 0;
    }
    
    .about-sections {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    
    .about-section {
        display: flex;
        gap: 2rem;
        background-color: #d0d0d0;
        border-radius: 8px;
        overflow: hidden;
        min-height: 400px;
    }
    
    .about-section.reverse {
        flex-direction: row-reverse;
    }
    
    .section-image {
        flex: 1;
        min-width: 40%;
    }
    
    .section-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .section-content {
        flex: 1;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .section-content h2 {
        font-size: 2rem;
        color: #2d2d2d;
        margin: 0 0 1.5rem 0;
    }
    
    .description {
        font-size: 1.125rem;
        line-height: 1.8;
        color: #2d2d2d;
        white-space: pre-line;
    }
    
    @media (max-width: 768px) {
        .about-header h1 {
            font-size: 2rem;
        }
        
        .about-section,
        .about-section.reverse {
            flex-direction: column;
        }
        
        .section-image {
            min-width: 100%;
            min-height: 300px;
        }
        
        .section-content {
            padding: 2rem;
        }
        
        .section-content h2 {
            font-size: 1.5rem;
        }
    }
</style>
