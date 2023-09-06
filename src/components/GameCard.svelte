<script>
	import data from '$lib/data.json';
	import { formattedDate, pools } from '$lib';
	export let game;

	$: teamA = data.teams?.find((team) => team.short === game.teams[0].team);
	$: teamB = data.teams?.find((team) => team.short === game.teams[1].team);
	$: if (teamA) {
		teamA.pool = { ...pools[teamA.pool]?.teams.find((t) => t.team === teamA.short) };
	}

	$: if (teamB) {
		teamB.pool = { ...pools[teamB.pool]?.teams.find((t) => t.team === teamB.short) };
	}
</script>

<div class="h-full flex flex-col justify-center items-center gap-4">
	<div class="self-start px-4">Next Up:</div>
	<div class="text-center">
		<div class="text-xl">{formattedDate(game.date, 'dd/MM HH:mm')}</div>
		<div class="italic text-stone-300">{game.place.split(', ')[1]}</div>
	</div>
	<div class="grid gap-4 items-center" style="grid-template-columns: 1fr auto 1fr;">
		<div class="text-center">
			<div class="text-xl">{teamA.icon}</div>
			<div class="uppercase font-bold text-xl">
				{teamA.short}
			</div>
			<div class="rounded-full p-2 text-sm my-2 bg-[--c-aqua]">({teamA.personshort})</div>
		</div>
		<div class="text-xl text-[--c-aqua]">v</div>
		<div class="text-center">
			<div class="text-xl">{teamB.icon}</div>
			<div class="uppercase font-bold text-xl">
				{teamB.short}
			</div>
			<div class="rounded-full p-2 text-sm my-2 bg-[--c-aqua]">({teamB.personshort})</div>
		</div>
	</div>
</div>

<style>
</style>
