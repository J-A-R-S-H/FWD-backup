const $btnGenerateGroups = $('#btn-generate-group');
const $btnClearGroups = $('#btn-clear-groups');
const $groups = $('.group');
const students = ["Ali", "Graham", "Nathalie", "Bernard", "Aysenur", "Bryan", "Uellem", "Emily", "Carolyn", "Nando", "Marie", "Candy", "Arielle Emily", "Hayden", "Genelle", "Wenjing", "Nicole", "Kaia", "John S.", "Brendan", "Alen", "Veronica", "Winson", "David", "Dale", "John Z."];

// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

$btnGenerateGroups.click(() => {
    // Create a copy of the students array
    const studentsCopy = students.slice();
    
    // Shuffle Array
    shuffle(studentsCopy);
    
    // Determine remainder and separate them from the copy of the main array
    const remainder = studentsCopy.length % 4;
    const remainingStudents = studentsCopy.splice(studentsCopy.length - remainder, remainder);
    
    // Create groups with remaining students
    const groups = [];
    for (let i = 0; i < studentsCopy.length; i++) {
        if (i % 4 === 0) {
            groups.push([]);
        }
        groups[Math.floor(i / 4)].push(studentsCopy[i]);
    }
    
    // Add remaining students to groups
    remainingStudents.forEach((student, i) => {
        groups[i].push(student);
    });

    // Shuffle groups after inserting remaining students
    shuffle(groups);
    
    let flatGroups = [];

    // Flatten the 2D 'groups' array into a 1D 'flatGroups' array while keeping track of positions
    for (let i = 0; i < groups.length; i++) {
        for (let j = 0; j < groups[i].length; j++) {
            flatGroups.push({student: groups[i][j], position: [i, j]});
        }
    }

    function addToHTML() {
        if (flatGroups.length === 0) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * flatGroups.length);
        const {student, position} = flatGroups[randomIndex];
        flatGroups.splice(randomIndex, 1);

        const [groupIndex, studentIndex] = position;
        const $group = $groups.eq(groupIndex);
        const $list = $group.find('li');
        const $item = $list.eq(studentIndex);
        
        $item.html(student);
        $item.addClass('full');

        setTimeout(addToHTML, 300);
    }

    addToHTML();
    $btnGenerateGroups.prop('disabled', true);
});

$btnClearGroups.click(() => {
    $groups.find('li').each(function() {
        $(this).text('');
        $(this).removeClass('full');
    });

    $btnGenerateGroups.prop('disabled', false);
});
