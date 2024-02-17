import React from 'react'
import Layout from './../components/Layout/Layout'
import banner2 from "../images/banner2.jpg"
import '../styles/HomeStyles.css'
import services1 from '../images/services1.png'
import services2 from '../images/services2.png'
import services3 from '../images/services3.png'
import services4 from '../images/services4.png'
import tariff1 from '../images/tariff1.png'
import tariff2 from '../images/tariff2.png'
import tariff3 from '../images/tariff3.png'
import tariff4 from '../images/tariff4.png'
import downloadbg from "../images/downloadbg.jpg"
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material'
import mobile from '../images/mobile.png'
import googleplay from '../images/googleplay.png'
import appstore from '../images/appstore.png'
import hrlogo from '../images/hrlogo.png'
import banner1s from '../images/banner1s.png'
import banner2s from '../images/banner2s.png'
import eco1 from '../images/eco1.png'
import eco2 from '../images/eco2.png'
import eco3 from '../images/eco3.png'
import eco4 from '../images/eco4.png'





const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${banner2})` }} >
        <div className="headerContainer">
          <div className='inp'>
            <h1>GET TAXI <span>ONLINE</span> </h1>
            <div className='single-taxi'>
              <div className='taxi'>
                <img src={tariff1} alt='' />
                <p>STANDART</p>
              </div>
              <div className='taxi'>
                <img src={tariff1} alt='' />
                <p>BUSINESS</p>
              </div>
              <div className='taxi'>
                <img src={tariff1} alt='' />
                <p>VIP</p>
              </div>
              <div className='taxi'>
                <img src={tariff1} alt='' />
                <p>BUS-MINIVAN</p>
              </div>
            </div>

            <div className='single-input'>
              <div className='input'>
                <input placeholder='From Address...' />
              </div>
              <div className='input'>
                <input placeholder='To...' />
              </div>
              <div className='input'>
                <input placeholder='Phone Number' />
              </div>
              <div className='input'>
                <input placeholder='Data and Time' />
              </div>
            </div>




            <button className='btn1'>GET TAXI</button>
          </div >
        </div>
      </div>



      {/* ------------------OUR SERVICES-------- */}
      <section id="services-container">
        <h3 className='h3'>WELCOME</h3>
        <h1 className="h-primary">Our Services</h1>

        <div className='single'>
          <div className="services">
            <div className="box">
              <img src={services1} alt='' />
              <h2 class="h-secondary">RAPID CITY TRANSFER</h2>
              <p className='para'>
                We will bring you quickly and comfortably to anywhere in your city
              </p>
            </div>
          </div>
          <div className="services">
            <div className="box">
              <img src={services2} alt='' />
              <h2 class="h-secondary">BOOKING A HOTEL</h2>
              <p className='para'>
                If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address
              </p>
            </div>
          </div>
          <div className="services">
            <div className="box">
              <img src={services3} alt='' />
              <h2 class="h-secondary">AIRPORT TRANSFER</h2>
              <p className='para'>
                We will bring you quickly and comfortably to anywhere in your city
              </p>
            </div>
          </div>
          <div className="services">
            <div className="box">
              <img src={services4} alt='' />
              <h2 class="h-secondary">BAGGAGE TRANSPORT</h2>
              <p className='para'>
                If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------TARIFFS----------------- */}
      <section id="tariffs-container">
        <h3 className='h-tariffs'>SEE OUR</h3>
        <h1 className="h-primary-tariffs">TARIFFS</h1>
        <div className='single-tariffs'>
          <div className='tariffs'>
            <div className='box'>
              <img src={tariff1} alt='' />
              <h2 className='h-secondary'>STANDART</h2>
              <p className='para'>Standard sedan for a drive around the city at your service</p>
              <h1 className='price'>$2 /km</h1>
            </div>
          </div>
          <div className='tariffs'>
            <div className='box'>
              <img src={tariff2} alt='' />
              <h2 className='h-secondary'>BUSINESS</h2>
              <p className='para'>Standard sedan for a drive around the city at your service</p>
              <h1 className='price'>$2,7 /km</h1>

            </div>
          </div>
          <div className='tariffs'>
            <div className='box'>
              <img src={tariff3} alt='' />
              <h2 className='h-secondary'>VIP</h2>
              <p className='para'>Standard sedan for a drive around the city at your service</p>
              <h1 className='price'>$5 /km</h1>

            </div>
          </div>
          <div className='tariffs'>
            <div className='box'>
              <img src={tariff4} alt='' />
              <h2 className='h-secondary'>BUS-MINIVAN</h2>
              <p className='para'>Standard sedan for a drive around the city at your service</p>
              <h1 className='price'>$4.5 /km</h1>

            </div>
          </div>
        </div>
      </section >
      {/* --------------DOWNLOAD THE APP--------------------------------  */}

      <div className='download' style={{ backgroundImage: `url(${downloadbg})` }}>
        <h4 className='h3'>GET MORE BENEFITS</h4>
        <h2 className='h2'>DOWNLOAD THE APP</h2>
        {/* ------------------------------------------------------------------------- */}
        <div className='downloadthird'>
          <div className='download3'>
            <div className='number2'>
              <div className='number'>
              <h2>01.</h2>
              </div>
              <div className='number'>
              <h1>FAST BOOKING</h1>
              <p>Nam ac ligula congue, interdum enim sit amet, fermentum nisi.</p>
              </div>
            </div>

            <div className='number2'>
              <div className='number'>
                <h2>02.</h2>
              </div>
              <div className='number'>
              <h1>EASY TO USE</h1>
              <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
            
            

          </div>
          <div className='download3'>
          <div className='mobile'>
            <img src={mobile} alt=''/>
              <div className='googleply'>
                <img src={googleplay} alt='' />
                <img src={appstore} alt='' />
              </div>
          </div>
          </div>
          <div className='download3'>
          <div className='number2'>
              
              <div className='number'>
              <h1>GPS SEARCHING</h1>
              <p>Ut elementum tincidunt erat vel ornare. Suspendisse ac felis non diam pretium.</p>
              </div>
              <div className='number'>
              <h2>03.</h2>
              </div>
            </div>

            <div className='number2'>
              
              <div className='number'>
              <h1>BONUSES FOR RIDE</h1>
              <p>Phasellus l et porta tortor dignissim at. Pellentesque gravida tortor at euismod mollis.</p>
              </div>
              <div className='number'>
                <h2>04.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='allsingle'>
          <div className='single-num'>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-num'>01.</h5>
              </div>
            </div>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-header'>FAST BOOKING</h5>
                <p className='p'>Nam ac ligula congue, interdum enim sit amet, fermentum nisi.</p>
              </div>
            </div>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-num'>02.</h5>
              </div>
            </div>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-header'>EASY TO USE</h5>
                <p className='p'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
          </div>
          <div className='mobile'>
            <img src={mobile} alt=''/>
              <div className='googleply'>
                <img src={googleplay} alt='' />
                <img src={appstore} alt='' />
              </div>
          </div>

          <div className='single-num'>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-num'>03.</h5>
              </div>
            </div>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-header'>GPS SEARCHING</h5>
                <p className='p'>Ut elementum tincidunt erat vel ornare. Suspendisse ac felis non diam pretium.</p>
              </div>
            </div>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-num'>04.</h5>
              </div>
            </div>
            <div className='num'>
              <div className='box-num'>
                <h5 className='h-header'>BONUSES FOR RIDE</h5>
                <p className='p'>Phasellus l et porta tortor dignissim at. Pellentesque gravida tortor at euismod mollis.</p>
              </div>
            </div>
          </div>
        </div>*/}
      </div> 
      {/* --------------FOR DRIVERS--------------------------------  */}
      <div>
        <div className='header'>
          <h4 className='header-h4'>FOR DRIVERS</h4>
          <h2 className='header-2'>DO YOU WANT TO EARN WITH US?</h2>
          <p>Quisque s ollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus <br /> hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante,<br /> euismod aliquet nulla metus a mauris.</p>

          <div className='single-check'>
            <div className='check'>
              <div className='box-check'>
                <Checkbox {...FormLabel} defaultChecked color='error' />Luxury cars
                <Checkbox {...FormLabel} defaultChecked color='error' />No fee
                <Checkbox {...FormLabel} defaultChecked color='error' />Weekly payment
              </div>
            </div>
            <div className='check'>
              <div className='box-check'>
                <Checkbox {...FormLabel} defaultChecked color='error' />Fixed price
                <Checkbox {...FormLabel} defaultChecked color='error' />Good application
                <Checkbox {...FormLabel} defaultChecked color='error' />Stable orders
              </div>
            </div>
          </div>
          <button className='btn2'>Become a Driver</button>
        </div>


        <div className='hr'>
          <img src={hrlogo} alt='' />
        </div>
      </div>
      {/* ----------------TESTIMONIALS------------------ */}
      <div className='test'>
        <h3 className='h-tariffs'>HAPPY CLIENT'S</h3>
        <h1 className="h-primary-tariffs">TESTIMONIALS</h1>
        <div>
          <div>

          </div>
        </div>
      </div>
      {/* -------------2pick---------------- */}
      <div className='banner'>
        <img src={banner1s} alt='' />
        <img src={banner2s} alt='' />
      </div>
      {/* -----------------eco--------------- */}
      <div>
        <div className='eco1'>
          <div className='eco-box'>
            <div>
              <h4>OUR PARTNERS</h4>
              <h1 style={{ color: 'white' }}>AND CLIENTS</h1>
            </div>
          </div>
          <div className='eco-box'>
            <img src={eco1} alt='' />
            <img src={eco2} alt='' />
            <img src={eco3} alt='' />
            <img src={eco4} alt='' />
          </div>
        </div>
      </div>
      {/* ---------------------Aboutus------------------  */}
      <div>
        <div className='about1'>
          <div className='about-box'>
            <h1 style={{ color: "gold" }}>ABOUTUS</h1>
            <p> Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
          </div>
          <div className='about-box'>
            <h1 style={{ color: "gold" }}>EXPLORE</h1>
            <div class="drop">
              <button class="dropbt">Gallery</button>
              <button class="dropbt">Testimonials</button>
              <button class="dropbt">Services</button>
              <button class="dropbt">Shortcodes</button>
              <button class="dropbt">Contacts</button>
              <button class="dropbt">Blog</button>
              <button class="dropbt">Get Taxi</button>
            </div>
          </div>
          <div className='about-box'>
            <h1 style={{ color: "gold" }}>CONTACT US</h1>
            <p>Address: 43 2-nd Avenue, New York, NY 29004-7153</p>
          </div>
        </div>
      </div>
      {/* ----------------------Like-themes ---------------- */}
      <div className='like'>
        <p style={{ color: "#ffc61a" }}>Like-themes 2017</p><p>© All Rights Reserved</p> <p style={{ color: "#ffc61a" }}>Terms of use </p>
      </div>
    </Layout >
  )
}

export default Home
