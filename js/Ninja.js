//忍者类
(function(){
    window.Ninja = function(){
        //设置宽高的属性
        this.w = 80;
        this.h = 112;

        //设置水平轴 垂直轴距离
        this.x = 30;
        this.y = 420;
        //运动属性
        this.idx = 10;
        this.idy = 0;
        //切换图片属性
        this.imgid = 1;

        this.dir = "";

		// 控制y轴跳多大距离
		this.dy = 43;
		// 给左右方向都做了判断跳的属性
		this.isdong = false;
		// 控制跳的方法
		this.istiao = false;
    }
    Ninja.prototype.render = function(){
        game.ctx.drawImage(game.imgArr["ninja" + this.imgid],this.x + this.w / 2,this.y - 10);
        //console.log(this.y)
    }
    Ninja.prototype.update = function(){
        if(game.tram.direction=="右"){
            this.idx += 3;
            this.x += this.idx;
            //右边范围
            if(this.x > game.width - game.tram.w){
                this.x = game.width - game.tram.w - 10;
            }
        }else if(game.tram.direction=="左"){
            this.idx -= 3;
            this.x += -this.idx;
            if(this.idx < 0) game.tram.direction = "右";
             //左边范围
            if(this.x < 10) this.x = 10;
        }else if(game.tram.direction=="蹦"){
            // this.dir = "上升";
            // console.log(this.dir)
            this.fly();
            //console.log(this.y)
        }
    }
    Ninja.prototype.fly = function(){
        // 判断跳起来的一些属性
		if (this.istiao) {
			this.y += -this.dy;
           
            this.dy += - 2.5;
            //console.log(this.dy)
			this.a1 = this.x;
			this.a2 = this.x + this.w / 4 + this.n;
			this.b1 = game.height - this.h / 2 - 50 + game.tram.h - this.y;
            this.b2 = (game.height - this.h / 2 - 50 + game.tram.h + this.h / 4-this.y)-5;

            if(this.dy == 0.5) this.imgid = 2;
			
			// 关掉跳的动作
			if (this.y >= game.height - this.h) {
				this.y = game.height - this.h - 50;
                this.dy = 43;
                this.imgid = 1;
				this.istiao = false;
			}
		}
    }
})()