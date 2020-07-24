//This class generates a living simulator
class Biosensor {
    constructor(name){
        this.owner=name; 
        this.heartRate=0;
        this.live()
    }
        generateRandomArbitrary(min, max){
        return parseInt(Math.random() * (max - min) + min);
    }  
       generateHeartBeat(){
           let HeartBeat=this.generateRandomArbitrary(60,70);
           this.heartRate=HeartBeat;
           console.log('[Owner]:'+this.owner+' ---- [HR]:'+this.heartRate)
        }
           
        // living function simply starts an endless interval to generate a beat
        live (){
            setInterval(() => {this.generateHeartBeat()},1000)
        }
       }
let james=new Biosensor('james')
let Sarah=new Biosensor('Sarah')
let Anthony=new Biosensor('Anthony')
