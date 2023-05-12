import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://developer.riotgames.com/apis",
});

export async function getRotationChampions() {
  await baseUrl({
    url: "/lol/platform/v3/champion-rotations",
    method: "get",
  }).then((res) => {
    return res.data;
  });
}
