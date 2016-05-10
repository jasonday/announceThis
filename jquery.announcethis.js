/*
 * announceThis v0.5
 * @desc Screenreader messaging plug-in for jQuery
 * @author Jason Day
 *
 * Licensed under the MIT licence:
 *              http://www.opensource.org/licenses/mit-license.php
 *
 * (c) Jason Day 2016
 *
 * Usage:
 *
 * $.announceThis({
 *       id: 'announceThis',       // id of live region
 *       role: 'log',              // log, alert, status, timer
 *       politeness: 'assertive',  // polite, assertive, alert (automatically becomes "alert" when role: "alert")
 *       ariaAtomic: false,        // present live region as a whole (cannot be used with aria-relevant) 
 *       ariaRelevant: '',         // 'additions', 'additions removals', 'removals' - does not work with role: alert
 *       message: ''               // message to pass to screenreader
 *   });
 *
 * Notes:
 *  - When using the same ID, the first instance of options will be the options used
 */
;
(function($) {
    var opt;
    $.announceThis = function(options) {
        opt = $.extend({}, $.announceThis.defaults, options);
        

    if(opt.role == "alert"){
      // maintain only one instance of alert at a time, opt.id is not reflected here
      $('#announceAlert').remove();
      var announcement = "<div id='announceAlert' class='announceThis' role='alert' aria-live='alert'><p>" + opt.message + "</p></div>";
      $('body').append(announcement); 

    } else {
      // if element has not been created, create it
        if(!$("#" + opt.id).length){
        var announcement = "<div id=" + opt.id;
            announcement += " class='announceThis'";
            announcement += " role=" + opt.role;
            announcement += " aria-live=" + opt.politeness;
        if(opt.ariaAtomic){
            announcement += " aria-atomic=" + opt.ariaAtomic;
        }
        if(opt.ariaRelevant){
            announcement += " aria-relevant='" + opt.ariaRelevant + "'";
        }
            announcement += "></div>";

        $('body').append(announcement);

      } 
      // delay allows non-alert live regions to be built dynamically and announced
      setTimeout(function(){
        $("#" + opt.id).append("<p>" + opt.message + "</p>");
      }, 250);
    }

  };

  $.announceThis.defaults = {
        id: 'announceThis',       // id of live region
        role: 'log',              // log, alert, status, progressbar, marquee, timer
        politeness: 'assertive',  // polite, assertive, alert (automatically becomes "alert" when role: "alert")
        ariaAtomic: false,        // present live region as a whole (cannot be used with aria-relevant) 
        ariaRelevant: '',         // 'additions', 'additions removals', 'removals' - does not work with role: alert
        message: ''               // message to pass to screenreader
    };

})(jQuery);