function expand(elem, id) {
    let answer =  document.querySelector(`#${id}`);
    if (!answer.classList.contains("info-grow")) {
        elem.querySelector("img").src = "../assets/images/icon-minus.svg";
        answer.classList.add("info-grow");
    } else {
        answer.classList.remove("info-grow");
        elem.querySelector("img").src = "../assets/images/icon-plus.svg";
    }
}
