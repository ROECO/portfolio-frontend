<script lang="ts">
    import About from '$lib/components/about/+page.svelte'
    import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

    export let data: { projects?: any[] };
</script>

<main>
    <section id="home">
    </section>

    <section id="about">
        <About />
    </section>

    <section id="projects">
        <ProjectCard projects={data?.projects ?? []} />
    </section>

    <section id="contact">

    </section>
</main>

<style>
    html {
        scroll-behavior: smooth;
    }
    section {
        scroll-margin-top: var(--nav-height, 72px);
        padding-block: 4rem;
    }
</style>
