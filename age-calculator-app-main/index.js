const btnSubmit = document.querySelector(".submit-btn");
// const dayFirstLabel = document.querySelector()
const currentDate = new Date();
console.log(currentDate);

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const dayInput = document.querySelector("#day-input").value;
  const monthInput = document.querySelector("#month-input").value;
  const yearInput = document.querySelector("#year-input").value;
  // console.log(dayInput + " " + monthInput + " " + yearInput);
  if (isValidDate(yearInput, monthInput, dayInput)) {
    const allSecondLabelForNoti = document.querySelectorAll(".error-noti").forEach((label) => {
      label.classList.add("hide");
    })
    const allFirstLabelForNoti = document.querySelectorAll("#first-label").forEach((label) => {
      label.classList.remove("error-noti-first-label");
    })
    const allInput = document.querySelectorAll("input").forEach((e) => {
      e.classList.remove("error-noti-input");
    })
    
    const inputDate = new Date(yearInput, monthInput - 1, dayInput);

    const ageInDays = (currentDate - inputDate) / 1000 / 60 / 60 / 24;
    const ageInYears = Math.floor(ageInDays / 30 / 12);
    const ageInMonths = Math.floor(ageInDays / 30) - ageInYears * 12;
    console.log(ageInDays);

    document.querySelector("#result-day").textContent = Math.floor(
      ageInDays - ageInMonths * 30 - ageInYears * 12 * 30
    );
    document.querySelector("#result-month").textContent =
      Math.floor(ageInMonths);
    document.querySelector("#result-year").textContent = Math.floor(ageInYears);
  } else {
    const allSecondLabelForNoti = document.querySelectorAll(".error-noti").forEach((label) => {
      label.classList.remove("hide");
    })
    const allFirstLabelForNoti = document.querySelectorAll("#first-label").forEach((label) => {
      label.classList.add("error-noti-first-label");
    })
    const allInput = document.querySelectorAll("input").forEach((e) => {
      e.classList.add("error-noti-input");
    })

    document.querySelector("#result-day").textContent = "- -";
    document.querySelector("#result-month").textContent = "- -";
    document.querySelector("#result-year").textContent = "- -";
    alert("Invalid date input. Please check the entered day, month, and year.");


  }
});

function isValidDate(year, month, day) {
  const maxDay = new Date(year, month, 0).getDate();
  console.log(maxDay);
  return day >= 1 && day <= maxDay;
}
