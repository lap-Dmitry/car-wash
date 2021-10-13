const formTel = document.querySelector('#tel');
formTel.addEventListener('keypress', e => {
  if (!/\d/.test(e.key))
    e.preventDefault();
});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
};

let expanded = false;
const multiSelect = document.querySelector('.multiselect');

multiSelect.addEventListener('click', function (e) {
  const checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
  e.stopPropagation();
}, true)

document.addEventListener('click', function (e) {
  if (expanded) {
    checkboxes.style.display = "none";
    expanded = false;
  }
}, false);