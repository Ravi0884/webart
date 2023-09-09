import React, { useState } from 'react'
import './home.css'
import { Drawer } from 'antd'

function Home() {
    const [sort,setSort]=useState(false)
    function sortClick() {
        setSort(!sort)
    }
    return (
        <>

            <div className="home">
                <div className="navbar">
                <div onClick={sortClick} className='hamberg' >
                        <img className='navbar-hamberg' src={require('./hamberg.png')} alt="serach" />
                    </div>
                    <div className="navbar-logo">
                        <img className="logo" src={require('./logo.png')} alt="logo" />
                        <p className="navbar-title">Cryptox</p>
                    </div>
                    <div className="navbar-right-section">
                        <p className="navbar-item">HOME</p>
                        <p className="navbar-item">ABOUT US</p>
                        <p className="navbar-item">SERVICES</p>
                        <p className="navbar-item">BLOG</p>
                        <p className="navbar-item">CONTACT</p>
                        <button className="navbar-btn">Get Started</button>
                    </div>
                    <Drawer className='mobile-drawer'

                        visible={sort}
                        closable={true}
                        onClose={() => {
                            setSort(false)
                        }} placement='left'>
                        <div  className="search-container" >
                            <div className='serach-btn'>
                                <p className="navbar-item-mobile">HOME</p>
                                <p className="navbar-item-mobile">ABOUT US</p>
                                <p className="navbar-item-mobile">SERVICES</p>
                                <p className="navbar-item-mobile">BLOG</p>
                                <p className="navbar-item-mobile">CONTACT</p>
                                <button className="navbar-btn">Get Started</button>
                            </div>
                        </div>
                    </Drawer>

                </div>
                <img className="home-image" src={require('./main.jpg')} alt="Homepage" />
                <p className="main-title">
                    Blockchain Solutions<br />
                    and <span className="orange">Cryptocurrency</span><br />
                    Investments
                </p>
                <p className="main-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Nunc pulvinar sapien et ligula
                </p>
                <div className="buttons">
                    <button className="navbar-btn">Get Started</button>
                    <button className="read-more">Read More</button>
                </div>
                <div className="center">
                    <p className="main-title">
                        Most Trusted <span className="orange">Cryptocurrency</span> Platform
                    </p>
                    <p className="center-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet c
                    </p>
                </div>
                <div className="box">
                    <div className="box-item">
                        <img className="box-image" src={require('./76.png')} alt="box" />
                        <p className="box-title" >Easy To Transact</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                    <div className="box-item">
                        <img className="box-image" src={require('./77.png')} alt="box" />
                        <p className="box-title" >No Fear Of Loss</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                    <div className="box-item">
                        <img className="box-image" src={require('./78.png')} alt="box" />
                        <p className="box-title" >Foolproof Security</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                </div>
                <div className="services">
                    <img className="service-image" src={require('./ppc.png')} alt="ppc" />
                    <div className="service-right">
                        <p className="box-read">Welcome to cryptox</p>
                        <p className="services-title">
                            Smart and Secure Way To Invest In Crypto
                        </p>
                        <p className="bottom-margin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Nunc pulvinar sapien et ligula. Senectus et netus et malesuada fames. Id faucibus nisl tincidunt eget. Turpis massa tincidunt dui ut ornare lectus. Nisi lacus sed viverra tellus. Mi proin sed libero enim. Faucibus scelerisque eleifend donec pretium. Viverra vitae congue eu consequat ac. Risus commodo
                        </p>
                        <button className="navbar-btn">Get Started</button>
                    </div>
                </div>
                <div className="choose">
                    <div className="service-left">
                        <p className="next">Welcome to cryptox</p>
                        {/* <p className="services-title">
                            Smart and Secure Way To Invest In Crypto
                        </p> */}
                        <p className="bottom-margin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesq
                        </p>
                        <div className="left-section">
                            <img className="left-section-image" src={require('./29.png')} alt="choose" />
                            <div className="left-container">
                                <p className="box-title" >Secure User Data</p>
                                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                            </div>
                        </div>
                        <div className="left-section">
                            <img className="left-section-image" src={require('./76.png')} alt="choose" />
                            <div className="left-container">
                                <p className="box-title" >Most Creadiblity</p>
                                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                            </div>
                        </div>
                        <div className="left-section">
                            <img className="left-section-image" src={require('./77.png')} alt="choose" />
                            <div className="left-container">
                                <p className="box-title" >Big Data Insights</p>
                                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                            </div>
                        </div>
                    </div>
                    <img className="second-services" src={require("./campaing.png")} alt="campaign" />
                </div>
                <div className="center">
                    <p className="orange">Our Services</p>
                    <p className="services-title">What Services We Offer</p>
                    <p className="center-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet c
                    </p>
                </div>
                <div className="box2">
                    <div className="box-item">
                        <img className="box-image" src={require('./76.png')} alt="box" />
                        <p className="box-title" >Easy To Transact</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                    <div className="box-item">
                        <img className="box-image" src={require('./77.png')} alt="box" />
                        <p className="box-title" >No Fear Of Loss</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                    <div className="box-item">
                        <img className="box-image" src={require('./78.png')} alt="box" />
                        <p className="box-title" >Foolproof Security</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                </div>
                <div className="box2">
                    <div className="box-item">
                        <img className="box-image" src={require('./76.png')} alt="box" />
                        <p className="box-title" >Easy To Transact</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                    <div className="box-item">
                        <img className="box-image" src={require('./77.png')} alt="box" />
                        <p className="box-title" >No Fear Of Loss</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                    <div className="box-item">
                        <img className="box-image" src={require('./78.png')} alt="box" />
                        <p className="box-title" >Foolproof Security</p>
                        <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                        <p className="box-read">Read More &gt;</p>
                    </div>
                </div>
                <div className="center">
                    <p className="orange-title">$20 Trillion</p>
                    <p className="services-title">People from All Around The World Have Purched Our Token</p>
                    <p className="center-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet c
                    </p>
                </div>
                <img className="world-image" src={require('./world.png')} alt="world" />
                <div className="world-data">
                    <div className="world-item">
                        <img className="world-little" src={require('./76.png')} alt="world" />
                        <p className="services-title">12+</p>
                        <p className="small">
                            year of experience
                        </p>
                    </div>
                    <div className="world-item">
                        <img className="world-little" src={require('./77.png')} alt="world" />
                        <p className="services-title">20T+</p>
                        <p className="small">
                            Invest in crypto
                        </p>
                    </div>
                    <div className="world-item">
                        <img className="world-little" src={require('./76.png')} alt="world" />
                        <p className="services-title">85+</p>
                        <p className="small">
                            Proffesional Team
                        </p>
                    </div>
                    <div className="world-item">
                        <img className="world-little" src={require('./29.png')} alt="world" />
                        <p className="services-title">150+</p>
                        <p className="small" >
                            Country Support
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer1">
                        <div className="left-footer">
                            <p className="footer-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dol</p>
                        </div>
                        <div className="social">
                            <img className="social-image" src={require('./facebook.png')} alt="img" />
                            <img className="social-image" src={require('./instagram.png')} alt="img" />
                            <img className="social-image" src={require('./twitter.png')} alt="img" />
                            <img className="social-image" src={require('./linkedin.png')} alt="img" />
                        </div>
                    </div>
                    <div className="footer2">
                        <p className="footer-head">Other Pages</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Home</p>
                        <p className="footer-items"><span className="orange">&gt;</span>About us</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Services</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Token Sale</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Contact</p>
                    </div>
                    <div className="footer2">
                        <p className="footer-head">Quick Links</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Home</p>
                        <p className="footer-items"><span className="orange">&gt;</span>About us</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Services</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Token Sale</p>
                        <p className="footer-items"><span className="orange">&gt;</span>Contact</p>
                    </div>
                    <div className="footer3">
                        <p className="footer-head">News Letter</p>
                        <p className="footer-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dol</p>
                        <input className="inp" placeholder="Enter your text" type="text" />
                        <button className="footer-btn">Subscribe</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home