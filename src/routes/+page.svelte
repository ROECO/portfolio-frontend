<script lang="ts">
    // @ts-ignore
    import AboutCarousel from '$lib/components/about/AboutCarousel.svelte';
    // @ts-ignore
    import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <section id="about">
        <AboutCarousel sections={data.aboutSections} />
    </section>

    <section id="projects">
        <ProjectCard projects={data.projects} />
    </section>

    <section id="contact">
        <!-- Contact section placeholder -->
    </section>
</main>

<style>
    main {
        background-color: #dcdcdc;
    }
    
    section {
        scroll-margin-top: 64px;
    }
</style>
