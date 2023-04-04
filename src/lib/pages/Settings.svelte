<script>
	import settings from '../stores/settings';
</script>

<h2>Settings</h2>

<label>
  <input bind:group={$settings.colorScheme} type="radio" name="colorScheme" value="Dark" />
	Dark
</label>

<label>
  <input bind:group={$settings.colorScheme} type="radio" name="colorScheme" value="Light" />
	Light
</label>

<br>

<button
on:click={() => {
  $settings.colorScheme = $settings.colorScheme === 'Dark' ? 'Light' : 'Dark';
}}>Toggle Color Scheme</button
>

<p>Current Theme: {$settings.colorScheme}</p>
