(function ($) {
  $.fn.slider = function (options) {
    return this.each(function () {
      const defs = {
        speed: 600,
        loop: true,
      };
      const opts = $.extend({}, defs, options);

      const POS = 'pos';
      const PREV = 'prev';
      const NEXT = 'next';

      const slider = $(this);
      const sliderItems = slider.children('.item');

      const prevBtn = $('.button-carousel.prev');
      const nextBtn = $('.button-carousel.next');
      const sliderRoller = $('<div/>').addClass('roller');


      slider.append(sliderRoller);
      sliderRoller.html(sliderItems);
      sliderItems.addClass('col-md-4');
      const sliderWidth = parseInt(slider.css('width'));
      const slideWidth = sliderWidth / 3;
      const rollerWidth = (sliderWidth * sliderItems.length) / 3;
      sliderRoller.css('width', rollerWidth + 'px');

      sliderItems.css({
        width: slideWidth + 'px',
        height: '100%',
        float: 'left',
      });

      nextBtn.click(function () {
        const left = parseInt(sliderRoller.css('left'));
        const end = sliderWidth - rollerWidth;

        if (left === end) {
          if (opts.loop) doSlide(POS, 0);
          else return;
        } else doSlide(NEXT, sliderWidth);
      });
      prevBtn.click(function () {
        const left = parseInt(sliderRoller.css('left'));

        if (left === 0) {
          if (opts.loop) doSlide(POS, sliderWidth - rollerWidth);
          else return;
        } else doSlide(PREV, sliderWidth);
      });

      const doSlide = function (direction, pos) {
        switch (direction) {
          case PREV:
            sliderRoller.animate({
              left: '+=' + pos + 'px'
            }, opts.speed);
            break;
          case NEXT:
            sliderRoller.animate({
              left: '-=' + pos + 'px'
            }, opts.speed);
            break;
          case POS:
            sliderRoller.animate({
              left: pos + 'px'
            }, opts.speed);
            break;
        }
      };
    });
  };
})(jQuery);