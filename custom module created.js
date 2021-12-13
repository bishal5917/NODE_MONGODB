function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let ans=sum/arr.length
    console.log(ans);
}

//average([2,4,2,3,5])
module.exports=average  //yo average module vayera export vayo aba yellai 
                 //yo .js file bata access garna milxa
