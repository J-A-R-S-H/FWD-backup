// Buttons - Not Part of Demo
// Buttons
const $btnSelectRows = $('#select-tr');
const $btnSelectTDs = $('#select-td');
const $btnAddRow = $('#add-row');
const $btnChangeText = $('#change-text');
const $btnSelectBoxes = $('#select-boxes');
const $btnAddBox = $('#add-box');

// Select the Table
const $table = $('table');
// Select the box container
const $boxContainer = $('#box-row-01');
// Selecting Elements

// Select all the table rows using getElementsByTagName()
$btnSelectRows.click(function(){
    const $tr = $('tr');
    // Console.log the row
    console.log($tr);
    // Change all the rows pink
    $tr.css('background-color', '#ffcffb');
});
// Select the 2nd TD in each row
$btnSelectTDs.click(function(){
    console.log( $('td:nth-child(2)') )
    $('td:nth-child(2)')
        .css('background-color', 'yellow');
});

// It's easy to manipulate the DOM with jQuery
// Add a Row by cloning an existing row...
$btnAddRow.click(function(){
    $('tr:last')
        .clone()
        .appendTo($table);
});

// Change the text of elements
// 'I ❤️ jQuery!'...
$btnChangeText.click(function(){
    $('td').text('I ❤️ jQuery!');
});


// Select all the boxes
$btnSelectBoxes.click(function(){
    const $box = $('.box');
    $box.css({
        'background-color': '#ffcffb',
        'border-radius': 20
    });
});

// Click the "Add Box" button to add a box and then 
$btnAddBox.click(function(){
    
    $('<div>')
        .addClass('box')
        .css({
            'background-color': '#ffcffb',
            'border-radius': 20 
        }).appendTo($boxContainer);

});

