<script>
	import CounterButton from "../components/CounterButton.svelte";
    import { browser } from '$app/environment'

    $: currentUserAgent = browser && window.navigator.userAgent || "Not a browser" 
    $: screenWidth = browser && window.innerWidth || "Not a browser" 
    $: screenHeight = browser && window.innerHeight || "Not a browser" 


</script>

<h1>Welcome to SvelteKit</h1>
<CounterButton/>
<p>{currentUserAgent}</p>
<p>{screenWidth} x {screenHeight}</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
