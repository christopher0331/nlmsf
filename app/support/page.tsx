import type { Metadata } from "next";
import "./support.css";

export const metadata: Metadata = {
  title: "Support | NLMSF",
  description:
    "Ways to get involved with the National Leiomyosarcoma Foundation: volunteer, attend programs, become an ambassador, and support LMS research.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function SupportPage() {
  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-inner">
          <h1 className="support-hero-title">
            <a href="https://www.targetcancerfoundation.org/support-us/volunteer/" {...ext}>
              VOLUNTEER
            </a>
          </h1>
          <h4 className="support-hero-subtitle">You can help.</h4>
          <p className="support-hero-text">
            The National Leiomyosarcoma Foundation (NLMSF TEAM) embraces a dedicated and committed volunteer community of active LMS patients/survivors, caregivers, families, friends, co-workers, advocates/supporters - who all contribute to the mission and purpose of the Foundation. We encourage you to join the NLMSF TEAM - join us and bring your ideas, creativity, commitment, and enthusiasm to help make a difference for the LMS Community - &quot;Many hands make light work for small projects.&quot; Contact Annie Achee at <a href="tel:+13038083437">303-808-3437</a> to volunteer. We would love to have you with us! We are a caring, genuine, group that only wants to do the best for patients and their families. Together we make an impact for the better!
          </p>
        </div>
      </section>

      <div className="support-content">
        <section className="support-section">
          <h2 className="support-section-title">Ways to Get Involved:</h2>
          <ul className="support-list">
            <li>
              <strong>ATTEND PATIENT EDUCATION PROGRAMS</strong> – held throughout the year. Check Patient Education page for calendar updates.
            </li>
            <li>
              <strong>BE A VOLUNTEER FOUNDATION AMBASSADOR</strong> – Help the Foundation with a small project. Initiate a project you feel passionate about doing, based on your time / availability. The Foundation has at least 50 fundraising ideas to share. Students and young professionals can also be Ambassadors to help raise awareness and LMS research funding.
            </li>
            <li>
              <strong>THINK OF A PROJECT AT CHURCH, SCHOOL, WORK, CLUB AFFILIATION</strong>, in connection with a holiday to make it a festive fundraising effort. Fall is a great time to launch a fundraising project. JULY 15 IS LMS AWARENESS DAY – A fundraising event on this day would highlight awareness of LMS. Contact Annie at <a href="tel:+13037830924" {...ext}>303-783-0924</a> or email at: <a href="mailto:annieachee@aol.com" {...ext}>annieachee@aol.com</a> for the Ideas List to share with you.
              <br />
              <strong>BE A FACEBOOK/TWITTER PARTICIPANT –</strong> Connect with patients/supporters/Foundation board members. See information updates posted about research articles/news/updates.
              <br />
              <strong>CONTRIBUTE</strong> – <strong>Invest in the future of surviving LMS. It is all about the present and the future of Leiomyosarcoma research breakthroughs to advance treatment options and extend survival for patients.</strong>
            </li>
          </ul>
        </section>

        <section className="support-section">
          <h3 className="support-section-title">Invest in Research Breakthroughs To Advance Treatment:</h3>
          <p className="support-text">
            It is easy to make a contribution to research in honor/ tribute for someone who has been a special part of your life.
          </p>
          <p className="support-text">
            NLMSF FUNDING SUPPORT FOR RESEARCH PROJECTS - Through &quot;investing&quot; in LMS Research, patients, families, friends came together to support /contribute to the Foundation&apos;s funding of important LMS research projects. <em>All donations are investment &quot;gifts&quot; directed to LMS research - lighting the way to the discovery that can turn into clinical care treatment options . . . &quot;gifts&quot; that keep on giving!</em>
          </p>
          <ul className="support-report-links">
            <li><a href="https://bit.ly/31O7obA" {...ext}>NLMSF Annual Report 2021</a></li>
            <li><a href="https://media.nlmsf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2020-Final.docx" {...ext}>NLMSF Annual Report 2020</a></li>
            <li><a href="https://media.nlmsf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2019-2020-1-2-1.docx" {...ext}>NLMSF Annual Report 2019</a></li>
            <li><a href="https://media.nlmsf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2018-1.docx" {...ext}>NLMSF Annual Report 2018</a></li>
            <li><a href="https://media.nlmsf.org/wp-content/uploads/2021/02/NLMSF-Annual-Report-2017-.docx.pdf" {...ext}><strong>NLMSF Annual Report 2017</strong></a></li>
            <li><a href="https://media.nlmsf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2016.pdf" {...ext}>NLMSF Annual Report 2016</a></li>
            <li><a href="https://media.nlmsf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2015.pdf" {...ext}>NLMSF Annual Report 2015</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
