// src/components/contact.rs

use yew::prelude::*;

pub struct Contact;

pub impl Component for Contact {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Contact
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <h1>{"Contact Me"}</h1>
                <p>{"Feel free to reach out via email or LinkedIn."}</p>
                // Add your email and LinkedIn profile link here
            </div>
        }
    }
}
