/**
 * Created with JetBrains WebStorm.
 * User: QeeMo-Dev-03
 * Date: 13-2-26
 * Time: 上午11:45
 * To change this template use File | Settings | File Templates.
 */

!function ($) {
    var EasySelector = function (element, options) {
        this.$element = $(element);
        this.url = options.url;
        this.data = options.data;
        this.idName = options.idName;
        this.optionName = options.optionName;
        this.init();
    }

    EasySelector.prototype = {
        init:function () {
            if (this.data == null && this.url == null) {
                //do nothing
            } else if (this.data) {
                this.setOptions(true);
            } else if (this.url) {
                this.setOptions();
            }

        },
        setOptions:function (isLocal) {
            var element = this.$element;
            if (isLocal) {
                var data = this.data;
                $.each(data,function(index,data){
                    element.append('<option value="' + data[0] + '">' + data[1] + '</option>');
                });
            } else {
                var url = this.url;
                $.getJSON(url, function (data) {
                    $.each(data, function (entryIndex, entry) {
                        element.append('<option value="' + entry.id + '">' + entry.name + '</option>');
                    })
                })
            }
        }
    }

    $.fn.easySelector = function (options) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('easySelector')
            if (!data) $this.data('easySelector', (data = new EasySelector(this, options)))
            if (typeof options == 'string') data[options]();
        })
    }
    $.fn.easySelector.constructor = EasySelector;
}(window.jQuery);
