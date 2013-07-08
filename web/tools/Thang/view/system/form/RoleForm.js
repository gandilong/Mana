Ext.ns('Thang.view.system.form');

Thang.view.system.form.RoleForm=Ext.extend(Ext.Window,{
     
     constructor:function(config){
     	 config=config||{};
     	 Ext.apply(this,config);
         Thang.view.system.form.RoleForm.superclass.constructor.call(this,{
         	layout:'fit',
         	height:210,
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
                	fieldLabel:'角色标示',
                    regex:/^[a-z|A-Z]+$/,
                    regexText:'只能输入英文字符！',
                    validationEvent:'blur',
                    validator:function(value){
                        var msg;
                        if(!value||''==value){
                            return '标示不能为空！';
                        }
                        Ext.Ajax.request({
                            async:false,
                            url:'sys/role/exist',
                            success:function(response,opt){
                               var result=Ext.decode(response.responseText);
                               if('1'==result.msg){
                                   msg='标示己被使用！';
                                   this.markInvalid('标示己被使用！');
                               }else{
                                   msg=true;
                               }
                            },
                            failure:function(){
                                Ext.Msg.alert('提示','请求出错！');
                            },
                            params:{'name':value},
                            scope:this
                        });
                        return msg;
                    }
                },{
                    name:'title',
                    allowBlank:false,
                    fieldLabel:'角色名称'
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