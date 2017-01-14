import Sample from './lib/Sample';
import $ from 'jquery';

$(function(){
  $('.col-20 div')
    .on('click', (e) => {
      var className = e.toElement.className;
      $("#" + className).get(0).play();
    })
    .mouseover( () => {
      $("#cancel").get(0).play();
    })
    .mouseout( () => {
      $("#cancel").get(0).pause();
      console.log("sa");
    });
  });
