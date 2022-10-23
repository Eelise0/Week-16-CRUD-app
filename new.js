
/* In this CRUD app you can create, read, and delete posts made by the user. I was unable to get a MOCKAPI
to work on this website but I am able to add each post to an array and have those posts removed and added
as necessary. I will continue working on getting an API to work with this website. Thanks! */

let id = 0;
let postList = [];


class Post {
    constructor(name, suggestion) {
    this.name = name;
    this.suggestion = suggestion;
}
}

// url = 

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-suggestion').value;

    postList.push(new Post(document.getElementById('new-name').value, 
    document.getElementById('new-suggestion').value,));

    console.log(postList);


    let action1 =  row.insertCell(2);
    action1.appendChild(createDeleteButton(id++));
    document.getElementById('new-name').value = '';
    document.getElementById('new-suggestion').value = '';

});

function createDeleteButton (id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove Post';
    btn.addEventListener('click', () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete =  document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);

        postList.splice(`${id}`, 1);
        console.log(postList);
    });
    return btn
}