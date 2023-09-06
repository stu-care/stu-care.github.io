// place files you want to import through the `$lib` alias in this folder.

import data from '$lib/data.json';
import { DateTime } from "luxon"

export const formattedDate = (dateStr, formatOutput = 'EEE dd MMM, HH:mm') => {
    return DateTime.fromFormat(dateStr, 'yyyy-MM-dd HH:mm').toFormat(formatOutput)
}

const getTeamGames = (teamShort) => {
    return data.games.filter((game) => {
        return game.teams[0].team === teamShort || game.teams[1].team === teamShort
    });
} 

export const poolColors = {
    A: { color: 'var(--pool-a)', textColor: 'black' },
    B: { color: 'var(--pool-b)', textColor: 'black' },
    C: { color: 'var(--pool-c)', textColor: 'white' },
    D: { color: 'var(--pool-d)', textColor: 'white' },
    Q: { color: "#000044", textColor: "white" },
    S: { color: "#808080", textColor: "white" },
    R: { color: "#cd7f32", textColor: "white" },
    F: { color: "#daa520", textColor: "white" }
};

export const players = {}
for (const team of data.teams) {
    if(!players[team.personshort]) {
        players[team.personshort] = {
            full: team.personlong,
            initials: team.personshort,
            teams: [],
            
        }
    }

    const games = getTeamGames(team.short);

    players[team.personshort].teams.push({
        team: team.long,
        code: team.short,
        flag: team.icon,
        flagCode: team.code,
        pool: {...data.pools.find(poolTeam => poolTeam.team === team.short), pool: team.pool, colors: {...poolColors[team.pool]}},
        seed: team.rating,
        games,
        getNextGame() {
            return this?.games?.find((game) => {
                return DateTime.fromFormat(game.date, 'yyyy-MM-dd HH:mm') > DateTime.now()
            })
        }
    })
}

export const pools = {}
for (const team of data.pools) {
    if(!pools[team.pool]) {
        pools[team.pool] = {
            pool: team.pool,
            colors: poolColors[team.pool],
            teams: [],       
        }
    }

    pools[team.pool].teams.push({...team, player: Object.values(players).find(player => player.full === team.player)})
}

export const games = []
for (const game of data.games) {
    game.pool = {pool: game.pool, colors: poolColors[game.pool]}
    games.push(game);
}

export const playersSelect = Object.keys(players).map((key) => {
    return {
        value: key,
        label: players[key].full
    }
});

export const teams = {}
for(const player of Object.values(players)) {
    for(const team of player.teams) {
        teams[team.code] = {...team, player}
    }
}

console.log(pools, players, games, teams);