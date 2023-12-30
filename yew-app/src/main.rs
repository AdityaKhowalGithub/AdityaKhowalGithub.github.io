// fn main() {
//     println!("Hello, world!");
// }

use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {
    html! {
        <>
            <h1>{ "Title" }</h1>
            <p>{ "Hello World" }</p>
        </>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}