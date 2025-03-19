document.getElementById("calcularPreco").addEventListener("click", function () {
    const modulo = document.getElementById("modulo").value;
    const tipoTier = document.getElementById("tipoTier").value.split(" ");
    const tipo = tipoTier[0]; // Credenciador ou Emissor

    // Corrigido: Verifica se o tier está corretamente extraído como número
    const tier = parseInt(tipoTier[1]) || 1; // Se o valor não for um número válido, atribui 1 por padrão

    const inteligenciaArtificial = document.getElementById("inteligenciaArtificial").value;
    const numCustomizacoes = document.getElementById("numCustomizacoes").value;
    const numUsuarios = parseInt(document.getElementById("numUsuarios").value) || 0; // Garantir valor padrão 0
    const dataEspecial = document.getElementById("dataEspecial").value;
    
    // Tabela de preços base
    const precosBase = {
        "Autorização": [7000, 14000, 21000, 28000, 35000, 42000, 49000],
        "Liquidação": [7000, 14000, 21000, 28000, 35000, 42000, 49000],
        "Fluxo de Disputa": [4000, 6000, 8000, 10000, 12000, 14000, 16000],
        "Autorizado Pendente de Liquidação": [4000, 6000, 8000, 10000, 12000, 14000, 16000],
        "Rejeições": [5000, 7000, 9000, 11000, 13000, 15000, 17000],
        "Fraude": [5000, 8000, 11000, 14000, 17000, 20000, 23000],
        "3DS": [1500, 3000, 4500, 6000, 7500, 9000, 10500],
        "Advice Stand In": [1500, 3000, 4500, 6000, 7500, 9000, 10500],
        "Stand In": [1500, 3000, 4500, 6000, 7500, 9000, 10500],
        "HUB QR Code": [1500, 3000, 4500, 6000, 7500, 9000, 10500]
    };

    const descontosServicos = { 1: 0.05, 2: 0.07, 3: 0.10, 4: 0.15 };
    const descontosFidelidade = { 6: 0.03, 12: 0.10, 24: 0.20, 36: 0.25 };
    const descontoDatasEspeciais = 0.35;
    const precosIA = [500, 750, 800, 1000, 1250, 1500, 1800];
    const valoresCustomizacao = {
        "Credenciador": [100, 150, 200, 250, 300, 350, 400],
        "Emissor": [200, 250, 300, 350, 400, 500, 550]
    };

    const fatoresMultiplicativos = {
        "1": 1.25, "2-3": 1.5, "4-6": 1.75, "7": 2, "8": 2.25,
        "9": 2.5, "10": 2.75, "11": 3, "12": 3.25, "13": 3.5,
        "14": 3.75, "15": 4, "16": 4.25, "17": 4.5, "18": 4.75,
        "19": 5, "20": 5.25
    };

    if (!precosBase[modulo]) {
        alert("Módulo não encontrado");
        return;
    }

    // Verifica se o tier é um número válido
    if (tier < 1 || tier > 7) {
        alert("Por favor, selecione um Tier válido.");
        return;
    }

    let precoBase = precosBase[modulo][tier - 1] || 0; // Evitar erro se o preço não for encontrado
    let precoFinal = precoBase;

    // Adiciona preço para Inteligência Artificial, se selecionado
    if (inteligenciaArtificial === "sim") {
        precoFinal += precosIA[tier - 1] || 0; // Evita erro se o preço de IA não estiver definido
    }

    // Preço baseado na quantidade de usuários
    if (numUsuarios > 0) {
        precoFinal += (numUsuarios <= 5) ? 700 : 700 + (numUsuarios - 5) * 100;
    }

    // Adiciona o preço das customizações
    if (numCustomizacoes !== "0" && valoresCustomizacao[tipo]) {
        let valorCustomizacao = valoresCustomizacao[tipo][tier - 1] || 0;
        let fatorMultiplicativo = fatoresMultiplicativos[numCustomizacoes] || 1;
        precoFinal += valorCustomizacao * fatorMultiplicativo;
    }

    // Aplica o desconto para datas especiais
    let descontoTotal = 0;
    if (dataEspecial !== "0") descontoTotal += descontoDatasEspeciais;

    const precoComDesconto = precoFinal - (precoFinal * descontoTotal);

    // Exibe os resultados na tabela com valores formatados corretamente
    document.getElementById("valor6").textContent = `R$ ${(precoComDesconto - (precoComDesconto * descontosFidelidade[6] || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("valor12").textContent = `R$ ${(precoComDesconto - (precoComDesconto * descontosFidelidade[12] || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("valor24").textContent = `R$ ${(precoComDesconto - (precoComDesconto * descontosFidelidade[24] || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("valor36").textContent = `R$ ${(precoComDesconto - (precoComDesconto * descontosFidelidade[36] || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

});

// Gerar PDF
document.getElementById("gerarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Relatório de Preços", 80, 30);

    // Capturar valores dos campos
    let modulo = document.getElementById("modulo").value;
    let tipoTier = document.getElementById("tipoTier").value;
    let inteligenciaArtificial = document.getElementById("inteligenciaArtificial").value;
    let numUsuarios = document.getElementById("numUsuarios").value;
    let numCustomizacoes = document.getElementById("numCustomizacoes").value;
    let dataEspecial = document.getElementById("dataEspecial").value;

    // Adicionar conteúdo ao PDF
    doc.setFontSize(12);
    doc.text(`Módulo Selecionado: ${modulo}`, 10, 50);
    doc.text(`Tipo e Tier: ${tipoTier}`, 10, 60);
    doc.text(`Inteligência Artificial: ${inteligenciaArtificial}`, 10, 70);
    doc.text(`Número de Customizações: ${numCustomizacoes}`, 10, 80);
    doc.text(`Quantidade de Usuários: ${numUsuarios}`, 10, 90);
    doc.text(`Datas Especiais: ${dataEspecial}`, 10, 100);
    // Dados da tabela
    const valores = [
        ["6 meses", document.getElementById("valor6").textContent],
        ["12 meses", document.getElementById("valor12").textContent],
        ["24 meses", document.getElementById("valor24").textContent],
        ["36 meses", document.getElementById("valor36").textContent]
    ];

    // Gerar o PDF
    doc.save("calculo_preco.pdf");
});
