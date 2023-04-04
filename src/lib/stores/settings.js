import { writable } from 'svelte/store';

const settings = writable({
	colorScheme: 'Dark',
	language: 'en',
	fontSize: 12
});

export default settings;
