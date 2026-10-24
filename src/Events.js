export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', text);
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let isFirstClick = true;
    link.addEventListener('click', (e) => {
        if (isFirstClick) {
            e.preventDefault();
            link.textContent += ' ' + link.href;
            isFirstClick = false;
        }
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.textContent += '!';
        }
    });

    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
