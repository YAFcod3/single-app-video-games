export async function getGames() {
  const res = await fetch(
    `${process.env.API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url`
  );

  if (!res.ok) {
    throw new Error("something  went wrong");
  }
  const { data } = await res.json();
  return data;
}



export function getCoverImage({attributes}){

  const {url}=attributes.cover.data.attributes

  return `${process.env.STRAPI_URL}${url}`

}