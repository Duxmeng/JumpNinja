(function(){
    window.Game = function(){
        //获取canvas节点
        this.canvas = document.getElementById("canvas");
        this.audio = document.getElementById("audio");
        this.dar = document.getElementById("darts");
        this.dar1 = document.getElementById("darts");
        this.dar2 = document.getElementById("darts");
        this.dar3 = document.getElementById("darts");
        this.dar4 = document.getElementById("darts");
        this.close = document.getElementById("close");
        this.out = document.getElementById("out");
        this.sc = document.getElementById("sc");
        //获取canvas上下文
        this.ctx = this.canvas.getContext("2d");
        //获取设备的宽高
        this.width = 800;
        this.height = 583;
        //实例化蹦床类
        this.tram = new Tram;
        //实例化忍者类
        this.ninja = new Ninja;
        //heart实例数组
        this.heartArr = [];
        //shield实例数组        
        this.shieldArr = [];
        //飞镖实例数组        
        this.dartsArr = [];
        //钱币实例数组        
        this.coinArr = [];
        //八卦实例数组        
        this.eightArr = [];
        //鸟类实例数组
        this.birdArr = [];
        //设置分数属性
        this.score = 0;
        //实例化时间类
        this.time = new Time;
        //实例化时间类
        this.scoreText = new Score;
        //调用原型对象加载全部图片的方法
        this.loadImg();
        //绑定监听事件
        this.bind();
    }
    //原型对象加载全部图片的方法
    Game.prototype.loadImg = function(){
        //备份函数上下文
        var self = this;
        //使用json存储图片的路径
        this.imgArr = {
            "play":"./image/play.png",
            "bg":"./image/bgr.png",
            "battle0":"./image/battle3.png",
            "battle1":"./image/battle4.png",
            "ninja1":"./image/ninja.png",
            "ninja2":"./image/ninja1.png",
            "ninja3":"./image/ninja2.png",
            "heart":"./image/heart1.png",
            "dun":"./image/dun.png",
            "fb":"./image/fb.png",
            "coin":"./image/coin.png",
            "bgua":"./image/bgua.png",
            "bird0":"./image/bird.png",
            "bird1":"./image/bird1.png",
            "bird2":"./image/bird2.png",
            "bird3":"./image/bird3.png",
            "score":"./image/score.png",
            "time":"./image/time.png",
            "out":"./image/out.png",
            "well":"./image/well.png",
        }
        //获取所有图片的个数
        var allCount = Object.keys(this.imgArr).length;
        var count = 0;
        //快速遍历imgArr的json
        for(k in this.imgArr){
            //备份图片路径
            var src = this.imgArr[k];
            //给json的k 重新赋值为 img节点
            this.imgArr[k] = new Image;
            //设置节点的src属性值
            this.imgArr[k].src = src;
            //使用onload事件 判断图片是否加载完毕
            this.imgArr[k].onload = function(){
                count++;
                if(count == allCount){
                    //实例化背景类
                    self.play = new Play;
                    self.play.render();
                    self.canvas.onclick = function(){
                        //播放背景音乐
                        self.audio.play();
                        self.bg = new Bg;
                        self.start();
                        self.canvas.onclick = null;
                    }
                    
                }
            }
        }
    }
    //游戏开启的方法
    Game.prototype.start = function(){
        var self = this;
        self.frame = 0;
        self.timer = setInterval(function(){
            self.frame++;
            self.ctx.clearRect(0,0,self.width,self.height);
            //渲染背景类
            self.bg.render();
            //渲染蹦床类
            self.tram.render(); 
            //渲染忍者类
            self.ninja.render();
            //self.ninja.update();
            self.ninja.fly();
            //渲染鸟类
            self.frame % 600 == 0 && new Bird;
            for(var i = 0;i < self.eightArr.length;i++){
                self.birdArr[i].render();
                self.birdArr[i].update();
            }
            //渲染心类
            self.frame % 500 == 0 && new Heart;
            for(var i = 0;i < self.heartArr.length;i++){
                self.heartArr[i].render();
                self.heartArr[i].update();
            }

            //渲染盾类
            self.frame % 300 == 0 && new Shield;
            for(var i = 0;i < self.shieldArr.length;i++){
                self.shieldArr[i].render();
                self.shieldArr[i].update();
            }

            //渲染飞镖类
            self.frame % 400 == 0 && new Darts;
            for(var i = 0;i < self.dartsArr.length;i++){
                self.dartsArr[i].render();
                self.dartsArr[i].update();
            }
            //渲染钱币类
            self.frame % 700 == 0 && new Coin;
            for(var i = 0;i < self.coinArr.length;i++){
                self.coinArr[i].render();
                self.coinArr[i].update();
            }
            //渲染八卦类
            self.frame % 600 == 0 && new Eight;
            for(var i = 0;i < self.eightArr.length;i++){
                self.eightArr[i].render();
                self.eightArr[i].update();
            }
            // 渲染更新时间类
            self.time.render();
            self.frame % 50 == 0 && self.time.update();
            
            self.scoreText.render();

        },20)
    }
    //监听事件
    Game.prototype.bind = function(){
        //备份上下文
        var self = this;
        //console.log(self)
        document.onkeydown = function(e){
            if(e.keyCode == 37){
                //更改方向
                self.tram.direction = "左";
                //渲染 更新蹦床类
                self.tram.render(); 
                self.tram.update();
                //渲染 更新忍者类
                self.ninja.render();
                self.ninja.update();
            }else if(e.keyCode == 39){
                //更改方向
                self.tram.direction = "右";
                //渲染 更新蹦床类
                self.tram.render(); 
                self.tram.update();
                //渲染 更新忍者类
                self.ninja.render();
                self.ninja.update();
            }else if(e.keyCode == 32){
                //更改方向
                self.tram.direction = "蹦";
                //self.ninja.dir = "上升";
                self.ninja.istiao = ! self.ninja.istiao;
                self.tram.imgid = 1;
            }
        }
        document.onkeyup = function(){
            self.tram.imgid = 0;
        }
   }
})()