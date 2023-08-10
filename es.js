


// "use strict" method is used for finding the error in js file running on Node.js environment

/*"use strict";
function print(){
   var x=10;
    console.log(x);
}
print(); 
*/

// uses of spread operator(...)

/* 
let poorCountry=['Bangladesh','India','Paksitan'];
let richCountry=[...poorCountry,'America','jermany','England'];
console.log(richCountry);    // output:[ 'Bangladesh', 'India', 'Paksitan', 'America', 'jermany', 'England' ]
*/


//push operator

/*
let poorCountry=['Bangladesh','India','Paksitan'];
let richCountry=['America','jermany','England'];
richCountry.push(poorCountry);
console.log(richCountry); 
*/


//Rest Parameter (...name). rest parameter can take all the value provive into the function

/*
function calculation(a,b,...numbers){
  let sum=0;
  for(let i of numbers){
    sum+=i;
  }
  console.log(sum);
  console.log(a+b);

}
calculation(10,20,1,2,3,4,5);
*/



//Dynamic Function (Function by using the function constructor)

/*
let nam=function name(value){
    return value;
}
console.log(nam("Mehedi hasan Rakib"));
*/


//variable Hoisting
//before value asigning
// after variable type declaring

 /*
 nam ="Rakib"
 console.log(nam);
 var nam;
 */


 // For of Loop


 /*
 let city=['Dhaka','cumilla','chandput','chittagang'];
 for(let cityname of city){
    console.log(cityname);
 }
 */



 //Object 

  
  
  /*
  let CoU={dept:'yes',student:'yes',Big:true,Vc:'Yes'}
 
 let CoUpro={
   study:'well',
   extracarriculam:'Yes',
   student:{
    goodstudent:true,
    badstudent:false,
    studeyenvironment:'yes'
   },
   teacher:{
    number:'not so good',
    quantity:'poor',
    quality:'so so',
    wellmanner:'depends'

   }
 }
 console.log(CoU['dept']);
 console.log(CoUpro['student'])
 console.log(CoUpro['teacher']['quantity']);
for(let elmnt in CoUpro){
    
    console.log(elmnt+": "+CoU[elmnt])
}
console.log("next step");
if(CoU['dept']=="no"){
    console.log("wrong");
}
else if(CoU['dept']=='yes'){
    console.log("you are right");
}
*/ 


//Annonymous function

/*
1) A function without name
2) you can reasign it.
*/
//  var fun=function(){
//   return 'hello';
//  }
//  console.log(fun());


 /*
 var fun=function(...x){
  return x;
 }
 let ara=[1,2,3,4,5,6,7,8]
// reasining this function
 var fun=function()
 {
  return 'hello';
 }
 //console.log(fun(ara));
 console.log(fun());
 */


 //Arrow function

//  let arow=(...x)=>{
//   console.log(x);
//  }
//  arow('rakib','sakib','faria');


//  let arow=(...x)=>{
//   return(x);
//  }
//  console.log(arow('I Love You'));

/*
  Array
 */

  // let ara=['Rakib','Mamun','Lovely','Nasrin'];

  // // we can declare it by using arra constructor
  // let arrapro=new Array('A','B','C','d');
  // for(let i of ara){
  //   console.log(i);
  // }
  // for(i of arrapro){
  //   console.log(i);
  // }


  /*
      Multidimensional Array
  */

    //   let bangladesh=['Dhaka','khulna','cumilla','Chittagong'];
    //   let India=['Mumbai','Kolkata','chennai','Haydrabad'];
    //   let china=['uhan','hongkong','shanghai','beijing'];
    //   let concat=[bangladesh,India,china];
    //   // let res=[...bangladesh,...India,...china];
    //   console.log(concat[0][2]);
    //   //console.log(res[1][0]);
    //  // console.log(res[5]);

    // we can also do this in this way
    // let countries = [
    //   ['Dhaka', 'khulna', 'cumilla', 'Chittagong'],  // Bangladesh
    //   ['Mumbai', 'Kolkata', 'chennai', 'Haydrabad'], // India
    //   ['uhan', 'hongkong', 'shanghai', 'beijing']    // China
    // ];
    
    // // Access and display 'chennai' from the array
    // console.log(countries[1][2]);  // This will output 'chennai'
    

    /* Destructuring array */
    // let bangladesh=['Dhaka','Cumilla','Sylhet','Chittagong'];
    //  let[, ,a,]=bangladesh;
    //  console.log(a);
    //  let[c , , ,b]=bangladesh;
    //  console.log(c);

    //another example
    // const matrix = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9]
    // ];
    
    // const [row1, row2, row3] = matrix;
    // const [el1, el2, el3] = row1;
    
    // console.log(el1); // Output: 1
    // console.log(el2); // Output: 2
    // console.log(el3); // Output: 3
    // console.log(row2[2]);



    /* 
      ES6 Mapping
    */

    //   var myMap=new Map();
    // myMap.set('key1',"Bangladesh");
    // myMap.set('key2',"india");
    // myMap.set('key3',"pakistan");
    // myMap.set('key4',"nepal");
    // myMap.set('key5',"saudi arabia");
    // console.log(myMap.keys());
    // console.log(myMap.values());
    // // for(let mykey of myMap.keys()){
    // //   console.log(mykey);
    // // }
      
    
    // //Delete method
    // // myMap.delete('key1');

    
    
    // // //clear method
    // // myMap.clear();


    // // for(let myvalue of myMap.values()){
    // //   console.log(myvalue);
    // // }
    // // console.log(myMap.get('key5'));



    // // Has method

    // // if(myMap.has('key2')){
    // //   console.log("key2 is exist");
    // // }
    // // else{
    // //   console.log("key2 doesnt exist");
    // // }





    /*

    Set Method 
    // set avoided repeated value
    */

    // var myset=new Set();
    // myset.add('Dhaka');
    // myset.add('cumilla');
    // myset.add('sylhet');
    // myset.add('khulna');
    // myset.add('cumilla');
    // myset.add("chandpur");
    // myset.add('cumilla');
    // console.log(myset);

    // //we can declare set by ths way
    // var newset=new Set(['a','b','c','a']);
    // console.log(newset);
     
    // // clear method in set
    // // myset.clear();
    // //  console.log(myset);
    //  // delete method
    //   // newset.delete('b');
    //   // console.log(newset);
    

    //   // has method

    //   if(newset.has('d')){
    //     console.log("exist");
    //   }
    //   else{
    //     console.log("doesnt exist")
    //   }

    //   //values method

    //   console.log(myset.values());

      // // set size

      // console.log(myset.size);
      // console.log(newset.size);


    

      /** Class in js  **/

      // how to create class

      // class myclass{
      //   fun1(){
      //     console.log("Hello this is about class topic")
      //   }
      //   fun2(){
      //     console.log("Hello this is about class topic")
      //   }
      //   fun3(){
      //     console.log("Hello this is about class topic")
      //   }

      
      // }
      // let obj= new myclass;
      // obj.fun1();
      // obj.fun2();
      // obj.fun3();

      // we care sent parameter in class function

      // class myclass{
      //   fun1(name){
      //     console.log(name)
      //   }
      //   fun2(name){
      //     console.log(name)
      //   }
      //   fun3(name){
      //     console.log(name)
      //   }

      
      // }
      // let obj= new myclass;
      // obj.fun1('banladesh');
      // obj.fun2('pakistan');
      // obj.fun3('India');



      /* 
      Class constructor

      1) No need to call it seperately..because it called automatically when a object have created
      2) It doest return anything
      3)
      */

      // class newclass{
      //   // this way we should define constructor
      //   constructor(){

      //     console.log("hello ,i am constructor");
      //   }
      // }
      // new newclass;

      // // parameterized constructor

    //    


    /**
     * if we use static key word in class, then the relation buildup to class not object
     */

    // class statclass{
    //   static show(){
    //     console.log("hello world");
    //   }
    // }
    // // let obj=new statclass;// here if we call the show function by object then it was show error
    // // obj.show();
    // statclass.show();

    // /* 
    // Inheritance in Javascipt 
    // */

    // class parent{

    //   fun1(){
    //     console.log("This is an inheritance example code");
    //   }
    //   fun2(){
    //     console.log("here we call this function wihtin the child class");
    //   }
    // }
    // class child extends parent{

    // }
    // let obj=new child;
    // obj.fun1();
    // obj.fun2();


    // /**
    //  * Method Overriding
    //  */

    // class parent{
    //   fun1(){
    //     console.log("Hello this is function 1");
    //   }
    //   fun2(){
    //     console.log("Hello this is a fun2 method")
    //   }
    // }
    // class child extends parent{

    //   fun1(){
    //     console.log("What the hell is this? change the first keyword");
    //   }
    // }

    // let obj= new child;
    // obj.fun1();


    /**
     * Super keyword
     *
     *1) Called a method form paren class to child class
     */

     class parents{
      fun1(){
        console.log("Hello word");
      }
      fun2(){
        console.log("This is the second function");
      }

     }

     class child extends parents{
      demo(){
        super.fun1();
        super.fun2();
      }
     }
     let obj=new child;
     obj.demo();
      

      
    
    
  

   



    






 

