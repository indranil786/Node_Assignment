function missingEle(arr){
arr.sort((a,b)=>a-b);
let pos=-1;
 for(let i=0;i<arr.length;i++){
   if(arr[i]!=i+1){pos=i+1;break}
}
return pos;
}