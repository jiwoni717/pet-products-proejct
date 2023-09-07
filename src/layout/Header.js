import {Fragment, useEffect, useState} from "react";
function Header(){
    return (
        <Fragment>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">

                            </div>
                        </div>
                        <div className="col-lg-10">
                            <nav className="header__menu">
                                <ul>
                                    <li><a href="/">홈</a></li>
                                    <li><a href="/goods/goods_list">상품 목록</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </Fragment>
)
}
export default Header