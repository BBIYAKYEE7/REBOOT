// 스크롤 이벤트 핸들러
window.addEventListener('scroll', (e) => {
    if (document.getElementsByTagName("body")[0].getAttribute("data-scroll") == "false") {
        window.scrollTo(0, 0);
    }

    let windowScrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let currentPosition = (windowScrollY / windowHeight).toFixed(2);
});

// 키 다운 이벤트 핸들러
window.addEventListener("keydown", (text) => {
    let t = text.key.toUpperCase();
    let k = document.querySelector(`#${t}`);
    if (k) {
        k.classList.add("key-pressed");
    }
});

// 키 업 이벤트 핸들러
window.addEventListener("keyup", (text) => {
    let t = text.key.toUpperCase();
    let k = document.querySelector(`#${t}`);
    if (k) {
        k.classList.remove("key-pressed");
    }
});