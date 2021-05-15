const textInput = document.querySelector('#text');
const enterButton = document.querySelector('#enter');

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete';
    deleteButton.appendChild(document.createTextNode('delete'));
    return deleteButton;
}

function createListItem() {
    const item = document.createElement('li');
    item.classList = 'listitem';
    return item;
}

function createCheckBox() {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    return checkbox;
}

function drawToDo() {
    if (textInput.value === '') {
        return;
    };
    const item = createListItem();
    const list = document.querySelector('#list');
    item.appendChild(createCheckBox());
    item.appendChild(document.createTextNode(`${textInput.value} `));
    item.appendChild(createDeleteButton());
    textInput.value = '';
    list.appendChild(item);
}

function deleteItem(element) {
    if (element.target.classList.contains('delete')) {
        element.target.parentElement.remove();
    }
}

function addStrikeThrough(element) {
    if (element.target.classList.contains('check')) {
        element.target.parentElement.classList.toggle('finished')
    }
}

function handleUlEvent(element) {
    deleteItem(element);
    addStrikeThrough(element);
}

enterButton.addEventListener('click', drawToDo);
textInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        drawToDo();
    }
});
list.addEventListener('click', handleUlEvent);