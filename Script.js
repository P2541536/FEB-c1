let arr=[
    {id:1, name:"john", age:"18", mark:80},
    {id:2, name:"jack",age:"20", mark:85},
    {id:3, name:"Karen", age:"19",mark:35},
];

 function PrintStudentswithMap(){
    //Write your code here,just console.log
    arr. Map(arr=>{
        if(arr.marks>50){
            Console.log(arr.name+' '+arr.marks);
        }
    });
 }
 function PrintStudentsbyForEach(){
    //Write your code here,just console.log
    arr.forEach(arr=>{
        if(arr.marks>50){
            Console.log(arr.name+' '+arr.marks);

        }
    });
}
 function addData(){
    //Write your code here,just console.log
    let newData={
        id: 4,
        name:"susan",
        age:20,
        marks:45,

    };
    arr.push(newdata);
    Console.log(newData)
 }
 function removeFailedStudent(){
    //Write your code here,just console.log
    arr=arr.filter(student=>student.marks>=50);
    console.log(arr);
 }
     function ConcatenatedArray(){
        //Write your code here,just console.log
  let newArr=[
    {id:4, name:"sarah", age:22, marks:60},
    {id:5, name:"Mike", age:23, marks:40},
    {id:6, name:"Emma", age:24, marks:70},
  ];
  let ConcatenatedArr=arr.Concat(newArr);
  Console.log(ConcatenatedArr);
}
   
    
    
  