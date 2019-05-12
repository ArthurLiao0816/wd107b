function insert(index){
    var a=[0,1,2];
    a.push(index);
    a.sort();
    for(n=0;n<a.length;n++){
        console.log("a[%d]=",n,a[n]);
    }
}
insert(8);