(function ($) {


Drupal.behaviors.cta = {
  attach: function (context, settings) {
    $("#cta-admin-settings .delete").click(function(){
      if(!confirm("Are you sure you want to delete this CTA? This can not be undone.")){
        return false;
      };
    });
  }
};

}(jQuery));
