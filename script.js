const container = document.getElementById("container");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");

signUp.addEventListener("click", () => {
  container.classList.add("active");
});
signIn.addEventListener("click", () => {
  container.classList.remove("active");
});
