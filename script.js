document.addEventListener("DOMContentLoaded", function() {
    var copyButton = document.getElementById("copy-button");
    var pixKey = document.getElementById("pix-key").textContent.trim();
    var message = document.getElementById("message");

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(pixKey).then(function() {
            message.classList.remove("hidden");
            setTimeout(function() {
                message.classList.add("hidden");
            }, 3000); // Esconde a mensagem após 3 segundos
        }).catch(function(error) {
            console.error("Erro ao copiar texto: ", error);
        });
    });
});
