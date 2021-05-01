const textInput = document.querySelector('#text');
const enterButton = document.querySelector('#enter');
const list = document.querySelector('#list');

function createListItem() {
    let itemNode = document.createElement('li');
    let textNode = document.createTextNode(`${textInput.value}`);
    itemNode.appendChild(textNode);
    if (textInput.value === '') {
        return;
    }
    textInput.value = '';
    return list.appendChild(itemNode);
}

enterButton.addEventListener('click', createListItem);