String.prototype.repeat=function(e){return new Array(e+1).join(this)},function(e){e.fn.addSliderSegments=function(t){return this.each(function(){var n=100/(t-1)+"%",i="<div class='ui-slider-segment' style='margin-left: "+n+";'></div>";e(this).prepend(i.repeat(t-2))})},e(function(){e("select[name='huge']").selectpicker({style:"btn-huge btn-primary",menuStyle:"dropdown-inverse"}),e("select[name='large']").selectpicker({style:"btn-large btn-danger"}),e("select[name='info']").selectpicker({style:"btn-info"}),e("select[name='small']").selectpicker({style:"btn-small btn-warning"}),e(".nav-tabs a").on("click",function(t){t.preventDefault(),e(this).tab("show")}),e("[data-toggle=tooltip]").tooltip("show"),e(".tagsinput").tagsInput();var t=e("#slider");t.length>0&&t.slider({min:1,max:5,value:3,orientation:"horizontal",range:"min"}).addSliderSegments(t.slider("option").max);var n=e("#slider2");n.length>0&&n.slider({min:1,max:5,values:[3,4],orientation:"horizontal",range:!0}).addSliderSegments(n.slider("option").max);var i,s=e("#slider3"),o=100;s.length>0&&(s.slider({min:1,max:5,values:[3,4],orientation:"horizontal",range:!0,slide:function(e,t){s.find(".ui-slider-value:first").text("$"+t.values[0]*o).end().find(".ui-slider-value:last").text("$"+t.values[1]*o)}}),i=s.slider("option"),s.addSliderSegments(i.max).find(".ui-slider-value:first").text("$"+i.values[0]*o).end().find(".ui-slider-value:last").text("$"+i.values[1]*o)),e(".tooltip").addClass(function(){return e(this).prev().attr("data-tooltip-style")?"tooltip-"+e(this).prev().attr("data-tooltip-style"):void 0}),e("input, textarea").placeholder(),e(".pagination a").on("click",function(){e(this).parent().siblings("li").removeClass("active").end().addClass("active")}),e(".btn-group a").on("click",function(){e(this).siblings().removeClass("active").end().addClass("active")}),e('a[href="#fakelink"]').on("click",function(e){e.preventDefault()}),e.widget("ui.customspinner",e.ui.spinner,{_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'></span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'></span>"+"</a>"}}),e("#spinner-01").customspinner({min:-99,max:99}).on("focus",function(){e(this).closest(".ui-spinner").addClass("focus")}).on("blur",function(){e(this).closest(".ui-spinner").removeClass("focus")}),e(".input-prepend, .input-append").on("focus","input",function(){e(this).closest(".control-group, form").addClass("focus")}).on("blur","input",function(){e(this).closest(".control-group, form").removeClass("focus")}),e(".table .toggle-all").on("click",function(){var t=e(this).find(":checkbox").prop("checked");e(this).closest(".table").find("tbody :checkbox").checkbox(t?"uncheck":"check")}),e(".table tbody :checkbox").on("check uncheck toggle",function(t){var n=e(this),i=n.prop("checked"),s="toggle"==t.type,o=e(".table tbody :checkbox"),a=o.length==o.filter(":checked").length;n.closest("tr")[i?"addClass":"removeClass"]("selected-row"),s&&n.closest(".table").find(".toggle-all :checkbox").checkbox(a?"check":"uncheck")}),e("#datepicker-01").datepicker({showOtherMonths:!0,selectOtherMonths:!0,dateFormat:"d MM, yy",yearRange:"-1:+1"}).prev(".btn").on("click",function(t){t&&t.preventDefault(),e("#datepicker-01").focus()}),e.extend(e.datepicker,{_checkOffset:function(e,t){return t}}),e("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch(),e(".table-striped").stacktable({id:"rwd-table"})})}(jQuery);