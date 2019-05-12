function j(n){
  var ans=1;
  for(i=1;i<=n;i++){
      ans*=i;
  }
  return ans;
}
var n=10;
console.log("10!="+j(n));