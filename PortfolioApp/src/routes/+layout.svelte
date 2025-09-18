<script>
    let { children } = $props();
</script>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projectList">Projects</a>
    <a href="/contact">Contact</a>
</nav>
{@render children()}

