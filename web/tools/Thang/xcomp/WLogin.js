Ext.ns('Thang');
//login window class
Thang.WLogin=Ext.extend(Ext.Window,{

    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
        Thang.WLogin.superclass.constructor.call(this,{
            flex:3,
	        width:300,
	        height:160,
	        plain:true,
	        iconCls:'icon-lock_key',
            layout:'fit',
	        closable:false,
	        closeAction:"hide",
            title:Ext.bigFont('系统登陆'),
            buttons:[
                    {
			           text:Ext.bigFont('确定'),
				       handler:function(btn,evt){
				       	   Ext.getCmp('loginForm').getForm().submit();
			            }
			        },{
			           text:Ext.bigFont('重置'),
				       handler:function(btn,evt){
				           Ext.getCmp('loginForm').getForm().reset();
				       }
			        }
			 ],
			items:[{
				    id:'loginForm',
				    xtype:'form',
                    activeItem:1,
                    plain:true,
		            frame:true,
		            standardSubmit: true,//标准的HTML表单提交
		            layout:'absolute',
		            baseCls:'x-plain',
		            defaultType:'textfield',
		            url:'login?rememberMe=true',
		            labelAlign:'right',
		            items:[{
				        xtype:'label',
					    html:Ext.bigFont('账号：'),
					    x:15,
			            y:5
				      },{		      
					    name:'username',
					    allowBlank:false,
					    width:160,
					    blankText:'用户名不能为空！',
					    msgTarget:'side',
					    focus:true,
					    x:90,
			            y:5
				     },{
					   	xtype:'label',
					    html:Ext.bigFont('密码：'),
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
								var form=Ext.getCmp('loginForm').getForm();
                                 if(form.isValid()){
                                     form.submit();
                                 }
							}
						  }]

			}]// items loginform end
        });//call end

    }//constructor end

});