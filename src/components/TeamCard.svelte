<script>
    export let team;
</script>

<div
    class="flex flex-col h-full"
    style="--highlight: {team.pool.colors.color}; --highlight-alt: {team.pool
        .colors.textColor};"
>
    <div
        class="text-center font-bold p-4 bg-[--highlight] text-[--highlight-alt] rounded-tr-lg rounded-tl-2xl flex-1 flex justify-between items-start leading-none"
    >
        <div
            class="rounded rounded-tl-lg rounded-br-lg bg-white w-[3rem] h-[3rem] text-4xl leading-none flex items-center justify-center"
        >
            {team.flag}
        </div>
        <div>
            <div class="font-bold text-right text-xl">{team.team}</div>
            <div
                class="font-bold text-right text-4xl leading-none opacity-[0.25]"
            >
                {team.code}
            </div>
            <div class="text-right opacity-[0.25]">#{team.seed}</div>
        </div>
    </div>
    <div class="p-4 rounded-bl-lg rounded-br-2xl bg-stone-100">
        <div class="mb-4 py-4 text-center text-3xl flex-1">
            {team.pool.points}pts
        </div>
        <div class="flex-1 flex justify-between text-center gap-4">
            <div class="flex-1">
                <div class="font-bold">WDL</div>
                <div>{team.pool.w}:{team.pool.d}:{team.pool.l}</div>
            </div>
            <div class="flex-1">
                <div class="font-bold">PF</div>
                <div>{team.pool.pf}</div>
            </div>
            <div class="flex-1">
                <div class="font-bold">PA</div>
                <div>{team.pool.pa}</div>
            </div>
            <div class="flex-1">
                <div class="font-bold">TF</div>
                <div>{team.pool.tf}</div>
            </div>
            <div class="flex-1">
                <div class="font-bold">BP</div>
                <div>{team.pool.bp}</div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
