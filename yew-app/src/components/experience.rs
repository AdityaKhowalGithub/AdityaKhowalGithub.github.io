// src/components/experience.rs

use yew::prelude::*;

pub struct Experience;

impl Component for Experience {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Experience
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <h1>{"My Experience"}</h1>
                <ul>
                    <li>{"Artificial Intelligence Research Intern - University of Missouri"}</li>
                    <li>{"Backend Software Engineering Intern - Bond Intelligence/OpenEXA"}</li>
                    <li>{"SWECC Officer - External Head"}</li>
                    // Add more experiences as needed
                </ul>
            </div>
        }
    }
}
