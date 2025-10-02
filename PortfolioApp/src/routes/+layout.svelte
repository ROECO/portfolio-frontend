<script>
    import "../app.css";
    let { children } = $props();
</script>

<nav id="navbar" class="navbar"  aria-label="Primary">
    <div class="logo" id="homelogo">
        <a href="/" >
            <img src="/roecologo.png" alt="Logo" width="32" height="32" />
        </a>
    </div>
    <div id="routesholder" class="routes">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
    <div id="storeholder" class="store">
        <a href="/store">Store</a>
    </div>
</nav>
{@render children()}

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    .navbar {
        position: sticky;
        top: 0rem;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        height: 64px;
        padding: 0 0 0 0;
        background-color: #2d2d2d;
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
        display: inline-flex;
        align-items: center;
        justify-content: center;

    }

    .navbar a:hover,
    .navbar a:focus-visible {
        background-color: rgba(255, 255, 255, 0.12);
    }
    .homelogo a:hover {
        background-color: rgba(255, 255, 255, 0.12);
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