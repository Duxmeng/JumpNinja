//八卦类
(function(){
    window.Eight = function(){
        this.w = 40;
        this.h = 49;
        this.x = 800;
        this.y = 60;
        this.lx = 0;
        this.ly = 100;
        game.eightArr.push(this);
    }
    Eight.prototype.render = function(){
        game.ctx.drawImage(game.imgArr["bgua"],this.x,this.y);
        game.ctx.drawImage(game.imgArr["bgua"],this.lx,this.ly);
    }
    Eight.prototype.update = function(){
        this.x -= 1;
        this.lx += 1.5;

        this.tx1 = game.ninja.x;
        this.tx2 = this.tx1 + game.ninja.w;
        this.ty1 = parseInt(game.ninja.y);
        this.ty2 = this.ty1 + game.ninja.h;
        //console.log(this.ty1)
        this.ex1 = this.x;
        this.ex2 = this.ex1 + this.w/2;
        this.ey1 = this.y;

        this.lx1 = this.lx;
        this.lx2 = this.lx1 + this.w/2;
        this.ly1 = this.ly + this.h / 2;
        //console.log(this.tx2,this.ex1,this.tx1,this.ex2,this.ty1,this.ey1);
        if(this.tx2 > this.ex1 && this.tx1 < this.ex2 && this.ty1 < this.ey1){
            this.y -= 300;
            //console.log(111)
            game.score += 5;
            game.dar2.play();

        }
        //console.log(this.tx2,this.lx1,this.tx1,this.lx2,this.ty1,this.ly1)
        if(this.tx2 < this.lx1 && this.tx1 < this.lx2 && this.ty1 < this.ly1){
            this.ly -= 300;
            //console.log(111)
            game.score += 5;
            game.dar4.play();

        }
    }
})()