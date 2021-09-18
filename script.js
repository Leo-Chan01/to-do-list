const inputs = document.getElementById('todos');
const btn = document.getElementById('btn');
const mainContent = document.getElementById('content');

btn.addEventListener('click', addTodos);

function addTodos(){
    var div = document.createElement('div');
    div.classList.add('listContainer');
    
    var span = document.createElement('span');
    span.innerText = inputs.value;

    var edit = document.createElement('button');
    edit.classList.add('btns')
    edit.innerText = 'EDIT';

    var del  = document.createElement('button');
    del.classList.add('btns')
    del.innerText = 'DELETE';
    
    

    div.appendChild(span);
    div.appendChild(edit)
    div.appendChild(del);
    mainContent.appendChild(div);

    inputs.value = '';

    del.addEventListener('click', deleteList);
    edit.addEventListener('click', editLIst)


    function deleteList(e){
        div.remove()
    }

    function editLIst(e){
        edit.disabled = true;
        del.disabled = true;

        var textArea = document.createElement('textarea');
        textArea.classList.add('text')
        textArea.value = span.innerText;

        var save = document.createElement('button');
        save.innerText = 'SAVE';
        textArea.classList.add('save')

        div.appendChild(textArea);
        div.appendChild(save);

        save.addEventListener('click', ()=>{
            span.innerText = textArea.value;

            edit.disabled = false;
            del.disabled = false;

            textArea.remove();
            save.remove();
        })
    }
}