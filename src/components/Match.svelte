<script>
	import { formattedDate } from '$lib';
	export let selectedGame;
</script>

<div class="flex w-full overflow-auto flex-col items-center justify-center">
	{#if selectedGame}
		{@const teamA = selectedGame.teams[0]}
		{@const teamB = selectedGame.teams[1]}
		{@const resultA = selectedGame.game.teams[0]}
		{@const resultB = selectedGame.game.teams[1]}
		{@const played = resultA.outcome !== 'U' && resultB.outcome !== 'U'}
		<div class="p-4 mb-8 text-center">
			<div class="mb-4 italic">
				{formattedDate(selectedGame.game.date, 'EEE d MMM, HH:MM')}
			</div>
			<div class="flex items-center gap-4">
				{teamA.flag} <span class="font-bold">{teamA.code}</span>
				<span class="bg-[--c-aqua] rounded-full p-2">({teamA.player.initials})</span>
				{#if played}<span
						class={resultA.outcome === 'W' &&
							'before:rounded-full before:bg-[--c-aqua] before:absolute before:h-2 before:w-2 before:left-[calc(50%-0.25rem)] before:top-6 relative'}
						>{selectedGame.game.teams[0].score}</span
					>{/if}
				{played ? '-' : 'v'}
				{#if played}<span
						class={resultB.outcome === 'W' &&
							'before:rounded-full before:bg-[--c-aqua] before:absolute before:h-2 before:w-2 before:left-[calc(50%-0.25rem)] before:top-6 relative'}
						>{selectedGame.game.teams[1].score}</span
					>{/if}
				<span class="bg-[--c-aqua] rounded-full p-2">({teamB.player.initials})</span>
				<span class="font-bold">{teamB.code}</span>
				{teamB.flag}
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4 w-4/5">
			<div
				style="--highlight: {teamA.pool.colors.color}; --highlight-alt: {teamA.pool.colors
					.textColor};"
			>
				<div
					class="text-center font-bold p-4 bg-[--highlight] text-[--highlight-alt] rounded-lg rounded-tl-2xl rounded-br-2xl mb-4"
				>
					{teamA.team}
				</div>
				<div class="px-4">
					{#if played}
						<div class="my-4">
							<div class="italic font-bold">Game:</div>
							<div class="text-center my-2">{resultA.score} ({resultA.tries} tries)</div>
							<div class="italic font-bold">Bonus Points:</div>
							<div class="text-center">
								{#if resultA.bonus > 0}
									{#if resultA.tries >= 4}<div>4+ Tries</div>{/if}
									{#if resultA.outcome === 'L' && resultA.score > resultB.score - 8}<div>
											Losing by 7 or less
										</div>{/if}
								{:else}
									<div class="italic">None</div>
								{/if}
							</div>
						</div>
					{/if}
					<div class="my-4">
						<div class="italic font-bold">Pool:</div>
						<div class="px-4 my-2">
							<table>
								<tr>
									<td class="pr-4">Position:</td>
									<td>#{teamA.pool.position}</td>
								</tr>

								<tr>
									<td class="pr-4">Points:</td>
									<td>{teamA.pool.points}</td>
								</tr>
								<tr>
									<td class="pr-4">(inc bonus):</td>
									<td>{teamA.pool.bp}</td>
								</tr>
								<tr>
									<td class="pr-4">Games Played:</td>
									<td>{teamA.pool.p}</td>
								</tr>
								<tr>
									<td class="pr-4">WDL:</td>
									<td>{teamA.pool.w}:{teamA.pool.d}:{teamA.pool.l}</td>
								</tr>
								<tr>
									<td class="pr-4">PF:</td>
									<td>{teamA.pool.pf}</td>
								</tr>
								<tr>
									<td class="pr-4">PA:</td>
									<td>{teamA.pool.pa}</td>
								</tr>
								<tr>
									<td class="pr-4">PD:</td>
									<td>{teamA.pool.diff}</td>
								</tr>
								<tr>
									<td class="pr-4">Tries:</td>
									<td>{teamA.pool.tf}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div
				style="--highlight: {teamB.pool.colors.color}; --highlight-alt: {teamB.pool.colors
					.textColor};"
			>
				<div
					class="text-center font-bold p-4 bg-[--highlight] text-[--highlight-alt] rounded-lg rounded-tl-2xl rounded-br-2xl mb-4"
				>
					{teamB.team}
				</div>
				<div class="px-4">
					{#if played}
						<div class="my-4">
							<div class="italic font-bold">Game:</div>
							<div class="text-center my-2">{resultB.score} ({resultB.tries} tries)</div>
							<div class="italic font-bold">Bonus Points:</div>
							<div class="text-center">
								{#if resultB.bonus > 0}
									{#if resultB.tries >= 4}<div>4+ Tries</div>{/if}
									{#if resultB.outcome === 'L' && resultB.score > resultA.score - 8}<div>
											Losing by 7 or less
										</div>{/if}
								{:else}
									<div class="italic">None</div>
								{/if}
							</div>
						</div>
					{/if}
					<div class="my-4">
						<div class="italic font-bold">Pool:</div>
						<div class="px-4 my-2">
							<table>
								<tr>
									<td class="pr-4">Position:</td>
									<td>#{teamB.pool.position}</td>
								</tr>

								<tr>
									<td class="pr-4">Points:</td>
									<td>{teamB.pool.points}</td>
								</tr>
								<tr>
									<td class="pr-4">(inc bonus):</td>
									<td>{teamB.pool.bp}</td>
								</tr>
								<tr>
									<td class="pr-4">Games Played:</td>
									<td>{teamB.pool.p}</td>
								</tr>
								<tr>
									<td class="pr-4">WDL:</td>
									<td>{teamB.pool.w}:{teamB.pool.d}:{teamB.pool.l}</td>
								</tr>
								<tr>
									<td class="pr-4">PF:</td>
									<td>{teamB.pool.pf}</td>
								</tr>
								<tr>
									<td class="pr-4">PA:</td>
									<td>{teamB.pool.pa}</td>
								</tr>
								<tr>
									<td class="pr-4">PD:</td>
									<td>{teamB.pool.diff}</td>
								</tr>
								<tr>
									<td class="pr-4">Tries:</td>
									<td>{teamB.pool.tf}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
</style>
