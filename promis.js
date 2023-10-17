const pobj1=new Promise((resolve,reject)=>{     //This is first way of assigning promises
    setTimeout(() => {
      
      let rollno=[1,2,3,4,5,6,7];
      resolve(rollno); 
      reject("Promise is not Resolve");
    },3000);
})
const getbiodata=(indexdata)=>{
    return new Promise((resolve,reject)=>{          //This is Second Method of Assigning Promises
         setTimeout((indexdata)=>{
             let studbio={
                 name:"Narsing",
                 age:23
             }
             resolve(`student name is ${studbio.name} and age is ${studbio.age}
             rollno is ${indexdata}`);
         },2000,indexdata);
    })
}
pobj1.then((rollno)=>{
     console.log(rollno);
     getbiodata(rollno[1]).then((KuchBhi)=>{ 
              console.log(KuchBhi)
     })
}).catch((err)=>{
   console.log(err);
})


    

    
