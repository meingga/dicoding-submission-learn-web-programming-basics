let card = document.querySelectorAll('.card');

for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "porsche") {
            event.target.setAttribute("src", "assets/img/10-car-new.png");
            return;
        } else if (event.target.id === "mclaren") {
            event.target.setAttribute("src", "assets/img/11-car-new.png");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "porsche") {
            event.target.setAttribute("src", "assets/img/10-car.jpg");
            return;
        }
        if (event.target.id === "mclaren") {
            event.target.setAttribute("src", "assets/img/11-car.jpg");
            return;
        }
    });
}