<script>
    import { teams as dataTeams } from "../lib";
    export let pool;
    const teams = pool.teams.sort((a, b) => a.position - b.position);
</script>

<div
    class="grid text-center"
    style="--highlight: {pool.colors.color}; --highlight-alt: {pool.colors
        .textColor}; grid-template-columns: 2fr repeat(8, 1fr);"
>
    <div
        class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2 rounded-tl-2xl"
    >
        Pool {pool.pool}
    </div>
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2" />
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2">
        W:D:L
    </div>
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2">PF</div>
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2">PA</div>
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2">
        +/-
    </div>
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2">TF</div>
    <div class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2">BP</div>
    <div
        class="font-bold bg-[--highlight] text-[--highlight-alt] mt-2 rounded-tr-lg"
    >
        Pts
    </div>

    {#each teams as team}
        <div class="cell uppercase bg-[--highlight] text-[--highlight-alt]">
            {dataTeams[team.team].team}
        </div>
        <div>{team.player.full}</div>
        <div>{team.w}:{team.d}:{team.l}</div>
        <div>{team.pf}</div>
        <div>{team.pa}</div>
        <div>{team.diff}</div>
        <div>{team.tf}</div>
        <div>{team.bp}</div>
        <div class="cell">{team.points}</div>
    {/each}
</div>

<style>
    .cell:nth-child(18) {
        background-color: var(--highlight);
        color: var(--highlight-alt);
    }

    .cell:nth-child(27) {
        background-color: var(--highlight);
        color: var(--highlight-alt);
        border-radius: 0 0 1rem 0.5rem;
    }

    .cell:nth-child(46) {
        border-radius: 0 0 1rem 0.5rem;
        margin-bottom: 1rem;
    }
</style>
