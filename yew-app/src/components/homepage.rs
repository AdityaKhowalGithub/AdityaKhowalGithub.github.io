// src/components/homepage.rs

use yew::prelude::*;

pub struct Homepage;

impl Component for Homepage {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Homepage
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <h1>{"Welcome to My Portfolio"}</h1>
                <p>{"I'm Aditya Khowal, a student at the University of Washington studying Informatics."}</p>
            </div>
        }
    }
}
