<html lang="pt">
<head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <link rel="icon" href="icon.png">
</head>
<body>
    <div class="container">
        <h4>Calculadora de Preços</h4>
        
        <!-- Seleção do Módulo -->
        <label for="modulo">Módulo:</label>
        <select id="modulo">
            <option value="0">Nenhum</option>
            <option value="3DS">3DS</option>
            <option value="Advice Stand In">Advice Stand In</option>
            <option value="Autorização">Autorização</option>
            <option value="Autorizado Pendente de Liquidação">Autorizado Pendente de Liquidação</option>
            <option value="Fluxo de Disputa">Fluxo de Disputa</option>
            <option value="Fraude">Fraude</option>
            <option value="HUB QR Code">HUB QR Code</option>
            <option value="Liquidação">Liquidação</option>
            <option value="Rejeições">Rejeições</option>
            <option value="Stand In">Stand In</option>
        </select>

        <!-- Seleção do Tipo e Tier combinados -->
        <label for="tipoTier">Tipo e Tier:</label>
        <select id="tipoTier">
            <option value="Credenciador Tier 1">Credenciador Tier 1</option>
            <option value="Credenciador Tier 2">Credenciador Tier 2</option>
            <option value="Credenciador Tier 3">Credenciador Tier 3</option>
            <option value="Credenciador Tier 4">Credenciador Tier 4</option>
            <option value="Credenciador Tier 5">Credenciador Tier 5</option>
            <option value="Credenciador Tier 6">Credenciador Tier 6</option>
            <option value="Credenciador Tier 7">Credenciador Tier 7</option>
            <option value="Emissor Tier 1">Emissor Tier 1</option>
            <option value="Emissor Tier 2">Emissor Tier 2</option>
            <option value="Emissor Tier 3">Emissor Tier 3</option>
            <option value="Emissor Tier 4">Emissor Tier 4</option>
            <option value="Emissor Tier 5">Emissor Tier 5</option>
            <option value="Emissor Tier 6">Emissor Tier 6</option>
            <option value="Emissor Tier 7">Emissor Tier 7</option>
        </select>

        <label for="inteligenciaArtificial">Adicionar Inteligência Artificial:</label>
        <select id="inteligenciaArtificial">
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
        </select>
        
        <!-- Número de Customizações -->
        <label for="numCustomizacoes">Número de Customizações:</label>
        <select id="numCustomizacoes">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2-3">2-3</option>
            <option value="4-6">4-6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
        </select>
        
        <!-- Explicação sobre complexidade automática -->
<!--        <p>A complexidade será definida automaticamente com base no número de customizações.</p>-->
       <!-- Quantidade de Usuários -->
<label for="numUsuarios">Quantidade de Usuários:</label>
<select id="numUsuarios">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
</select>

<!-- Quantidade de Serviços Financeiros Contratados -->
<label for="numServicos" id="numServicos"></label>


        <!-- Seleção de Datas Especiais -->
        <label for="dataEspecial">Datas Especiais:</label>
        <select id="dataEspecial">
            <option value="0">Nenhuma</option>
            <option value="diaDasMaes">Semana do Dia das Mães</option>
            <option value="diaDasCriancas">Semana do Dia das Crianças</option>
            <option value="blackFriday">Semana da Black Friday</option>
            <option value="natal">Semana do Natal</option>
        </select>

        <!-- Seleção do Sistema de Fidelidade -->
        <label for="fidelidade">Sistema de Fidelidade (em meses):</label>
        <select id="fidelidade">
            <option value="0">Nenhum</option>
            <option value="6">06 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
            <option value="36">36 meses</option>
        </select>

        <!-- Botões separados -->
        <button id="calcularPreco">Calcular Preço</button>
        <button id="gerarPDF">Gerar PDF</button>

        <!-- Exibição do preço final -->
        <h2 id="precoFinal">Preço Final: R$ 0,00</h2>
    </div>

    <script src="script.js"></script>
</body>
</html>
