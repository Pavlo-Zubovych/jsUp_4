const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const tabs2 = document.getElementById('tabs2');
const content2 = document.querySelectorAll('.content2');

const chengeClass = (el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active');
  }
  el.classList.add('active');
};

const chengeClass2 = (el) => {
  for (let i = 0; i < tabs2.children.length; i++) {
    tabs2.children[i].classList.remove('active2');
  }
  el.classList.add('active2');
};

// console.log(tabs);
// console.log(tabs2);
// console.log(content);
// console.log(content2);

tabs.addEventListener('click', (e) => {
  const currTab = e.target.dataset.btn;
  chengeClass(e.target);
  //   console.log(e.target);

  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove('active');
    if (content[i].dataset.content === currTab) {
      content[i].classList.add('active');
    }
  }
});

tabs2.addEventListener('click', (e) => {
  // console.log('click');
  const currTab2 = e.target.dataset.btn2;
  chengeClass2(e.target);
  //   console.log(e.target);
  // console.log(content2.length);

  for (let i = 0; i < content2.length; i++) {
    content2[i].classList.remove('active');
    if (content2[i].dataset.content2 === currTab2) {
      content2[i].classList.add('active');
    }
  }
});
