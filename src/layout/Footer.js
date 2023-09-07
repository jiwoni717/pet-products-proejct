import {Fragment, useEffect, useState} from "react";
function Footer(){
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">

                            </div>
                            <ul>
                                <li>쌍용강북교육센터</li>
                                <li>Made by Jiwon Lim</li>
                                <li>Email : omg0903@naver.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail"/>
                                    <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer