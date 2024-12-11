
// Getting p element, extacting the text content, then convert it to an array of words
const par=document.getElementById('myParagraph');
let content=par.textContent.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').sort()

// removing empty string & convert all word to lowercase to simplify the calculation
let newContent=content.filter((i)=> i!=='')
let content1=newContent.map((i)=>i.toLowerCase())

// Function to sort the array of word by their frequency
function sortByFrequency(arr){
    return arr.sort((a, b) => 
     arr.filter(x => x === b).length - arr.filter(x => x === a).length // The compare function, sort according to the frequency, wich is given by the length of the array returned by filter
 );
}
// Sort by frequency, removing duplicates using Set then reconverting the set to an array and extracting the 5 first words
let arr= new Set(sortByFrequency(content1));
let arr1=[...arr];
console.log(arr1.slice(0,5));

// Retrieving the innerHTML to insert tags and highlight words

let content2=par.innerHTML;
let a=arr1.slice(0,5)
// Adding a tag to each word on the array of most occuring words
// the second line take the capitalized word ignore previously in account.
for(i in a){
    let temp=a[i];
    content2=content2.replaceAll(`${temp} `,`<b>${temp}</b> `);
    content2=content2.replaceAll(temp[0].toUpperCase()+temp.substr(1) + " ",`<b><u>${temp[0].toUpperCase()+temp.substr(1)}</u></b> `);
}
// change the innerHTML of the paragraph
par.innerHTML=content2
