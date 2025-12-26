const form = document.querySelector('.item-form');
const input = document.getElementById('itemInput');
const list = document.getElementById('list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement('li');

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = value;

  label.append(checkbox, span);

  const removeButton = document.createElement('button');
  removeButton.textContent = '✕';
  removeButton.classList.add('remove');

  removeButton.addEventListener('click', () => {
    li.remove();
  });

  li.append(label, removeButton);
  list.appendChild(li);

  input.value = '';
});
