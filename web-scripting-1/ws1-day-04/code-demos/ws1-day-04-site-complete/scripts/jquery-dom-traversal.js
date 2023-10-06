// DOM Traversal

// parentNode
const 
$childBox01 = $('#child-box-01');
$childBox01.click('click', function(){
    $(this).parent().toggleClass('selected');
});
// closest()
const $childBox02 = $('#child-box-02');
$childBox02.click('click', function(){
    $(this).closest('.grandparent-box-02').toggleClass('selected');
});

const $childBox03 = $('#child-box-03')
$childBox03.click(function(){
    console.log($(this).parents())
    $(this).parents('.ancestor-box').toggleClass('selected');
});


// Children
// Parent Node
const $parentElement04 = $('#parent-box-04');
// children
const $btnAllChidren = $('#btn-all-children');
$btnAllChidren.click('click', function(){
    $parentElement04.children().toggleClass('selected');
});
// First Child
const $btnFirstChild = $('#btn-first-child');
$btnFirstChild.click('click', function(){
    $parentElement04.children()
                    .first()
                    .toggleClass('special');
});
// Last Child
const $btnLastChild = $('#btn-last-child');
$btnLastChild.click('click', function(){
    $parentElement04.children()
                    .last()
                    .toggleClass('special');
});

// Sibling
// Next
const $childBoxes04 = $('.child-box-05');
$childBoxes04.click(function(){
        $(this).removeClass('selected');
        $(this).next().length === 0 ? alert('No more siblings!!!') : $(this).next().addClass('selected');
});
// Prev
const $childBoxes06 = $('.child-box-06');
$childBoxes06.click(function(){
    $(this).removeClass('selected');
    $(this).prev().length === 0 ? alert('No more siblings!!!') : $(this).prev().addClass('selected');
});