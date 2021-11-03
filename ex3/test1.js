let arr=[1,2,3,1,4,5,2]
var obj = {};
    var arr1 = [];
    var length = arr.length;
    var j = 0;
    for(var i = 0; i < length; i++) {
         var item = arr[i];
         if(obj[item] !== 1) {
            obj[item] = 1;
               arr1[j++] = item;
         }
    }
    console.log(arr1) 