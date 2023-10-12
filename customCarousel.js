import { LightningElement,api } from 'lwc';
const CARD_VISIBLE_CLASSES='slds-show'
const CARD_HIDDEN_CLASSES='slds-hide'

const DOT_VISIBLE_CLASSES='dotactive'
const DOT_HIDDEN_CLASSES='dot'

const DEFAULT_SLIDER_TIMER=3000


export default class CustomCarousel extends LightningElement {
    slides=[]
    slideIndex=1
    timer
    
    @api slideTimer= DEFAULT_SLIDER_TIMER
   @api 
   get slidesData(){
      return this.slides
   }
   set slidesData(data){
    this.slides=this.slides.map(item=>{
        return index===item.slideIndex?{
            ...item,
            cardClasses:CARD_VISIBLE_CLASSES,
            dotClasses:DOT_VISIBLE_CLASSES
        }:{
            ...item,
            cardClasses:CARD_HIDDEN_CLASSES,
           dotClasses:DOT_HIDDEN_CLASSES
        }
    })
   }

   connectedCallback(){
     this.timer= window.setInterval(()=>{
         this.slideSelectionHandler(this.slideIndex+1)
      }, Number(this.slideTimer))
    }
      disconnectedCallback(){
        window.clearInterval(this.timer)
      }


   
   slideSelectionHandler(id)
   {
    if(id> this.slides.length){
        this.slideIndex=1
    }else if(id<1){
        this.slideIndex=this.slides.length
    } else{
        this.slideIndex=id
    }
   }
}

