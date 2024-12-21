const RomanNumber = new Map([
    [1,'I'],
    [4,'IV'],
    [5,'V'],
    [9,'IX'],
    [10,'X'],
    [40,'XL'],
    [50,'L'],
    [90,'XC'],
    [100,'C'],
    [400,'CD'],
    [500,'D'],
    [900,'CM'],
    [1000,'M']
]);


function converter (number){
    let newnumber="";
    let c=0;
    

   
    while(number>0){
        c++;
       let lastkey="";
       let lastvalue=0;
    for (let [key, value] of Array.from(RomanNumber.entries())) {    
        if (number < key) {
            newnumber += lastvalue;
            number -= lastkey;
         break;
        }else if(key==1000){
            lastkey=key;
            lastvalue=value;
            newnumber += lastvalue;
         number -= lastkey;
         break;
        }
        lastkey=key;
        lastvalue=value;
    }
}

return newnumber;

}

console.log(converter(3999));