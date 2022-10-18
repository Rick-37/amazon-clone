import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_ROW_Muti-title_Mag1._CB1564087979_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328340945i/11500159._UY200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
            price={239.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/61etD4-IrPL.__AC_SY300_SX300_QL70_ML2_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Amazon Echo"
            price={98.99}
            image="https://www.mytrendyphone.eu/images/Amazon-Echo-Dot-3-Smart-Speaker-with-Alexa-and-Alarm-Clock-Black-0841667160306-17112020-01-p.jpg"
            rating={2}
          />
          <Product
            id="4903850"
            title="Samsung Smart Watch"
            price={239.99}
            image="data:image/jpeg;base64,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"
            rating={3}
          />
          <Product
            id="3254354354"
            title="apple ipad pro"
            price={592.99}
            image="https://celltronics.lk/wp-content/uploads/2021/03/celltronics-temp-5-600x600.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung gaming monitor"
            price={239.99}
            image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/uhd-and-wqhd-monitors/pdp/lc32jg50qqnxza/gallery/gallery2/gallery3/C27JG50_001_Front_Black_G1v2.jpg?$product-details-jpg$"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
