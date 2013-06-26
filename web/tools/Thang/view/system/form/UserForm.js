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
         	//closeAction:'hide',
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
                	name:'id',
                	xtype:'hidden',
                    originalValue:'0'
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
                	name:'brith',
                	format:'Y-m-d',
                	allowBlank:false,
                	xtype:'datefield',
                	fieldLabel:'出生日期'
                },{
                	name:'loginName',
                	allowBlank:false,
                	fieldLabel:'登陆名'
                },{
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
                	var form=this.findParentByType('userform').findByType('form')[0];
                	var idFieldValue=form.getForm().findField('id').getValue();
                    form.getForm().reset();
                	//form.findByType('hidden')[1].setValue(this.store.getBaseParamsExt.fly('_dept_id').getValue());//从list.jsp页面上得到部门的ID
                }
         	},{
         		text:Ext.bigFont('保存'),
         		handler:function(btn,evnt){
                    var form=this.findParentByType('userform').findByType('form')[0];
                    form.findByType('hidden')[1].setValue(Ext.fly('_dept_id').getValue()); //从list.jsp页面上得到部门的ID
                    
                    if(form.getForm().isValid()){
                       form.getForm().submit({
                    	url:'sys/user/save',
                    	waitTitle:'保存',
                    	waitMsg:'保存到数据库...',
                    	success:function(form, action){
                            if('0'==action.result.msg){
                               //save ok
                            }else{
                                //save fail
                                //Ext.Msg.alert('Success', action.result.msg);
                            }
                            store.reload();
                    	},
                    	failure:function(form, action){
					       Ext.Msg.alert('失败', '请求出错！');
                    	}
                      });//submit end
                    }// if end
                    
         		}
         	}]
         });//call end
     },//constructor end
     loadRecord:function(rec){

     }

});