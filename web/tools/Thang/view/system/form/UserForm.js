Ext.ns('Thang.view.system.form');

Thang.view.system.form.UserForm=Ext.extend(Ext.Window,{
     
     constructor:function(config){
     	 config=config||{};
     	 Ext.apply(this,config);
         Thang.view.system.form.UserForm.superclass.constructor.call(this,{
         	layout:'fit',
         	height:300,
         	width:450,
         	autoShow:false,
         	plain:true,
         	modal:true,
         	resizable:false,
         	title:Ext.bigFont('用户表单'),
         	items:[{
                xtype:'form',
                labelAlign:'right',
                defaultType:'textfield',
                baseCls:'x-plain',
                defaults:{
                	width:150
                },
                items:[{
                    id:'id',
                	name:'id',
                	xtype:'hidden',
                    originalValue:'0',
                    value:'0'
                },{
                	name:'userName',
                	allowBlank:false,
                	fieldLabel:'用户名'
                },{
                	hiddenName:'sex',
                	xtype:'combo',
                	fieldLabel:'性别',
                	store:new Ext.data.ArrayStore({
                		fields:['value','text'],
                	    data:[['0','女'], ['1','男']]	
                	}),
                	mode:'local',
                	allowBlank:false,
                	valueField:'value',
                	displayField:'text',
                	triggerAction:'all',
                	forceSelection:true,
                	selectOnFocus:true
                },{
                    id:'birth',
                	xtype:'datefield',
                    format:'Y-m-d',
                    name:'birth',
                	allowBlank:false,
                	fieldLabel:'出生日期'
                },{
                    id:'loginName',
                	name:'loginName',
                	allowBlank:false,
                	fieldLabel:'登陆名',
                    regex:/^[a-z|A-Z]+$/,
                    regexText:'只能输入英文字符！'
                },{
                    id:'loginPass',
                	name:'loginPass',
                	allowBlank:false,
                	inputType:'password',
                	fieldLabel:'登陆密码'
                },{
                	name:'dept',
                	xtype:'hidden'
                },{
                	name:'opt',
                	xtype:'textarea',
                	autoScroll:true,
                	maxLength:110,
                	width:250,
                	height:80,
                	fieldLabel:'备注'
                }]//field end
         	}],//formpanel end
         	buttons:[{
                text:Ext.bigFont('重置'),
                handler:function(btn,evnt){
                	this.findParentByType('userform').findByType('form')[0].getForm().reset();
                }
         	},{
         		text:Ext.bigFont('保存'),
         		handler:function(btn,evnt){
                    var winForm=this.findParentByType('userform');
                    var form=winForm.findByType('form')[0];
                    if(form.getForm().isValid()){
                        UserFn.exist.call(winForm);
                    }// if end
                    
         		}
         	}]
         });//call end
     },//constructor end
     setValues:function(values){
         this.findByType('form')[0].getForm().setValues(values);
     },
     loadRecord:function(rec){
         var bform=this.findByType('form')[0].getForm();
         bform.loadRecord(rec);
     }

});


UserFn={
    exist:function(){//认证用户是否存在，用loginName
        var winForm=this;
        var form=this.findByType('form')[0];
        var bform=form.getForm();
        Ext.Ajax.request({
                            async:false,
                            url:'sys/user/exist',
                            success:function(response,opt){
                               var result=Ext.decode(response.responseText);
                               if('1'==result.msg){
                                   msg='登陆名己被使用！';
                                   this.findField('loginName').markInvalid('登陆名己被使用！');
                               }else{
                                    UserFn.submitForm.call(winForm);
                               }// if end
                            },//success end
                            failure:function(){
                                Ext.Msg.alert('提示','请求出错！');
                            },
                            params:{'id':bform.findField('id').getValue(),'name':bform.findField('loginName').getValue()},
                            scope:bform
                        });
    },
   submitForm:function(){//提交表单数据
        var winForm=this;
        var form=this.findByType('form')[0];
        var bform=form.getForm();
        bform.submit({
                url:'sys/user/save',
                waitTitle:'保存',
                waitMsg:'保存到数据库...',
                success:function(form, action){
                         if('0'==action.result.msg){
                                   Ext.Msg.alert('操作提示','保存成功！',function(){
                                      winForm.close();
                                   });
                          }else{
                                   Ext.Msg.alert('操作提示','保存失败！',function(){
                                        winForm.close();
                                    });
                          }
                },
                failure:function(form, action){
                           Ext.Msg.alert('失败', '请求出错！');
                }
        });//submit end
   }
};