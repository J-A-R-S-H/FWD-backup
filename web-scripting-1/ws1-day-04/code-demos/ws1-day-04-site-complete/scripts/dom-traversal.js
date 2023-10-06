// DOM Traversal

// parentNode
const childBox01 = document.getElementById('child-box-01');
childBox01.addEventListener('click', function(){
    this.parentNode.classList.toggle('selected');
});
// closest()
const childBox02 = document.getElementById('child-box-02');
childBox02.addEventListener('click', function(){
    this.closest('.grandparent-box-02').classList.toggle('selected');
});

// Children
// Parent Node
const parentElement03 = document.getElementById('parent-box-03');
// children
const btnAllChidren = document.getElementById('btn-all-children');
btnAllChidren.addEventListener('click', function(){
    let childrenElements = parentElement03.children;
    const childrenElArray = [...childrenElements];
    childrenElArray.forEach(function(child){
        child.classList.toggle('selected');
    });
});
// First Child
const btnFirstChild = document.getElementById('btn-first-child');
btnFirstChild.addEventListener('click', function(){
    const firstChild = parentElement03.firstElementChild;
    firstChild.classList.toggle('special');
});
// Last Child
const btnLastChild = document.getElementById('btn-last-child');
btnLastChild.addEventListener('click', function(){
    const firstChild = parentElement03.lastElementChild;
    firstChild.classList.toggle('special');
});

// Sibling
// Next
const childBoxes04 = document.querySelectorAll('.child-box-04');
childBoxes04.forEach(function(cb){
    cb.addEventListener('click', function(){
        this.classList.remove('selected');
        this.nextElementSibling === null ? alert('No more siblings!!!') :  this.nextElementSibling.classList.add('selected');
    });
});
// Prev
const childBoxes05 = document.querySelectorAll('.child-box-05');
childBoxes05.forEach(function(cb){
    cb.addEventListener('click', function(){
        this.classList.remove('selected');
        this.previousElementSibling === null ? alert('No more siblings!!!') :  this.previousElementSibling.classList.add('selected');
    });
});