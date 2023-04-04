<script>
	import Button from '../Button.svelte';
	let showButton = false;
</script>

<input type="checkbox" bind:checked={showButton} />

<Button>Button</Button>
<Button>Button</Button>

{#if showButton}
	<Button>Button</Button>
{/if}
