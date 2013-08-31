Ext.ns('Thang.view.center');

Thang.view.center.Database=Ext.extend(Ext.Panel,{

	constructor:function(config){
         config=config||{};
         Ext.apply(this,config);
         Thang.view.center.Database.superclass.constructor.call(this,{
            layout:'border',
            items:[{
                    region:'center',
                    autoLoad:{url:'sys/database',scripts:true}
                },{
                    region:'east',
                    collapsible:true, 
                    width:600,
                    xtype:'form',
                    labelWidth: 75,
                    bodyStyle:'padding:5px 5px 0',
                    items:[{
                        xtype:'fieldset',
                        title:Ext.bigFont('数据库配置'),
                        columnWidth: 0.5,
                        defaultType:'textfield',
                        items:[{
                                fieldLabel: '账号',
                                name:'dbname'
                            }, {
                                fieldLabel: '密码',
                                name:'dbpass'
                            }, {
                                fieldLabel: '类型',
                                xtype:'checkbox',
                                name:'type',
                                value:'true'
                            }
                        ]
                    },{
                        xtype:'fieldset',
                        title:Ext.bigFont('自动备份配置'),
                        columnWidth: 0.5,
                        defaultType:'textfield',
                        collapsed:true,
                        checkboxToggle:true,
                        items:[{
                                fieldLabel:'间隔时间(天)',
                                name:'waitTime'
                            }
                        ]

                    }],//form panel item end
                    buttons:[{
                        text:Ext.bigFont('测试数据库')
                    },{
                        text:Ext.bigFont('备份数据库')
                    },{
                        text:Ext.bigFont('启动自动备份')
                    }]
                },{
                    title:Ext.bigFont('控制台'),
                    collapsible:false,
                    region:'south',
                    height:120

                }]
         });         
	}
});