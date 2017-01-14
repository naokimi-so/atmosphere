import Sample from './lib/Sample';
import $ from 'jquery';

$(function(){
  // $className = ('');
  $('.col-20 div').on('click', (e) => {
    var className = e.toElement.className;
    $("#" + className).get(0).play();
  });
});
