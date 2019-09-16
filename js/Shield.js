//盾类
(function(){
    window.Shield = function(){
        this.w = 65;
        this.h = 65;
        this.x = 800;
        this.y = 40;
        this.lx = 0;
        this.ly = 70;
        game.shieldArr.push(this);
    }
    Shield.prototype.render = function(){
        game.ctx.drawImage(game.imgArr["dun"],this.x,this.y);
        game.ctx.drawImage(game.imgArr["dun"],this.lx,this.ly);
    }
    Shield.prototype.update = function(){
        this.x -= 2;
        this.lx += 1;

        this.tx1 = game.ninja.x;
        this.tx2 = this.tx1 + game.ninja.w;
        this.ty1 = parseInt(game.ninja.y);
        this.ty2 = this.ty1 + game.ninja.h;
        
        this.ex1 = this.x;
        this.ex2 = this.ex1 + this.w/2;
        this.ey1 = this.y;

        this.lx1 = this.lx;
        this.lx2 = this.lx1 + this.w / 2;
        this.ly1 = this.ly + this.h / 2;
        if(this.tx2 > this.ex1 && this.tx1 < this.ex2 && this.ty1 < this.ey1){
            this.y -= 300;
            game.score += 10;
            game.dar1.play();
        }
        if(this.tx2 > this.lx1 && this.tx1 < this.lx2 && this.ty1 < this.ly1){
            this.ly -= 300;
            game.score += 10;
            game.dar1.play();
        }
    }
})()