<script>
    let { children } = $props();
</script>
<nav id="navbar" class="navbar" role="navigation" aria-label="Primary">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
</nav>
{@render children()}

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    .navbar {
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 64px;
        padding: 0 1rem;
        background-color: #1f5156;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        backdrop-filter: saturate(120%) blur(6px);
    }

    .navbar a {
        color: #ffffff;
        text-decoration: none;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        transition: background-color 160ms ease, color 160ms ease;
        outline-offset: 3px;
    }

    .navbar a:hover,
    .navbar a:focus-visible {
        background-color: rgba(255, 255, 255, 0.12);
    }

    .navbar a:active {
        transform: translateY(1px);
    }

    @media (max-width: 960px) {
        .navbar {
            justify-content: flex-start;
            gap: 0.5rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }

        .navbar a {
            flex: 0 0 auto;
            padding: 0.5rem 0.75rem;
        }
    }
</style>