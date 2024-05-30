let age = 10;
let maritalStatus = "married"
let retirmentAge = 65
function updateAge() {
    const ageInput = document.getElementById('ageInput');
    age = ageInput.value;
    document.getElementById('ageDisplay').innerText = 'Selected Age: ' + age;
}
function updateMaritalStatus() {
    const maritalDropdown = document.getElementById('maritalStatusDropdown');
    maritalStatus = maritalDropdown.value;
    document.getElementById('maritalDisplay').innerText = 'Marrige Status: ' + maritalStatus;
}
function updateRetirmentAge() {
    const retirmentAgeInput = document.getElementById('retirmentAgeInput');
    retirmentAge = retirmentAgeInput.value;
    document.getElementById('retirmentAgeDisplay').innerText = 'Selected Retirment Age: ' + retirmentAge;
}