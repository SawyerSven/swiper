(function($) {
  $.fn.slider = function(options) {
    var wrap = this;

    var pos = 0;

    var totalSlides = this.find("ul li").length;

    var sliderHeight = this.height();

    this.find("ul.slider").height(sliderHeight * totalSlides);

    function slideBottom() {
      pos++;
      if (pos == totalSlides) {
        pos = 0;
      }
      wrap.find("ul.slider").css("top", -(sliderHeight * pos));
    }

    this.options = $.extend(
      {
        time: options
      },
      options
    );
    $.fn.slider.prototype.init(this.options.time, slideBottom);
  };

  $.fn.slider.prototype.init = function(time = [], fn) {
    var arr = [];
    let timer = time.reduce(function(preValue, value, index) {
      arr.push(preValue + value);
      return preValue + value;
    }, 0);
    arr.forEach(function(ele) {
      setTimeout(fn, ele);
    });
    setInterval(function() {
      arr.forEach(function(ele) {
        setTimeout(fn, ele);
      });
    }, timer);
  };
})(jQuery);
