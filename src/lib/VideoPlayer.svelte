<script>
	export let src = undefined;

	let paused = true;
	let currentTime = 0;
	let volume = 0;
</script>

<video {src} controls muted bind:paused bind:volume bind:currentTime />

<button
	on:click={() => {
		paused = !paused;
	}}
>
	{paused ? 'Play' : 'Pause'}
</button>

<p>{currentTime}</p>
<p>{volume}</p>
