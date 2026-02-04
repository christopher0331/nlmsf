import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./gift-shop-nlmsf.css";

export const metadata: Metadata = {
  title: "NLMSF Gift Shop | NLMSF",
  description:
    "Support LMS research with every purchase. NLMSF merchandise, Goodnight Mama book, apparel, and patient comfort gifts.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const BONFIRE_IMG =
  "https://dynamic.bonfireassets.com/thumb/design-image/a3d9c552-7b0f-4e45-ab28-33e827855552/db80c949-4d14-43f3-9d82-1817a6d2d606/450/";
const BONFIRE_STORE = "https://www.bonfire.com/store/nlmsf-gift-shop/";

export default function GiftShopNlmsfPage() {
  return (
    <div className="gift-shop-nlmsf-page">
      {/* Hero */}
      <section className="hero">
        <div className="badge">
          <i className="fas fa-gift" aria-hidden />
          <span>Patient &amp; Family Support</span>
        </div>
        <h1 className="hero-title">NLMSF Gift Shop</h1>
        <div className="divider" aria-hidden />
        <p className="hero-description">
          Every purchase directly supports vital LMS research initiatives and patient support programs
        </p>
        <div className="feature-tags">
          <div className="feature-tag blue">
            <i className="fas fa-tshirt" aria-hidden />
            <span>NLMSF Merchandise</span>
          </div>
          <div className="feature-tag indigo">
            <i className="fas fa-hands-helping" aria-hidden />
            <span>Support Research</span>
          </div>
        </div>
      </section>

      <div className="page-layout">
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
                <a href="#shop-products" className="nav-link">
                  <span className="nav-icon products" aria-hidden />
                  <span>Our Products</span>
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
            <h4>Questions About Our Products?</h4>
            <p>
              For all purchases, please email <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>. The proceeds from all purchases directly support LMS Research.
            </p>
            <a href="https://nlmsf.org/donate/" className="cta-button" {...ext}>Donate Today</a>
          </div>
        </aside>

        <div className="content-container" id="shop-section">
          {/* Intro + Featured Book + Resources */}
          <div id="shop-intro" className="content-section">
            <div className="section-header">
              <h2>NLMSF Merchandise</h2>
              <p>Support LMS Research with Every Purchase</p>
            </div>

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
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                </div>
              </div>
            </section>

            <div className="content-panel">
              <div className="resource-list">
                <div className="resource-item">
                  <div className="resource-icon">
                    <i className="fas fa-gift" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h3>About Our Gift Shop</h3>
                    <p>Many of the items at the store have been donated to the Foundation by companies, friends, families of survivors and LMS Angels. The Foundation appreciates your generous support!</p>
                    <p>All orders are filled by volunteers. For all purchases, please email <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>. The proceeds from all purchases are directed to LMS Research.</p>
                    <p>Purchasing items from the Gift Shop may be done online: <a href="https://nlmsf.org/donate/" {...ext}>https://nlmsf.org/donate/</a> or by check to the NLMSF – 1685 So, Colorado Blvd, Unit S, Suite 447 Denver, CO 80222</p>
                    <div className="resource-link-wrapper">
                      <a href="mailto:annie@nlmsf.org" className="resource-link">
                        <i className="fas fa-envelope" aria-hidden />
                        <span>Donate Items to the Store</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="resource-item">
                  <div className="resource-icon heart">
                    <i className="fas fa-hand-holding-heart" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h3>A Free Gift for Patients Through the NLMSF</h3>
                    <p>
                      The National Leiomyosarcoma Foundation is honored to offer a <strong>free comfort gift for ALL sarcoma patients</strong> through our partnership with Pete&apos;s Blankets of Hope.
                    </p>
                    <p>Each gift includes a lovingly crocheted chemotherapy blanket, with the option of a matching head covering or mittens. These items are handmade with care to provide warmth, comfort, and a reminder that you are not alone during treatment.</p>
                    <p><em>&quot;Providing Hope and Warmth Through Every Stitch&quot;</em> — created by the gifted hands of Pete&apos;s Crocheting Angels of Hope, a compassionate group of volunteers dedicated to supporting patients through every step of their journey.</p>
                    <div className="resource-link-wrapper">
                      <a href="mailto:annieachee@aol.com" className="resource-link">
                        <i className="fas fa-envelope" aria-hidden />
                        <span>Request a Free Gift</span>
                      </a>
                      <a href="tel:3038083437" className="resource-link phone">
                        <i className="fas fa-phone" aria-hidden />
                        <span>Call 303-808-3437</span>
                      </a>
                    </div>
                    <p className="resource-note">
                      <strong>ALL REQUESTS:</strong> Please contact Annie Achee at <a href="mailto:annieachee@aol.com">annieachee@aol.com</a> or call <a href="tel:3038083437">303-808-3437</a>. This gift is provided at no cost to patients through the NLMSF.
                    </p>
                  </div>
                </div>

                <div className="resource-item">
                  <div className="resource-icon">
                    <i className="fas fa-shopping-bag" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h3>Champions of Hope Merchandise &amp; Gift Cards</h3>
                    <p><strong>Merchandise for LMS Research Funding</strong> — 20% of sales from our Champions of Hope NLMSF merchandise in collaboration with Bonfire goes directly to LMS research.</p>
                    <p>
                      <strong>Give the Gift of Possibilities with a Bonfire Gift Card</strong> <a href="https://help.bonfire.com/en/articles/8660110-gift-cards" {...ext}>Learn more</a>
                    </p>
                    <p>
                      <a href="https://use.bonfire.com/gift-cards?_gl=1*1l9dkud*_gcl_au*MzE5NjQ1NDM1LjE3NjQ0NTE2OTc." {...ext}>Link to Buy Gift Card</a>
                    </p>
                    <p>When you share a Bonfire gift card, you&apos;re handing over the power to support a cause close to their heart. Bonfire gift cards can be used toward purchasing merchandise from any campaign or store on Bonfire.</p>
                    <p>Gift cards are a convenient way to shop for custom merchandise on the Bonfire platform. They give your friends and loved ones the opportunity to choose from a variety of products and causes. Share the love, share the impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div id="shop-products" className="content-section">
            <div className="section-header">
              <h2>Our Products</h2>
              <p>Champions of Hope with Every Purchase</p>
            </div>
            <div className="content-panel">
              <div className="product-grid">
                <h2 className="row-title">Champion of Hope for Leiomyosarcoma Research</h2>
                <div className="product-row">
                  <div className="product-card">
                    <h3 className="product-card-heading">Champion of Hope for Leiomyosarcoma Research</h3>
                    <div className="product-image">
                      <Image
                        src={BONFIRE_IMG}
                        alt="Champion of Hope Baseball Cap"
                        srcSet={`${BONFIRE_IMG.replace("/450/", "/900/")} 2x`}
                        width={640}
                        height={360}
                      />
                    </div>
                    <div className="product-details">
                      <p className="product-title">Printed Classic Baseball Cap</p>
                      <p className="product-price">$30.98</p>
                      <div className="product-colors">
                        <span className="color-option white active" aria-hidden />
                      </div>
                      <a href={BONFIRE_STORE} className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-image">
                      <Image
                        src={BONFIRE_IMG}
                        alt="Champion of Hope Baseball Cap"
                        srcSet={`${BONFIRE_IMG.replace("/450/", "/900/")} 2x`}
                        width={640}
                        height={360}
                      />
                    </div>
                    <div className="product-details">
                      <p className="product-title">Printed Classic Baseball Cap</p>
                      <p className="product-price">$33.98</p>
                      <div className="product-colors">
                        <span className="color-option white active" aria-hidden />
                        <span className="color-option black" aria-hidden />
                        <span className="color-option pink" aria-hidden />
                      </div>
                      <a href={BONFIRE_STORE} className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                    </div>
                  </div>
                  <div className="product-card empty" aria-hidden />
                </div>

                <h2 className="row-title">NLMSF Tote</h2>
                <div className="product-row">
                  {[["Large Organic Cotton Tote Bag", "$40.98", "beige"], ["Recycled Cotton Tote Bag", "$34.98", "lightgrey"], ["Organic Cotton Tote Bag", "$36.98", "beige"]].map(([title, price, color]) => (
                    <div key={title} className="product-card">
                      <div className="product-image">
                        <Image
                          src={BONFIRE_IMG}
                          alt={`NLMSF Tote - ${title}`}
                          width={640}
                          height={360}
                        />
                      </div>
                      <div className="product-details">
                        <p className="product-title">{title}</p>
                        <p className="product-price">{price}</p>
                        <div className="product-colors">
                          <span className={`color-option ${color} active`} aria-hidden />
                        </div>
                        <a href={BONFIRE_STORE} className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="row-title">NLMSF</h2>
                <div className="product-row five-items">
                  {[
                    ["Premium Unisex Tee", "$34.48", "white"],
                    ["Pullover Hoodie", "$49.48", "lightgrey"],
                    ["Crewneck Sweatshirt", "$46.48", "lightgrey"],
                    ["Premium Tee", "$34.48", "white"],
                    ["Hoodie", "$48.48", "white"],
                  ].map(([title, price, color]) => (
                    <div key={title} className="product-card">
                      <div className="product-image">
                        <Image
                          src={BONFIRE_IMG}
                          alt={`NLMSF - ${title}`}
                          width={640}
                          height={360}
                        />
                      </div>
                      <div className="product-details">
                        <p className="product-title">{title}</p>
                        <p className="product-price">{price}</p>
                        <div className="product-colors">
                          <span className={`color-option ${color} active`} aria-hidden />
                        </div>
                        <a href={BONFIRE_STORE} className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="row-title">NLMSF Eagle</h2>
                <div className="product-row four-items">
                  {[
                    ["Premium Unisex Tee", "$34.48", "beige"],
                    ["Crewneck Sweatshirt", "$46.48", "lightgrey"],
                    ["Classic Long Sleeve Tee", "$36.98", "lightgrey"],
                    ["Premium Tee", "$34.48", "white"],
                  ].map(([title, price, color]) => (
                    <div key={title} className="product-card">
                      <div className="product-image">
                        <Image
                          src={BONFIRE_IMG}
                          alt={`NLMSF Eagle - ${title}`}
                          width={640}
                          height={360}
                        />
                      </div>
                      <div className="product-details">
                        <p className="product-title">{title}</p>
                        <p className="product-price">{price}</p>
                        <div className="product-colors">
                          <span className={`color-option ${color} active`} aria-hidden />
                        </div>
                        <a href={BONFIRE_STORE} className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="row-title">Champion of Hope for Leiomyosarcoma Research</h2>
                <div className="product-row">
                  {[
                    ["Allmade Organic Cotton Unisex Tee", "$35.49"],
                    ["Classic Long Sleeve Tee", "$33.49"],
                    ["Classic Unisex Tee", "$33.49"],
                  ].map(([title, price]) => (
                    <div key={title} className="product-card">
                      <div className="product-image">
                        <Image
                          src={BONFIRE_IMG}
                          alt={title}
                          width={640}
                          height={360}
                        />
                      </div>
                      <div className="product-details">
                        <p className="product-title">{title}</p>
                        <p className="product-price">{price}</p>
                        <div className="product-colors">
                          <span className="color-option white active" aria-hidden />
                        </div>
                        <a href={BONFIRE_STORE} className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="row-title">NLMSF Purple Support Bands</h2>
                <div className="product-row">
                  <div className="product-card">
                    <div className="product-image">
                      <Image
                        src="https://media.nlmsf.org/wp-content/uploads/2021/07/purplebands.jpg"
                        alt="NLMSF Purple Support Bands"
                        width={640}
                        height={360}
                      />
                    </div>
                    <div className="product-details">
                      <p className="product-title">LMS Wrist Bands or Ribbons</p>
                      <p className="product-price">$2.00 each</p>
                      <a href="mailto:annieachee@aol.com" className="btn-add-to-cart"><i className="fas fa-shopping-cart" aria-hidden /> Add to Cart</a>
                    </div>
                  </div>
                  <div className="product-card empty" aria-hidden />
                  <div className="product-card empty" aria-hidden />
                </div>

                <h2 className="row-title">NLMSF Ball Cap</h2>
                <div className="product-row">
                  <div className="product-card">
                    <div className="product-image">
                      <Image
                        src="https://media.nlmsf.org/wp-content/uploads/2022/07/NLMSF-hat.png"
                        alt="NLMSF Ball Cap"
                        width={640}
                        height={360}
                      />
                    </div>
                    <div className="product-details">
                      <p className="product-title">High-quality Ball Cap</p>
                      <p className="product-price">$23.00</p>
                      <a href="https://www.bonfire.com/nlmsf-hat/" className="btn-add-to-cart" {...ext}><i className="fas fa-shopping-cart" aria-hidden /> Shop on Bonfire</a>
                    </div>
                  </div>
                  <div className="product-card empty" aria-hidden />
                  <div className="product-card empty" aria-hidden />
                </div>
              </div>
            </div>

            {/* Featured / Quick links */}
            <div id="special-products" className="resource-grid">
              <div className="resource-card">
                <i className="fas fa-ribbon" aria-hidden />
                <h4>NLMSF Purple Support Bands</h4>
                <p>LMS Wrist Bands or Ribbons</p>
                <p><strong>Price:</strong> $2.00 each</p>
                <a href="mailto:annieachee@aol.com" className="resource-card-link">Add to Cart</a>
              </div>
              <div className="resource-card">
                <i className="fas fa-hat-cowboy" aria-hidden />
                <h4>NLMSF Ball Cap</h4>
                <p>Show your support with our high-quality ball cap</p>
                <p><strong>Price:</strong> $23.00</p>
                <a href="https://www.bonfire.com/nlmsf-hat/" className="resource-card-link" {...ext}>Shop on Bonfire</a>
              </div>
              <div className="resource-card">
                <i className="fas fa-pump-soap" aria-hidden />
                <h4>Soap For The Cure</h4>
                <p>The National Leiomyosarcoma Foundation Is Partnering with Soap For The Cure</p>
                <span className="resource-card-link disabled">Coming Soon</span>
              </div>
              <div className="resource-card">
                <i className="fas fa-tshirt" aria-hidden />
                <h4>HOPE in SURVIVORSHIP Collection</h4>
                <p>T-Shirts, Hoodies, and more apparel to help fund LMS research projects</p>
                <p><strong>Price:</strong> $24.00 - $36.00</p>
                <a href="https://www.bonfire.com/nlmsf-1/" className="resource-card-link" {...ext}>Shop on Bonfire</a>
              </div>
            </div>
          </div>

          {/* Denver */}
          <div id="denver-resources" className="content-section">
            <div className="section-header">
              <h2>Denver Community Support</h2>
              <p>Local resources and ways to get involved</p>
            </div>
            <div className="content-panel special">
              <div className="resource-list">
                <div className="resource-item">
                  <div className="resource-icon denver">
                    <i className="fas fa-map-marked-alt" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h3>Denver Area Support</h3>
                    <p>If you&apos;re in the Denver area, we can connect you with local resources and support groups.</p>
                    <p>Your participation in our Denver-based fundraising activities directly impacts the research we fund nationwide.</p>
                    <div className="resource-link-wrapper">
                      <Link href="/denver-support" className="resource-link denver-link">
                        <i className="fas fa-external-link-alt" aria-hidden />
                        <span>Connect With Denver Resources</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
