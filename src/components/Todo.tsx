import { useQuery } from "react-query";
import { getRotationChampions } from "../logics/getRotationChampions";
// import { championInfos } from "../types/champions";

export default function Todos() {
  const { status, data, error } = useQuery<any, Error>(
    ["todos"],
    () => getRotationChampions
  );

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return <div>success</div>;
  //   <ul>
  //     {data.map((champion: any) => (
  //       <li key={champion.freeChampionIds}>
  //         {champion.freeChampionsForNewPlayer}
  //       </li>
  //     ))}
  //   </ul>
  // );
}
