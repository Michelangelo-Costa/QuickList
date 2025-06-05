document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('input');
    const addItemBtn = document.getElementById('button');
    const itemsContainer = document.querySelector('.items');
    const alertFooter = document.getElementById('alertFooter');
    const alertTextSpan = alertFooter.querySelector('.alert-text');
    const closeAlertBtn = alertFooter.querySelector('.close-alert-btn');

    function showAlert(message) {
        alertTextSpan.textContent = message;
        alertFooter.classList.remove('hidden');

        setTimeout(() => {
            alertFooter.classList.add('hidden');
        }, 3000);
    }

    function addItem() {
        const itemName = itemInput.value.trim();

        if (itemName !== '') {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            itemDiv.innerHTML = `
                <div class="left">
                    <input type="checkbox" class="item-checkbox">
                    <span class="item-text">${itemName}</span>
                </div>
                <div class="right">
                    <img src="Assets/icon delete.png" alt="Remover" class="remove-btn-img">
                </div>
            `;

            const itemCheckbox = itemDiv.querySelector('.item-checkbox');
            itemCheckbox.addEventListener('change', (event) => {
               
            });

            const removeButtonImg = itemDiv.querySelector('.remove-btn-img');
            removeButtonImg.addEventListener('click', () => {
                itemDiv.remove();
                showAlert('O item foi removido da lista'); 
            });

            itemsContainer.appendChild(itemDiv);
            itemInput.value = '';
            itemInput.focus();
        }
    }

    addItemBtn.addEventListener('click', addItem);

    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    
    closeAlertBtn.addEventListener('click', () => {
        alertFooter.classList.add('hidden');
    });
});
