
export default function LeaderBoardTableRow({ battles }:any) {

  const scores: { [k: string]: number } = {};
  const ptbs: { [k: string]: number } = {};

  battles?.map((match:any) => { // puntos
    const { freestyler_1, freestyler_2, score_freestyler_1, score_freestyler_2, winner_replica} = match

    if (winner_replica.aka === "Sin Replica") {
      if (!scores[freestyler_1.aka]) {
        scores[freestyler_1.aka] = 0
      }

      if (!scores[freestyler_2.aka]) {
        scores[freestyler_2.aka] = 0
      }

      if (score_freestyler_1 > score_freestyler_2) {
        scores[freestyler_1.aka] += 3;
        scores[freestyler_2.aka] += 0;
      } else if (score_freestyler_2 > score_freestyler_1) {
        scores[freestyler_2.aka] += 3;
        scores[freestyler_1.aka] += 0;
      }
    }

    if (winner_replica.aka === freestyler_1.aka) {
      if (!scores[freestyler_1.aka]) {
        scores[freestyler_1.aka] = 0

      }

      if (!scores[freestyler_2.aka]) {
        scores[freestyler_2.aka] = 0

      }

      scores[freestyler_1.aka] += 2;
      scores[freestyler_2.aka] += 1;
    }

    if (winner_replica.aka === freestyler_2.aka) {
      if (!scores[freestyler_1.aka]) {
        scores[freestyler_1.aka] = 0

      }

      if (!scores[freestyler_2.aka]) {
        scores[freestyler_2.aka] = 0

      }

      scores[freestyler_2.aka] += 2;
      scores[freestyler_1.aka] += 1;
    }
  })

  battles.map((match:any) => { // ptb
    const { freestyler_1, freestyler_2, score_freestyler_1, score_freestyler_2} = match

        if (!ptbs[freestyler_1.aka]) {
          ptbs[freestyler_1.aka] = 0
        }

        if (!ptbs[freestyler_2.aka]) {
          ptbs[freestyler_2.aka] = 0
        } 

        ptbs[freestyler_1.aka] += score_freestyler_1
        ptbs[freestyler_2.aka] += score_freestyler_2
    })

    let scoresArr = Object.entries(scores).map(function(k) { return {name:k[0], puntos:k[1]}  });
    let ptbsArr = Object.entries(ptbs).map(function(k) { return {name:k[0], ptb:k[1]}  });

    const leaderBoard = scoresArr.map((scores) => ({
      ...scores,
      ptb: ptbsArr.find((ptbs) => ptbs.name === scores.name)?. ptb || 0
    }));
    
    const leaderBoardSorted = leaderBoard.sort((a, b) => {
      if (a.puntos !== b.puntos) {
        return b.puntos - a.puntos; // Orden descendente por puntos
      } else {
        return b.ptb - a.ptb; // Orden descendente por ptb si los puntos son iguales
      }
    });


  return (
    <>
      {leaderBoardSorted.map((item, index) => {
        return <tr className="h-12 text-center" key={index}>
          <td  className="border-b border-violet-300">{index+1}</td>
          <td className="border-b border-violet-300 text-violet-700 font-medium">{item.name}</td>
          <td className="border-b border-violet-300">{item.puntos}</td>
          <td className="border-b border-violet-300">{item.ptb}</td>
        </tr>
        
      })}
    </>

  )
}