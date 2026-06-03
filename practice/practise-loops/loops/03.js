
/* break and the continue statement in the loop  */
for (let j = 1; j < 10; j++) {

    if (j === 5) {
        break;
    }

    // console.log(j);

}
// continue statement 
for (let p = 1; p < 5; p++) {
    if (p === 3) {
        continue // it will skip  the  current itration and continue  till the conndition was there is called continue statement 
    }
    console.log(p);


}
// lets talk about the nested loop 
/* how it works and how it exicuted...  means loop inside the loop*/

for (let H = 1; H <= 3; H++) {
    for (let O = 0; O < 2; O++) {
        console.log(H, O);


    }

}

