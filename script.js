document.addEventListener("DOMContentLoaded", () => {
    // Elementos do botão e dropdown "Entrar"
    const loginButton = document.getElementById("login-button");
    const loginDropdown = document.getElementById("login-dropdown");

    // Elementos do botão e dropdown "Registar"
    const registerButton = document.getElementById("register-button");
    const registerDropdown = document.getElementById("register-dropdown");

    // Elementos da mensagem de boas-vindas e logout
    const authButtons = document.getElementById("auth-buttons"); // Contém os botões "Entrar" e "Registar"
    const welcomeMessage = document.getElementById("welcome-message");
    const userNameSpan = document.getElementById("user-name"); // Nome do usuário para a saudação
    const logoutButton = document.getElementById("logout-button");

    // Simula um usuário logado
    const user = {
        name: "Afonso" // Substitua por uma lógica real de autenticação
    };

    // Alterna a visibilidade do dropdown "Entrar"
    loginButton.addEventListener("click", (event) => {
        const isVisible = loginDropdown.style.display === "block";
        loginDropdown.style.display = isVisible ? "none" : "block";

        // Fecha o dropdown de "Registar" se estiver aberto
        registerDropdown.style.display = "none";

        // Impede propagação do clique
        event.stopPropagation();
    });

    // Alterna a visibilidade do dropdown "Registar"
    registerButton.addEventListener("click", (event) => {
        const isVisible = registerDropdown.style.display === "block";
        registerDropdown.style.display = isVisible ? "none" : "block";

        // Fecha o dropdown de "Entrar" se estiver aberto
        loginDropdown.style.display = "none";

        // Impede propagação do clique
        event.stopPropagation();
    });

    // Fecha ambos os dropdowns ao clicar fora
    document.addEventListener("click", () => {
        loginDropdown.style.display = "none";
        registerDropdown.style.display = "none";
    });

    // Impede que cliques dentro do dropdown fechem o menu
    loginDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    registerDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Função para realizar login
    function login() {
        // Define o nome do utente na mensagem de boas-vindas
        userNameSpan.textContent = user.name;

        // Esconde os botões de "Entrar" e "Registar"
        authButtons.style.display = "none";

        // Exibe a mensagem de boas-vindas e o botão de logout
        welcomeMessage.style.display = "flex";
    }

    // Função para realizar logout
    function logout() {
        // Mostra os botões de "Entrar" e "Registar"
        authButtons.style.display = "flex";

        // Esconde a mensagem de boas-vindas e o botão de logout
        welcomeMessage.style.display = "none";
    }

    // Simulação do login ao carregar a página (substitua com a lógica real de autenticação)
    login();

    // Adiciona funcionalidade ao botão de logout
    logoutButton.addEventListener("click", logout);
});
