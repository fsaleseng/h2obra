document.addEventListener('DOMContentLoaded', function() {
    const exportBtn = document.getElementById('exportPdfBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', generatePdfReport);
    }
});

async function generatePdfReport() {
    // Recupera os dados
    const reportData = JSON.parse(localStorage.getItem('waterFootprintReport'));
    
    // Inicializa o jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    // Configurações
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    const primaryColor = [40, 53, 147];
    const secondaryColor = [74, 20, 140];
    
    // 1. CAPA DO RELATÓRIO
    doc.addImage('assets/images/frame1.png', 'PNG', 
                pageWidth/2 - 30, 60, 60, 60);
    
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.text('RELATÓRIO DE PEGADA HÍDRICA', pageWidth/2, 130, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(100);
    doc.text('Sustentabilidade medida em cada gota', pageWidth/2, 140, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Gerado em: ${reportData.date}`, pageWidth/2, 160, { align: 'center' });
    doc.text(`Total calculado: ${reportData.total} litros`, pageWidth/2, 170, { align: 'center' });
    
    // 2. PÁGINA DE RESUMO
    doc.addPage();
    
    // Cabeçalho
    addReportHeader(doc, pageWidth, margin, 'Resumo do Relatório');
    
    // Destaques
    doc.setFontSize(14);
    doc.setTextColor(60);
    doc.text('Destaques:', margin, 40);
    
    const highlights = [
        `Total de pegada hídrica: ${reportData.total} litros`,
        `Número de itens calculados: ${reportData.items.length}`,
        `Média por item: ${(parseFloat(reportData.total)/reportData.items.length).toFixed(2)} litros`,
        `Data do cálculo: ${reportData.date}`
    ];
    
    highlights.forEach((text, i) => {
        doc.setFontSize(12);
        doc.setTextColor(80);
        doc.text(`• ${text}`, margin + 5, 50 + (i * 7));
    });
    
    // Gráfico de pizza
    const pieChartImg = await getChartImage('categoryDistributionChart');
    doc.addImage(pieChartImg, 'PNG', margin, 80, contentWidth, contentWidth/2);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Distribuição por Categoria', pageWidth/2, 75, { align: 'center' });
    
    // 3. PÁGINA DE DETALHES
    doc.addPage();
    addReportHeader(doc, pageWidth, margin, 'Detalhamento por Item');
    
    // Tabela
    const tableData = reportData.items.map(item => [
        item.categoria,
        item.item,
        `${item.quantidade} ${item.unidade}`,
        `${item.totalConsumo.toFixed(2)} L`,
        `${((item.totalConsumo/parseFloat(reportData.total))*100).toFixed(2)}%`
    ]);
    
    doc.autoTable({
        startY: 40,
        head: [['Categoria', 'Item', 'Quantidade', 'Consumo', '% Total']],
        body: tableData,
        margin: { top: 40 },
        styles: {
            fontSize: 9,
            cellPadding: 3,
            valign: 'middle',
            textColor: [50, 50, 50]
        },
        headStyles: {
            fillColor: primaryColor,
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [240, 240, 245]
        },
        columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 45 },
            2: { cellWidth: 20 },
            3: { cellWidth: 20 },
            4: { cellWidth: 15 }
        },
        didDrawPage: function(data) {
            // Footer
            doc.setFontSize(8);
            doc.setTextColor(150);
            doc.text(`Página ${doc.internal.getNumberOfPages()}`, 
                    pageWidth - margin, 
                    doc.internal.pageSize.getHeight() - 10, 
                    { align: 'right' });
        }
    });
    
    // 4. PÁGINA DE GRÁFICOS
    doc.addPage();
    addReportHeader(doc, pageWidth, margin, 'Análise Gráfica');
    
    // Gráfico de barras
    const barChartImg = await getChartImage('consumptionChart');
    doc.addImage(barChartImg, 'PNG', margin, 40, contentWidth, contentWidth/2.5);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Consumo de Água por Item', pageWidth/2, 35, { align: 'center' });
    
    // Adiciona rodapé em todas as páginas
    addPageFooters(doc, pageWidth, margin);
    
    // Salva o PDF
    doc.save(`Relatorio_Pegada_Hidrica_${reportData.timestamp}.pdf`);
}

// Função auxiliar para adicionar cabeçalho
function addReportHeader(doc, pageWidth, margin, title) {
    doc.setDrawColor(40, 53, 147);
    doc.setLineWidth(0.5);
    doc.line(margin, 20, pageWidth - margin, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(40, 53, 147);
    doc.text(title, margin, 15);
    
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text('H2OBRA - Calculadora de Pegada Hídrica', pageWidth - margin, 15, { align: 'right' });
}

// Função auxiliar para adicionar rodapés
function addPageFooters(doc, pageWidth, margin) {
    const pageCount = doc.internal.getNumberOfPages();
    
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Linha de rodapé
        doc.setDrawColor(200);
        doc.setLineWidth(0.2);
        doc.line(margin, doc.internal.pageSize.getHeight() - 15, 
                pageWidth - margin, doc.internal.pageSize.getHeight() - 15);
        
        // Texto do rodapé
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`Página ${i} de ${pageCount}`, 
                pageWidth - margin, 
                doc.internal.pageSize.getHeight() - 10, 
                { align: 'right' });
        
        doc.text('Relatório gerado automaticamente pelo sistema H2OBRA', 
                margin, 
                doc.internal.pageSize.getHeight() - 10);
    }
}

// Função para converter gráficos em imagens
async function getChartImage(chartId) {
    const canvas = document.getElementById(chartId);
    
    // Aumenta a resolução do canvas temporariamente
    const originalWidth = canvas.width;
    const originalHeight = canvas.height;
    
    canvas.width = originalWidth * 2;
    canvas.height = originalHeight * 2;
    
    const chart = Chart.getChart(chartId);
    if (chart) {
        chart.resize();
        chart.render();
    }
    
    // Converte para imagem
    const image = canvas.toDataURL('image/png', 1.0);
    
    // Restaura o tamanho original
    canvas.width = originalWidth;
    canvas.height = originalHeight;
    if (chart) {
        chart.resize();
        chart.render();
    }
    
    return image;
}