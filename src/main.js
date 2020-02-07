import { Astronaut } from './sgac.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form#age").submit(function(event){
    event.preventDefault();
    let user = new Astronaut;
    user.addAge($("input#age").val());
  });
});