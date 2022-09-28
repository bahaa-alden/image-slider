let img = document.querySelectorAll("img");
let index = 0;
let slidenum = document.querySelector(".slide-num");
img[index].style.display = "block";
let next = document.querySelector(".next");
let previous = document.querySelector(".pre");
let nums = document.querySelectorAll(".num span");
let i = 0;
nums.forEach((e) => {
  e.setAttribute("data-index", i++);
  e.setAttribute("onclick", "change(this)");
});

next.onclick = () => {
  previous.classList.remove("stop");
  nums.forEach((element) => {
    element.classList.remove("active");
  });
  img.forEach((e) => {
    e.classList.remove("active");
  });
  index++;
  img[index].classList.add("active");
  nums[index].classList.add("active");
  slidenum.innerHTML = `Slide #${index + 1} of ${img.length}`;
  if (index === img.length - 1) {
    next.classList.add("stop");
  }
};
previous.onclick = () => {
  next.classList.remove("stop");
  nums.forEach((element) => {
    element.classList.remove("active");
  });
  img.forEach((e) => {
    e.classList.remove("active");
  });
  index--;
  img[index].classList.add("active");
  nums[index].classList.add("active");
  slidenum.innerHTML = `Slide #${index + 1} of ${img.length}`;

  if (index === 0) {
    previous.classList.add("stop");
  }
};
function change(element) {
  nums.forEach((element) => {
    element.classList.remove("active");
  });
  img.forEach((e) => {
    e.classList.remove("active");
  });
  index = +element.dataset.index;
  img[index].classList.add("active");
  element.classList.add("active");
  slidenum.innerHTML = `Slide #${index + 1} of ${img.length}`;
  if (index === 0) {
    previous.classList.add("stop");
    next.classList.remove("stop");
  } else if (index === img.length - 1) {
    next.classList.add("stop");
    previous.classList.remove("stop");
  } else {
    next.classList.remove("stop");
    previous.classList.remove("stop");
  }
}
