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
    <div className="house-cleaning-meal-prep-page">
      <section className="hc-hero">
        <div className="hc-hero-inner">
          <span className="hc-badge">Patient &amp; Caregiver Support</span>
          <h1 className="hc-hero-title">House Cleaning and Meal Prep</h1>
          <p className="hc-hero-desc">
            Free house cleaning resources for cancer patients and meal preparation and nutrition guidance during treatment.
          </p>
        </div>
      </section>

      <div className="hc-content">
        <section className="hc-section">
          <h2 className="hc-section-title">House Cleaning Help For Cancer Patients</h2>
          <p className="hc-text">
            <strong>
              <a href="https://cleaningforareason.org/" {...ext}>Cleaning for a Reason</a>
            </strong>
            {" "}- For women cancer patients only. Provides information about qualification criteria, an application form, and a drop-down list locator for cleaning services available in your area.
            <br />
            <span className="hc-phone">612-462-8360</span>
          </p>
          <ul className="hc-resource-list">
            <li>
              <h3 className="hc-resource-title">
                <a href="https://www.essentialcleaningcompany.com/cleaning-for-a-reason" {...ext}>
                  Free Cleaning for Cancer Patients — Essential Cleaning Company
                </a>
              </h3>
              <p className="hc-resource-desc">
                That&apos;s why we are proud to partner with Clean for a Reason, a remarkable organization dedicated to providing free residential cleaning services for cancer patients. Our mission is to ease the burden of household chores for those battling cancer, allowing them to focus on their health and recovery.
              </p>
            </li>
            <li>
              <h3 className="hc-resource-title">
                <a href="https://cleaningforareason.org/mama-needs-a-maid-and-so-do-cancer-patients/" {...ext}>
                  Mama Needs A Maid and So Do Cancer Patients
                </a>
              </h3>
              <p className="hc-resource-desc">
                Feb 3, 2025 · Cleaning for a Reason partners with more than 1,400 residential cleaners throughout the United States and Canada to offer free house cleaning to any household battling cancer. Since 2006, the nonprofit and its partners have donated more than $20 million in services, helping more than 59,000 cancer patients.
              </p>
            </li>
            <li>
              <h3 className="hc-resource-title">
                <a href="https://www.cancer.org/cancer/latest-news/how-to-keep-your-home-clean-when-living-with-cancer.html" {...ext}>
                  How to Keep Your Home Clean When Living With Cancer
                </a>
              </h3>
              <p className="hc-resource-desc">
                Aug 13, 2024 · We connect patients, caregivers, and family members with essential services and resources at every step of their cancer journey. Ask us how you can get involved and support the fight against cancer. Some of the topics we can assist with include: Referrals to patient-related programs or resources; Donations, website, or event-related assistance.
              </p>
            </li>
            <li>
              <h3 className="hc-resource-title">
                <a href="https://cleaningforareason.org/clean-serene-services-offers-free-house-cleaning-to-cancer-patients/" {...ext}>
                  Clean &amp; Serene Services Offers Free House Cleaning to Cancer Patients
                </a>
              </h3>
              <p className="hc-resource-desc">
                Dec 14, 2023 · Cleaning for a Reason partners with more than 1,300 residential cleaners throughout the United States and Canada to offer free house cleaning to any household battling cancer. Since 2006, the nonprofit and its partners have donated more than $18 million in services, helping more than 52,000 cancer patients.
              </p>
            </li>
          </ul>
        </section>

        <section className="hc-section">
          <h2 className="hc-section-title">Meal Preparation &amp; Nutrition Information</h2>
          <p className="hc-text">
            <strong>Assistance for meal plans to address treatment side effects:</strong> The following resources provide customized assistance for important phases of a cancer journey, from initial diagnosis to after treatment/maintenance. Visit the websites to learn more.
          </p>
          <ol className="hc-numbered-list">
            <li>
              <strong>
                <a href="https://www.cookingwithcancer.org/" {...ext}>Cooking with Cancer.org</a>
                {" "}(<a href="tel:+12059783570">205-978-3570</a>)
              </strong>
            </li>
            <li>
              <strong>
                <a href="https://www.amealtoheal.org/" {...ext}>Meals to Heal.org</a>
                {" "}(<a href="tel:+18887211041">888-721-1041</a>)
              </strong>
            </li>
            <li>
              <strong>
                <a href="https://www.momsmeals.com/individuals-caregivers/" {...ext}>Mom&apos;s Meals</a>
                {" "}- to support Cancer Patients (<a href="tel:+18775086667">877-508-6667</a>)
              </strong>
            </li>
          </ol>
          <p className="hc-text">
            These organizations offer meal preparation according to your request to help minimize the side effects of chemotherapy treatment. Certain foods have been found to reduce side effects such as loss of appetite, loss of taste and smell, fatigue, constipation, diarrhea, and more. There is consultation on foods that will boost the immune system and reduce inflammation. Online recipes and recipe videos, plus e-books are available to assist patients and offer customized nutritional counseling and meal planning. This is a support tool to take control of your nutrition to stay strong during and after treatment, and may enhance your body&apos;s response to treatment. Make an appointment with an integrative medicine team to discuss lowering inflammation and boosting immunity.
          </p>
          <p className="hc-text">
            <strong>Videos for How To Eat Healthy During Chemotherapy:</strong>{" "}
            <a href="https://www.youtube.com/watch?v=NzTYEO6FRRo" {...ext}>Eating well through Chemo and Beyond (Video)</a>
          </p>
        </section>

        <section className="hc-section">
          <h2 className="hc-section-title">What Types of Foods Are Good Sources of Antioxidants?</h2>
          <p className="hc-text">
            Many vegetables, fruits, and other types of foods are excellent sources of antioxidant compounds, including anthocyanins, carotenoids (such as beta-carotene), lutein, lycopene, resveratrol, selenium, vitamin C, and vitamin E. Furthermore, many whole foods provide a variety of antioxidant compounds, each with its own unique health effects. For example, grapes contain anthocyanins, vitamin C, resveratrol, and selenium, while dark leafy green vegetables like kale, spinach, and collard greens offer vitamins C and E, lutein, and an antioxidant called kaempferol. While vegetables and fruits serve as some of the best food sources of antioxidants, you can also fill up on antioxidant compounds by eating legumes and nuts, drinking tea (such as{" "}
            <a href="https://www.verywellfit.com/the-benefits-of-black-tea-89547" {...ext}>green tea</a>
            {" "}and{" "}
            <a href="https://www.verywellfit.com/the-benefits-of-black-tea-89547" {...ext}>black tea</a>
            ), and using herbs and spices in your cooking. Snack foods like popcorn and{" "}
            <a href="https://www.verywellfit.com/the-benefits-of-cocoa-extract-89051" {...ext}>dark chocolate</a>
            {" "}also deliver a number of antioxidants.
          </p>
          <p className="hc-text">
            LEIOMYOSARCOMA — <a href="https://www.christinamthompson.com/leiomyosarcoma/" {...ext}>Guidance on Food</a> (videos included)
          </p>
        </section>
      </div>
    </div>
  );
}
