function showInputSection() {
    const userInfoSection = document.getElementById('userInfoSection');
    const inputSection = document.getElementById('inputSection');

    const name = document.getElementById('name').value;
    // const rollNo = document.getElementById('rollNo').value;
    const branch = document.getElementById('branch').value;
    const program = document.getElementById('program').value;
    const admissionYear = document.getElementById('admissionYear').value;

    if (name && branch && program && admissionYear) {
        // to hide user info section and show input section
        userInfoSection.style.display = 'none';
        inputSection.style.display = 'block';
    } else {
        alert('Please fill in all user information fields.');
    }
}
