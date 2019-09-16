//鸟类
(function(){
    window.Bird = function(){
        this.w = 25;
        this.h = 25;

        this.x = 700;
        this.y = _.random(200,500);
        this.imgid = 0;
        
        this.lx = 0;
        this.ly = _.random(200,500);    
        this.imgidx = 2;
        game.birdArr.push(this);
    }
    Bird.prototype.render = function(){
        game.ctx.drawImage(game.imgArr["bird" + this.imgid],this.x,this.y);
        game.ctx.drawImage(game.imgArr["bird" + this.imgidx],this.lx,this.ly);
    }
    Bird.prototype.update = function(){
        this.x --;
        this.y -= 0.8;
        this.lx += 0.5;
        this.ly -= 0.5 ;
        if(game.frame % 30 == 0){
            this.imgid ++;
            this.imgid = this.imgid > 1 ? 0 : this.imgid;
        }
        if(game.frame % 50 == 0){
            this.imgidx ++;
            this.imgidx = this.imgidx > 3 ? 2 : this.imgidx;
        }
    }
  
})()