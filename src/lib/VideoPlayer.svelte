<script>
	export let src = undefined;

	let paused = true;
	let currentTime = 0;
	let volume = 0;
</script>

<video class:playing={!paused} {src} controls muted bind:paused bind:volume bind:currentTime />

<button
	on:click={() => {
		paused = !paused;
	}}
>
	{paused ? 'Play' : 'Pause'}
</button>

<p>{currentTime}</p>
<p>{volume}</p>

<style lang="scss">
	video.playing {
    box-shadow: var(--buttonBgColor) 0 1.25rem 2rem -0.65rem;
	}
</style>
