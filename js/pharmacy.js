

$(document).ready(function(){

  // Flip animation
  (function flip_pharamcy () {
    $(".flip-img").flip();
    $(".front").css("height","150px");
    $(".front").css("width","85%");

    $(".back").css("height","150px");
    $(".back").css("width","85%");
  })();

  // Carousel
  jssor_slider1_starter = function (containerId) {
    var _CaptionTransitions = [];
    _CaptionTransitions["L"] = { $Duration: 900, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
    _CaptionTransitions["R"] = { $Duration: 900, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
    _CaptionTransitions["T"] = { $Duration: 900, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
    _CaptionTransitions["B"] = { $Duration: 900, y: -0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
    _CaptionTransitions["ZMF|10"] = { $Duration: 900, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseOutQuad, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 };
    _CaptionTransitions["RTT|10"] = { $Duration: 900, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseOutQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} };
    _CaptionTransitions["RTT|2"] = { $Duration: 900, $Zoom: 3, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 0.5} };
    _CaptionTransitions["RTTL|BR"] = { $Duration: 900, x: -0.6, y: -0.6, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.8} };
    _CaptionTransitions["CLIP|LR"] = { $Duration: 900, $Clip: 15, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
    _CaptionTransitions["MCLIP|L"] = { $Duration: 900, $Clip: 1, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic} };
    _CaptionTransitions["MCLIP|R"] = { $Duration: 900, $Clip: 2, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic} };

    // Options for Carousel, adjust values for variations
    var options = {
      $FillMode: 2,
      $AutoPlay: true,
      $AutoPlayInterval: 3000,
      $PauseOnHover: 1,
      $ArrowKeyNavigation: true,
      $SlideEasing: $JssorEasing$.$EaseOutQuint,
      $SlideDuration: 3000,
      $MinDragOffsetToSlide: 20,
      $SlideSpacing: 0,
      $DisplayPieces: 1,
      $ParkingPosition: 0,
      $UISearchMode: 1,
      $PlayOrientation: 1,
      $DragOrientation: 1,

      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlider$,
        $CaptionTransitions: _CaptionTransitions,
        $PlayInMode: 1,
        $PlayOutMode: 3
      },

      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $ChanceToShow: 2,
        $AutoCenter: 1,
        $Steps: 1,
        $Lanes: 1,
        $SpacingX: 8,
        $SpacingY: 8,
        $Orientation: 1
      },

      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $ChanceToShow: 1,
        $AutoCenter: 2,
        $Steps: 1
      }
    };

    // Instantiate Carousel
    var jssor_slider1 = new $JssorSlider$(containerId, options);

    // Response function

    function ScaleSlider() {
      var bodyWidth = document.body.clientWidth;
      if (bodyWidth)
          jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
      else
          $Jssor$.$Delay(ScaleSlider, 30);
    }

    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);

    $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);

  };

  // Carousel Trigger, DOM id is the parameter
  jssor_slider1_starter('slider1_container');
});