// src/lib.rs

mod components {
    mod about;
    mod contact;
    mod experience;
    mod homepage;
    mod projects;
}

use yew::prelude::*;
use yew_router::prelude::*;
use components::{about::About, contact::Contact, experience::Experience, homepage::Homepage, projects::Projects};

#[derive(Routable, PartialEq, Clone, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/about")]
    About,
    #[at("/experience")]
    Experience,
    #[at("/projects")]
    Projects,
    #[at("/contact")]
    Contact,
}

fn switch(routes: &Route) -> Html {
    match routes {
        Route::Home => html! { <Homepage /> },
        Route::About => html! { <About /> },
        Route::Experience => html! { <Experience /> },
        Route::Projects => html! { <Projects /> },
        Route::Contact => html! { <Contact /> },
    }
}

pub struct App;

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <BrowserRouter>
                <Switch<Route> render={Switch::render(switch)} />
            </BrowserRouter>
        }
    }
}

fn main() {
    yew::start_app::<App>();
}
