import type { Metadata } from "next";
import Image from "next/image";
import "./insurance-2-staged.css";

export const metadata: Metadata = {
  title: "Health Insurance Guidance | NLMSF",
  description:
    "Health insurance guidance for LMS patients: Social Security Disability, Medicare, Medicaid, COBRA, marketplaces, and appealing denials.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function Insurance2StagedPage() {
  return (
    <div className="insurance-2-staged-page">
      <section className="ins2-hero">
        <div className="ins2-hero-inner">
          <h1 className="ins2-hero-title">Health Insurance Guidance</h1>
          <p className="ins2-hero-subtitle">
            Resources for disability benefits, Medicare, Medicaid, and navigating health coverage.
          </p>
        </div>
      </section>

      <div className="ins2-content">
        <div className="ins2-main">
          <h2 className="ins2-section-title center">Health Insurance Guidance</h2>

          <ul className="ins2-list">
            <li>
              <strong>
                <a href="https://www.disability-benefits-help.org/compassionate-allowances/leiomyosarcoma" {...ext}>
                  Leiomyosarcoma and Society Security Disability Benefits
                </a>
              </strong>
            </li>
            <li>
              <a href="https://secure.ssa.gov/apps10/poms.nsf/lnx/0423022961" {...ext}>
                <strong>Compassionate Allowance for Leiomyosarcoma</strong>
              </a>
            </li>
            <li>
              <a href="https://www.ssdrc.com/prem8.html" {...ext}>
                Medical-Vocational Allowance Approval for Social Security Disability and SSI Cases
              </a>
              .
            </li>
            <li>
              <a href="https://www.disability-benefits-help.org/glossary/medical-vocational-allowance" {...ext}>
                <strong>What is Social Security&apos;s Medical Vocational Allowance?</strong>
              </a>
            </li>
          </ul>

          <div className="ins2-block">
            <strong>A Local Resource for insurance help</strong>: Medicare and Medicaid questions, long term care, your State Health Insurance Assistance Program (SHIP) provides free counseling on all these issues – and we have highlighted them in past newsletters:
            <br />
            <strong>Call 877 839 2675. Also Medicare.gov or call: 800 633-4227., and the Medicare Rights Center: 800 333-4114</strong>.
          </div>

          <div className="ins2-reminder-heading">
            A reminder of helpful information about Social Security Disability guidance:
          </div>
          <p className="ins2-para">
            Basics of <span className="il">SSDI</span>
            <br />
            If you have been contributing to the Social Security long enough and recently enough, if your disability makes it impossible for you to work, and if the disability looks like it will last for a year or longer, you can qualify for Social Security Disability. Your doctor will have to write a statement describing your disability for Social Security.
          </p>

          <ul className="ins2-list">
            <li>No matter how young you are, <span className="il">SSDI</span> pays full benefits – the full amount you would receive if you had reached full retirement age.</li>
            <li>When you reach full retirement age, your benefits continue as normal Social Security retirement benefits.</li>
            <li>If it&apos;s possible for you to work part-time, you can do that to supplement your income up to the limit Social Security sets. (The limit changes each year.)</li>
            <li>There is a waiting period of five full months between your last day of work and your first monthly <span className="il">SSDI</span> check. Ideally, your employer or your state will provide some kind of short-term disability payments during this time.</li>
            <li>After you receive <span className="il">SSDI</span> for 24 months, you will be eligible for Medicare regardless of your age.</li>
            <li>Normally COBRA health insurance lasts only 18 months. Future <span className="il">SSDI</span> recipients who ask promptly for an extension will receive it automatically – but you must ask. You&apos;ll need to have COBRA or find private health insurance to cover the 30-month waiting period for Medicare.</li>
            <li>You can return to work any time you feel able to. Just let <span className="il">SSDI</span> know. There is a trial period to make sure you can handle working again.</li>
          </ul>

          <p className="ins2-para">
            If you have not worked long enough to qualify for <span className="il">SSDI</span>, and if your assets are low, you might qualify for Supplemental Security Income instead. SSI provides immediate eligibility for Medicaid. You can return to work if you feel able; just let SSI know.
            <br />
            The Social Security Administration has the official word. There are answers to just about any question a person has. It&apos;s actually pretty understandable, but it&apos;s very spread out over page after page of specific answers for specific situations.
          </p>

          <ul className="ins2-link-list">
            <li><a href="https://www.ssa.gov/benefits/disability/" {...ext}>https://www.ssa.gov/benefits/disability/</a></li>
            <li><a href="https://www.ssa.gov/disability/professionals/bluebook/" {...ext}>https://www.ssa.gov/disability/professionals/bluebook/</a></li>
            <li><a href="https://secure.ssa.gov/ICON/main.jsp" {...ext}>https://secure.ssa.gov/ICON/main.jsp</a></li>
            <li><a href="https://secure.ssa.gov/apps10/poms/images/SSA4/G-SSA-4734-U8-1.pdf" {...ext}>https://secure.ssa.gov/apps10/poms/images/SSA4/G-SSA-4734-U8-1.pdf</a></li>
            <li><a href="https://www.ssa.gov/benefits/disability/" {...ext}>https://www.ssa.gov/benefits/disability/</a> <a href="https://www.ssa.gov/redbook/eng/overview-disability.htm" {...ext}>https://www.ssa.gov/redbook/eng/overview-disability.htm</a></li>
            <li>
              <a href="https://www.disabilitysecrets.com/resources/ssdi/an-overview-social-security-disability-insurance-ssdi.htm" {...ext} title="An Overview of Social Security Disability Insurance (SSDI)">
                An Overview of Social Security Disability Insurance (SSDI)
              </a>
            </li>
            <li>
              Here&apos;s a basic introduction to how Social Security Disability works.
              <br />
              <a href="https://www.disabilitysecrets.com/" {...ext}>www.disabilitysecrets.com</a>
            </li>
          </ul>

          <h2 className="ins2-section-title">How Do I Get Health Insurance?</h2>
          <p className="ins2-para">If you do not have health insurance, below are some options that might be available to you.</p>

          <h3 className="ins2-h4">State Health Insurance Marketplaces</h3>
          <p className="ins2-para">
            Can be found at <a href="https://www.healthcare.gov/" {...ext}>www.HealthCare.gov</a>. Marketplaces provide one location for people to learn about private and some public health insurance plans available to them, where they live. Individuals who choose plans in the Marketplace may be eligible for financial assistance.
          </p>

          <h3 className="ins2-h4"><a href="https://www.medicare.gov/" {...ext}>Medicare</a></h3>
          <p className="ins2-para">
            A federal health insurance program, which provides coverage to individuals who are entitled to Social Security retirement benefits and are 65 years of age or older, individuals who are under the age of 65, but have been receiving Social Security Disability Insurance (SSDI) for no less than 24 months, individuals entitled to Railroad Retirement benefits or Railroad Retirement disability benefits, individuals with end-stage renal disease (ESRD) and individuals with Amyotrophic Lateral Sclerosis (ALS). You may be eligible to receive both Medicare and Medicaid benefits if you are over 65 or disabled and have very limited income. Medicaid might cover what Medicare does not.
          </p>

          <h3 className="ins2-h4"><a href="https://www.medicaid.gov/" {...ext}>Medicaid</a></h3>
          <p className="ins2-para">
            A federal health insurance program with eligibility criteria and benefits that vary from state to state. Thirty-one states provide coverage for low income adults, while in other states individuals have to meet other requirements, such as having a disability, having a dependent child or being over age 65. You may be eligible to receive both Medicare and Medicaid benefits if you are over 65 or disabled and have very limited income. Medicaid might cover what Medicare does not.
          </p>

          <h3 className="ins2-h4">COBRA</h3>
          <p className="ins2-para">
            If you have health insurance coverage through your employer or a spouse&apos;s employer, COBRA may allow you to maintain that coverage if you experience a qualifying event, such as leaving your job. Consult your benefits manager.
          </p>

          <h3 className="ins2-h4"><a href="https://www.va.gov/health/" {...ext}>Veterans</a></h3>
          <p className="ins2-para">You may be eligible to receive health care through the Veterans Administration.</p>

          <h3 className="ins2-h4">Health Insurance for Cancer Patients</h3>
          <p className="ins2-para">
            ACS Health Insurance Assistance Service: 1-800-ACS-2345 <a href="https://triagecancer.org/cancer-health-insurance-finances-cost" {...ext}>Triage Cancer</a> has a tool on their website to find all types of insurance options and other government benefits options.
          </p>

          <h2 className="ins2-section-title">Communicating with Your Health Insurance Company</h2>
          <p className="ins2-para">If you have health insurance, it&apos;s important to learn about the specifics of your policy, including:</p>
          <ul className="ins2-list">
            <li>What&apos;s covered</li>
            <li>Deductibles (what you must pay out-of-pocket before your insurance company will begin to cover claims)</li>
            <li>Co-payments or co-pays (a dollar amount set by your insurance provider required to be paid by a patient each time care or a drug is received)</li>
            <li>Other out-of-pocket costs</li>
            <li>How to best use your insurance benefits</li>
          </ul>
          <p className="ins2-para">
            A good place to start is with your health insurance card. Your insurance card will have numbers you can call to learn more about your policy. Many health insurance companies offer insurance case managers to assist insured individuals diagnosed with cancer. These trained individuals (often registered nurses or licensed social workers) will follow your case closely, helping to coordinate care and insurance benefits. Contact your insurance company to ask if they will assign you a case manager. Learning more about what your policy does and does not cover will help you better work with your insurer to make sure you receive all the benefits and coverage to which you are entitled. You will also be better prepared to deal with any questions or disputes you may encounter.
          </p>

          <h2 className="ins2-section-title">Appealing Insurance Denials</h2>
          <p className="ins2-para">
            It is not unusual for claims to be denied or for insurers to say they will not cover a test, procedure or service that your doctor ordered. However, you can appeal your health insurance company&apos;s decision and you may be able to get the decision overturned. Check with your health care team to see if there is someone on staff who can help you. If the appeal is for coverage of a specific medication, some manufacturers may be able to help you with your appeal. If you choose to file the appeal yourself, remember that courtesy and a cool head will increase your chances of success. It is normal to be frustrated, irritated, or angry that a claim was denied. However, how you share that frustration and anger may affect the success of your appeal. If your appeal is denied, you still have options. You can ask for a final decision in writing and then file an external appeal. However, if your issue is urgent, you don&apos;t have to wait to get a final decision from your insurance company before filing an external appeal. An external appeal involves a review of your claim by an independent organization outside of your insurance company. All private health insurance plans are now required to have external appeals processes. You can also request help from your state&apos;s Consumer Assistance Program, your state&apos;s insurance agency or the Department of Labor if you are insured under a federal policy. For more information, click here. <a href="https://www.cancersupportcommunity.org/sites/default/files/uploads/living-with-cancer/topics/resource/tips_for_appealing_a_denial_of_coverage.pdf" {...ext}>Download Tips for Appealing a Denial of Coverage</a>
          </p>
          <p className="ins2-para">
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2021/05/Triage-Cancer.jpg"
              alt="Triage Cancer"
              className="ins2-img-inline"
              width={110}
              height={99}
            />
          </p>
          <p className="ins2-para">
            From TRIAGE CANCER - When an Insurance Co. Denies a Claim - helpful guidance for patients/caregivers:
            <br />
            <a href="https://vimeo.com/499714526" {...ext}>https://vimeo.com/499714526</a>
          </p>

          <h3 className="ins2-h3">Insurance Guidance: Reminders</h3>
          <p className="ins2-para">
            To get the most out of your coverage, you&apos;ll need to keep track of all the paperwork, as well as the conversations and transactions that take place between you and your insurance provider. This convenient checklist can be used to help you manage your insurance information during your cancer care. <strong>Start here:</strong>
          </p>
          <ol className="ins2-ol">
            <li>Read your insurance policy before chemotherapy and try to determine what your plan will cover. Discuss costs with your oncologist—often there will be several effective treatment options that may vary in costs and coverage.</li>
            <li>Open, review and file bills and insurance notices immediately. If you have COBRA coverage, pay premiums in full and on time.</li>
            <li>Create a system for recording your expenses and claims by filing things under categories like &quot;submitted&quot; and &quot;paid.&quot;</li>
            <li>Pay by check so you have a record, and attach any canceled checks to the related bill and file them.</li>
            <li>See if your insurance company has assigned you a case manager. If so, keep him or her informed about your treatment. <strong>If your claim is denied</strong> resubmit it. Make copies of any paperwork you send to your provider. Record names, dates and conversations you have with your insurance company in a notebook. Enlist the help of your doctor&apos;s billing office to deal with claims or disputes. Call a social worker or nurse on your healthcare team to discuss unresolved problems. Ask one of them or a family member to contact your insurer.</li>
            <li>Request that your doctor, hospital and/or cancer treatment center provide scientific studies to your insurance company to demonstrate the effectiveness of your treatments.</li>
            <li>Contact your Medicaid office prior to receiving treatments to see if you are eligible for reimbursements, or check with pharmaceutical companies to see if there&apos;s a reimbursement specialist who can help you. <strong>Confused?</strong> Then ask to speak to a nurse navigator, social worker or financial advocate. Every hospital has at least one of these pros available, and they can help you resolve a multitude of frustrating issues. Some of their good deeds: They can locate interpreters, explain confusing consent forms, describe how to get assistance with high co-pays or the cost of expensive drugs, and even show you the layout of the hospital so you&apos;re less likely to get lost! You can also reach out to organizations that help with health care issues like insurance denials and medical debt. CoPatient and Patient Advocate Foundation are two such organizations.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
