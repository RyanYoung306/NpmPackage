import './dropDown.css';

export function createDropDown(options, onSelect) {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const button = document.createElement('button');
    button.textContent = 'Select an option';
    dropdown.appendChild(button);

    const list = document.createElement('ul');
    list.style.display = 'none';
    dropdown.appendChild(list);

    options.forEach(option => {
        const listItem = document.createElement('li');
        listItem.textContent = option.label;
        listItem.addEventListener('click', () => {
            button.textContent = option.label;
            list.style.display = 'none';
            onSelect(option);
        });
        list.appendChild(listItem);
    });

    button.addEventListener('click', () => {
        list.style.display = list.style.display === 'none' ? 'block' : 'none';
    });

    return dropdown;
}