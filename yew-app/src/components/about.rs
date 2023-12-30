// src/components/about.rs

use yew::prelude::*;

pub struct About;

impl Component for About {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        About
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <h1>{"About Me"}</h1>
                <p>{"I am Aditya Khowal, a student at the University of Washington studying Informatics."}</p>
            </div>
        }
    }
}
