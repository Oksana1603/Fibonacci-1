let num = parseFloat(prompt('Please, enter a number')); 


    let f1=1;
    let f2=1;
    for (let i=1; i<=num;i++){
    let fNext = f1+f2;
    f1=f2;
    f2=fNext;
    document.write(' '+fNext);
    }

    