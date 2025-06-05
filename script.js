document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('input');
    const addItemBtn = document.getElementById('button');
    const itemsContainer = document.querySelector('.items');

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
                    <img src="Assets/Lixeira.png" alt="Remover" class="remove-btn-img">
                </div>
            `;

            const itemCheckbox = itemDiv.querySelector('.item-checkbox');
            itemCheckbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    itemDiv.querySelector('.item-text').style.textDecoration = 'line-through';
                } else {
                    itemDiv.querySelector('.item-text').style.textDecoration = 'none';
                }
            });

            const removeButtonImg = itemDiv.querySelector('.remove-btn-img');
            removeButtonImg.addEventListener('click', () => {
                itemDiv.remove();
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
});