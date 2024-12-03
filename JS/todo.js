document.getElementById('task-btn').addEventListener('click', function() {
    const inputValue = document.getElementById('input-value').value;
    console.log(inputValue);

    if (inputValue.trim() === "") {
            alert("Please enter a task");
            return;
        }

    const contentContainer = document.getElementById('content-container');
    const taskNumber = contentContainer.children.length + 1;
    const row = document.createElement('tr');
    row.innerHTML = `
        <th>${taskNumber}</th>
        <td>${inputValue}</td>
        <td>
            <button class="btn btn-xs btn-error delete-btn"><i class="fas fa-times"></i></button>
        </td>
    `;
    contentContainer.appendChild(row);

    document.getElementById('input-value').value = "";

    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
    });

    document.getElementById('clear-btn').addEventListener('click',function(){
        row.remove();
    })
});
