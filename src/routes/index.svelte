<script>
	import '../app.css';
	import { act } from '../stores/fetchData';
	import { fetchData } from '../stores/fetchData';
	fetchData();

	let heading = 'Hello there!';
	let body = 'Feeling bored?';
	let button = 'Click me';
	let buttonClicked = 0;

	const handleClick = () => {
		buttonClicked++;
		fetchData();
		buttonClicked > 1 ? (heading = 'or') : (heading = 'Well, you can');
		body = `${$act.toLowerCase()}.`;
		button = 'Other?';
	};

	const notSatisfied = () => {
		heading = '';
		body = "That's because you're a lazy bug.";
	};
</script>

<svelte:head>
	<title>Activity generator</title>
</svelte:head>

<h1 class="text-center text-lg">Activity generator</h1>
<div class="flex flex-col items-center text-center mt-2 p-6 bg-zinc-600 rounded">
	<h2>{heading}</h2>
	<p class="text-base">{body}</p>
	<div>
		<button
			class="bg-yellow-500 mt-2 py-1 px-4 rounded border-solid border-2 border-yellow-500 hover:-translate-y-1"
			on:click={() => handleClick()}>{button}</button
		>
		{#if buttonClicked > 0}
			<button
				class="bg-transparent py-1 px-4 mt-2 rounded border-solid border-2 border-yellow-500 text-yellow-500 hover:-translate-y-1"
				on:click={() => notSatisfied()}>Not satisified?</button
			>
		{/if}
	</div>
</div>
