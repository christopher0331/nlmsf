import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Board | NLMSF",
  description:
    "The NLMSF Team of Volunteers. Our enduring mission is our passion. Meet our board, medical advisory panel, and learn about our history.",
};

const MEDICAL_PANEL = [
  { name: "Janai Carr-Ascher, MD", title: "Pathologist", sub: "Molecular Biology Medicine · UC Davis · Sacramento, CA", img: "https://nlsmf.org/wp-content/uploads/2021/05/Janai-Carr-Ascher-MD.jpg" },
  { name: "Nam Quoc Bui, MD", title: "Sarcoma Medical Oncologist", sub: "Stanford Cancer Institute · Stanford University · Stanford, CA", img: "https://nlsmf.org/wp-content/uploads/2022/05/Bigger-Dr-Bui.jpg" },
  { name: "Elizabeth Davis, MD", title: "Sarcoma Medical Oncologist", sub: "Vanderbilt-Ingram Cancer Center, Nashville, TN", img: "https://nlsmf.org/wp-content/uploads/2021/05/Elizabeth-Davis.jpg" },
  { name: "Mihaela Druta, MD", title: "Sarcoma Medical Oncologist", sub: "Moffitt Cancer Center and Research Institute · Tampa, FL", img: "https://nlsmf.org/wp-content/uploads/2021/02/DR-Durta.jpg" },
  { name: "Kenneth Cardona, MD FACS", title: "Sarcoma Surgical Oncologist", sub: "Emory Winship Cancer Institute · Atlanta, GA", img: "https://nlsmf.org/wp-content/uploads/2022/01/Kenneth-Cardova.jpg" },
  { name: "Kristen N. Ganjoo, MD", title: "Sarcoma Medical Oncologist", sub: "Stanford Cancer Institute · Stanford University · Stanford, CA", img: "https://nlsmf.org/wp-content/uploads/2022/01/ganjoo-kristen.jpg" },
  { name: "Suzanne George, MD", title: "Sarcoma Medical Oncologist", sub: "Dana-Farber Cancer Institute · Boston, MA", img: "https://nlsmf.org/wp-content/uploads/2021/10/Susan-George-MD.jpg" },
  { name: "Rebecca Gladdy, MD, PhD", title: "Sarcoma Surgical Oncologist", sub: "Princess Margaret Cancer Center · Toronto, Canada", img: "https://nlsmf.org/wp-content/uploads/2022/06/Dr.-Rebecca-Gladdy-280x300.jpg" },
  { name: "Matthew Hemming, MD, PhD", title: "Sarcoma Medical Oncologist", sub: "UMass Memorial Health · Worcester, MA", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Matthew-Hemming.jpg" },
  { name: "Evita Henderson-Jackson, MD", title: "Pathologist", sub: "Moffitt Cancer Center and Research Institute · Tampa, FL", img: "https://nlsmf.org/wp-content/uploads/2021/05/Evita-Henderson-Jackson-MD.jpg" },
  { name: "Matthew Ingham, MD, PhD", title: "Sarcoma Medical Oncologist", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Matthew-Ingham-300x245.jpg" },
  { name: "Brian Kadera, MD", title: "Surgical Oncologist", sub: "Ronald Reagan Med. Center · UCLA · Los Angeles, CA", img: "https://nlsmf.org/wp-content/uploads/2022/03/Brian-Kadrea.jpg" },
  { name: "Anush Kalbasi, MD", title: "Radiation Oncologist", sub: "Stanford Cancer Institute · Stanford University · Stanford, CA", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Anusha-Kalbasi-300x300.jpg" },
  { name: "Aparna Kamat, MD", title: "Gynecologic Surgical Oncologist", sub: "Houston Methodist Hospital · Houston, TX", img: "https://nlsmf.org/wp-content/uploads/2021/10/Aparna-Kamat-MD.jpg" },
  { name: "Alexander J. Lazar, MD, PhD", title: "Sarcoma Pathologist", sub: "The University of Texas MD Anderson Cancer Center · Houston, TX", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Alexander-Lazar.jpeg" },
  { name: "Sujana Movva, MD", title: "Sarcoma Medical Oncologist", sub: "Memorial Sloan Kettering Cancer Center · New York, NY", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Sujana-Mowa.jpg" },
  { name: "Arash Naghavi, MD", title: "Radiation Oncologist", sub: "Moffitt Cancer Center · Tampa, FL", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Arash-Naghavi.jpg" },
  { name: "Corrie Painter, PhD", title: "Associate Director of Operations and Scientific Outreach", sub: "Broad Institute. COUNT ME IN PROJECT – Leiomyosarcoma Project.", img: "https://nlsmf.org/wp-content/uploads/2021/11/CorriePainter-300x229.png" },
  { name: "Seth Pollack, MD", title: "Sarcoma Medical Oncologist", sub: "Lurie Cancer Center · Northwestern University · Chicago, IL", img: "https://nlsmf.org/wp-content/uploads/2020/06/seth-pollack-199x300.jpg" },
  { name: "Dale Shepard, MD", title: "Sarcoma Medical Oncologist", sub: "Taussig Oncology · Cleveland Clinic · Cleveland, OH", img: "https://nlsmf.org/wp-content/uploads/2022/02/Dr-dale-shepard.jpg" },
  { name: "Neeta Somaiah, MD", title: "Sarcoma Medical Oncologist", sub: "MD Anderson Cancer Center · Houston, TX", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-Neeta-Somaiah.jpg" },
  { name: "Jonathan Trent, MD, PhD", title: "Sarcoma Medical Oncologist", sub: "Sylvester Cancer Center · Miami, FL", img: "https://nlsmf.org/wp-content/uploads/2021/10/Dr-trent-jonathan.jpg" },
  { name: "Brian A. Van Tine, MD, PhD", title: "Sarcoma Medical Oncologist", sub: "Siteman Cancer Center · Washington University · St. Louis, MO", img: "https://nlsmf.org/wp-content/uploads/2021/11/Brian-Van-Tine-MD-PhD.jpg" },
  { name: "William Tseng, MD", title: "Sarcoma Surgical Oncologist", sub: "Keck Medicine of USC · Los Angeles, CA", img: "https://nlsmf.org/wp-content/uploads/2022/01/Dr.-William-Tseng-240x300.jpg" },
  { name: "Scott Okuno, MD", title: "Sarcoma Medical Oncologist", sub: "Mayo Clinic · Rochester, MN", img: "https://nlsmf.org/wp-content/uploads/2024/09/Okuno-Photo-4.jpg" },
  { name: "Brittany Sciontis, MD", title: "Sarcoma Medical Oncologist", sub: "Mayo Clinic · Rochester, MN", img: "https://nlsmf.org/wp-content/uploads/elementor/thumbs/Sciontis-qutwgtv202sno67ik1a68nvqldn0f0fjhtpwirgthg.webp" },
  { name: "Elise Nassif-Haddad, MD, PhD", title: "Sarcoma Medical Oncologist", sub: "MD Anderson Cancer Center · Houston, TX", img: "https://nlsmf.org/wp-content/uploads/2024/09/Dr.-Nassifs-Photo.jpg" },
  { name: "Alessandra Maleddu, MD", title: "Sarcoma Medical Oncologist", sub: "University of Colorado Cancer Center · Aurora, CO", img: "https://nlsmf.org/wp-content/uploads/elementor/thumbs/Maleddu-Photo-qutxnjn0a2kndq4dirs10v496f1ljw7h8auz43ifpm.jpg" },
];

export default function OurBoardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">The NLMSF Team Of Volunteers</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-14">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">&ldquo;Our Enduring Mission is Our Passion&rdquo;</h2>
        </section>

        <section>
          <p className="text-gray-600 text-center mb-3">(Click the Link Below To View)</p>
          <h3 className="text-center">
            <a href="https://docs.google.com/document/d/1kZbFaxrunhvx5BdEiL5Mk6lyK12v6BI_aaYWN__OY1c/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">History of the Foundation</a>
          </h3>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
            <p><strong>2002 – present</strong>: The NLMSF Research Project Support Funding history: <a href="https://leiomyosarcoma.info/research-projects/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://leiomyosarcoma.info/research-projects/</a></p>
            <p><strong>2020</strong> Sarcoma Patients Euro.Net partner with the NLMSF in support of the International LMS Research Roundtable.</p>
            <p><strong>2019</strong> The NLMSF launched the International Leiomyosarcoma Roundtable, now with 120 research members in global support. <a href="https://leiomyosarcoma.info/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://leiomyosarcoma.info/</a></p>
            <p><strong>July 2016</strong>: Congress passed the Resolution: <a href="https://www.govtrack.us/congress/bills/114/sres545/text/ats" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://www.govtrack.us/congress/bills/114/sres545/text/ats</a></p>
            <p><strong>2016</strong> – The NLMSF reached out for support from Congress for National Leiomyosarcoma Awareness Day – July 15.</p>
            <p><strong>2015</strong> – The NLMSF collaborated with several cancer / sarcoma working groups throughout the US and Canada to strengthen and amplify patient – family/caregiver resource support.</p>
            <p><strong>2012</strong> – Patient education programs began at sarcoma centers of excellence and the evolution of the Foundation has been remarkable.</p>
            <p><strong>2001</strong> – Foundation founded by a Caregiver in honor of his wife to support and advocate for patients and fund research. Originally, a gathering place for peer-to-peer support.</p>
          </div>
        </section>

        <section className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6 md:p-8">
          <p className="font-semibold text-gray-800 mb-4">Annual reports of Accountability in patient advocacy and research support to the LMS Patient/Family Community:</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="https://docs.google.com/document/d/1HIsfKkEpiohnmkVZMkPalgBEl_HnUo5F/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2022</a>
            <span className="text-gray-400">·</span>
            <a href="https://docs.google.com/document/d/1HIsfKkEpiohnmkVZMkPalgBEl_HnUo5F/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2021</a>
            <span className="text-gray-400">·</span>
            <a href="https://nlsmf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2020-Final.docx" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2020</a>
            <span className="text-gray-400">·</span>
            <a href="https://nlsmf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2019-2020-1-2-1.docx" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2019</a>
            <span className="text-gray-400">·</span>
            <a href="https://nlsmf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2018-1.docx" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2018</a>
            <span className="text-gray-400">·</span>
            <a href="https://nlsmf.org/wp-content/uploads/2021/02/NLMSF-Annual-Report-2017-.docx.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2017</a>
            <span className="text-gray-400">·</span>
            <a href="https://nlsmf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2016.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2016</a>
            <span className="text-gray-400">·</span>
            <a href="https://nlsmf.org/wp-content/uploads/2021/01/NLMSF-Annual-Report-2015.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">NLMSF Annual Report 2015</a>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-3xl font-serif font-semibold text-gray-900 text-center mb-6 tracking-tight">Our Mission</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">Our mission is to advance research in order to accelerate treatment options and offer supportive resource assistance to patients and caregivers throughout the diagnosis and treatment journey.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-100 mb-4">
              <Image
                src="https://nlsmf.org/wp-content/uploads/2021/02/Dr-Singh.jpg"
                alt="Arun Singh, M.D."
                className="object-cover w-full h-full"
                width={240}
                height={240}
              />
            </div>
            <p className="text-blue-600 font-semibold">Arun Singh, M.D.</p>
            <p className="text-blue-600 font-semibold text-sm">Associate Professor · Sarcoma Service · Division of Hematology</p>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">&ldquo;The National Leiomyosarcoma Foundation is an important organization that strives to gather a critical mass of patients, scientists, patient advocates and physicians to learn more about this rare disease. Within the NLMSF, the LMS Research Roundtable organizes cutting edge research in this area and strives to innovate the ways that this disease is treated.&rdquo;</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://nlsmf.org/wp-content/uploads/elementor/thumbs/Pinwheel-Alex-quts6lih1f9cc5wdbrnqdcio2upb0bjpnisx11mrjw.jpg"
              alt="Pinwheel"
              className="rounded-xl max-w-full h-auto"
              width={640}
              height={360}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Medical Advisory Panel for Patient - Family Advocacy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDICAL_PANEL.map((doc) => (
              <div key={doc.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="aspect-[3/4] relative bg-gray-100">
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    className="object-cover w-full h-full"
                    width={240}
                    height={240}
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-gray-900 text-sm">{doc.name}</p>
                  <p className="text-gray-600 text-xs mt-1">{doc.title}</p>
                  {doc.sub && <p className="text-gray-500 text-xs mt-1">{doc.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center uppercase tracking-wide">Our Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Annie Achee */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/01/AnnieAchee-300x300.jpg"
                  alt="Annie Achee"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Annie Achee</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">President and Community Education / Research Liaison</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>I am devoted to the mission and goals of the Foundation, since its inception in 1999 – through the vision of Mr. Edmund Hoag.</p>
                  <p>My aim is to preserve his legacy – preserve the Foundation as he wanted it to be, by continuing all the focus that he had from the beginning – patient-centric programs and initiatives to promote support and advocacy within the LMS Community.</p>
                  <p>My dedication and commitment to this is unwavering – to faithfully serve the Champions of Hope – the patients; and promote collaborative relationships and partnerships with the Research Community – the Heroes Among us.</p>
                  <p>An interview from Global Genes with the President of the National LMS Foundation:</p>
                  <p>
                    <a href="https://globalgenes.org/raredaily/rare-leader-annie-achee-president-of-the-national-leiomyosarcoma-foundation/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                      https://globalgenes.org/raredaily/rare-leader-annie-achee-president-of-the-national-leiomyosarcoma-foundation/
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mitch Achee */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/elementor/thumbs/Mitch-Achees-Photo--qttze8kz7mjntnjfbabbojjlhjkskzt81shw2khqh0.jpg"
                  alt="Mitch Achee"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Mitch Achee, M.D.</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Medical Advisory / Patient Access / International LMS Research Roundtable Executive Committee</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>I am a Diagnostic Radiologist who retired in 2021 after practicing for 40 years. I am also an LMS survivor, diagnosed in 2011. My undergraduate degree is from Johns Hopkins University and my MD from the University of Virginia. I did both my Internal Medicine Residency and my Radiology residency at Fitzsimons Army Medical Center in Aurora, Colorado. I have held many leadership positions in my radiology group at hospitals and the Denver Medical Society.</p>
                  <p>I wish to &ldquo;pay it forward&rdquo; to the LMS Community by helping to educate patients and their families about LMS so that the patient can be their own best advocate and an active participant with their sarcoma medical care team during their treatment. I also like to stress to them the importance of being treated at a dedicated sarcoma center or at a minimum getting a second opinion regarding the best treatment for them at such a center.</p>
                  <p><strong>NOTE:</strong> Both Dr. Achee and Annie are members of the following research organizations: Connective Tissue Oncology Society (CTOS); the American Society of Clinical Oncologists (ASCO); the American Association of Cancer Research (AACR) and the European Society of Medical Oncology (ESMO).</p>
                </div>
              </div>
            </div>

            {/* Dale Ayscue */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2022/07/asy-284x300.jpg"
                  alt="Dale Ayscue"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Dale Ayscue</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Community Outreach</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>I am a survivor of sarcoma for the past 13 years.</p>
                  <p>I also have a FB group – Sarcoma (Cancer) Awareness to help others and &ldquo;pay it forward&rdquo; and now as a Board Member of the NLMSF, I feel even more empowered to be able to support patients and their families.</p>
                  <p>I have appreciated the NLMSF&apos;s approach and professional integrity in the work being done for support, education, and research on behalf of the sarcoma community and I am happy to be a part.</p>
                  <p>I am still employed, and I am a grandfather of 2 granddaughters. I am also an amputee of my left leg because of sarcoma cancer.</p>
                  <p className="font-semibold">&ldquo;Hope is the only thing stronger than fear.&rdquo; is my message to all.</p>
                </div>
              </div>
            </div>

            {/* David Boles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2022/02/Selfie-300x233.jpg"
                  alt="David Boles"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">David Boles</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Community Outreach</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>As the husband of a recently deceased ULMS patient, I can think of no better way to honor my wife than to support the work of NLMSF. After receiving a diagnosis with LMS, you are literally in for the fight of your life. Most of us do not have a medical background, but need to get up-to-speed quickly to make good choices for treatments that will increase chances for survival. That is where this group can help.</p>
                  <p>Then, there is the emotional side to treatments. Side effects, reactions and appointments place an enormous amount of stress on the patient and caregiver. Reading the medical disclosure for treatments can be overwhelming. You need someone who hears your concerns and provides some first-hand experience.</p>
                  <p>You will be told everyone is different. That is true, but you still need a sense for what lies ahead, what to look for and where to turn for help. I have joined the NLMSF to support their mission and purpose – i believe in their genuine efforts to help others through comprehensive websites, newsletters, patient programs and more.</p>
                </div>
              </div>
            </div>

            {/* Lynne Greco Forges */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/01/LynneGreco-300x300.jpg"
                  alt="Lynne Greco Forges"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Lynne Greco Forges, M.B.A., C.P.M.</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Treasurer</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>I was diagnosed with uterine leiomyosarcoma in 2015. I have undergone numerous surgeries and chemotherapies. Throughout this time, I have done all I can to maintain a positive attitude. This, along with my strong faith and an excellent team of doctors, has carried me through.</p>
                  <p>I enjoyed a 32-year career in Purchasing for various steel companies in Pittsburgh, PA. I love spending time with family and friends, cooking, reading, working on my house, spending time outdoors, yoga, walking and biking. I do a lot of volunteer work and do as much as possible to help others.</p>
                  <p>The NLMSF has been such a great resource for me, being Treasurer is the least I can do to show my appreciation.</p>
                </div>
              </div>
            </div>

            {/* Jim Matthews */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/01/JimMatthews-300x300.jpg"
                  alt="Jim Matthews"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Jim Matthews</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">Community Awareness Outreach Coordinator</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>I hail from New Jersey, and am a graduate in Economics from Seton Hall University. I am long time survivor, having been diagnosed in 1996 and treated at Memorial Sloan Kettering in NY. I was one of the original members of the National Leiomyosarcoma Foundation, having attend their first HugFest in Lancaster, PA.</p>
                  <p>I am blessed with a loving family and blessed to be affiliated with the NLMSF. I believe in the goodness of my fellow board members and want to help the LMS Community through collaborative Foundation support and advocacy in to honor the legacy of Mr. Edmund Hoag and his board members – carrying on their original mission of supporting the LMS patients and their families.</p>
                </div>
              </div>
            </div>

            {/* Christopher Hancock */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/01/chrisHeadshot-300x300.png"
                  alt="Christopher Hancock"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Christopher Hancock</h3>
                <p className="text-gray-500 font-semibold text-sm mt-1">NLMSF Webmaster/Consultant</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>My name is Christopher Hancock, owner of Corvus SEO.</p>
                  <p>I am a former Machine Gunner in the Marine Corps and proud to have had the privilege to honorably serve the country I love.</p>
                  <p>I have been working with the NLMSF for the last 2 years, ever since my mother Shannon Shapiro met Annie Achee at a convention, as she is a survivor of LMS since 2018.</p>
                  <p>I am very pleased to serve as a Board Member for the NLMSF in her honor. My values and work ethic aligns with the mission and success of the NLMSF in assisting the LMS community. Their dedication, tenacity and can-do spirit is inspirational to me and I&apos;m honored to be a part of it.</p>
                </div>
              </div>
            </div>

            {/* Greg Lee */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/08/image-219x300.png"
                  alt="Greg Lee"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Greg Lee</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Community Outreach</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>&ldquo;I was diagnosed with LMS in 2020 and with metastatic LMS in 2021. I am an assistant professor of Computer Science in the Jodrey School of Computer Science at Acadia University in Nova Scotia, Canada. I am now applying machine learning techniques to search for patient features (e.g., biomarkers) that help predict which treatments are best, to be applied on an individual level. My past research involved predicting who was most likely to give a charitable gift to a given organization. I worked with smaller data sets (which we often run into with LMS) but still produced accurate models. I&apos;m hoping to produce similar LMS prediction models.</p>
                  <p>I am a Cancer Immunotherapy Coordinator for patients interested in going to Germany for Dendritic Cell Therapy treatment.</p>
                  <p>I am happy to be a part of the NLMSF Foundation, as I feel they are a special group to advocate for the LMS Community.</p>
                  <p>I am married to my wonderful wife Melissa and we have 3 children and it&apos;s for them that I&apos;m doing this research.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Alex Aguilera */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2023/06/Alexs-Photo-200x300.jpg"
                  alt="Alex Aguilera"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Alex Aguilera</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Community Outreach · Social Media</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>Alex Aguilera is an experienced management consultant who specializes in leveraging data and strategy to drive impactful business solutions. He has significant experience working with a wide variety of organizations across industries. He holds a Bachelor of Science from the University of Virginia.</p>
                  <p>Alex serves as a Board Member for the National Leiomyosarcoma Foundation in honor of his mother, who passed away from LMS in 2012. He is inspired by the Foundation&apos;s tireless work and is dedicated to advancing the mission through community outreach.</p>
                </div>
              </div>
            </div>

            {/* Chandalyn Williams */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/02/BM-300x300.jpg"
                  alt="Chandalyn Williams"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Chandalyn Williams</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Community Outreach</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>Chandalyn Williams is a highly motivated and experienced executive professional, regarded for her ability to deliver outstanding results with the highest degree of expertise and professionalism. She holds a Bachelor of Arts degree in Business Administration and Communication Management from Jones International University, graduating Cum Laude; a Master of Business Administration from Texas Woman&apos;s University and; is currently within one year of completing her Doctorate of Business Administration at Trident International University. Chandalyn has served as an inpatient volunteer with M. D. Anderson Cancer Center, advocated on public platforms, such as Rare Disease Day at the Texas State Capitol and led annual 5K Run/Walks for over nine years in support of Leiomyosarcoma (LMS) Cancer research.</p>
                  <p>&ldquo;When my mother, Cynthia Solomon Holmes, was diagnosed on April 8, 2010 with Leiomyosarcoma (LMS) after visiting her doctor for a persistent cough, I was not prepared for how my world as I knew it would be turned upside down. Watching my mother fight this disease with the strength and vigor I knew to be her was an overwhelmingly painful experience. I felt physically helpless – but I knew how to pray. For her, my family and me. Following only a three-month battle with this dragon, my mother succumbed to the disease, passing away at the age of 52. I vowed to turn my personal tragedy into something that could be triumph for others who are faced with this disease through the creation of The Cynthia Solomon Holmes Foundation. I pray that through my efforts, individuals are inspired to support those battling this disease and in the daily fight for their right to live!&rdquo; ~ Chandalyn Williams</p>
                </div>
              </div>
            </div>

            {/* Jacqueline (Jacque) Sebany */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2022/01/Jacque-Sebany.png"
                  alt="Jacqueline Sebany"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Jacqueline (Jacque) Sebany</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Marketing Consultant</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>Jacqueline (Jacque) Sebany is the Chief Experience Officer for Shift&apos;d – a marketing and payments consulting brand.</p>
                  <p>Prior to becoming a marketing consultant, she was the Chief Marketing & Digital Officer at the American Diabetes Association (ADA). She was responsible for optimizing the marketing infrastructure to create efficient and effective campaigns, elevate the brand presence and bring fresh innovative ways to grow revenue and emotional connections between the ADA brand and the diabetes community.</p>
                  <p>Jacque has also served as Vice President of Digital Content at the American Heart Association (AHA).</p>
                  <p>Jacque has over 25 years&apos; experience across the entire spectrum of Marketing and Digital: front-end development, brand/marketing strategy, direct response marketing (including mail, email, mobile, social), project management (waterfall & agile), UX/UI and content strategy. She has worked across a broad spectrum of organizations in addition to AHA, including FedEx, The US Department of Treasury, Bahamas Ministry of Tourism, Golds Gym, Hyatt Hotels and multiple Consumer Package Good Brands.</p>
                  <p>Jacque holds a degree in Fashion and Interior Design and is a passionate creative who uses her design talents to transform organizations and brand experiences. She is very enthused and inspired to work with the National Leiomyosarcoma Foundation – as a Community Awareness Ambassador to advance the mission, vision, and purpose of the NLMSF.</p>
                </div>
              </div>
            </div>

            {/* Marlana Stoddard */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/01/Untitled-design-2-300x300.png"
                  alt="Marlana Stoddard"
                  className="object-cover w-full h-full"
                  width={240}
                  height={240}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Marlana Stoddard</h3>
                <p className="text-indigo-600 font-semibold text-sm mt-1">NLMSF Community Outreach</p>
                <div className="mt-4 text-gray-600 text-sm space-y-2 prose prose-sm max-w-none">
                  <p>My name is Marlana Stoddard Hayes and I am a 6 year survivor of uterine LMS, presenting as STUMP in 2011.</p>
                  <p>Formerly, I have been a Professor of Art for 35 years with my last position as faculty at Marylhurst University in Oregon. In 2015, my diagnosis called me to step away from all teaching in order to focus on my health. In my current professional life I am represented by A.I.R. Gallery in NYC as a National Member and have a listing in Who&apos;s Who of America. I am happy to help support the NLMSF foundation as a Board Member, as well as with donations of cards and pillow making in support of this cancer journey on behalf of cancer patients and their families. We are also parents of an amazing Chinese girl, now 18!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
