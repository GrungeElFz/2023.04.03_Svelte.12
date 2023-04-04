<script>
	import { Stage, Layer, Rect } from '../konva';

	let showCanvas = true;
</script>

<input type="checkbox" bind:checked={showCanvas} />

{#if showCanvas}
	<Stage width={300} height={400}>
		<Layer>
			<Rect x={20} y={20} fill="MediumSlateBlue" width={200} height={100} />
			<Rect x={50} y={50} fill="DeepSkyBlue" width={100} height={100} />
		</Layer>

		<Layer>
			<Rect x={80} y={80} fill="gold" width={100} height={100} />
		</Layer>
	</Stage>
{/if}
