import {Fragment, useEffect, useState} from "react";
import axios from "axios";
function Home(){

    const [mainList, setMainList] = useState([])
    const [fd, setFd] = useState('')

    useEffect(() => {

        axios.get('http://localhost/goods/main_list').then(response=>{
            console.log(response.data)
            setMainList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

    }, []);

    const findChange=(e)=>{
        setFd(e.target.value)
    }

    const findBtn=()=>{
        window.location.href="/goods/goods_find/"+fd;
    }

    const html = mainList.map((goods, key)=>

        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={goods.user_id}>
            <div className="featured__item">
                <div className="featured__item__pic set-bg">
                    <a href={"/goods/goods_detail/"+goods.user_id}><img src={goods.poster}/></a>
                    <ul className="featured__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href={"/goods/goods_detail/"+goods.user_id}>{goods.name}</a></h6>
                    <h6 style={{"textDecoration":"line-through", "color":"#8C8C8C"}}>{goods.price}원</h6><h5 style={{"color":"#FF4646"}}>{goods.discount_price}원</h5>
                </div>
            </div>
        </div>
    )



    return (
        <Fragment>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="검색어를 입력하세요." onChange={findChange}/>
                                        <button type={"button"} className="site-btn" onClick={findBtn}>검색</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 style={{"fontSize":"28px"}}>지금 사용자들이 가장 많이 본 상품</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {html}
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
export default Home