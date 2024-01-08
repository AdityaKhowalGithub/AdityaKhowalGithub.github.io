// src/main.rs

use yew::prelude::*;
use yew_router::prelude::*;

// mod about;
// use about::About;

mod components;
use components::about::About;
use components::contact::Contact;
use components::experience::Experience;
use components::homepage::Homepage;
use components::navbar::Navbar;
use components::projects::Projects;

// Define your routes
#[derive(Routable, PartialEq, Clone, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/about")]
    About,
    // Add more routes here
    #[at("/contact")]
    Contact,
    #[at("/experience")]
    Experience,
    #[at("/projects")]
    Projects,
}

pub struct App;

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        App
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <>
                <Navbar />
                <BrowserRouter>
                    <Switch<Route> render={switch} />
                </BrowserRouter>
            </>
        }
    }
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <Homepage /> },
        Route::About => html! { <About /> },
        Route::Contact => html! { <Contact /> },
        Route::Experience => html! { <Experience /> },
        Route::Projects => html! { <Projects /> },
        // Handle other routes
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
