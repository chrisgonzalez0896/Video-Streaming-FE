const url = document.URL;
const BASE_URL = 'http://localhost:3000';

async function getVideoHTML() {
  try{
    const response = await fetch(`${BASE_URL}/video`, {
        method: "GET",
    });
} catch(err) {
    console.error(err);
}
}

await getVideoHTML();