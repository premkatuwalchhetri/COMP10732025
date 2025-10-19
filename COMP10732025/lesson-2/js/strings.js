const output = document.querySelector('p');

/* STEP 1: Creating Strings */
    let step1a = 'This is "a" string';
    console.log(step1a);
    let step1b = "This is double qoutes string";
     console.log(step1b);
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */

    let step2 = 'It\'s six O\' clock';
    output.textContent = step2;
    /* STEP 3: Concatenation */
    let step3a = 'Javascript';
    let step3b = 'rocks';
    output.textContent = step3a + ' ' + step3b;

    /* STEP 4: Numbers and Strings */
    let step4a = 'Faranheit' + 543;
    output.textContent = step4a + ' ' + typeof(step4a);


    // numbers can be converted to strings
    let step4b = '20' + '18';
    output.textContent = step4b + ' ' + typeof(step4b);
    let step4c = Number(step4b);
    output.textContent = step4c + ' ' + typeof(step4c);
    // strings can be converted to numbers, too
    let step4d = step4c.toString();
    output.textContent = typeof(step4d);
