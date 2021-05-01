const textInput = document.querySelector('#text');
const enterButton = document.querySelector('#enter');
const list = document.querySelector('#list');

function createListItem() {
    let itemNode = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('delete'));
    let textNode = document.createTextNode(`${textInput.value} `);
    itemNode.appendChild(textNode);
    itemNode.appendChild(deleteButton);
    if (textInput.value === '') {
        return;
    }
    textInput.value = '';
    return list.appendChild(itemNode);
}

function deleteItem() {
    deleteButton.parentElement.remove();
}

enterButton.addEventListener('click', createListItem);
textInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        createListItem();
    }
});