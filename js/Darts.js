//飞镖类
(function(){
    window.Darts = function(){
        this.w = 65;
        this.h = 70;
        this.x = 800;
        this.y = 70;

        this.lx = 0;
        this.ly = 120;
        this.rt = 0;
        game.dartsArr.push(this);
    }
    Darts.prototype.render = function(){
        game.ctx.save();
        game.ctx.translate(this.x,this.y);
        game.ctx.rotate(this.rt);
        game.ctx.drawImage(game.imgArr["fb"],-this.w/2,-this.h/2);
        game.ctx.restore();

        game.ctx.save();
        game.ctx.translate(this.lx,this.ly);
        game.ctx.rotate(this.rt);
        game.ctx.drawImage(game.imgArr["fb"],-this.w/2,-this.h/2);
        game.ctx.restore();
    }
    Darts.prototype.update = function(){
        this.x -= 1.5;
        this.lx += 1.5;
        this.rt += 0.1;

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
        if(this.tx2 > this.ex1 && this.tx1 < this.ex2 && this.ty1 < this.ey1){
            this.y = -35;
            game.score = game.score - 10;
            game.close.play();
        }
        if(this.tx2 > this.lx1 && this.tx1 < this.lx2 && this.ty1 < this.ly1){
            this.ly  = -35;
            game.score = game.score - 10;
            game.close.play();
        }
    }
})()