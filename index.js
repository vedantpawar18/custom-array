


function myArray ()
{
    Object.defineProperty(this,"lenght",{
        value:0,
        writable:true,
        enumerable:false,
    });

    this.length=arguments.length;

    for (i=0; i<this.length; i++)
    {
        this[i]=arguments[i];
    }
}

let Arr= new myArray(1,2,3,4,5,6,7,12);

myArray.prototype.push=function(value){
    let index=this.length;

    this[index]=value;
    this.length++;
}

myArray.prototype.pop=function(){
    let index=this.length-1;

    delete this[index];
    this.length--;
}

myArray.prototype.top=function(){
    let index=this.length-1;

    return this[index];
}

myArray.prototype.print=function(){

    var bag="";
    for (index=0; index<this.length; index++)
    {
        bag=bag+this[index]+" ";
    }
    return bag; 
}

myArray.prototype.printReverse =function(){
    
    var bag="";
    for (index=this.length-1; index>=0; index--)
    {
        bag=bag+this[index]+" ";
    }
    return bag; 
}


myArray.prototype.size =function(){
    
   return this.length;
}

console.log(Arr.size())