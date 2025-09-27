<script lang="ts">
    import About from '$lib/components/about/+page.svelte'
    import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

    // If you need data (e.g., projects), load it with +page.server.ts and get it via `export let data`
    export let data: { projects?: any[] };
</script>

<main>
    <section id="home">
        <!-- Hero/intro -->
    </section>

    <section id="about">
        <About />
    </section>

    <section id="projects">
        <ProjectCard projects={data?.projects ?? []} />
    </section>

    <section id="contact">
        <!-- Contact content goes here -->
    </section>
</main>

<style>
    html {
        scroll-behavior: smooth; /* smooth scrolling */
    }
    section {
        scroll-margin-top: var(--nav-height, 72px); /* offset for fixed navbar */
        padding-block: 4rem;
    }
</style>
