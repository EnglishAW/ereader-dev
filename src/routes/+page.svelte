<script>
	import CounterButton from "../components/CounterButton.svelte";
    import { browser } from '$app/environment'

    import { onMount } from "svelte";
    const endpoint = "https://dog.ceo/api/breeds/image/random";
    let dogImageSrc = "...";

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        dogImageSrc = data.message
    });

    $: currentUserAgent = browser && window.navigator.userAgent || "Not a browser" 
    $: screenWidth = browser && window.innerWidth || "Not a browser" 
    $: screenHeight = browser && window.innerHeight || "Not a browser" 


</script>

<h1>Welcome to SvelteKit</h1>
<CounterButton/>
<p>{currentUserAgent}</p>
<p>{screenWidth} x {screenHeight}</p>
<p>dogImageSrc: {dogImageSrc}</p>
<!-- svelte-ignore a11y-missing-attribute -->
<img src="{dogImageSrc}" />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
