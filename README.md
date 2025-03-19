<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styleInicio.css">
    <link rel="icon" href="icon.png">
</head>
<body>
    <div class="container">
        <h1>Login</h1>

        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" placeholder="Digite seu nome de usuário" required>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" placeholder="Digite sua senha" required>

        <button id="entrar">Entrar</button>

       
    </div>

    <script src="script.js"></script>
    <script>// Função para validar o login
        document.getElementById("entrar").addEventListener("click", function() {
            // Obtém os valores inseridos nos campos de usuário e senha
            const usuario = document.getElementById("usuario").value;
            const senha = document.getElementById("senha").value;
        
            // Credenciais corretas
            const usuarioValido = "Fxbh23U7}GB";
            const senhaValida = "COEMONITORIA";
        
            // Verifica se as credenciais estão corretas
            if (usuario === usuarioValido && senha === senhaValida) {
                // Redireciona para a tela "home.html"
                window.location.href = "apply.html";
            } else {
                // Exibe mensagem de erro caso as credenciais estejam incorretas
                alert("Usuário ou senha incorretos");
            }
        });
        </script>
</body>
</html>
