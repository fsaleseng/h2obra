document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do localStorage
    const reportData = JSON.parse(localStorage.getItem('waterFootprintReport'));
    
    if (!reportData || !reportData.items || reportData.items.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    // Atualiza os elementos da página
    document.getElementById('totalWaterFootprint').textContent = `${reportData.total} L`;
    document.getElementById('reportDate').textContent = `Gerado em: ${reportData.date}`;
    document.getElementById('itemsCalculated').textContent = reportData.items.length;
    
    // Calcula média por item
    const average = (parseFloat(reportData.total)) / reportData.items.length;
    document.getElementById('averagePerItem').textContent = `${average.toFixed(2)} L`;

    // Preenche a tabela detalhada
    const tableBody = document.querySelector('#detailedTable tbody');
    reportData.items.forEach(item => {
        const percentage = ((item.totalConsumo / parseFloat(reportData.total)) * 100).toFixed(2);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.categoria}</td>
            <td>${item.item}</td>
            <td>${item.quantidade} ${item.unidade}</td>
            <td>${item.totalConsumo.toFixed(2)} L</td>
            <td>${percentage}%</td>
        `;
        tableBody.appendChild(row);
    });

    // Cria os gráficos
    createCharts(reportData);
});

function createCharts(reportData) {
    // Gráfico 1: Consumo por item
    const ctx1 = document.getElementById('consumptionChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: reportData.items.map(item => item.item),
            datasets: [{
                label: 'Consumo de Água (L)',
                data: reportData.items.map(item => item.totalConsumo),
                backgroundColor: '#36a2eb',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Consumo de Água por Item'
                }
            }
        }
    });

    // Gráfico 2: Distribuição por categoria
    const categories = [...new Set(reportData.items.map(item => item.categoria))];
    const categorySums = categories.map(cat => {
        return reportData.items
            .filter(item => item.categoria === cat)
            .reduce((sum, item) => sum + item.totalConsumo, 0);
    });

    const ctx2 = document.getElementById('categoryDistributionChart').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: categorySums,
                backgroundColor: [
                    '#36a2eb',
                    '#ff6384',
                    '#4bc0c0',
                    '#ffcd56',
                    '#9966ff'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição por Categoria'
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });
}