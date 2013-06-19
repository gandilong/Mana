//权限插件
Ext.ns("Thang.window");
Ext.QuickTips.init();

Ext.BLANK_IMAGE_URL = '../store/extjs/resources/images/default/s.gif';

Ext.form.Field.prototype.msgTarget = "side";

var utils=new Thang.util.Utils();

Thang.window.LoginWindow=Ext.extend(Ext.Window,{

       constructor:function(config){
		   config=config||{};
		   //config.items=this.form;
		   Ext.apply(this,config);
	       Thang.window.LoginWindow.superclass.constructor.call(this,{

                   	   flex:3,
						   width:300,
						   height:160,
						   //frame:true,
						   plain:true,
						   iconCls:'icon-lock_key',
					       layout:'fit',
						   closable:false,
						   closeAction:"hide",
					       title:utils.bigFont('系统登陆',false,false),
						   items:[{
						       xtype:'form',
					           id:'login_form',
					           standardSubmit: true,
							   plain:true,
							   frame:true,
							   baseCls: 'x-plain',
							   layout:'absolute',
							   defaultType:'textfield',
							   labelAlign:'right',
							   url:'login?rememberMe=true',
							   items:[{
							        xtype:'label',
								    html:utils.bigFont('账号：'),
								    x:15,
								    y:5
							      },{		      
								    name:'username',
								    allowBlank:false,
								    width:160,
								    blankText:'用户名不能为空！',
								    focus:true,
								    x:90,
								    y:5
							     },{
								   	xtype:'label',
								    html:utils.bigFont('密码：'),
								    x:15,
								    y:45
								 },{
								    name:'password',
									inputType:'password',
								    allowBlank:false,
								    blankText:'密码不能为空！',
								    msgTarget:'side',
								    width:160,
								    x:90,
								    y:45
							     }],
							     keys:[{
							          key:13,fn:function(){
							                  //Ext.getCmp('login_form').login();
							                  //this.login();
							                  //console.log(this);
							                  //console.log(this.xtype);
							                  //this.findById('login_form').login();
							                  //this.login();
							                  if(Ext.getCmp('login_form').getForm().isValid()){
							                  	console.log('good job!');
							                  	Ext.getCmp('login_form').getForm().submit();
							                  	/*Ext.getCmp('login_form').getForm().submit({
                                                       url:'login?rememberMe=true',
                                                       success: function(form, action) {
                                                       	console.log('login success!!');
                                                        window.location.href=utils.hostURL+'/web/app';
                                                       },
                                                       failure: function(form, action) {
                                                           switch (action.failureType) {
                                                                case Ext.form.Action.CLIENT_INVALID:
                                                                     Ext.Msg.alert('失败', '表单值无效！');
                                                                     break;
                                                                case Ext.form.Action.CONNECT_FAILURE:
                                                                     Ext.Msg.alert('失败', '请求失败！');
                                                                     break;
                                                                case Ext.form.Action.SERVER_INVALID:
                                                                     Ext.Msg.alert('失败', action.result.msg);
                                                            }
                                                        }
                                                   });//submit end
*/
							                  }
							          }
						        }],
					       
					       buttons:[{
								     text:utils.bigFont('确定'),
									 handler:function(btn,evt){
										 
					                                         //utils.parent(this,2).login();
					                                         this.findParentByType('form').getForm().submit();
								    }},{
								     text:utils.bigFont('重置'),
									 handler:function(btn,evt){
									     this.findParentByType('form').getForm().reset();
									 }
								  }]

					}]

              
	       });//call end
        
	   }//constructor end
             

    
		   


});
