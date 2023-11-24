import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs';
import { FiTruck} from 'react-icons/fi';
import { BsCurrencyDollar} from 'react-icons/bs';
import { CiPercent} from 'react-icons/ci';
import { BiHeadphone} from 'react-icons/bi';
import { BsCart4, BsDoorClosedFill} from 'react-icons/bs';
import { BsEye} from 'react-icons/bs';
import { AiFillHeart} from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './Home.css'
const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>
      {
      close ?
      < div className='product_detail'>
      <div className='container'>
      <button onClick={() => setClose(false)} className='closebtn'><BsDoorClosedFill /></button>
        {
          detail.map((curElm) =>
          {
              return(
                <div className='productbox'>
                  <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                 <h4>{curElm.Cat}</h4> 
                 <h2>{curElm.Title}</h2>
                 <p>Discover your favourite item</p>
                 <h3>{curElm.Price}</h3> 
                 <button>Add to Cart</button>
                </div>
                </div>
              )
          })
        }
        <div className='productbox'></div>
      </div>
      </div> :null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Latest Quality Products </h2>
                <p>Sale upto 50% off</p>
              <Link to='/product'  className='Link'>Shop Now<BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slider-img.png' alt='ipad'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/smart watch.png' alt='Smart watch'></img>
                </div>
                <div className='detail'>
                    <p>59 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/Mobile Phone.png' alt='phones'></img>
                </div>
                <div className='detail'>
                    <p>45 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/tp6.png' alt='cpu'></img>
                </div>
                <div className='detail'>
                    <p>87 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/headphone.png' alt='headphones'></img>
                </div>
                <div className='detail'>
                    <p>74 products</p>
                </div>
            </div>
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                <FiTruck />
                </div>
                <div className='detail'>
                    <h3>Free Delivery Worldwide</h3>
                    <p>Order Above Ksh5000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <BsCurrencyDollar/>
                </div>
                <div className='detail'>
                    <h3>Money back guaranteed</h3>
                    <p>Instant Cash Refund</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <CiPercent/>
                </div>
                <div className='detail'>
                    <h3>Customer Discount</h3>
                    <p>On every purchase</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <BiHeadphone/>
                </div>
                <div className='detail'>
                    <h3>Customer Service</h3>
                    <p> Available Service calls</p>
                </div>
           
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) =>
                {
                     return(
                        
                          <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addtocart (curElm)}><BsCart4/></li>
                                    <li onClick={() => view (curElm)}><BsEye/></li>
                                    <li> <AiFillHeart/></li>
                           </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>Ksh{curElm.Price}</h4>
                            </div>

                          </div> 
                        )
                     
                })
            }
          
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>New Arrivals upto 20% off</h4>
            <h3>BUY THE BEST LAPTOPS</h3>
            <p>Discover your favourite item</p>
            <Link to='/product' className='Link'>Shop Now <BsArrowRight/> </Link>
        </div>
        <div className='img_box'>
            <img src='./img/cleats.jpg' alt='cleats'></img>
        </div>
        </div>
        </div>
    </>
  )
}

export default Home