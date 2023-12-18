// function displayMainCredits(label, totalCredits, containerId) {
//     const container = document.getElementById(containerId);
//     const totalCreditsElement = document.createElement('div');
//     totalCreditsElement.textContent = `${label} ${totalCredits} credits`;
//     container.appendChild(totalCreditsElement);
// }

function displayMainCredits2(label, totalCredits, maxCredits) {
    const totalCreditsContainer = document.getElementById('mainDisplay');
    
    const totalCreditsElement = document.createElement('div');
   
    
    totalCreditsElement.innerHTML = `<div id = "maindisp">
                                     <div id = "total"> ${totalCredits}</div>
                                     <div id = "line">credits completed out of <span id = 'maxcredits'>${maxCredits} </span>
                                     </div>
                                     </div>`;
    totalCreditsContainer.appendChild(totalCreditsElement);
}