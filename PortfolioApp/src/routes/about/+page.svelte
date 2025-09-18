<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main class="about-container">
    <h1>About Me</h1>
    <section class="about-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>

        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.</p>
    </section>
</main>

<style>
    .about-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    .about-content {
        margin-top: 2rem;
        line-height: 1.6;
    }

    h1 {
        color: #333;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }
</style>
