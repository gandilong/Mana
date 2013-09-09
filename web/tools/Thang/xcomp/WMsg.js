//  工具组件
Ext.ns("Thang");

Thang.WMsg=Ext.extend(Ext.Window,{
	                     width:300,
						 height:200,
						 showTime:6000,
						 closeAction:'hide',
						 draggable:false,
						 resizable:false,
						 isAutoClose:true,
						 animateTarget:Ext.getBody(),
						 showAnimDuration:.6,
						 html:'<span style="font-size:13px;margin-left:90px;"><b>暂&nbsp;&nbsp;无&nbsp;&nbsp;消&nbsp;&nbsp;息 !</b></span>',
					     constructor:function(config){
							 config=config||{};
						     Ext.apply(this,config);
						     Thang.WMsg.superclass.constructor.call(this);
						 },
						 animShow:function(){
                           	   this.el.slideIn('b', {
									easing: 'easeOut',
									duration: this.showAnimDuration,
									remove: false,
									useDisplay: false
								});
								
                         },
						 animHide:function(){
							 this.el.slideOut('b', {
									easing: 'easeOut',
									duration: this.showAnimDuration,
									remove: false,
									useDisplay: false
							 });
                         },
					     beforeShow:function(){
						        delete this.el.lastXY;
								delete this.el.lastLT;
								if(this.x === undefined || this.y === undefined){
									var xy = this.el.getAlignToXY(this.container, 'br-br');
									var pos = this.el.translatePoints(xy[0], xy[1]);
									this.x = (this.x === undefined? pos.left : this.x)-7;
									this.y = (this.y === undefined? pos.top : this.y)-10;
								}
								this.el.setLeftTop(this.x, this.y);

								if(this.expandOnShow){
									this.expand(false);
								}

								if(this.modal){
									Ext.getBody().addClass('x-body-masked');
									this.mask.setSize(Ext.lib.Dom.getViewWidth(true), Ext.lib.Dom.getViewHeight(true));
									this.mask.show();
								}
						 },//before show end
						 onRender:function(ct,position){
							 Thang.WMsg.superclass.onRender.call(this, ct, position);
						     this.el.hover(function(){
								this.isAutoClose=false;
							 },function(){
							    this.isAutoClose=true;
								this.close.defer(this.showTime,this);
							 },this);                      
							
						 },
						 show:function(){
							 Thang.WMsg.superclass.show.call(this);
							 this.close.defer(this.showTime,this);
						 },
					     close:function(){
                             if(this.isAutoClose){
							     this.setVisible(false);
							 }
						 }
						 
});//WMsg end