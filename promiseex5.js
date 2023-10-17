const pobj=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5];
         resolve(roll_no)
        reject("no data found");
    },2000)
})
//..promise consume
// pobj.then((roll_no)=>{
//     console.log("Promise is resolve")
//     console.log(roll_no);
// }).catch((ee)=>{
//     console.log(ee);
// })

//Promise call by using async and awaite
async function callPromise(){
      let cp=await pobj;
      console.log(cp);
}

callPromise();