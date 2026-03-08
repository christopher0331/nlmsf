import type { Metadata } from "next";
import "./house-cleaning-and-meal-prep.css";

export const metadata: Metadata = {
  title: "House Cleaning and Meal Prep | NLMSF",
  description:
    "Resources for free house cleaning for cancer patients and meal preparation and nutrition information during treatment.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function HouseCleaningAndMealPrepPage() {
  return (
    <main className="hcmp-page">
      {/* Hero */}
      <section className="hcmp-hero">
        <div className="hcmp-hero-content">
          <div className="hcmp-badge">
            <span className="hcmp-badge-dot" aria-hidden="true" />
            <span>Patient &amp; Caregiver Support</span>
          </div>
          <h1>House Cleaning and Meal Prep</h1>
          <div className="hcmp-divider" />
          <p>
            Free house cleaning resources for cancer patients and meal preparation
            and nutrition guidance during treatment.
          </p>
          <div className="hcmp-tags">
            <span className="hcmp-tag teal">
              <i className="fas fa-broom" aria-hidden /> Cleaning Services
            </span>
            <span className="hcmp-tag blue">
              <i className="fas fa-utensils" aria-hidden /> Meal Prep
            </span>
            <span className="hcmp-tag purple">
              <i className="fas fa-apple-alt" aria-hidden /> Nutrition
            </span>
          </div>
        </div>
        <div className="hcmp-hero-decor decor-one" aria-hidden="true" />
        <div className="hcmp-hero-decor decor-two" aria-hidden="true" />
      </section>

      <div className="hcmp-container">
        {/* Nav */}
        <nav className="hcmp-nav">
          <h3>On This Page</h3>
          <a href="#house-cleaning">House Cleaning Help</a>
          <a href="#meal-prep">Meal Prep &amp; Nutrition</a>
          <a href="#antioxidants">Antioxidant Food Sources</a>
        </nav>

        {/* House Cleaning */}
        <section id="house-cleaning" className="hcmp-section">
          <h2 className="hcmp-section-title teal">
            House Cleaning Help For Cancer Patients
          </h2>
          <div className="hcmp-panel teal">
            <div className="hcmp-panel-header">
              <div className="hcmp-icon teal">
                <i className="fas fa-broom" aria-hidden />
              </div>
              <div>
                <h3>Cleaning for a Reason</h3>
                <p>Free residential cleaning for women cancer patients</p>
              </div>
            </div>
            <p className="hcmp-panel-text">
              <a href="https://cleaningforareason.org/" {...ext}>
                Cleaning for a Reason
              </a>{" "}
              provides information about qualification criteria, an application
              form, and a drop-down list locator for cleaning services available in
              your area. For women cancer patients only.
            </p>
            <p className="hcmp-phone">
              <i className="fas fa-phone" aria-hidden /> 612-462-8360
            </p>
          </div>

          <div className="hcmp-cards">
            <a
              href="https://www.essentialcleaningcompany.com/cleaning-for-a-reason"
              className="hcmp-card"
              {...ext}
            >
              <h4>Free Cleaning for Cancer Patients</h4>
              <p className="hcmp-card-org">Essential Cleaning Company</p>
              <p>
                Proud partner of Clean for a Reason, providing free residential
                cleaning services for those battling cancer.
              </p>
            </a>
            <a
              href="https://cleaningforareason.org/mama-needs-a-maid-and-so-do-cancer-patients/"
              className="hcmp-card"
              {...ext}
            >
              <h4>Mama Needs A Maid and So Do Cancer Patients</h4>
              <p className="hcmp-card-org">Cleaning for a Reason</p>
              <p>
                Partners with 1,400+ residential cleaners in the US &amp; Canada.
                Over $20M in donated services helping 59,000+ patients since 2006.
              </p>
            </a>
            <a
              href="https://www.cancer.org/cancer/latest-news/how-to-keep-your-home-clean-when-living-with-cancer.html"
              className="hcmp-card"
              {...ext}
            >
              <h4>How to Keep Your Home Clean When Living With Cancer</h4>
              <p className="hcmp-card-org">American Cancer Society</p>
              <p>
                Connects patients, caregivers, and family members with essential
                services and resources at every step of their cancer journey.
              </p>
            </a>
            <a
              href="https://cleaningforareason.org/clean-serene-services-offers-free-house-cleaning-to-cancer-patients/"
              className="hcmp-card"
              {...ext}
            >
              <h4>Clean &amp; Serene Services</h4>
              <p className="hcmp-card-org">Cleaning for a Reason Partner</p>
              <p>
                Free house cleaning for households battling cancer, with 1,300+
                partnered cleaners across the US and Canada.
              </p>
            </a>
          </div>
        </section>

        {/* Meal Prep */}
        <section id="meal-prep" className="hcmp-section">
          <h2 className="hcmp-section-title blue">
            Meal Preparation &amp; Nutrition Information
          </h2>
          <div className="hcmp-panel blue">
            <div className="hcmp-panel-header">
              <div className="hcmp-icon blue">
                <i className="fas fa-utensils" aria-hidden />
              </div>
              <div>
                <h3>Meal Plans for Treatment Side Effects</h3>
                <p>
                  Customized assistance from diagnosis through maintenance
                </p>
              </div>
            </div>

            <div className="hcmp-orgs">
              <div className="hcmp-org-card">
                <h4>
                  <a href="https://www.cookingwithcancer.org/" {...ext}>
                    Cooking with Cancer.org
                  </a>
                </h4>
                <a href="tel:+12059783570" className="hcmp-org-phone">
                  205-978-3570
                </a>
              </div>
              <div className="hcmp-org-card">
                <h4>
                  <a href="https://www.amealtoheal.org/" {...ext}>
                    Meals to Heal.org
                  </a>
                </h4>
                <a href="tel:+18887211041" className="hcmp-org-phone">
                  888-721-1041
                </a>
              </div>
              <div className="hcmp-org-card">
                <h4>
                  <a
                    href="https://www.momsmeals.com/individuals-caregivers/"
                    {...ext}
                  >
                    Mom&apos;s Meals
                  </a>
                </h4>
                <a href="tel:+18775086667" className="hcmp-org-phone">
                  877-508-6667
                </a>
              </div>
            </div>

            <p className="hcmp-panel-text">
              These organizations offer meal preparation to help minimize
              chemotherapy side effects such as loss of appetite, fatigue,
              constipation, and more. They provide consultation on immune-boosting
              and anti-inflammatory foods, online recipes, recipe videos, e-books,
              and customized nutritional counseling. This is a support tool to stay
              strong during and after treatment and may enhance your body&apos;s
              response to treatment.
            </p>

            <a
              href="https://www.youtube.com/watch?v=NzTYEO6FRRo"
              className="hcmp-video-link"
              {...ext}
            >
              <i className="fas fa-play-circle" aria-hidden />
              Eating Well Through Chemo and Beyond (Video)
            </a>
          </div>
        </section>

        {/* Antioxidants */}
        <section id="antioxidants" className="hcmp-section">
          <h2 className="hcmp-section-title purple">
            What Types of Foods Are Good Sources of Antioxidants?
          </h2>
          <div className="hcmp-panel purple">
            <div className="hcmp-panel-header">
              <div className="hcmp-icon purple">
                <i className="fas fa-seedling" aria-hidden />
              </div>
              <div>
                <h3>Antioxidant-Rich Foods</h3>
                <p>Vegetables, fruits, legumes, nuts, teas, and more</p>
              </div>
            </div>
            <p className="hcmp-panel-text">
              Many vegetables, fruits, and other foods are excellent sources of
              antioxidant compounds, including anthocyanins, carotenoids (such as
              beta-carotene), lutein, lycopene, resveratrol, selenium, vitamin C,
              and vitamin E. Whole foods provide a variety of antioxidant compounds
              with unique health effects. For example, grapes contain anthocyanins,
              vitamin C, resveratrol, and selenium, while dark leafy greens like
              kale, spinach, and collard greens offer vitamins C and E, lutein, and
              kaempferol.
            </p>
            <p className="hcmp-panel-text">
              You can also fill up on antioxidants by eating legumes and nuts,
              drinking{" "}
              <a
                href="https://www.verywellfit.com/the-benefits-of-black-tea-89547"
                {...ext}
              >
                green and black tea
              </a>
              , and using herbs and spices in your cooking. Snack foods like
              popcorn and{" "}
              <a
                href="https://www.verywellfit.com/the-benefits-of-cocoa-extract-89051"
                {...ext}
              >
                dark chocolate
              </a>{" "}
              also deliver antioxidants.
            </p>
            <a
              href="https://www.christinamthompson.com/leiomyosarcoma/"
              className="hcmp-cta-link"
              {...ext}
            >
              <i className="fas fa-external-link-alt" aria-hidden />
              Leiomyosarcoma — Guidance on Food (videos included)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
