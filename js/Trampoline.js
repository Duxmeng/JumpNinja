//蹦床类
(function(){
    window.Tram = function(){
        //设置宽高的属性
        this.w = 150;
        this.h = 80;
        //设置水平轴、垂直轴的距离
        this.x = 30;
        this.y = 420;
        //运动属性
        this.idx = 10;
        //方向属性
        this.direction = "";
        this.imgid = 0;
    }
    Tram.prototype.render = function(){
        game.ctx.drawImage(game.imgArr["battle" + this.imgid],this.x,this.y + this.h)
    }
    Tram.prototype.update = function(){
        if(this.direction=="右"){
            this.idx += 3;
            this.x += this.idx;
            //右边范围
            if(this.x > game.width - this.w){
                this.x = game.width - this.w - 10;
            }
        }else if(this.direction=="左"){
            this.idx -= 3;
            this.x += -this.idx;
            if(this.idx < 0) this.direction = "右";
             //左边范围
            if(this.x < 10) this.x = 10;
        }
    }
})()