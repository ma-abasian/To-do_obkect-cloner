const addTxt = document.getElementById('add-text');
const addBtn = document.getElementById('add-button');
const searchTxt = document.getElementById('search-text');
const taskList = document.getElementById('form__list');


const emptyChecker = () => {
    if (taskList.children.length === 0) {
        let listEmptyMsg = document.createElement('div')
        listEmptyMsg.innerText = 'Your Task List Is Empty';
        listEmptyMsg.id = 'empty-massage';
        taskList.appendChild(listEmptyMsg);
    }
}

const createListItem = (itemValue) => {
    let item = document.createElement('li')
    item.className = 'form__item';
    item.innerHTML = `<input type='checkbox' class='form__check'>
                    <div class="item__title">
                        <span class='form__item-title' style="display: block;">${itemValue}</span>
                        <input type="text" name="" id="item-editor" placeholder="Edit Task">
                    </div>
                    <i class='fa-solid fa-pencil edit-btn' id='edit-btn' title='Edit Task'></i>
                    <i class='fa-regular fa-trash-can delete-btn' id='delete-btn' title='Delete Task'></i>`;

    return item;
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!addTxt.value) {
        return
    }
    if (document.getElementById('empty-massage')) {
        document.getElementById('empty-massage').remove();
    }

    taskList.appendChild(createListItem(addTxt.value));
    addTxt.value = '';
})

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'I' && e.target.id === 'delete-btn') {
        e.target.parentElement.remove();
        emptyChecker();
    }
    if (e.target.tagName === 'I' && e.target.id === 'edit-btn') {
        let editItem = e.target.parentElement.children[1].children;

        if (editItem[0].style.display === 'block') {

            editItem[0].style.display = 'none';
            editItem[1].style.display = 'block';
            editItem[1].focus();
            editItem[1].value = editItem[0].innerText;
        } else {
            editItem[0].style.display = 'block';
            editItem[1].style.display = 'none';
            editItem[0].innerText = editItem[1].value;
        }
    }
})

searchTxt.addEventListener("input", (e) => {
    Array.from(taskList.children).forEach(element => {
        if (document.getElementById('empty-massage')) {
            return
        }

        if (element.querySelector(".form__item-title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    })
})

emptyChecker();