const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Ben',
      lastName: 'Walker',
      age: 12
    },
    {
      firstName: 'Alex',
      lastName: 'Deamer',
      age: 13
    }
  ],

  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Sky',
      teamPoints: 32,
      opponentPoints: 26
    },
    {
      opponent: 'Earth',
      teamPoints: 22,
      opponentPoints: 25
    }
  ],
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }

    this._games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 98);
team.addGame('Cat', 90, 88);
team.addGame('Rocket', 80, 78);

console.log(team.players);
console.log(team.games);