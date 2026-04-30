let i = 1;

while (i <= 10) {
    console.log(`\nTabuada do ${i}`);
    
    let j = 1;
    while (j <= 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }

    i++;
}