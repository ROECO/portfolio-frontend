<script>
    import { onMount, onDestroy } from 'svelte';

    /** @typedef {{id:number,title:string,summary:string,fullDescription:string,imageUrl:string,order:number,category:string,ctaText:string,ctaLink:string}} AboutSection */
    /** @type {AboutSection[]} */
    export let sections = [];
    
    let currentSlide = 0;
    let interval;
    let isPaused = false;
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % sections.length;
    }
    
    function goToSlide(index) {
        currentSlide = index;
    }
    
    function startAutoRotate() {
        interval = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, 6000); // Rotate every 6 seconds
    }
    
    onMount(() => {
        startAutoRotate();
    });
    
    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
</script>

<div 
    class="carousel-container"
    on:mouseenter={() => isPaused = true}
    on:mouseleave={() => isPaused = false}
    role="region"
    aria-label="About Carousel"
>
    {#each sections as section, index (section.id)}
        <div 
            class="carousel-slide" 
            class:active={currentSlide === index}
            style="background-image: url({section.imageUrl})"
        >
            <div class="overlay"></div>
            <div class="content">
                <h2>{section.title}</h2>
                <p>{section.summary}</p>
                <a 
                    href={section.ctaLink} 
                    class="cta-button"
                    data-sveltekit-preload-data="hover"
                >
                    {section.ctaText}
                </a>
            </div>
        </div>
    {/each}
    
    <div class="carousel-dots">
        {#each sections as section, index}
            <button
                class="dot"
                class:active={currentSlide === index}
                on:click={() => goToSlide(index)}
                aria-label="Go to slide {index + 1}"
            ></button>
        {/each}
    </div>
</div>

<style>
    .carousel-container {
        position: relative;
        width: 100%;
        height: 500px;
        overflow: hidden;
        background-color: #2d2d2d;
    }
    
    .carousel-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.8s ease-in-out;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    .carousel-slide.active {
        opacity: 1;
        z-index: 1;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to right,
            rgba(45, 45, 45, 0.85) 0%,
            rgba(45, 45, 45, 0.4) 100%
        );
    }
    
    .content {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem;
        max-width: 600px;
        color: #ffffff;
    }
    
    .content h2 {
        font-size: 3rem;
        font-weight: bold;
        margin: 0 0 1.5rem 0;
        color: #ffffff;
    }
    
    .content p {
        font-size: 1.25rem;
        line-height: 1.8;
        margin: 0 0 2rem 0;
        color: #ffffff;
    }
    
    .cta-button {
        width: fit-content;
        padding: 1rem 2rem;
        background-color: transparent;
        color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 30px;
        font-size: 1.125rem;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-block;
    }
    
    .cta-button:hover {
        background-color: #ffffff;
        color: #2d2d2d;
    }
    
    .carousel-dots {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        gap: 0.75rem;
    }
    
    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
    }
    
    .dot:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
    
    .dot.active {
        background-color: #ffffff;
        width: 32px;
        border-radius: 6px;
    }
    
    @media (max-width: 768px) {
        .carousel-container {
            height: 400px;
        }
        
        .content {
            padding: 2rem;
        }
        
        .content h2 {
            font-size: 2rem;
        }
        
        .content p {
            font-size: 1rem;
        }
        
        .overlay {
            background: linear-gradient(
                to bottom,
                rgba(45, 45, 45, 0.7) 0%,
                rgba(45, 45, 45, 0.9) 100%
            );
        }
    }
</style>