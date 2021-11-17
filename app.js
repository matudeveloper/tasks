const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector('.collection');
const delTasksBtn = document.querySelector('#del-tasks');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
delTasksBtn.addEventListener('click', deleteTasks);

function deleteTasks(e)
{
    while(tasksList.firstChild)
    {
        tasksList.removeChild(tasksList.firstChild)
    }
}

function deleteTask(e)
{
    if (e.target.textContent == 'X')
    {
        if (confirm("do you want to delete this task ?")) {
            e.target.parentElement.remove();
        }
    }
}

function addTask(e)
{
    const task = taskInput.value;

    const li = document.createElement('li');

    li.classname = "collection-item";

    const text = document.createTextNode('task');

    li.appendChild(text);

    const link = document.createElement('a');

    link.setAttribute( 'href', '#');

    link.className = 'secondary-content';

    link.appendChild(document.createTextNode('X'));

    li.appendChild(link);

    const ul = document.querySelector('.collection');

    ul.appendChild(li);

    taskInput.value = '';

    e.preventDefault();

}