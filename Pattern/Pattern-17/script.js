// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        if(j%2==0){
            document.write(0 + " ");
        }
        else{
            document.write(1 + " ");
        }
    }
    document.write('<br>');
}