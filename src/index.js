module.exports = function towelSort (matrix) {

  let a = [];
  let b =[];

  if(matrix){

 for (let i = 0; i < matrix.length; i ++)
 {

  if(i%2!=0){a.push(matrix[i].reverse())
    }
  else{a.push(matrix[i]);
    }}
 
 for (let i = 0; i < a.length; i++){
  b = b.concat(a[i]);
}
return b;
  }

  else return [];
}


