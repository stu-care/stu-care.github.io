<script>
	import data from '$lib/data.json';
	import { formattedDate } from '$lib';
	export let games;
	export let handleGameClick;

	const processedGames = games.map((game) => {
		const teamA = data.teams.find((team) => team.short === game.teams[0].team);
		const teamB = data.teams.find((team) => team.short === game.teams[1].team);
		return {
			...game,
			teams: [
				{ ...game.teams[0], ...teamA },
				{ ...game.teams[1], ...teamB }
			]
		};
	});
</script>

<span>upcoming</span>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#each processedGames as game}
	{#if game.teams[0]?.outcome === 'U'}
		<div
			class="row grid items-center justify-center p-2 text-center hover:border-color-[--highlight] hover:text-[--c-navy] select-none cursor-pointer {game
				.teams[0]?.outcome !== 'U' && 'text-[#00004444]'}"
			style="--highlight: {game.pool?.colors?.color}; --highlight-alt: {game.pool?.colors
				?.textColor};"
			on:click={() => handleGameClick(game.id)}
		>
			<div class="text-left">Game {game.id}:</div>
			<div>
				<span class="bg-[--c-aqua] rounded-full text-sm p-1"
					>({game.teams[0]?.personshort || ''})</span
				>
				{game.teams[0]?.short || game.teams[0]?.team}
				{game.teams[0]?.icon || ''}
				{#if game.teams[0]?.score}
					{game.teams[0]?.score}
				{/if} v {#if game.teams[1]?.score}
					{game.teams[1]?.score}
				{/if}
				{game.teams[1]?.icon || ''}
				{game.teams[1]?.short || game.teams[1]?.team}
				<span class="bg-[--c-aqua] rounded-full text-sm p-1"
					>({game.teams[1]?.personshort || ''})</span
				>
			</div>
			<div>{formattedDate(game.date, 'EEE d MMM,  HH:mm')}</div>
			<div>{game.place.split(', ')[1]}</div>
		</div>
	{/if}
{/each}

<span>complete</span>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#each processedGames.sort((a, b) => b.id - a.id) as game}
	{#if game.teams[0]?.outcome !== 'U'}
		<div
			class="row grid items-center justify-center p-2 text-center hover:border-color-[--highlight] hover:text-[--c-navy] select-none cursor-pointer {game
				.teams[0]?.outcome !== 'U' && 'text-[#00004444]'}"
			style="--highlight: {game.pool?.colors?.color}; --highlight-alt: {game.pool?.colors
				?.textColor};"
			on:click={() => handleGameClick(game.id)}
		>
			<div class="text-left">Game {game.id}:</div>
			<div>
				<span class="bg-[--c-aqua] rounded-full text-sm p-1"
					>({game.teams[0]?.personshort || ''})</span
				>
				{game.teams[0]?.short || game.teams[0]?.team}
				{game.teams[0]?.icon || ''}
				{#if game.teams[0]?.score}
					{game.teams[0]?.score}
				{/if} v {#if game.teams[1]?.score}
					{game.teams[1]?.score}
				{/if}
				{game.teams[1]?.icon || ''}
				{game.teams[1]?.short || game.teams[1]?.team}
				<span class="bg-[--c-aqua] rounded-full text-sm p-1"
					>({game.teams[1]?.personshort || ''})</span
				>
			</div>
			<div>{formattedDate(game.date, 'EEE d MMM,  HH:mm')}</div>
			<div>{game.place.split(', ')[1]}</div>
		</div>
	{/if}
{/each}

<style>
	.row {
		border: 1px solid #ddd;
		border-left-color: var(--highlight);
		border-left-width: 0.5em;
		border-right-color: var(--highlight);
		border-right-width: 0.5em;
		border-radius: 1em 0.5em 1em 0.5em;

		grid-template-columns: 1fr 3fr 2fr 2fr;

		transition: all 0.2s ease-in-out;
	}
</style>
