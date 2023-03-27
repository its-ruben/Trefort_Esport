import React from 'react'

function NavBar() {
    return (
        <div>
            <header className="nk-header nk-header-opaque">
                <div className="nk-contacts-top">
                    <div className="container">
                        <div className="nk-contacts-left">
                            <ul className="nk-social-links">
                                <li>
                                    <a className="nk-social-rss" href="#">
                                        <span className="fa fa-rss" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-twitch" href="#">
                                        <span className="fab fa-twitch" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-steam" href="#">
                                        <span className="fab fa-steam" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-facebook" href="#">
                                        <span className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-google-plus" href="#">
                                        <span className="fab fa-google-plus" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nk-social-twitter"
                                        href="https://twitter.com/nkdevv"
                                        target="_blank"
                                    >
                                        <span className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-pinterest" href="#">
                                        <span className="fab fa-pinterest-p" />
                                    </a>
                                </li>
                                {/* Additional Social Buttons
              <li><a class="nk-social-behance" href="#"><span class="fab fa-behance"></span></a></li>
              <li><a class="nk-social-bitbucket" href="#"><span class="fab fa-bitbucket"></span></a></li>
              <li><a class="nk-social-dropbox" href="#"><span class="fab fa-dropbox"></span></a></li>
              <li><a class="nk-social-dribbble" href="#"><span class="fab fa-dribbble"></span></a></li>
              <li><a class="nk-social-deviantart" href="#"><span class="fab fa-deviantart"></span></a></li>
              <li><a class="nk-social-flickr" href="#"><span class="fab fa-flickr"></span></a></li>
              <li><a class="nk-social-foursquare" href="#"><span class="fab fa-foursquare"></span></a></li>
              <li><a class="nk-social-github" href="#"><span class="fab fa-github"></span></a></li>
              <li><a class="nk-social-instagram" href="#"><span class="fab fa-instagram"></span></a></li>
              <li><a class="nk-social-linkedin" href="#"><span class="fab fa-linkedin"></span></a></li>
              <li><a class="nk-social-medium" href="#"><span class="fab fa-medium"></span></a></li>
              <li><a class="nk-social-odnoklassniki" href="#"><span class="fab fa-odnoklassniki"></span></a></li>
              <li><a class="nk-social-paypal" href="#"><span class="fab fa-paypal"></span></a></li>
              <li><a class="nk-social-reddit" href="#"><span class="fab fa-reddit"></span></a></li>
              <li><a class="nk-social-skype" href="#"><span class="fab fa-skype"></span></a></li>
              <li><a class="nk-social-soundcloud" href="#"><span class="fab fa-soundcloud"></span></a></li>
              <li><a class="nk-social-slack" href="#"><span class="fab fa-slack"></span></a></li>
              <li><a class="nk-social-tumblr" href="#"><span class="fab fa-tumblr"></span></a></li>
              <li><a class="nk-social-vimeo" href="#"><span class="fab fa-vimeo"></span></a></li>
              <li><a class="nk-social-vk" href="#"><span class="fab fa-vk"></span></a></li>
              <li><a class="nk-social-wordpress" href="#"><span class="fab fa-wordpress"></span></a></li>
              <li><a class="nk-social-youtube" href="#"><span class="fab fa-youtube"></span></a></li>
          */}
                            </ul>
                        </div>
                        <div className="nk-contacts-right">
                            <ul className="nk-contacts-icons">
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#modalSearch">
                                        <span className="fa fa-search" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#modalLogin">
                                        <span className="fa fa-user" />
                                    </a>
                                </li>
                                <li>
                                    <span className="nk-cart-toggle">
                                        <span className="fa fa-shopping-cart" />
                                        <span className="nk-badge">27</span>
                                    </span>
                                    <div className="nk-cart-dropdown">
                                        <div className="nk-widget-post">
                                            <a href="store-product.html" className="nk-post-image">
                                                <img
                                                    src="assets/images/product-5-xs.jpg"
                                                    alt="In all revolutions of"
                                                />
                                            </a>
                                            <h3 className="nk-post-title">
                                                <a href="#" className="nk-cart-remove-item">
                                                    <span className="ion-android-close" />
                                                </a>
                                                <a href="store-product.html">In all revolutions of</a>
                                            </h3>
                                            <div className="nk-gap-1" />
                                            <div className="nk-product-price">€ 23.00</div>
                                        </div>
                                        <div className="nk-widget-post">
                                            <a href="store-product.html" className="nk-post-image">
                                                <img
                                                    src="assets/images/product-7-xs.jpg"
                                                    alt="With what mingled joy"
                                                />
                                            </a>
                                            <h3 className="nk-post-title">
                                                <a href="#" className="nk-cart-remove-item">
                                                    <span className="ion-android-close" />
                                                </a>
                                                <a href="store-product.html">With what mingled joy</a>
                                            </h3>
                                            <div className="nk-gap-1" />
                                            <div className="nk-product-price">€ 14.00</div>
                                        </div>
                                        <div className="nk-gap-2" />
                                        <div className="text-center">
                                            <a
                                                href="store-checkout.html"
                                                className="nk-btn nk-btn-rounded nk-btn-color-main-1 nk-btn-hover-color-white"
                                            >
                                                Proceed to Checkout
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* END: Top Contacts */}
                {/*
  START: Navbar

  Additional Classes:
      .nk-navbar-sticky
      .nk-navbar-transparent
      .nk-navbar-autohide
    */}
                <nav className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
                    <div className="container">
                        <div className="nk-nav-table">
                            <a href="index.html" className="nk-nav-logo">
                                {/* <img src="assets/images/logo.svg" alt="GoodGames" width={199} /> */}
                                <img src={"src/assets/esport_logo.png"} width={280} />
                            </a>
                            <ul
                                className="nk-nav nk-nav-right d-none d-lg-table-cell"
                                data-nav-mobile="#nk-nav-mobile"
                            >
                                <li className=" nk-drop-item">
                                    <a href="elements.html"> Features </a>
                                    <ul className="dropdown">
                                        <li>
                                            <a href="elements.html"> Elements (Shortcodes) </a>
                                        </li>
                                        <li className=" nk-drop-item">
                                            <a href="forum.html"> Forum </a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="forum.html"> Forum </a>
                                                </li>
                                                <li>
                                                    <a href="forum-topics.html"> Topics </a>
                                                </li>
                                                <li>
                                                    <a href="forum-single-topic.html"> Single Topic </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="widgets.html"> Widgets </a>
                                        </li>
                                        <li>
                                            <a href="coming-soon.html"> Coming Soon </a>
                                        </li>
                                        <li>
                                            <a href="offline.html"> Offline </a>
                                        </li>
                                        <li>
                                            <a href="404.html"> 404 </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className=" nk-drop-item">
                                    <a href="blog-list.html"> Blog </a>
                                    <ul className="dropdown">
                                        <li>
                                            <a href="news.html"> News </a>
                                        </li>
                                        <li className=" nk-drop-item">
                                            <a href="blog-grid.html"> Blog With Sidebar </a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="blog-grid.html"> Blog Grid </a>
                                                </li>
                                                <li>
                                                    <a href="blog-list.html"> Blog List </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog-fullwidth.html"> Blog Fullwidth </a>
                                        </li>
                                        <li>
                                            <a href="blog-article.html"> Blog Article </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="gallery.html"> Gallery </a>
                                </li>
                                <li className=" nk-drop-item">
                                    <a href="tournaments.html"> Tournaments </a>
                                    <ul className="dropdown">
                                        <li>
                                            <a href="tournaments.html"> Tournament </a>
                                        </li>
                                        <li>
                                            <a href="tournaments-teams.html"> Teams </a>
                                        </li>
                                        <li>
                                            <a href="tournaments-teammate.html"> Teammate </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className=" nk-drop-item">
                                    <a href="store.html"> Store </a>
                                    <ul className="dropdown">
                                        <li>
                                            <a href="store.html"> Store </a>
                                        </li>
                                        <li>
                                            <a href="store-product.html"> Product </a>
                                        </li>
                                        <li>
                                            <a href="store-catalog.html"> Catalog </a>
                                        </li>
                                        <li>
                                            <a href="store-catalog-alt.html"> Catalog Alt </a>
                                        </li>
                                        <li>
                                            <a href="store-checkout.html"> Checkout </a>
                                        </li>
                                        <li>
                                            <a href="store-cart.html"> Cart </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nk-nav nk-nav-right nk-nav-icons">
                                <li className="single-icon d-lg-none">
                                    <a
                                        href="#"
                                        className="no-link-effect"
                                        data-nav-toggle="#nk-nav-mobile"
                                    >
                                        <span className="nk-icon-burger">
                                            <span className="nk-t-1" />
                                            <span className="nk-t-2" />
                                            <span className="nk-t-3" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* END: Navbar */}
            </header>

            <>
                {/* START: Navbar Mobile Additional Classes: .nk-navbar-left-side
                .nk-navbar-right-side .nk-navbar-lg .nk-navbar-overlay-content --&gt; */}
                <div
                    id="nk-nav-mobile"
                    className="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content d-lg-none"
                >
                    <div className="nano">
                        <div className="nano-content">
                            <a href="index.html" className="nk-nav-logo">
                                <img src="assets/images/logo.svg" alt="" width={120} />
                            </a>
                            <div className="nk-navbar-mobile-content">
                                <ul className="nk-nav">
                                    {/* Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Navbar Mobile */}
                <div className="nk-main"></div>
            </>

        </div>
    )
}

export default NavBar