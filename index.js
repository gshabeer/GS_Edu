let quizs = document.querySelectorAll(".quiz");

quizs.forEach((quiz) => {
  // plus/minus btn
  let plusBtn = quiz.querySelector(".plus");
  let minusBtn = quiz.querySelector(".minus");

  quiz.addEventListener("click", () => {
    // To remove previous opened one
    quizs.forEach((item) => {
      let prevPlusBtn = item.querySelector(".plus");
      let prevMinusBtn = item.querySelector(".minus");
      if (item !== quiz) {
        item.classList.remove("appended");

        if (!item.classList.contains("appended")) {
          prevPlusBtn.classList.remove("hidden");
          prevMinusBtn.classList.add("hidden");
        } else {
          prevPlusBtn.classList.add("hidden");
          prevMinusBtn.classList.remove("hidden");
        }
      }
    });

    quiz.classList.toggle("appended");

    if (!quiz.classList.contains("appended")) {
      plusBtn.classList.remove("hidden");
      minusBtn.classList.add("hidden");
    } else {
      plusBtn.classList.add("hidden");
      minusBtn.classList.remove("hidden");
    }
  });
});

let footerDate = document.getElementById("footer");
let d = new Date();
footerDate.innerText = d.getFullYear();
