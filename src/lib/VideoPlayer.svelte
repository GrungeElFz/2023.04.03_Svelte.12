<script context="module">
	let allVideos = new Set();
</script>

<script>
	import { onDestroy, onMount } from 'svelte';

	export let src = undefined;

	let video;
	let paused = true;

	onMount(() => {
		allVideos.add(video);
	});

	onDestroy(() => {
		allVideos.delete(video);
	});
</script>

<video
	{src}
	muted
	controls
	class:playing={!paused}
	bind:this={video}
	bind:paused
	on:play={() => {
		allVideos.forEach((_video) => {
			if (_video !== video) _video.pause();
		});
	}}
/>

<style lang="scss">
	video.playing {
		box-shadow: var(--buttonBgColor) 0 1.25rem 2rem -0.65rem;
	}
</style>
