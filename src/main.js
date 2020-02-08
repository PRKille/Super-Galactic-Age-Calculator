import { Astronaut } from './sgac.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let user = new Astronaut;
  $("form#userage").submit(function(event){
    event.preventDefault();
    user.addAge($("input#age").val());
    user.ageMerc();
    user.ageVen();
    user.ageMars();
    user.ageJup();
    $(".planets").append(`<li> Your age on Mercury is ` + user.mercuryAge + "</li>");
    $(".planets").append(`<li> Your age on Venus is ` + user.venusAge + "</li>");
    $(".planets").append(`<li> Your age on Mars is ` + user.marsAge + "</li>");
    $(".planets").append(`<li> Your age on Jupiter is ` + user.jupiterAge + "</li>");
    $("form#userage").hide();
    $("form#demo").show();
  });
  $("form#demo").submit(function(event){
    event.preventDefault();
    user.addDemo($("#sex").val(), $("#continent").val());
    user.lifeExpect();
    $(".planets").hide();
    if (user.expectAge > user.age) {
      $(".deaths").show();
      let death = user.planetRemain();
      $(".deaths").append("<li>You have "+death[0]+" years left on Earth</li>");
      $(".deaths").append("<li>You have "+death[1]+" years left on Mercury</li>");
      $(".deaths").append("<li>You have "+death[2]+" years left on Venus</li>");
      $(".deaths").append("<li>You have "+death[3]+" years left on Mars</li>");
      $(".deaths").append("<li>You have "+death[4]+" years left on Jupiter</li>");
    } else {
      $(".deaths").show();
      const death = user.bonusYears();
      $(".deaths").append("<li>You should have died "+death[0]+" years ago on Earth</li>");
      $(".deaths").append("<li>You should have died "+death[1]+" years ago on Mercury</li>");
      $(".deaths").append("<li>You should have died "+death[2]+" years ago on Venus</li>");
      $(".deaths").append("<li>You should have died "+death[3]+" years ago on Mars</li>");
      $(".deaths").append("<li>You should have died "+death[4]+" years ago on Jupiter</li>");
    }
  });
});