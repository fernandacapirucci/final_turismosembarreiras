document.addEventListener("DOMContentLoaded", function () {

    const elementos =
        document.querySelectorAll(
            ".mvv-card, .data-card"
        );


    if ("IntersectionObserver" in window) {

        const observador =
            new IntersectionObserver(
                function (entradas) {

                    entradas.forEach(
                        function (entrada) {

                            if (
                                entrada.isIntersecting
                            ) {

                                entrada.target.classList.add(
                                    "visivel"
                                );

                                observador.unobserve(
                                    entrada.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        elementos.forEach(
            function (elemento) {

                observador.observe(
                    elemento
                );

            }
        );

    } else {

        elementos.forEach(
            function (elemento) {

                elemento.classList.add(
                    "visivel"
                );

            }
        );

    }

    const linksMenu =
        document.querySelectorAll(
            "#menu a"
        );


    linksMenu.forEach(
        function (link) {

            link.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        link.click();

                    }

                }
            );

        }
    );

    const linksInternos =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    linksInternos.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const destino =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !destino ||
                        destino === "#"
                    ) {

                        return;

                    }


                    const elemento =
                        document.querySelector(
                            destino
                        );


                    if (elemento) {

                        event.preventDefault();

                        elemento.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );

    const botaoPacotes =
        document.querySelector(
            ".botao-pacotes"
        );


    if (botaoPacotes) {

        botaoPacotes.addEventListener(
            "click",
            function () {
                sessionStorage.removeItem(
                    "pesquisaTurismo"
                );

            }
        );

    }

    const botoes =
        document.querySelectorAll(
            "button"
        );


    botoes.forEach(
        function (botao) {

            botao.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        botao.click();

                    }

                }
            );

        }
    );

    const prefereMenosMovimento =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        prefereMenosMovimento.matches
    ) {

        document.documentElement.style.scrollBehavior =
            "auto";

    }

    console.log(
        "Sobre_nos.js carregado com sucesso!"
    );

});