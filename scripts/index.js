class praiseBtn{
    constructor(num,element){
        this.num=num;
        this.element=element;
    }
    clickAction(){
        this.element.click(()=>{
            if(this.num<10){
                this.element.css({'-webkit-filter':'grayscale(0)'});
                $('.up').addClass('upAction');
                console.log($('.up')[0]);
                this.num=add(this.num);
                setTimeout(()=>{
                    $('.up').removeClass('upAction');
                },1000);
            }else{
                this.element.css({'-webkit-filter':'grayscale(1)'});
                this.num=0;
            }
            console.log(this.num);
        });
    }  
}

class Thumb extends praiseBtn{
    constructor(num,element){
        super(num,element);
    }
}
export {Thumb}



