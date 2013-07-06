Ext.ns('Thang.view.system.form');

Thang.view.system.form.RoleForm=Ext.extend(Ext.Window,{
     
     constructor:function(config){
     	 config=config||{};
     	 Ext.apply(this,config);
         Thang.view.system.form.RoleForm.superclass.constructor.call(this,{
         	layout:'fit',
         	height:150,
         	width:450,
         	autoShow:false,
         	plain:true,
         	modal:true,
         	resizable:false,
         	title:Ext.bigFont('角色表单'),
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
                    originalValue:'0',
                    value:'0'
                },{
                	name:'name',
                	allowBlank:false,
                	fieldLabel:'角色名'
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
                	this.findParentByType('roleform').findByType('form')[0].getForm().reset();
                }
         	},{
         		text:Ext.bigFont('保存'),
         		handler:function(btn,evnt){
                    var winForm=this.findParentByType('roleform');
                    var form=winForm.findByType('form')[0];
                    if(form.getForm().isValid()){
                       form.getForm().submit({
                    	url:'sys/role/save',
                    	waitTitle:'保存',
                    	waitMsg:'保存到数据库...',
                    	success:function(form, action){
                            if('0'==action.result.msg){
                               Ext.Msg.alert('操作提示','保存成功！',function(){
                                    winForm.close();
                               });
                            }else{
                               Ext.Msg.alert('操作提示','保存失败！',function(){
                                    //winForm.close();
                               });
                            }
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
     setValues:function(values){
         this.findByType('form')[0].getForm().setValues(values);
     },
     loadRecord:function(rec){
         var bform=this.findByType('form')[0].getForm();
         bform.loadRecord(rec);
     }

});