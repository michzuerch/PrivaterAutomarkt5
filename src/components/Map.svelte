<script lang="ts">
	import { setMap } from '~shared/actions/map';

	export let location: {
		latitude: number;
		longitude: number;
	};
	export let zoom: number = 19;
	export let markerMarkup: string = 'Hier';

	const { latitude, longitude } = location;
</script>

<figure class="h-screen w-screen" use:setMap={{ latitude, longitude, zoom, markerMarkup }} />

