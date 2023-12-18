function displayTotalCredits(label, totalCredits, maxCredits, containerId) {
    const container = document.getElementById(containerId);

    const headingElement = document.createElement('div');
    headingElement.classList.add('custom-heading');
    headingElement.textContent = label;
    container.appendChild(headingElement);


    const totalCreditsElement = document.createElement('div');
    totalCreditsElement.style.display = 'flex';
    totalCreditsElement.style.justifyContent = 'center';
    totalCreditsElement.style.alignItems = 'baseline';


    const styleTotalCompleted = 'font-size: 64px; color: #349264; font-weight:600;';
    const styleSlash = 'font-size: 64px; color: #1d1d1d;font-weight:600;';
    const styleMax = 'font-size: 32px; color: #ea7465;font-weight:600;';


    const spanTotalCompleted = `<span style="${styleTotalCompleted}">${totalCredits}</span>`;
    const spanSlash = `<span style="${styleSlash}">/</span>`;
    const spanMax = `<span style="${styleMax}">${maxCredits}</span>`;


    totalCreditsElement.innerHTML = `${spanTotalCompleted}${spanSlash}${spanMax}`;


    container.appendChild(totalCreditsElement);
}

function displayMainCredits2(label, totalCredits, maxCredits) {
    const totalCreditsContainer = document.getElementById('mainDisplay');
    const percentageContainer = document.getElementById('percentageValue');
    const chartContainer = document.getElementById('chartContainer');

    const percentageCompleted = (totalCredits / maxCredits) * 100;

    const totalCreditsElement = document.createElement('div');

    totalCreditsElement.innerHTML = `<div id="maindisp">
                                       <div id="total">${totalCredits}</div>
                                       <div id="line">credits completed out of <span id='maxcredits'>${maxCredits}</span></div>
                                       </div>`;
    totalCreditsContainer.appendChild(totalCreditsElement);

    // Update the percentage display
    percentageContainer.textContent = `${percentageCompleted.toFixed(2)}%`;

    // Create a 3D pie chart
    const chartCanvas = document.createElement('canvas');
    chartCanvas.id = 'pieChart';
    chartCanvas.width = 100; // Set the desired width
    chartCanvas.height = 100; // Set the desired height
    chartContainer.innerHTML = ''; // Clear previous content if any
    chartContainer.appendChild(chartCanvas);

    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            // labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [totalCredits, maxCredits - totalCredits],
                backgroundColor: ['#5d74f1', '#8ec9db'],
            }],
        },
        options: {
            cutoutPercentage: 70, // Adjust this value for the size of the hole in the center
            responsive: true,
        },
    });
}

