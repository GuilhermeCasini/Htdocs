const menu = document.querySelectorAll("[data-menu]");
const Cli = document.querySelector("#mcli");
const Prod = document.querySelector("#mprod");
const Ped = document.querySelector("#mped");
const fechar = document.querySelectorAll("#x");
const Geral = document.querySelectorAll(".form");


const retornoTd = (menu) => {
    switch (menu) {
        case "mcli":
            return Cli;
        case "mprod":
            return Prod;
        case "mped":
            return Ped;
    }
};

menu.forEach((obj) => {
    obj.addEventListener("click", () => {
        fechoGeral();
        const menu = obj.dataset.menu;
        const modal = retornoTd(menu);
        modal.classList.add("form-on");
    });
});
const fechoGeral = () => {
    Geral.forEach((obj) => {
        obj.classList.remove("form-on");
    });
};
fechar.forEach((obj) => {
    obj.addEventListener("click", () => {
        fechoGeral();
    });
});



