import type { Metadata } from "next";
import Image from "next/image";
import {
  BONFIRE_ORG_URL,
  BONFIRE_STORE_URL,
  bonfireProducts,
} from "./bonfire-products";
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
        <div className="hero-content">
          <h1>NLMSF Gift Shop</h1>
          <p className="hero-subtitle">Support LMS Research with Every Purchase</p>
          <div className="hero-badges">
            <div className="badge">
              <span className="badge-icon shop" aria-hidden />
              <span className="badge-text">Unique Gifts</span>
            </div>
            <div className="badge">
              <span className="badge-icon research" aria-hidden />
              <span className="badge-text">Support Research</span>
            </div>
            <div className="badge">
              <span className="badge-icon community" aria-hidden />
              <span className="badge-text">Build Community</span>
            </div>
          </div>
          <div className="hero-cta">
            <p>Every purchase directly supports vital LMS research initiatives</p>
            <a href="#shop-section" className="cta-button">Shop Now</a>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="https://media.nlmsf.org/wp-content/uploads/2020/07/unnamed-70.jpg"
            alt="NLMSF Gift Shop"
            width={1200}
            height={800}
          />
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
                    src="https://media.nlmsf.org/wp-content/uploads/2021/02/Gift-shop-box.jpg"
                    alt="Gift Shop Box"
                    width={640}
                    height={360}
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
                  Select a size and color on Bonfire to complete checkout. 20% of sales from Champions of Hope
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
              <div className="bonfire-grid">
                {bonfireProducts.map((product) => (
                  <article key={product.id} className="bonfire-card">
                    <a
                      href={product.checkoutUrl}
                      className="bonfire-card-media"
                      {...ext}
                      aria-label={`Checkout ${product.name} — ${product.productType} on Bonfire`}
                    >
                      <span className="bonfire-card-badge">Bonfire</span>
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                        className="bonfire-card-img bonfire-card-img-front"
                      />
                      {product.imageBack ? (
                        <Image
                          src={product.imageBack}
                          alt={`${product.alt} (back view)`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                          className="bonfire-card-img bonfire-card-img-back"
                        />
                      ) : null}
                    </a>
                    <div className="bonfire-card-body">
                      <p className="bonfire-card-type">{product.productType}</p>
                      <h3>{product.name}</h3>
                      <p className="bonfire-card-desc">{product.description}</p>
                      <ul className="bonfire-card-styles">
                        {product.styles.map((style) => (
                          <li key={style}>{style}</li>
                        ))}
                      </ul>
                      <div className="bonfire-card-footer">
                        <p className="bonfire-card-price">
                          <span>From</span> {product.priceFrom}
                        </p>
                        <a href={product.checkoutUrl} className="shop-button external-link" {...ext}>
                          Checkout on Bonfire
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
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
                    <a href="#" className="shop-button">Add to Cart</a>
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image">
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2022/04/Keyring.png"
                      alt="LMS Wrist Bands"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="product-info">
                    <h3>LMS Wrist Bands</h3>
                    <div className="product-description"><p>$5.00 each - donated to Research</p></div>
                    <div className="product-price"><span>$5.00</span></div>
                    <a href="#" className="shop-button">Add to Cart</a>
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
