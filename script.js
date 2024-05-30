let age = 10;
    function updateAge() {
        const ageDropdown = document.getElementById('ageDropdown');
        age = ageDropdown.value;
        document.getElementById('ageDisplay').innerText = 'Selected Age: ' + age;
    }