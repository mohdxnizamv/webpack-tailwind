import "./style.css";
import "./script";
import "./toggle";
import "./dark_mode";

const metamask = document.getElementById("connect");
metamask.src = script;

const menu_btn = document.getElementById("menu-btn");
menu_btn.src = toggle;

const id_menu = document.getElementById("menu");
id_menu.src = toggle;

console.log(dark_mode, script, navToggle, style());
