const checkbox = document.querySelector('.checkbox');
const current_tasks = document.querySelectorAll(".close");
const taskBtn = document.querySelector('.task__btn');
const tasksList = document.querySelector('.tasks__list');
const tasksItem = document.querySelector('.tasks__item');
const input = document.querySelector('.input');
const form = document.querySelector('.form')
const clear = document.querySelector('.clear-btn')

if (localStorage.getItem('tasksHTML')) {
    tasksList.innerHTML = localStorage.getItem('tasksHTML');
}

form.addEventListener('submit', (addTask));

tasksList.addEventListener('click', (performDelete));

clear.addEventListener('click', (clearAll));



// Функции
function addTask(e) {
    e.preventDefault();
    const taskText = input.value;
    const taskHTML =
        `                    <li data-action="done" class="tasks__item">
        
                        <span class="tasks__text">${taskText}</span>
                            <button data-action="delete" class="close">
                                <img src="./img/icons8-крестик-78.png" alt="">
                            </button>
                    </li>
`
    tasksList.insertAdjacentHTML('beforeend', taskHTML);
    e.target.reset();
    input.focus();


    saveLS();
}

function performDelete(e) {
    const parentNode = e.target.closest('li')
    if (e.target.dataset.action === 'delete') {
        parentNode.remove();
    } else if (e.target.dataset.action === 'done') {
        parentNode.classList.toggle('checked');
    }

    saveLS();
}

function clearAll() {
    tasksList.innerHTML = '';
    
    saveLS();
}

function saveLS() {
    localStorage.setItem('tasksHTML', tasksList.innerHTML);
}




