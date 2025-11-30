const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
console.log(btn);
console.log(joke);
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

const getJoke = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    joke.innerText = data?.joke;
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", () => {
  getJoke();
});
