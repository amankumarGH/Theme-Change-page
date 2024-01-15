let btn = document.querySelector(".btn");
let con = document.querySelector(".container");

btn.addEventListener("click", () => {
  const ico = document.querySelector(".fa-solid");
  ico.classList.toggle("blacks");
  if (ico.classList.contains("blacks")) {
    ico.classList.add("fa-moon");
    con.style.backgroundColor = "black";
    document.querySelector(".content").style.backgroundColor = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  } else {
    ico.classList.remove("fa-moon");
    con.style.backgroundColor = "white";
    document.querySelector(".content").style.backgroundColor =
      "rgb(189, 28, 28)";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
});
