// src/components/navbar.rs

use yew::prelude::*;
// use yew_router::prelude::*;

// //import enum from
// use crate::Route;

pub struct Navbar;

impl Component for Navbar {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Navbar
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <nav class="navbar">
        <div class="navbar-brand">{"My App"}</div>
        <div class="navbar-menu">
            <a class="navbar-item" href="/">{"Home"}</a>
            <a class="navbar-item" href="/about">{"About"}</a>
            <a class="navbar-item" href="/contact">{"Contact"}</a>
            <a class="navbar-item" href="/experience">{"Experience"}</a>
            <a class="navbar-item" href="/projects">{"Projects"}</a>
        </div>
    </nav>
        
        }
    }
}
