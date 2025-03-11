document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os itens da FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector("#subtitle");
        const plusIcon = item.querySelector("#mais");
        const minusIcon = item.querySelector("#minus");
        const answer = item.querySelector("#text");

        function toggleFAQ() {
            const isOpen = answer.style.maxHeight !== "0px";

            // Fecha todas as outras respostas antes de abrir a clicada
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.querySelector("#text").style.maxHeight = "0";
                    otherItem.querySelector("#mais").style.display = "inline-flex";
                    otherItem.querySelector("#minus").style.display = "none";
                }
            });

            // Alterna entre abrir e fechar a resposta
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expande a resposta
                plusIcon.style.display = "none"; // Esconde o "+"
                minusIcon.style.display = "inline-flex"; // Mostra o "-"
            } else {
                answer.style.maxHeight = "0"; // Fecha a resposta
                plusIcon.style.display = "inline-flex"; // Mostra o "+"
                minusIcon.style.display = "none"; // Esconde o "-"
            }
        };
        [plusIcon, question, minusIcon].forEach((element) => {
            element.addEventListener("click", toggleFAQ)
        });
    });
});
