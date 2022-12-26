export async function fetchImages(chara) {
    const response = await fetch(
        `https://www.amiiboapi.com/api/amiibo/?name=${chara}`
    );
    const data = await response.json();
    return data.amiibo;
}