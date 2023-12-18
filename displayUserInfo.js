function displayUserInfo(name, branch, program, admissionYear) {
    const userInfoContainer = document.getElementById('userInfo');
    const userInfoElement = document.createElement('div');
    userInfoElement.innerHTML = `<div class="name">${name} | ${program} '${admissionYear.slice(-2)} ${branch}</div>`;
    userInfoContainer.appendChild(userInfoElement);
}
