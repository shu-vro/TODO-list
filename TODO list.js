// Get elements...
var input = document.getElementById('input');
var addButton = document.getElementById('addButton');
var container = document.getElementById('container');
var refresh = document.querySelector('.refresh');

// Add a class named item...
class item {
    // Add a constructor...
    constructor(itemName) {
        this.createDiv(itemName);
    }
    // Create a division and make changes into it...
    createDiv(itemName) {
        var item = document.createElement('div');
        item.classList.add('item');

        // The time shower...
        var time = new Date();
        var now = time.toLocaleTimeString();
        var pushTime = document.createElement('span');
        pushTime.classList.add('time');
        pushTime.textContent = now;
        pushTime.setAttribute(
            'title', 'Time when created'
        );

        // The checkbox field...
        var done = document.createElement('input');
        done.classList.add('check');
        done.type = 'checkbox';
        done.addEventListener('click', function () {
            line.classList.toggle('through');
        })

        // The line when the checkbox will be checked...
        var line = document.createElement('span');
        line.classList.add('line');

        // The routine field (Where the TODO will be saved.)
        var routine = document.createElement('input');
        routine.classList.add('routine');
        routine.disabled = true;
        routine.value = itemName;
        routine.type = 'text';

        // The edit button...
        var editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList.add('editButton');
        editButton.setAttribute(
            'title', 'Edit this TODO'
        );
        // Event listener for editing the routine
        editButton.addEventListener('click', function () {
            routine.disabled = !routine.disabled;
        });

        // The remove button...
        var removeButton = document.createElement('button');
        removeButton.textContent = 'REMOVE';
        removeButton.classList.add('removeButton');
        removeButton.setAttribute(
            'title', 'Remove this TODO'
        );
        // Event listener for removing the item.
        removeButton.addEventListener('click', function () {
            container.removeChild(item);
        })

        // Push all the query in the perfect direction...
        container.appendChild(item);
        item.appendChild(line);
        item.appendChild(done);
        item.appendChild(pushTime);
        item.appendChild(routine);
        item.appendChild(editButton);
        item.appendChild(removeButton);
    }
}

// The "all todo clearer" button...
refresh.addEventListener('click', function () {
    container.remove(this.item);
})

// The add button event listener...
addButton.addEventListener('click', function () {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
})

// When the user will press enter, the query will be selected in the routine box.
window.addEventListener('keydown', function (event) {
    if ((event.keyCode == 13) && (input.value != "")) {
        new item(input.value);
        input.value = "";
    }
})