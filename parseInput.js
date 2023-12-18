function parseInput() {
    const name = document.getElementById('name').value;
    // const rollNo = document.getElementById('rollNo').value;
    const branch = document.getElementById('branch').value;
    const program = document.getElementById('program').value;
    const admissionYear = document.getElementById('admissionYear').value;

    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');

    let compulsoryTotalCredits = 0;
    let hsTotalCredits = 0;
    let scienceBasketTotalCredits = 0;
    let mathBasketTotalCredits = 0;
    let openProjectCourseTotalCredits = 0;
    let bsElectiveTotalCredits = 0;
    let openElectivesTotalCredits = 0;
    let extendedCoreTotalCredits = 0;
    let totalCompletedCredits = 0;

    let maxCompulsoryCredits = 0;
    let maxHSCredits = 0;
    let maxScienceBasketCredits = 0;
    let maxMathBasketCredits = 0;
    let maxOpenProjectCredits = 0;
    let maxBSElectiveCredits = 0;
    let maxOpenElectiveCredits = 0;
    let maxExtendedCoreCredits = 0;
    let maxTotalCredits = 0;



    // Conditions for students admitted from AY 2022-23
    if (admissionYear >= 2022) {
        maxCompulsoryCredits = 100;
        maxHSCredits = 28; // Max HS Credits
        maxScienceBasketCredits = 12; // Max Science Basket Credits
        maxMathBasketCredits = 2; // Math Basket Credits
        maxOpenProjectCredits = 4; // Open Project Course Credits
        maxOpenElectiveCredits = 16; // Max Open Elective Credits

        lines.forEach(line => {
            const [yearSemester, code, name, credits, grade] = line.split('\t');

            if (code.includes('(R)')) {
                return;
            }


            if (code.startsWith('HS') || ['HS 101', 'HS 102', 'HS 103', 'HS 104'].includes(code)) {
                if (hsTotalCredits + parseInt(credits, 10) <= maxHSCredits) {
                    hsTotalCredits += parseInt(credits, 10);
                } else {
                    openElectivesTotalCredits += parseInt(credits, 10);
                }
            }

            // Compulsory Course condition
            else if (['ES 101', 'ES 102', 'ES 103', 'MA 101', 'MA 102', 'PH 101', 'CH 101'].includes(code)) {
                compulsoryTotalCredits += parseInt(credits, 10);
            }

            // Science Basket (BS, CH, PH) condition
            else if (['BS', 'CH', 'PH'].some(prefix => code.startsWith(prefix))) {
                if (scienceBasketTotalCredits + parseInt(credits, 10) <= maxScienceBasketCredits) {
                    scienceBasketTotalCredits += parseInt(credits, 10);
                } else {
                    openElectivesTotalCredits += parseInt(credits, 10);
                }
            }

            // Math Basket condition
            else if (['MA'].some(prefix => code.startsWith(prefix))) {
                if (mathBasketTotalCredits < maxMathBasketCredits) {
                    mathBasketTotalCredits += parseInt(credits, 10);
                } else {
                    openElectivesTotalCredits += parseInt(credits, 10);
                }
            }

            // Open Project Course condition
            else if (code.startsWith('OP')) {
                if (openProjectCourseTotalCredits < maxOpenProjectCredits) {
                    openProjectCourseTotalCredits += parseInt(credits, 10);
                } else {
                    openElectivesTotalCredits += parseInt(credits, 10);
                }
            }

            // Open Elective condition
            else if (openElectivesTotalCredits < maxOpenElectiveCredits) {
                openElectivesTotalCredits += parseInt(credits, 10);
            }
        });
        totalCompletedCredits = compulsoryTotalCredits + hsTotalCredits + scienceBasketTotalCredits + mathBasketTotalCredits + openProjectCourseTotalCredits + openElectivesTotalCredits;

        maxTotalCredits = maxCompulsoryCredits + maxHSCredits + maxScienceBasketCredits + maxMathBasketCredits + maxOpenProjectCredits + maxOpenElectiveCredits;

        // Display Science Basket, Math Basket, and Open Project Course

        // document.getElementById('compulsoryContainer').style.display = 'block';
        // document.getElementById('HSContainer').style.display = 'block';


        // document.getElementById('ScienceBasketContainer').style.display = 'block';
        // document.getElementById('MathBasketContainer').style.display = 'block';
        // document.getElementById('OpenProjectCourseContainer').style.display = 'block';

        document.getElementById('BSElectiveContainer').style.display = 'none';
        document.getElementById('BSElectiveBox').style.display = 'none';
        document.getElementById('BSElectiveContainer').style.display = 'none';
        document.getElementById('ExtendedCoreContainer').style.display = 'none';
        document.getElementById('ExtendedCoreBox').style.display = 'none';
        // document.getElementById('BSElectiveBox').style.display = 'none';
        // document.getElementById('ExtendedCoreBox').style.display = 'none';
    }

    else { // for students admitted before AY 2022-23
        maxCompulsoryCredits = 100; // Max Compulsory Credits
        maxHSCredits = 32; // Max HS Credits
        maxBSElectiveCredits = 12; // Max BS Elective Credits
        maxOpenElectiveCredits = 32; // Max Open Elective Credits
        maxExtendedCoreCredits = 32; // Max Open Elective Credits

        lines.forEach(line => {
            const [yearSemester, code, name, credits, grade] = line.split('\t');

            if (code.includes('(R)')) {
                return;
            }
            // for cse
            if (branch === 'CSE' && code.startsWith('EC') && ['EC 101', 'EC 102', 'EC 103', 'EC 104'].includes(code)) {
                extendedCoreTotalCredits += parseInt(credits, 10);
            }

            else if (code.startsWith('HS') || ['HS 101', 'HS 102', 'HS 103', 'HS 104'].includes(code)) {
                if (hsTotalCredits + parseInt(credits, 10) <= maxHSCredits) {
                    hsTotalCredits += parseInt(credits, 10);
                } else {
                    openElectivesTotalCredits += parseInt(credits, 10);
                }
            }

            else if (['ES 101', 'ES 102', 'ES 103', 'MA 101', 'MA 102', 'PH 101', 'CH 101'].includes(code)) {
                compulsoryTotalCredits += parseInt(credits, 10);
            }

            else if (code.startsWith('PH') || code.startsWith('CH') || code.startsWith('BS')) {
                if (bsElectiveTotalCredits + parseInt(credits, 10) <= maxBSElectiveCredits) {
                    bsElectiveTotalCredits += parseInt(credits, 10);
                } else {
                    openElectivesTotalCredits += parseInt(credits, 10);
                }
            } else {
                openElectivesTotalCredits += parseInt(credits, 10);
            }
        });

        totalCompletedCredits = compulsoryTotalCredits + hsTotalCredits + bsElectiveTotalCredits + openElectivesTotalCredits + extendedCoreTotalCredits;

        maxTotalCredits = maxCompulsoryCredits + maxHSCredits + maxBSElectiveCredits + maxOpenElectiveCredits + maxExtendedCoreCredits;

        // // Hide Science Basket, Math Basket, and Open Project Course
        // document.getElementById('ScienceBasketContainer').style.display = 'none';
        // document.getElementById('MathBasketContainer').style.display = 'none';
        // document.getElementById('OpenProjectCourseContainer').style.display = 'none';


        // to hide sections for admission year before 2022
        document.getElementById('ScienceBasketContainer').style.display = 'none';
        document.getElementById('MathBasketContainer').style.display = 'none';
        document.getElementById('OpenProjectCourseContainer').style.display = 'none';

        // to hide and adjust the styling for the corresponding box containers
        document.getElementById('ScienceBasketBox').style.display = 'none';
        document.getElementById('MathBasketBox').style.display = 'none';
        document.getElementById('OpenProjectBox').style.display = 'none';
        if (branch != 'CSE') {
            document.getElementById('ExtendedCoreContainer').style.display = 'none';
            document.getElementById('ExtendedCoreBox').style.display = 'none';
        }
    }

    // to hide input section and show output section
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('outputSection').style.display = 'block';
    document.getElementById('tot').style.display = 'block';
    document.getElementById('max').style.display = 'block';

    // to display user information
    displayUserInfo(name, branch, program, admissionYear);

    // displayMainCredits('Total Completed Credits:', totalCompletedCredits, 'tot');
    // displayMainCredits('Total Max Credits:', maxTotalCredits, 'max');

    // displayMainCredits2
    displayMainCredits2('Total Completed Credits:', totalCompletedCredits, maxTotalCredits)


    // to display total credits in different containers
    displayTotalCredits('Compulsory', compulsoryTotalCredits, maxCompulsoryCredits, 'compulsoryContainer');
    displayTotalCredits('HS and HSS', hsTotalCredits, maxHSCredits, 'HSContainer');
    displayTotalCredits('Science Basket', scienceBasketTotalCredits, maxScienceBasketCredits, 'ScienceBasketContainer');
    displayTotalCredits('Math Basket', mathBasketTotalCredits, maxMathBasketCredits, 'MathBasketContainer');
    displayTotalCredits('Open Project Course', openProjectCourseTotalCredits, maxOpenProjectCredits, 'OpenProjectCourseContainer');
    displayTotalCredits('BS Electives', bsElectiveTotalCredits, maxBSElectiveCredits, 'BSElectiveContainer');
    displayTotalCredits('Open Electives', openElectivesTotalCredits, maxOpenElectiveCredits, 'OpenElectiveContainer');
    if (branch == 'CSE' && admissionYear <= 2021) {
        displayTotalCredits('Extended Core', extendedCoreTotalCredits, maxExtendedCoreCredits, 'ExtendedCoreContainer');
    }
}