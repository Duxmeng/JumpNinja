//背景类
(function(){
    window.Bg = function(){
        //设置背景图宽高的属性
        this.w = game.width;
        this.h = game.height;
    }
    Bg.prototype.render = function(){
        //绘制背景图
        game.ctx.drawImage(game.imgArr["bg"],0,0)
    }
    window.Play = function(){
        //设置背景图宽高的属性
        this.w = game.width;
        this.h = game.height;
    }
    Play.prototype.render = function(){
        //绘制背景图
        game.ctx.drawImage(game.imgArr["play"],0,0)
    }
})()