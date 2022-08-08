//Time complexity  || O(n) n = number of competitions/results
//Space complexity || O(k) k = number of teams

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  //initializing a variable to 0 to keep track of the winner (quick optimization)
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for (let i = 0; i < competitions.length; i++){
    let result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]){
      currentBestTeam = winningTeam;
    }
  }
    return currentBestTeam;
}

function updateScores(team, points, scores){
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}