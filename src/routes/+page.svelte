<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import { baseData } from '../stores.js';
	import { DateTime } from 'luxon';

	const getTeamGames = (teamShort) => {
		return baseData.games.filter((game) => {
			return game.teams[0].team === teamShort || game.teams[1].team === teamShort;
		});
	};

	export const poolColors = {
		A: { color: 'var(--pool-a)', textColor: 'black' },
		B: { color: 'var(--pool-b)', textColor: 'black' },
		C: { color: 'var(--pool-c)', textColor: 'white' },
		D: { color: 'var(--pool-d)', textColor: 'white' },
		Q: { color: '#000044', textColor: 'white' },
		S: { color: '#808080', textColor: 'white' },
		R: { color: '#cd7f32', textColor: 'white' },
		F: { color: '#daa520', textColor: 'white' }
	};

	export const players = {};
	for (const team of baseData.teams) {
		if (!players[team.personshort]) {
			players[team.personshort] = {
				full: team.personlong,
				initials: team.personshort,
				teams: []
			};
		}

		const games = getTeamGames(team.short);

		players[team.personshort].teams.push({
			team: team.long,
			code: team.short,
			flag: team.icon,
			flagCode: team.code,
			pool: {
				...baseData.pools.find((poolTeam) => poolTeam.team === team.short),
				pool: team.pool,
				colors: { ...poolColors[team.pool] }
			},
			seed: team.rating,
			games,
			getNextGame() {
				return this?.games?.find((game) => {
					return DateTime.fromFormat(game.date, 'yyyy-MM-dd HH:mm') > DateTime.now();
				});
			}
		});
	}

	export const pools = {};
	for (const team of baseData.pools) {
		if (!pools[team.pool]) {
			pools[team.pool] = {
				pool: team.pool,
				colors: poolColors[team.pool],
				teams: []
			};
		}

		pools[team.pool].teams.push({
			...team,
			player: Object.values(players).find((player) => player.full === team.player)
		});
	}

	export const games = [];
	for (const game of baseData.games) {
		game.pool = { pool: game.pool, colors: poolColors[game.pool] };
		games.push(game);
	}

	export const playersSelect = Object.keys(players).map((key) => {
		return {
			value: key,
			label: players[key].full
		};
	});

	export const teams = {};
	for (const player of Object.values(players)) {
		for (const team of player.teams) {
			teams[team.code] = { ...team, player };
		}
	}

	import '../app.css';
	import GameCard from '../components/GameCard.svelte';
	import GamesTable from '../components/GamesTable.svelte';
	import PoolTable from '../components/PoolTable.svelte';
	import TeamCard from '../components/TeamCard.svelte';
	import Match from '../components/Match.svelte';

	let selectedPlayerCode = 'BF';
	let selectedPlayer = null;

	let selectedGameId = '1';
	let selectedGame = null;

	$: if (selectedPlayerCode) {
		selectedPlayer = players[selectedPlayerCode];
	}

	const handleGameClick = (gameId) => {
		selectedGameId = gameId;
	};

	$: if (selectedGameId) {
		const game = games.find((game) => game.id === selectedGameId);
		const pool = pools[game.pool.pool];
		const gameTeams = game.teams.map((team) => {
			const t = teams[team.team];
			return { ...team, ...t };
		});

		selectedGame = { game, pool, teams: gameTeams };
	}
</script>

<main class="grid grid-cols-2 grid-rows-1 w-full h-full">
	<div class="grid grid-cols-1 overflow-auto" style="grid-template-rows: max-content 1fr;">
		<section class="overflow-auto p-4">
			<header class="w-full text-center py-2">Pools</header>
			<div><PoolTable pool={pools['A']} /></div>
			<div><PoolTable pool={pools['B']} /></div>
			<div><PoolTable pool={pools['C']} /></div>
			<div><PoolTable pool={pools['D']} /></div>
		</section>
		<section class="overflow-auto p-4">
			<header class="w-full text-center py-2">Games</header>
			<div class="grid grid-cols-1 gap-2">
				<GamesTable {games} {handleGameClick} />
			</div>
		</section>
	</div>
	<div class="grid grid-cols-1 overflow-auto" style="grid-template-rows: max-content 1fr;">
		<section class="overflow-auto p-4 min-h-[200px]">
			<header class="w-full text-center py-2">
				<span>Player</span>
				<select class="text-[--c-aqua]" bind:value={selectedPlayerCode}>
					<option value="" disabled>Select Player</option>
					{#each playersSelect as player}
						<option value={player.value}>{player.label}</option>
					{/each}
				</select>
			</header>
			{#if selectedPlayer}
				<div class="grid grid-rows-1 grid-cols-2 gap-4">
					<div class="flex flex-row">
						<div style="flex: 1.33">
							<TeamCard team={selectedPlayer?.teams[0]} />
						</div>
						<div class="flex-1">
							<GameCard game={selectedPlayer?.teams[0].getNextGame()} />
						</div>
					</div>
					{#if selectedPlayer?.teams.length === 2}
						<div class="flex flex-row">
							<div style="flex: 1.33">
								<TeamCard team={selectedPlayer?.teams[1]} />
							</div>
							<div class="flex-1">
								<GameCard game={selectedPlayer?.teams[1].getNextGame()} />
							</div>
						</div>
					{/if}
				</div>
			{/if}
		</section>
		<section class="overflow-auto p-4 flex flex-col justify-center">
			<header class="w-full text-center py-2">Match</header>
			<Match {selectedGame} />
		</section>
	</div>
</main>

<style lang="scss">
	main {
		--c-aqua: #00d9c1;
		--c-navy: #000044;
		--c-blurple: #402ca0;
		--c-fuchsia: #f71378;
		--c-yellow: #eef85d;
		--c-green: #a3d34e;

		--pool-a: var(--c-yellow);
		--pool-b: var(--c-green);
		--pool-c: var(--c-fuchsia);
		--pool-d: var(--c-blurple);
	}
</style>
