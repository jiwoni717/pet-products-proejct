import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";
function GoodsFind(){

    const {fd} = useParams()
    const [findList, setFindList] = useState([])
    const [curpage, setCurpage] = useState(1)
    const [totalpage, setTotalpage] = useState( 0)
    const [startPage, setStartPage] = useState(0)
    const [endPage, setEndPage] = useState(0)

    useEffect(() => {

        axios.get("http://localhost/goods/goods_find", {
            params:{
                fd:fd,
                page:curpage
            }
        }).then(response=>{
            setFindList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        axios.get('http://localhost/goods/goods_find_page', {
            params:{
                fd:fd,
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })

    }, []);

    const html = findList.map((goods, key)=>

        <div className="col-lg-3 col-md-4 col-sm-4 mix oranges fresh-meat" key={goods.user_id}>
            <div className="featured__item">
                <div className="featured__item__pic set-bg">
                    <a href={"/goods/goods_detail/"+goods.user_id}>
                        <img src={goods.poster}/>
                    </a>
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

    const pages=(page)=>{

        axios.get('http://localhost/goods/goods_find', {
            params:{
                page:page,
                fd:fd
            }
        }).then(response=>{
            console.log(response.data)
            setFindList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        axios.get('http://localhost/goods/goods_find_page', {
            params:{
                page:page,
                fd:fd
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })
    }

    // 페이지 클릭시 변경
    const pageChange=(page)=>{
        pages(page);
    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }

    let row=[]
    if(startPage>1)
    {
        row.push(<a href={"#"} onClick={()=>pagePrev(startPage>1?startPage-1:startPage)}><i className="fa fa-long-arrow-left"></i></a>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i===curpage)
        {
            row.push(<span><a href={"#"} className={"current"} onClick={()=>pageChange(i)}>{i}</a></span>)
        }
        else
        {
            row.push(<span><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></span>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<a href={"#"} onClick={()=>pageNext(endPage<totalpage?endPage+1:endPage)}><i className="fa fa-long-arrow-right"></i></a>)
    }

    return(
        <Fragment>
            <div className={"row"}>
                <div className={"col-lg-12"}>
                    <div className={"section-title from-blog__title"} style={{"marginTop":"70px", "marginBottom":"100px"}}>
                        <h2>검색 목록</h2>
                    </div>
                </div>
            </div>

            <div className={"row"}>
                {html}
            </div>

            <div className="col-lg-12 text-center" style={{"marginBottom":"50px"}}>
                <div className="product__pagination blog__pagination">
                    {row}
                </div>
            </div>
        </Fragment>
    )

}
export default GoodsFind