import type { Metadata } from "next";
import Image from "next/image";
import BonfireProductGrid from "./BonfireProductGrid";
import GiftShopOrderForm from "./GiftShopOrderForm";
import CustomMerchSection from "./CustomMerchSection";
import { BONFIRE_ORG_URL, BONFIRE_STORE_URL } from "./bonfire-products";
import "./gift-shop.css";

export const metadata: Metadata = {
  title: "Gift Shop | NLMSF",
  description:
    "Support LMS research with every purchase. NLMSF merchandise, books, apparel, and more—proceeds fund Leiomyosarcoma research.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function GiftShopPage() {
  return (
    <div className="gift-shop-page">
      {/* Hero */}
      <section className="hero-section gift-shop-hero">
        <div className="hero-inner">
          <div className="hero-logo">
            <Image
              src="/images/gift-shop/shop-for-the-cause-logo.png"
              alt="Shop for the Cause — Advance research through being a Champion of Hope with your purchases"
              width={640}
              height={640}
              priority
            />
          </div>
          <h1 className="sr-only">NLMSF Gift Shop</h1>
          <div className="hero-actions">
            <a href="#custom-merch" className="cta-button">Shop Custom Collection</a>
            <a href="#bonfire-shop" className="cta-button cta-secondary">Shop Apparel</a>
          </div>
        </div>
      </section>

      <div className="gift-shop-layout">
        {/* Sidebar - left */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <span className="sidebar-icon shop" aria-hidden />
              <span>Gift Shop Navigation</span>
            </h3>
            <ul className="nav-links">
              <li>
                <a href="#shop-intro" className="nav-link">
                  <span className="nav-icon intro" aria-hidden />
                  <span>Shop Introduction</span>
                </a>
              </li>
              <li>
                <a href="#featured-book" className="nav-link">
                  <span className="nav-icon featured" aria-hidden />
                  <span>Goodnight, Mama</span>
                </a>
              </li>
              <li>
                <a href="#custom-merch" className="nav-link">
                  <span className="nav-icon products" aria-hidden />
                  <span>Custom Collection</span>
                </a>
              </li>
              <li>
                <a href="#bonfire-shop" className="nav-link">
                  <span className="nav-icon products" aria-hidden />
                  <span>Bonfire Apparel</span>
                </a>
              </li>
              <li>
                <a href="#shop-products" className="nav-link">
                  <span className="nav-icon products" aria-hidden />
                  <span>Our Merchandise</span>
                </a>
              </li>
              <li>
                <a href="#special-products" className="nav-link">
                  <span className="nav-icon featured" aria-hidden />
                  <span>Featured Items</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-cta">
            <h4>Questions About Our Merchandise?</h4>
            <p>
              For all purchases, please email <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>. The proceeds from all purchases directly support LMS Research.
            </p>
            <a href="https://nlmsf.org/donate/" className="cta-button" {...ext}>Donate Today</a>
          </div>
        </aside>

        <div className="content-container" id="shop-section">
          {/* Intro / NLMSF Merchandise */}
          <section id="shop-intro" className="content-section">
            <div className="section-header">
              <h2>NLMSF Merchandise</h2>
              <p>THANK YOU FOR BEING A &quot;PURPLE POWER SHOPPER&quot; IN THE NAME OF RESEARCH SUPPORT!</p>
            </div>
            <div className="content-panel">
              <div className="intro-content">
                <div className="intro-logo">
                  <Image
                    src="/images/gift-shop/shop-for-the-cause-logo.png"
                    alt="Shop for the Cause — Champion of Hope"
                    width={640}
                    height={640}
                  />
                </div>
                <div className="intro-text">
                  <p className="highlight">Many of the items at the store have been donated to the Foundation by companies, friends, families of survivors and LMS Angels.</p>
                  <p className="highlight">Please email annie@nlmsf.org if you are interested in donating items to the store.</p>
                  <p className="highlight">The Foundation appreciates your generous support!</p>
                  <div className="shop-info">
                    <p>All orders are filled by volunteers. For all purchases, please email <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>.</p>
                    <p>The proceeds from all purchases are directed to LMS Research.</p>
                    <p>
                      Purchasing items from the Gift Shop may be done online: <a href="https://nlmsf.org/donate/" {...ext}>Donate online via NLMSF</a>
                      <br />
                      or by check to the NLMSF – 1685 So, Colorado Blvd, Unit S, Suite 447 Denver, CO 80222
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Goodnight Mama — directly below NLMSF Merchandise */}
          <section id="featured-book" className="featured-book-section">
            <div className="featured-book-container">
              <div className="featured-book-content">
                <h2 className="featured-book-title">Goodnight, Mama</h2>
                <p className="featured-book-description">
                  This story isn&apos;t just for sweet dreams—it makes a real difference. With every book sold, 10% is donated to The National Leiomyosarcoma Foundation— providing education, support, and research funding for this rare cancer.
                </p>
                <div className="featured-book-buttons">
                  <a href="https://www.taylordtomlinson.com/goodnight-mama" className="book-btn book-btn-hardcover" {...ext}>
                    <i className="fas fa-book" aria-hidden /> Buy Hardcover
                  </a>
                  <a href="https://amzn.to/44ts59Y" className="book-btn book-btn-paperback" {...ext}>
                    <i className="fas fa-book-open" aria-hidden /> Buy Paperback
                  </a>
                </div>
              </div>
              <div className="featured-book-image">
                <Image
                  src="https://media.nlmsf.org/wp-content/uploads/2026/01/Goodnight-Mama-FRONT.jpg"
                  alt="Goodnight Mama - A book supporting the National Leiomyosarcoma Foundation"
                  width={640}
                  height={360}
                />
              </div>
            </div>
          </section>

          <section id="custom-merch" className="content-section">
            <div className="section-header">
              <h2>Custom NLMSF Collection</h2>
              <p>Staff-approved designs on hats, hoodies, and short or long sleeve shirts — checkout on NLMSF.org</p>
            </div>
            <div className="content-panel">
              <p className="custom-merch-intro">
                Unique branded merch created in our studio, then printed and shipped by Printify. You buy from the
                Foundation; after printing and shipping costs, proceeds support LMS research.
              </p>
              <CustomMerchSection />
            </div>
          </section>

          {/* Official Bonfire merchandise — checkout happens on Bonfire */}
          <section id="bonfire-shop" className="content-section">
            <div className="section-header">
              <h2>Official Bonfire Merchandise</h2>
              <p>Checkout on Bonfire — proceeds support LMS research</p>
            </div>
            <div className="content-panel bonfire-panel">
              <div className="bonfire-intro">
                <p>
                  Official National Leiomyosarcoma Foundation merchandise, professionally printed in the USA.
                  Select a color and style on each item to preview it, then checkout on Bonfire. 20% of sales from Champions of Hope
                  NLMSF merchandise in collaboration with Bonfire goes directly to LMS research.
                </p>
                <div className="bonfire-intro-actions">
                  <a href={BONFIRE_STORE_URL} className="shop-button external-link" {...ext}>
                    Browse the Bonfire Store
                  </a>
                  <a href={BONFIRE_ORG_URL} className="shop-button" {...ext}>
                    View Organization Shop
                  </a>
                </div>
              </div>
              <BonfireProductGrid />
            </div>
          </section>

          {/* Merchandise */}
          <section id="shop-products" className="content-section">
            <div className="section-header">
              <h2>Our Merchandise</h2>
              <p>Champions of Hope with Every Purchase</p>
            </div>
            <div className="content-panel">
              <div className="product-row">
                <div className="product-item">
                  <div className="product-image">
                    <Image
                      src="/images/gift-shop/awareness-day-yard-sign.png"
                      alt="National Leiomyosarcoma Awareness Day — July 15 yard sign"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="product-info">
                    <h3>NLMSF Support Yard Sign</h3>
                    <div className="product-description">
                      <p>July 15 Is National LeioMyoSarcoma Awareness Day. Help Us Spread Awareness To Your Neighborhood Friends And Family With Our Signature Purple Signs!</p>
                    </div>
                    <div className="product-price"><span>$24.00</span></div>
                    <GiftShopOrderForm
                      formId="order-yard-sign"
                      itemName="NLMSF Support Yard Sign"
                      itemPrice="$24.00"
                    />
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image">
                    <Image
                      src="/images/gift-shop/lms-wristband-courage-hope-strength.png"
                      alt="LMS wristband with Courage, Hope, Strength"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="product-info">
                    <h3>LMS Wrist Bands</h3>
                    <div className="product-description">
                      <p>$5.00 each - donated to Research. Courage, Hope, Strength.</p>
                    </div>
                    <div className="product-price"><span>$5.00</span></div>
                    <GiftShopOrderForm
                      formId="order-wrist-bands"
                      itemName="LMS Wrist Bands"
                      itemPrice="$5.00 each"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special / Featured Products — Bonfire apparel & ball cap featured */}
          <section id="special-products" className="content-section">
            <div className="section-header">
              <h2>Featured Items</h2>
              <p>Special merchandise supporting our cause</p>
            </div>
            <div className="content-panel">
              <div className="special-products-grid">
                <div className="special-product">
                  <div className="special-product-image">
                    <div className="multi-image">
                      <Image
                        src="https://media.nlmsf.org/wp-content/uploads/2022/02/Nlmsf-T-Shirt.jpg"
                        alt="NLMSF T-Shirt"
                        width={640}
                        height={360}
                      />
                      <Image
                        src="https://media.nlmsf.org/wp-content/uploads/2022/02/NLMSF-hoodie.jpg"
                        alt="NLMSF Hoodie"
                        width={640}
                        height={360}
                      />
                    </div>
                  </div>
                  <div className="special-product-info">
                    <h3>HOPE in SURVIVORSHIP Collection</h3>
                    <p>T-Shirts, Hoodies, and more apparel to help fund LMS research projects</p>
                    <p className="special-price">$24.00 - $36.00</p>
                    <a href="https://www.bonfire.com/nlmsf-1/" className="shop-button external-link" {...ext}>Shop on Bonfire</a>
                  </div>
                </div>
                <div className="special-product">
                  <div className="special-product-image">
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2022/07/NLMSF-hat.png"
                      alt="NLMSF Ball Cap"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="special-product-info">
                    <h3>NLMSF Ball Cap</h3>
                    <p>Show your support with our high-quality ball cap</p>
                    <p className="special-price">$23.00</p>
                    <a href="https://www.bonfire.com/nlmsf-hat/" className="shop-button external-link" {...ext}>Shop on Bonfire</a>
                  </div>
                </div>
                <div className="special-product">
                  <div className="special-product-image">
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2021/07/purplebands.jpg"
                      alt="NLMSF Purple Support Ribbons"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="special-product-info">
                    <h3>NLMSF Purple Support Ribbons</h3>
                    <p>Ribbons</p>
                    <p className="special-price">$2.00 each - donated to Research</p>
                    <a href="#" className="shop-button">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
