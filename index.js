const form = document.querySelector('form');
const result = document.querySelector('#result');
const failures = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const lastName = event.target.elements.lastname.value;
    const grade1 = parseInt(event.target.elements.grade1.value);
    const grade2 = parseInt(event.target.elements.grade2.value);
    const grade3 = parseInt(event.target.elements.grade3.value);
    const grade4 = parseInt(event.target.elements.grade4.value);
    const grade5 = parseInt(event.target.elements.grade5.value);

    const grades = [grade1, grade2, grade3, grade4, grade5];

    let isExcellent = true;
    let isGood = true;
    let hasFailed = false;

    for (const grade of grades) {
        if (grade < 5) {
            isExcellent = false;
        }

        if (grade < 4) {
            isGood = false;
        }

        if (grade === 2) {
            hasFailed = true;
        }
    }

    if (isExcellent) {
        result.innerHTML += `<p>${lastName} отличник!</p>`;
    } else if (isGood) {
        result.innerHTML += `<p>${lastName} хорошист!</p>`;
    } else if (hasFailed) {
        result.innerHTML += `<p>${lastName} двоечник!</p>`;
        failures.push(lastName);
    } else {
        result.innerHTML += `<p>${lastName} среднячок </p>`;
    }

    event.target.reset();
});
