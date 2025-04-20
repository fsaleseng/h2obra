import waterFootprintData from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');
    const typeSelect = document.getElementById('waterType');
    const itemSelect = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const unitSpan = document.getElementById('unit');
    const addItemBtn = document.getElementById('addItemBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const itemsTable = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];
    const emptyState = document.getElementById('emptyState');
    const itemsCount = document.getElementById('itemsCount');
    const modalOverlay = document.querySelector('.modal-overlay');
    const resultValue = document.querySelector('.result-value');
    const modalClose = document.querySelector('.modal-close');
    const exportBtn = document.getElementById('exportBtn');

    // State
    let selectedItems = [];
    let currentItemData = null;

    // Initialize Select2 on all selects
    function initializeSelects() {
        $('.select2-search').select2({
            placeholder: function() {
                return $(this).data('placeholder') || 'Selecione uma opção';
            },
            width: '100%',
            minimumResultsForSearch: Infinity
        });
    }

    // Main initialization function
    function init() {
        initializeSelects();
        loadCategories();
        setupEventListeners();
    }

    // Load categories into the first dropdown
    function loadCategories() {
        // Clear existing options
        categorySelect.innerHTML = '<option value="" disabled selected>Selecione a Categoria</option>';
        
        // Get unique categories
        const categories = [...new Set(waterFootprintData.map(item => item.categoria))];
        
        // Add categories to select
        categories.forEach(category => {
            const option = new Option(category, category);
            categorySelect.add(option);
        });
        
        // Enable Select2 on the select element
        $(categorySelect).trigger('change.select2');
    }

    function setupEventListeners() {
        // Category select change
        $(categorySelect).on('change', function() {
            updateSubcategories();
            // Reset downstream selects
            $(subcategorySelect).val(null).trigger('change');
            $(typeSelect).val(null).trigger('change');
            $(itemSelect).val(null).trigger('change');
            resetItemDetails();
        });

        // Subcategory select change
        $(subcategorySelect).on('change', function() {
            updateTypes();
            // Reset downstream selects
            $(typeSelect).val(null).trigger('change');
            $(itemSelect).val(null).trigger('change');
            resetItemDetails();
        });

        // Type select change
        $(typeSelect).on('change', function() {
            updateItems();
            // Reset downstream select
            $(itemSelect).val(null).trigger('change');
            resetItemDetails();
        });

        // Item select change
        $(itemSelect).on('change', updateItemDetails);

        // Add item button
        addItemBtn.addEventListener('click', addItem);

        // Calculate button
        calculateBtn.addEventListener('click', calculateFootprint);

        // Modal close button
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Export button
        if (exportBtn) {
            exportBtn.addEventListener('click', exportToCSV);
        }
        
        // Modal overlay click
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeModal();
            });
        }
    }

    function updateSubcategories() {
        const selectedCategory = categorySelect.value;
        subcategorySelect.innerHTML = '<option value="" disabled selected>Selecione a Subcategoria</option>';
        
        if (!selectedCategory) {
            subcategorySelect.disabled = true;
            typeSelect.disabled = true;
            itemSelect.disabled = true;
            return;
        }

        const subcategories = [...new Set(
            waterFootprintData
                .filter(item => item.categoria === selectedCategory)
                .map(item => item.subcategoria)
        )];

        subcategories.forEach(subcategory => {
            const option = new Option(subcategory, subcategory);
            subcategorySelect.add(option);
        });

        subcategorySelect.disabled = false;
        $(subcategorySelect).trigger('change.select2');
    }

    function updateTypes() {
        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        typeSelect.innerHTML = '<option value="" disabled selected>Selecione o Tipo</option>';
        
        if (!selectedSubcategory) {
            typeSelect.disabled = true;
            itemSelect.disabled = true;
            return;
        }

        const types = [...new Set(
            waterFootprintData
                .filter(item => 
                    item.categoria === selectedCategory && 
                    item.subcategoria === selectedSubcategory
                )
                .map(item => item.tipo)
        )];

        types.forEach(type => {
            const option = new Option(type, type);
            typeSelect.add(option);
        });

        typeSelect.disabled = false;
        $(typeSelect).trigger('change.select2');
    }

    function updateItems() {
        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        const selectedType = typeSelect.value;
        itemSelect.innerHTML = '<option value="" disabled selected>Selecione o Item</option>';
        
        if (!selectedType) {
            itemSelect.disabled = true;
            resetItemDetails();
            return;
        }

        const items = waterFootprintData.filter(item => 
            item.categoria === selectedCategory && 
            item.subcategoria === selectedSubcategory &&
            item.tipo === selectedType
        );

        items.forEach(item => {
            const option = new Option(item.item, item.id || item.item);
            option.dataset.descricao = item.descricao;
            option.dataset.unidade = item.unidade;
            option.dataset.consumo = item.consumoPorUnidade;
            itemSelect.add(option);
        });

        itemSelect.disabled = false;
        $(itemSelect).trigger('change.select2');
    }

    function updateItemDetails() {
        const selectedOption = itemSelect.options[itemSelect.selectedIndex];
        
        if (selectedOption && selectedOption.value) {
            unitSpan.textContent = selectedOption.dataset.unidade || 'un';
            currentItemData = {
                categoria: categorySelect.value,
                subcategoria: subcategorySelect.value,
                tipo: typeSelect.value,
                item: selectedOption.value,
                descricao: selectedOption.dataset.descricao,
                unidade: selectedOption.dataset.unidade,
                consumoPorUnidade: parseFloat(selectedOption.dataset.consumo) || 0
            };
        } else {
            resetItemDetails();
        }
    }

    function addItem() {
        if (!validateItemSelection()) return;

        const quantity = parseFloat(quantityInput.value);
        const totalConsumo = quantity * currentItemData.consumoPorUnidade;

        const existingItemIndex = selectedItems.findIndex(
            item => item.item === currentItemData.item && item.unidade === currentItemData.unidade
        );

        if (existingItemIndex >= 0) {
            selectedItems[existingItemIndex].quantidade += quantity;
            selectedItems[existingItemIndex].totalConsumo += totalConsumo;
        } else {
            selectedItems.push({
                ...currentItemData,
                quantidade: quantity,
                totalConsumo: totalConsumo
            });
        }

        updateItemsTable();
        resetFormForNextItem();
    }

    function validateItemSelection() {
        if (!currentItemData) {
            showAlert('Por favor, selecione um item válido.');
            return false;
        }

        if (!quantityInput.value || parseFloat(quantityInput.value) <= 0) {
            showAlert('Por favor, insira uma quantidade válida.');
            return false;
        }

        return true;
    }

    function updateItemsTable() {
        itemsTable.innerHTML = '';

        if (selectedItems.length === 0) {
            emptyState.style.display = 'flex';
            itemsCount.textContent = '(0)';
            calculateBtn.disabled = true;
            return;
        }

        emptyState.style.display = 'none';
        itemsCount.textContent = `(${selectedItems.length})`;
        calculateBtn.disabled = false;

        selectedItems.forEach(item => {
            const row = itemsTable.insertRow();
            
            const cellItem = row.insertCell(0);
            cellItem.textContent = item.item;
            
            const cellQty = row.insertCell(1);
            cellQty.textContent = `${item.quantidade} ${item.unidade}`;
            
            const cellConsumo = row.insertCell(2);
            cellConsumo.textContent = `${item.totalConsumo.toFixed(2)} L`;
        });
    }

    function calculateFootprint() {
        if (selectedItems.length === 0) {
            showAlert('Nenhum item para calcular. Adicione itens primeiro.');
            return;
        }
    
        // Calcula o total
        const totalConsumo = selectedItems.reduce((sum, item) => sum + item.totalConsumo, 0);
        
        // Prepara os dados para enviar via localStorage
        const reportData = {
            items: selectedItems,
            total: totalConsumo.toFixed(2),
            date: new Date().toLocaleDateString('pt-BR'),
            timestamp: new Date().getTime()
        };
    
        // Salva no localStorage
        localStorage.setItem('waterFootprintReport', JSON.stringify(reportData));
        
        // Redireciona para a página de resultados
        window.location.href = 'results.html';
    }

    function exportToCSV() {
        if (selectedItems.length === 0) {
            showAlert('Nenhum dado para exportar.');
            return;
        }

        let csv = 'Categoria,Subcategoria,Tipo,Item,Descrição,Quantidade,Unidade,Consumo (L)\n';
        
        selectedItems.forEach(item => {
            csv += `"${item.categoria}","${item.subcategoria}","${item.tipo}","${item.item}","${item.descricao}",${item.quantidade},"${item.unidade}",${item.totalConsumo.toFixed(2)}\n`;
        });

        const totalConsumo = selectedItems.reduce((sum, item) => sum + item.totalConsumo, 0);
        csv += `\n,,,,,,Total,${totalConsumo.toFixed(2)}`;

        downloadCSV(csv, 'pegada_hidrica.csv');
    }

    function downloadCSV(csv, filename) {
        const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function openModal() {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function resetFormForNextItem() {
        quantityInput.value = '';
        $(itemSelect).val(null).trigger('change');
        unitSpan.textContent = 'un';
        currentItemData = null;
    }

    function resetItemDetails() {
        unitSpan.textContent = 'un';
        currentItemData = null;
    }

    function showAlert(message) {
        alert(message);
    }

    // Start the application
    init();
});

