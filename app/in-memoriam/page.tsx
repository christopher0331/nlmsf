import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./in-memoriam.css";
import { ARCHIVED_TRIBUTES } from "./archived-tributes";

export const metadata: Metadata = {
  title: "In Memoriam | NLMSF",
  description:
    "Tribute funds and in memoriam giving. Honor the life of an LMS angel or survivor. Light a candle of hope.",
};

export default function InMemoriamPage() {
  return (
    <div className="in-memoriam-page">
      <section className="im-hero">
        <div className="im-hero-inner">
          <h1 className="im-hero-title">T R I B U T E S</h1>
          <p className="im-intro">
            The contributions through the named funds have and will continue to be directed to LMS specific research projects.
          </p>
        </div>
      </section>

      <div className="im-content">
        <section className="im-section">
          <h2 className="im-section-title">Establish A Tribute Fund To Honor The Life Of:</h2>
          <ul className="im-bullet-list">
            <li>An LMS Angel</li>
            <li>A Survivor - Champions of Hope</li>
          </ul>
        </section>

        <section className="im-section">
          <p className="im-text">
            If you prefer to donate through your bank, bill pay or by personal check, please make sure the check is made out to the NLMSF and sent to the address listed below:
          </p>
          <address className="im-address">
            National LeioMyoSarcoma Foundation<br />
            1685 S. Colorado Blvd.<br />
            Unit S, Suite 447<br />
            Denver, Colorado 80222
          </address>
        </section>

        <section className="im-section">
          <h2 className="im-ongoing-title">Ongoing Tribute Funds</h2>
          <ul className="im-tribute-links">
            <li><Link href="/terri-obos-danahey-tribute-fund">Terri Obos Danahey Tribute Fund</Link></li>
            <li><Link href="/paul-hoying">Paul Hoying Tribute Fund</Link></li>
            <li><Link href="/irene-abrahamian">Irene Abrahamian Tribute Fund</Link></li>
            <li><Link href="/florence-benoit">Florence Benoit Tribute Fund</Link></li>
            <li><Link href="/snyderstrong-tribute-fund">SnyderStrong Tribute Fund</Link></li>
            <li><Link href="/laurel-ann-ing-minagawa">Laurel-Ann Ing Minagawa Tribute Fund</Link></li>
            <li><Link href="/kelley-jude-hoellrich">Kelley Jude Hoellrich Tribute Fund</Link></li>
            <li><Link href="/kimberly-marie-simpson-matthews">Kimberly Marie (Simpson) Matthews Tribute Fund</Link></li>
            <li><Link href="/laura-lavezzo-carrico">Laura Lavezzo Carrico Tribute Fund</Link></li>
            <li><Link href="/donald-robert-anderson">Donald Robert Anderson Tribute Fund</Link></li>
            <li><Link href="/cheryl-phyllis-scharp">Cheryl Phyllis Scharp Tribute Fund</Link></li>
            <li><Link href="/caitlin-anne-kuhlman">Caitlin Anne Kuhlman Tribute Fund</Link></li>
            <li><Link href="/herbert-lee-perry-jr">Herbert Lee Perry, Jr. Tribute Fund</Link></li>
            <li><Link href="/denise-janowiak">Denise Janowiak Tribute Fund</Link></li>
            <li><Link href="/andria-barnes-ruth"><strong>Andria Barnes Ruth Tribute Fund</strong></Link></li>
            <li><Link href="/michele-k-winslow"><strong>Michele K. Winslow Tribute Fund</strong></Link></li>
            <li><Link href="/randi-mitchell"><strong>Randi Mitchell Tribute Fund</strong></Link></li>
            <li><Link href="/victoria-marrin"><strong>Victoria Marrin Tribute Fund</strong></Link></li>
            <li><Link href="/gladys-ann-maxim-baker"><strong>Gladys Ann Maxim Baker Tribute Fund</strong></Link></li>
            <li><Link href="/barbara-esther-olson"><strong>Barbara Esther Olson Tribute Fund</strong></Link></li>
            <li><Link href="/neal-jacobs"><strong>Neal Jacobs Tribute Fund</strong></Link></li>
            <li><Link href="/shawn-borini"><strong>Shawn Borini Tribute Fund</strong></Link></li>
            <li><Link href="/cynthia-diane-katafiasz"><strong>Cynthia Diane Katafiasz Tribute Fund</strong></Link></li>
            <li><Link href="/norma-jarrett"><strong>Norma Jarrett Tribute Fund</strong></Link></li>
            <li><Link href="/donna-stieger"><strong>Donna Stieger Tribute Fund</strong></Link></li>
            <li><Link href="/tim-hile">Tim Hile Tribute Fund</Link></li>
            <li><Link href="/laura-anne-trimble-tribute-page">Laura Anne Trimble Tribute Fund</Link></li>
            <li><Link href="/ted-cimafranca">Ted Cimafranca Tribute Fund</Link></li>
            <li><Link href="/julie-marie-florentino">Julie Marie Florentino Tribute Fund</Link></li>
            <li><Link href="/james-alan-grimm-jr">James Alan Grimm, Jr. Tribute Fund</Link></li>
            <li><Link href="/denise-f-montano-tribute-fund">Denise F. Montano Tribute Fund</Link></li>
            <li><Link href="/ruth-canter-cohen-tribute-fund">Ruth Canter Cohen Tribute Fund</Link></li>
            <li><Link href="/gerri-rubino">Gerri Rubino Tribute Fund</Link></li>
            <li><Link href="/kathleen-curl-tribute-fund">Kathleen Curl Tribute Fund</Link></li>
            <li><Link href="/anna-marmo-memorial-fund">Anna Marmo Tribute Fund</Link></li>
            <li><Link href="/julie-neuhaus-tribute-fund">Julie Neuhaus Tribute Fund</Link></li>
            <li><Link href="/barbara-lynn-davis">Barbara Lynn Davis Fund</Link></li>
            <li><Link href="/gwendolyn-kay-mcdaniel-tribute-fund">Gwendolyn Kay McDaniel Tribute Fund</Link></li>
            <li><Link href="/penne-m-morris">Pennee M. Morris Tribute Fund</Link></li>
            <li><Link href="/snyderstrong-tribute-fund">Snyder Strong Tribute Fund</Link></li>
            <li><Link href="/julie-neuhaus-tribute-fund">Julie Neuhaus Tribute Fund</Link></li>
          </ul>
          <p className="im-text">
            <Link href="/tributes-directory" className="im-archived-link">Archived TRIBUTES</Link>
          </p>
        </section>

        <section className="im-candle-section">
          <Image
            src="https://nlmsf.org/wp-content/uploads/2023/03/websiste-tribute-candle.gif"
            alt=""
            className="im-candle-img"
            width={200}
            height={222}
          />
          <h1 className="im-candle-title">Light A Candle</h1>
          <p className="im-candle-text">
            LIGHT THE CANDLE OF HOPE <em>and share an inspirational thought to honor someone special in your life who has been touched by LMS.</em>
          </p>
          <p className="im-candle-name">
            <strong>Maria Tilves-Aguilera</strong>
            <br />
            <em>In loving memory of Maria Tilves-Aguilera - A loving mother, wife, sister, daughter, friend, and neighbor.</em>
          </p>
        </section>

        <section className="im-section">
          <h2 className="im-section-title">Archived Tribute Funds</h2>
          <ul className="im-archived-list">
            {ARCHIVED_TRIBUTES.map(({ name, fund }, index) => (
              <li key={`archived-${index}`}>
                <strong>{name}</strong>
                {fund ? <> – <em>{fund}</em></> : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
