const textInput = document.querySelector('#text');
const enterButton = document.querySelector('#enter');
const list = document.querySelector('#list');
const deleteButton = '';

function createListItem() {
    let itemNode = document.createElement('li');
    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'delete';
    let textNode = document.createTextNode(`${textInput.value}`);
    itemNode.appendChild(textNode);
    itemNode.appendChild(deleteButton);
    if (textInput.value === '') {
        return;
    }
    textInput.value = '';
    return list.appendChild(itemNode);
}

function deleteItem() {

}

enterButton.addEventListener('click', createListItem);
textInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        createListItem();
    }
});