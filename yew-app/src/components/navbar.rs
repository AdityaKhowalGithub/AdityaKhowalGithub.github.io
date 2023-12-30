// src/components/navbar.rs

use yew::prelude::*;
use yew_router::prelude::*;

use crate::Route; // Import your Route enum

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
                <Link<Route> to={Route::Home}>{"Home"}</Link<Route>>
                <Link<Route> to={Route::About}>{"About"}</Link<Route>>
                <Link<Route> to={Route::Contact}>{"Contact"}</Link<Route>>
                <Link<Route> to={Route::Experience}>{"Experience"}</Link<Route>>
                <Link<Route> to={Route::Projects}>{"Projects"}</Link<Route>>
                // Add more navigation links here
            </nav>
        }
    }
}
