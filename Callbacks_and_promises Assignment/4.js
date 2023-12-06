function bookTitle(arr,sortTitles){
    let titles = arr.map(ele => ele.title);
    sortTitles(titles);
    
}
let arr = [
    {title:'Mathematics', author : 'RD sharma', year:2002},
    {title:'Physics', author : 'HC verma', year:2012},
    {title:'Inorganic Chem', author : 'OP Tandon', year:2022}
]

function sortTitles(titleArr){
    titleArr.sort();
    console.log(titleArr);
}

bookTitle(arr, sortTitles);