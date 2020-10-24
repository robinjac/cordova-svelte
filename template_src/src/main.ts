
// Import cordova pugin types here.
/// <reference types="cordova-plugin-camera" />
/// <reference types="cordova-plugin-file" />

import App from './App.svelte';

// Instatiate the app.
new App({
	target: document.body,
	props: {
		name: 'world'
	}
});