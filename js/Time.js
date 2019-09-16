//时间、分数类
(function(){
    window.Time = function(){
        this.w = 150;
        this.h = 38;
        this.x = 20;
        this.timeText = 50;
    }
    Time.prototype.render = function(){
        game.ctx.drawImage(game.imgArr["time"],this.x,10);
        game.ctx.fillStyle = "white";
        game.ctx.font = "20px Aria";
        game.ctx.fillText(this.timeText +"s",this.w/2 + 20,35);

    }
    Time.prototype.update = function(){
        this.timeText --;
        if(this.timeText <= 0 && game.score < 200){
            game.ctx.drawImage(game.imgArr["out"],this.x,150);
            clearInterval(game.timer);
            //失败音乐
            self.out.play();
            //暂停背景音乐
            self.audio.pause();
        }else if(this.timeText > 0 && game.score > 200){
            game.ctx.drawImage(game.imgArr["well"],this.x + 20,150);
            clearInterval(game.timer);
            //成功音乐
            self.sc.play();
            //暂停背景音乐
            self.audio.pause();
        }
    }

    window.Score = function(){
        this.w = 150;
        this.h = 38;

        this.x = 180;
        this.scoreText = 0;
    }
    Score.prototype.render = function(){
        this.scoreText = game.score;
        game.ctx.drawImage(game.imgArr["score"],this.x,10);
        game.ctx.fillStyle = "white";
        game.ctx.font = "20px Aria";
        game.ctx.fillText(this.scoreText +"分",this.x + 90,35);
    }
})()