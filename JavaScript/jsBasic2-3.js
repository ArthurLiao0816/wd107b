function power(num){
    var result=0;
    for(n=1;n<num;n+=0.001){
        if(n*n>num){
            result=n;
            break;
        }
        
    }
    return result;
}
var m=4;
power(m);
console.log(m+"之平方根為"+power(m));