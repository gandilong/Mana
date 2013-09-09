Ext.ns('Thang');
Thang.Power=Ext.extend(Object,{

     constructor:function(config){
         Ext.apply(this,config);
         this.initData();
         Thang.Power.superclass.constructor.call(this);
     },
     initData:function(){
     	Ext.Ajax.request({
     		url:'sys/user/id',
     		success:function(response,opt){
               if(response.responseText.length>0){
                           	Ext.Ajax.request({
     		                    url:'sys/user/auth',
     		                    params:{user_id:response.responseText},
     		                    success:function(response,opt){
                                    this.data=response.responseText;
     		                    },
     		                   scope:this
     	                   });
               }
     		},
     		scope:this
     	});
     },
     data:null,
     hasRes:function(name){
        for(d in data){
            if(data[d]==name){
                return true;
            }
        }
        return false;
     }

});