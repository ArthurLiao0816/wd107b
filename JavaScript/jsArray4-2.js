function find(person){
    var a=[1,4,5,8,9];
    var mid, low=0, high=a.length-1;//high=4
    a.sort();
    
    for(n=0;n<a.length;n++){
        mid=a[Math.floor((low+high)/2)];

        if((high-low)!=1){
            if(person<mid){
                    high=Math.floor((low+high)/2);
                }
            else if(person==mid){
                    return mid;
                }
            else{
                    low=Math.floor((low+high)/2);
                }
            }
            else return -1;
        }
}
console.log("find(4)的結果是"+find(4));
console.log("find(7)的結果是"+find(7));