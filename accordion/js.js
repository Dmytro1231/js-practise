let acc = document.getElementsByClassName("accordion");
let i;

for(i = 0;i<acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
    }
}