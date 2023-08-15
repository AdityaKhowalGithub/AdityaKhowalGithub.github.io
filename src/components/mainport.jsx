import React from "react";

//import stock
import stock from "../img/image1.jpeg";
import stock1 from "../img/image2.jpeg";
import stock2 from "../img/image3.jpeg";
import stock3 from "../img/inprogress.png";
import stock4 from "../img/inprogress.png";
import stock5 from "../img/inprogress.png";

class Mainport extends React.Component {
    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Portfolio</h3>
                                <p className="subtitle-a">
                                    Check out some of my projects below! Remember some are still in progress.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="https://colab.research.google.com/drive/1jSHchyKgD4RmiEpO_XoGFoRrWd2ltVlz?usp=sharing">
                                    <div className="work-img">
                                        <img src={stock5} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Nano GPT - Phillosopher edition</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Python, Colab, GPT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="https://github.com/AdityaKhowalGithub/StockAdvice">
                                    <div className="work-img">
                                        <img src={stock} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Stock Advice</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        Javascript, API, HTML, CSS
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="https://adityakhowal.shinyapps.io/a4-climate-change/">
                                    <div className="work-img">
                                        <img src={stock1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Tech Layoff Tracker</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        R, Shiny, HTML, CSS
                                                    </span>{" "}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="https://adityakhowalgithub.github.io/WeatherAppV2-web/">
                                    <div className="work-img">
                                        <img src={stock2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Weather App</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        HTML5 CSS3 Bootstrap Webpack ReactJS
                                                    </span>
                                                    {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="https://github.com/adityakhowalgithub" >
                                    <div className="work-img">
                                        <img src={stock3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Neural Network SMS Text Classifier (in progress)</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        Machine Learning, Python, Neural Network, NLP
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Mainport;