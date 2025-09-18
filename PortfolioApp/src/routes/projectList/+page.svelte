<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    export let data;

</script>

<h1>Projects</h1>
<ProjectCard projects="{data.projects}"/>