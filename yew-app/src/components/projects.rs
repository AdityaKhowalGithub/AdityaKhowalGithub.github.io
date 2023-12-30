// src/components/projects.rs

use yew::prelude::*;

pub struct Projects;

impl Component for Projects {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Projects
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <h1>{"My Projects"}</h1>
                <ul>
                    <li><a href="https://github.com/shiinasugioka/pastame-ui">{"pastame"}</a></li>
                    <li><a href="https://adityakhowal.shinyapps.io/info201-groupAD-4-FinalProject/">{"Tech Layoff Tracker"}</a></li>
                    <li><a href="https://github.com/AdityaKhowalGithub/PlantCam">{"PlantCam"}</a></li>
                    // Add more projects as needed
                </ul>
            </div>
        }
    }
}
