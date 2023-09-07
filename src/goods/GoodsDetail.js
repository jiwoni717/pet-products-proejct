import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
function GoodsDetail(){

    const {user_id} = useParams()
    const [goodsDetail, setGoodsDetail] = useState({})

    useEffect(() => {

        axios.get('http://localhost/goods/goods_detail_info', {
            params:{
                user_id:user_id
            }
        }).then(response=>{
            setGoodsDetail(response.data)
        })

    }, {});

    return (
        <Fragment>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 col-md-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__item">
                                    <img className="product__details__pic__item--large" src={goodsDetail.poster} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="product__details__text">
                                <h3 style={{"marginBottom":"30px"}}>{goodsDetail.name}</h3>
                                <p>카테고리 : {goodsDetail.category}</p>
                                <hr/>
                                <p>원가 : {goodsDetail.price}원</p>
                                <hr/>
                                <p>현재 판매가 : <div className="product__details__price" style={{"display":"inline"}}>{goodsDetail.discount_price}원</div></p>
                                <hr/>
                                <p>배송비 : {goodsDetail.delivery}</p>

                                <div className="product__details__quantity" style={{"marginTop":"50px"}}>
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="text" placeholder={"수량"} />
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">장바구니에 담기</a>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default GoodsDetail