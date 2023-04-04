<script>
	import settings from './stores/settings';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300;400;500;700&display=swap"
		rel="stylesheet"
	/>
	{#if $settings.colorScheme === 'Dark'}
		<style>
			/* Dark */
			:root {
				--backgroundColor: rgb(35, 35, 35);
				--color: rgb(245, 245, 245);
			}
		</style>
	{:else}
		<style>
			/* Light */
			:root {
				--backgroundColor: whitesmoke;
				--color: black;
			}
		</style>
	{/if}
</svelte:head>
