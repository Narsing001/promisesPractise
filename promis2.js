//This is The first way of use promise
 const promobj=new Promise((MyResolve,MyReject)=>{
       setTimeout(()=>{
        let Empid=[01,02,03,04,05];
        // let EmpNames=["Narsing","Pavan"]
          MyResolve(Empid);
          MyReject("Promise is Rejected");
       },2000)   
      
        })

 const getEmpdata=(Indexdata)=>{
    return new Promise((Resolve)=>{      //This is the second way to use promise
          setInterval((Indexdata)=>{
            let EmpData={ name:"Narsing", Age:23}
                            
              
            
            Resolve(` Emp Data : Name = ${EmpData.name} And Age = ${EmpData.Age} and ${Indexdata}`)
         },2000,Indexdata)
         
    })
 }     
 promobj.then((Empid)=>{
    Empid.forEach(eee => {
         console.log(eee); 
          getEmpdata(Empid[1]).then((KuchBhi)=>{
            console.log(KuchBhi);
          })
 })
    
}).catch((err)=>{
    console.log(err);
})
