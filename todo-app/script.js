function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById('task-list').appendChild(li);

  input.value = '';
}
