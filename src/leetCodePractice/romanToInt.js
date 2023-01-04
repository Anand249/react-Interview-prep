const roamIntArray = [
    {k:'I', v: 1},
    {k:'V', v: 5},
    {k:'X', v: 10},
    {k:'L', v: 50},
    {k:'C', v: 100},
    {k:'D', v: 500},
    {k:'M', v: 1000},
]

let roamanNumber = 'MCMXCIV';
let ans = 0;
let specialChar = 'IV';
let newValue = '';

if (roamanNumber.includes(specialChar)) {
   newValue = roamanNumber.replace(specialChar, '')
   ans += 4
} 
console.log(newValue)
for (i=0; i < newValue.length; i++) {
    const obj = roamIntArray.find(element => element.k === roamanNumber[i]);
    ans += obj.v
}
console.log(ans)