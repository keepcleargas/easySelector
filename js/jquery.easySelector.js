/**
 * Created with JetBrains WebStorm.
 * User: QeeMo-Dev-03
 * Date: 13-2-26
 * Time: 上午11:45
 * To change this template use File | Settings | File Templates.
 */

!function($){
   var EasySelector = function(element,options){
       this.$element = $(element);
       this.url = options.url;
       this.idName = options.idName;
       this.optionName = options.optionName;
       this.init();
   }

   EasySelector.prototype = {
       init:function(){
           this.setOptions();
       },
       setOptions:function(e){
           var url = this.url;
           var element = this.$element;
           $.getJSON(url,function(data){
               $.each(data,function(entryIndex,entry){
                   element.append('<option value="' + entry.id + '">' + entry.name + '</option>');
               })
           })
       }
   }

    $.fn.easySelector = function(options){
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('easySelector')
            if (!data) $this.data('easySelector', (data = new EasySelector(this, options)))
            if (typeof options == 'string') data[options]();
        })
    }
    $.fn.easySelector.constructor = EasySelector;
}(window.jQuery);
