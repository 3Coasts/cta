(function ($) {


Drupal.behaviors.cta = function(context) {
  $("#cta-admin-settings .delete").click(function(){
    if(!confirm("Are you sure you want to delete this CTA? This can not be undone.")){
      return false;
    }
  });
};

}(jQuery));