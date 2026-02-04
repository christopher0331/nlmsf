"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Slide = {
  id: string;
  role: "Patient" | "Caregiver";
  roleClass: "patient" | "caregiver";
  imageSrc: string;
  imageAlt: string;
  title: string;
  meta: string;
  excerpt: string;
  details: string[];
  stripName: string;
  stripSub: string;
};

const slidesData: Slide[] = [
  {
    id: "pp-slide-1",
    role: "Caregiver",
    roleClass: "caregiver",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/bobby.jpg",
    imageAlt: "Photo of Bobby Whitfield, Caregiver",
    title: "A Father, A Fighter",
    meta: "Bobby Whitfield",
    excerpt:
      "Dad was diagnosed with a Rhabdomyosarcoma when I was just 12 years old. It was the scariest thing that could happen to our family. He entered a clinical trial at NIH--remission came after a hard road of chemo and radiation.",
    details: [
      "Dad was diagnosed with a Rhabdomyosarcoma when I was just 12 years old. I remember at the time it was the scariest thing that could happen to our family. My father was admitted to NIH in Bethesda MD for a clinical trial. During the same time another family from our hometown was getting the same scary diagnosis. He too as well attended NIH on the same protocol. NIH started both patients at the same time with 2 different treatment plans. My dad always had a deep dislike of doctors, he always told me, \"They call it practicing medicine for a reason.\"",
      "A few months later the other gentleman was beaten by Rhabdomyosarcoma. Dad's treatment by no means was easy. He was administered chemotherapy and radiation. Being raised Jehovah's Witness he also tried many herbal remedies, and teas. I do not recall how long my father was treated; I do remember the day he celebrated the word remission.",
      "May 1989, I graduated high school and was set for college. Our family doctor who had previously diagnosed my dad had scheduled a hernia operation for myself. I lifted a lot of weights during football practice and apparently pushed it. June 19th, I awoke after surgery, all I remember is a couple of doctors looking for moles on my body and discussing my surgery with concern. Due to my father being an NIH patient I was put on a plane within a few days where I was given my LMS diagnosis.",
      "I was also informed that it had spread to my lungs, and I had 24 tumors in them. At that time due to my age, I was allowed to stay on the 13th floor pediatrics. There's a whole new level of scared when being told you have possibly 3 months left of your life. I recall sitting in a conference room with several doctors and this was the best outcome! How? Unless I wanted to start an intense treatment of chemotherapy. I knew at this time everything I had watched my father endure was now my only hope.",
      "I used to keep a journal of everything that was administered to myself and every test that I had done. I used that as a catalyst to how I was going to feel. I remember only a couple of the names of the chemotherapy treatments, mainly because they really left an impression. Adriamycin and Cytoxan, combined every 13 days. It always felt like death and would put me out for a couple of days. I would fly back home to KY in between treatments where I pretty much was taken straight from the airport to our local hospital and admitted. During that time, I would receive blood, platelets as well as a mild chemotherapy. About 4 months in NIH had not seen the results from the chemo that was desired. I was then put on a chemo/radiation protocol. This lasted for 3 months, luckily for myself and my family NIH had just opened The Children's Inn at NIH. I was amongst the 1st group of kids to stay there with my family. Most days I would receive radiation and then go tour around Washington, DC or take some of the family trips the hospital offered with my chemo pump constantly going.",
      "I will never say the road was easy in fact it was nothing but that. There was a social worker that I talked to that offered me the opportunity to donate semen in case I would like to have kids. \"Why would I want to put my kid though this?\" My kidneys had shut down from all the chemo at least twice. In 15 months, I spent 396 days in a hospital and had 169 blood transfusions. In the early 80's AIDS had become a pandemic. Luckily, I only contacted Hepatitis C.",
      "I never finished all my treatments. I believe I had 3 left when the doctors discovered a dormant tumor lodged in my left lung. The doctors wanted to remove some of the lungs and tissue around them. This was probably the biggest decision my father ever let me make in my life. Dad asked me what I wanted to do, and I was done. Mentally and physically.",
      "There are a lot of factors that contribute to 33 years LMS free. I attribute a lot of this to my family and knowing that a diagnosis of cancer does not mean death. I thank NIH for allowing myself to be a pediatric patient. When you see children that are younger than yourself struggling to walk down the hallway with their IV tree, or infants clinging to their mothers because they are scared. It changes you. The many doctors and nurses that consulted and comforted myself as well as my hospital counselor. I wish I remembered more of their names; they would be proud to see me now. The biggest factor is my attitude. When given the decision to either lay down and die or stand up and fight. I choose the fight. As a survivor, I will guarantee that you, and nobody else understands your body like yourself. You are your biggest advocate.",
      "I am now 51 years old. I do have complications from chemotherapy and radiation to this day. I have been treated for Hepatitis C and cured. I like everyone else that has been diagnosed with cancer no matter what kind constantly check for knots, bumps, or anything else that is questionable. I am happily married with 2 stepchildren. My wife and I decided in 2019 to find a simpler life and moved to a rural area of Georgia and live on a lake. Although LMS is a rare disease I have volunteered for several fundraisers, as well as being available to talk through organizations such as the LMS LifeLine Buddy and Inmerman Angels. I like all those before me fighting LMS are an inspiration, and a miracle. Nobody fights alone and we will get to the cure.",
    ],
    stripName: "Bobby Whitfield",
    stripSub: "A Father, A Fighter",
  },
  {
    id: "pp-slide-11",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/joyce.jpg",
    imageAlt: "Photo of Joyce, Patient",
    title: "Joyce's Journey",
    meta: "Joyce",
    excerpt: "A personal story of strength and hope living with LMS.",
    details: [
      "Hi everyone, I was diagnosed with LMS last year 2020 during the COVID 19 pandemic. I received treatment in that same year and recovered. After treatment last year, I was told that they see no more cancer, but that I will be scanned every few months for a check up. I am very grateful for the support provided for me from my medical team and family and friends. I am especially grateful for prayer and my faith as a christian.",
      "I constantly look over my shoulders and hope and pray that I do not have a recurrence. I learned one main lesson in this journey. I learned the importance of living each day as if it is my last day, to do activities I always wanted to do, but put off doing. Life is very fragile, but yet exciting and rewarding. Life is a gift and a trust. And I am grateful everyday that I am alive and in good health. I will live, love, laugh and be happy for as long as I can. And I will try to enjoy every day to the fullest.",
    ],
    stripName: "Joyce",
    stripSub: "Joyce's Journey",
  },
  {
    id: "pp-slide-12",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/lea.jpeg",
    imageAlt: "Photo of Lea, Patient",
    title: "Lea's Perspective",
    meta: "Lea",
    excerpt: "Finding a way forward through treatment and community.",
    details: [
      "My name is Lea Custer, and I am a 14-year survivor of uterine leiomyosarcoma. Scary sounding disease, isn't it? Believe me, when I first heard those words I trembled in fear. I have been blessed to be with my family, see my first granddaughter be born, and am in a lovely retirement home in north Georgia. I came to realize that there have been many gifts that cancer has given me: the insight to see the very best side of humanity, the joy of waking up to each new day, and the great beauty to be seen in each and every moment of life.",
      "I have had a recurrence, but I have done by best to stay strong, feel better equipped to face a new challenge, once again being supported by my beloved family and friends, praying for me every day. I continue to receive treatment. Having shared all this with you, I am still reminded of the many gifts that come with getting through the difficulties presented by this disease, as strange as this might sound. 10 years of \"No Evidence of Disease\" (NED) is a blessing. Courage to face it all, hope for what tomorrow will bring, resilience and strength to see it through with the ongoing support of family and friends, as well as the faith and trust in one's oncology care team, is the key to moving toward the goal of N E D.",
      "To those of you who have been recently diagnosed, I understand your fear. Be aware that you may have many, many more sunsets to come! Take this time to recognize the kindness of family and friends, and even complete strangers who may look with compassion at your newly bald head! Accept those offers of help, they are of far more benefit to the giver than to the receiver; you can help to heal those who are hurting for you.",
      "Above all else, take the time to appreciate every little good moment in life. It is your gratitude that will sustain you and get you through the darker times. After all, you may be the one to encourage someone else ten or fifteen years from now! My hopes and prayers go with you today.",
    ],
    stripName: "Lea",
    stripSub: "Lea's Perspective",
  },
  {
    id: "pp-slide-13",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/lynn.jpg",
    imageAlt: "Photo of Lynn, Patient",
    title: "Lynn's Strength",
    meta: "Lynn",
    excerpt: "Perseverance and resilience on the LMS journey.",
    details: [
      "I was diagnosed with uterine leiomyosarcoma in May 2015. Since the diagnosis, I have undergone numerous surgeries and chemotherapies.",
      "I have done extensive research on supplementation, diet and alternative medicine. I exercise as much as possible - I walk, bike, hike and do yoga. I think it is very important to stay active and remain as positive as possible.",
      "Everyone's disease is different and to me, cancer is a very personal journey. People react differently to treatment, both physically and emotionally. Even though you may have the same diagnosis as another person, how both of you deal with the disease can be very different. Each person has to determine what works best for them.",
      "You have choices to make when you receive a diagnosis. I chose to make positive changes in my life. Through this all I have lost a lot, but I have gained as well. Cancer has changed my perspective on many things -- what is important, who is important and how I spend my time. I spend time with people I enjoy and love. I have a very strong faith, which has carried me through. I volunteer and spend time trying to make a positive difference in this world. My hope is that others will make choices that help them through their journey.",
    ],
    stripName: "Lynn",
    stripSub: "Lynn's Strength",
  },
  {
    id: "pp-slide-14",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/shannen.jpg",
    imageAlt: "Photo of Shannen, Patient",
    title: "Shannen's Story",
    meta: "Shannen",
    excerpt: "Courage and community through a rare diagnosis.",
    details: [
      "Hello, my name is Shannen Shapiro and I was diagnosed with LMS in April 2018. As I write this, I am celebrating my 49th birthday. It's a day, I really wasn't sure I'd see. This past year and half has been the biggest rollercoaster of my life, emotionally, for sure.",
      "At first, I read everything about LMS that I could find and in doing so, I scared myself to death. My tumor was very large, 19 cm at it's largest point. This put me in a less than favorable category, so they gave me the harshest of treatments even after the tumor had been removed. Five months later, the cancer was back. I had not made it six months cancer free. We tried another chemo and again, it didn't work.",
      "Finally, we found something that worked for me, the tumor is shrinking and I am scheduled for surgery in December to remove what's left of that tumor and to get a good look around and remove anything else that looks suspicious.",
      "I know this may not be the end of this journey for me, but I am hopeful. So much work is being done to find the cure, if not more and better treatments, and NLMSF is leading the charge in these efforts. I have hope that I will see my children grown. Stay positive, stay informed, ask questions. Don't forget to just live your life. When you're done with the hospital and the doctors and the meds, put it out of your mind.",
      "Spend time with the kids. Go to the football game. Read the book. Watch the movie. Just live and be happy. You can still be happy. God bless you all. My prayers are with you.",
    ],
    stripName: "Shannen",
    stripSub: "Shannen's Story",
  },
  {
    id: "pp-slide-2",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/dan.jpg",
    imageAlt: "Photo of Dan, Patient",
    title: "A New Lease on Life",
    meta: "Dan",
    excerpt:
      "My last PET scan showed no signs of cancer. When they told me it had spread to my liver and lungs, I was told to get my affairs in order--then along came Mitch and Lynparza, and here I am celebrating.",
    details: [
      "Hi Anne great to hear from you. You're not going to believe this or at least I'm having a hard time believing it but my last pet scan showed no signs of cancer. Praise the Lord and God bless you and Mitch for all you have done and continue to do. I certainly will tell about you and Mitch. I meet with my oncologist tomorrow to get next steps.",
      "I'll be happy to share. That was a scary time When they told me it had spread to my liver and lungs and go home and get your affairs in order but you know what it was probably the best gift I had ever been given. Then along came Mitch and told me about Lynparza and here I am today with a new lease on life. We went out the other night to celebrate and I told the waitress what I was celebrating and at the end of dinner they gave me a birthday cake, I laughed until I cried how appropriate. Love To you both Dan",
    ],
    stripName: "Dan",
    stripSub: "A New Lease on Life",
  },
  {
    id: "pp-slide-3",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/pam-randall.jpg",
    imageAlt: "Photo of Pamela Randall, Patient",
    title: "Seek a Sarcoma Specialist",
    meta: "Pamela Randall",
    excerpt:
      "If newly diagnosed, seek a Sarcoma Specialist immediately. Advocate for yourself--even getting a specialist's opinion can make all the difference.",
    details: [
      "I recommend that people that are newly diagnosed with any sarcoma, but certainly LMS -- seek a Sarcoma Specialist immediately. Sarcomas are difficult to diagnose in the first place, so if you have a lump or bump anywhere -- make sure to advocate for yourself to your primary care physician that perhaps seeking a sarcoma specialist's opinion would be wise. It certainly would be!",
    ],
    stripName: "Pamela Randall",
    stripSub: "Seek a Sarcoma Specialist",
  },
  {
    id: "pp-slide-4",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/cathie-boyles.jpg",
    imageAlt: "Photo of Cathie Boyles, Patient",
    title: "Be Your Own Best Advocate",
    meta: "Cathie Boyles",
    excerpt:
      "Know as much as you can, ask the right questions, and embrace support. Knowledge is Power = Patient Power. I am a survivor and thriver--and I wish you the same.",
    details: [
      "Hi All - I shared my story during the Mayo Clinic patient program with the NLMSF and I wanted to reach out to newly diagnosed patients, and those currently in treatment.",
      "Be your own best advocate by knowing as much as you can, asking the right questions of your care team and embracing support from those that love you. Be sure to let your care team know of any problems during treatment as communicating with them is key to better outcomes and it is also key to reducing your own anxiety.",
      "Knowledge is Power = Patient Power. A great line borrowed from the NLMSF!",
      "I am a survivor and thriver, and I wish you the very same outcome. Together are stronger!",
    ],
    stripName: "Cathie Boyles",
    stripSub: "Be Your Own Best Advocate",
  },
  {
    id: "pp-slide-5",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/marge.jpg",
    imageAlt: "Photo of Marge Rudloff, Patient",
    title: "27 Years, One Day at a Time",
    meta: "Marge Rudloff",
    excerpt:
      "A 27-year survivor--taking one day at a time, making the most of it, holding down anxiety around scans and visits, and striving for hope through each step of the journey.",
    details: [
      "Hi, I am a 27 year survivor of LMS -- a true blessing . . . a beacon of hope for others.",
      "I want to share my hope for all -- my survivorship has been an amazing journey, taking one day at a time, and making the most of it! Taking small steps each day, sometimes trying to hold down anxiety and stress when its time for a scan, doctors visit, even if I have a strange feeling somewhere in my body. It's important to try to get through it all as best as possible -- to enhance positive outcomes.",
      "Staying strong and hopeful is not easy to do, but it is something to always strive for each step of this journey.",
      "I have been blessed- there is no doubt. From a fellow LMS thriver, I reach out to you with my prayers for the best outcomes for all, with great support behind you all the way . . . .. and to know that everyone in this sarcoma community is pulling for you as I am.",
    ],
    stripName: "Marge Rudloff",
    stripSub: "27 Years, One Day at a Time",
  },
  {
    id: "pp-slide-6",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/nikki.jpeg",
    imageAlt: "Photo of Nikki Hughes, Patient",
    title: "Finding Hope and Support",
    meta: "Nikki Hughes",
    excerpt:
      "LMS can feel overwhelming; much online info is outdated. Find a knowledgeable sarcoma team and supportive community--there is hope and life can continue.",
    details: [
      "Hi, my name is Nikky, I was diagnosed with Leiomyosarcoma (LMS) a little over a year ago. This diagnosis is incredibly overwhelming. When I was first diagnosed I thought my life was over. I wish I knew then what I know now, and that is why I am writing this letter. When you get online and look up LMS, the information can be pretty negative. Be careful what you read, a lot of information is outdated, and skewed in one direction. It is important to find a medical team that is knowledgeable in sarcoma, positive and supportive. I have found this, and with the help from my family, friends, and medical team, I have so much hope for my future. I still have cancer and I am currently undergoing treatment, but that does not mean my life has to stop.",
      "I am a wife, nurse, and mother of middle school aged twins. I live a very active life. We just went on a vacation to Seattle, and Victoria B.C., I volunteer at my kids school, do yoga, manage my Etsy craft site (Crafts4CuringCancer), and have recently returned to work one day a week. I wake up each morning thankful for every day. I thank my body for all the hard work it is doing, and I say to myself \"today is going to be a great day,\" and they almost always are. And if they are not that is ok, your entitled to feel like \"this sucks,\" because sometimes it does. But don't give up hope. There are a lot of great supports out there such as the National Leiomyosarcoma Foundation. Hang in there, I know how you feel, and you can do this!",
    ],
    stripName: "Nikki Hughes",
    stripSub: "Finding Hope and Support",
  },
  {
    id: "pp-slide-7",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/marlanna.jpg",
    imageAlt: "Photo of Marlana Stoddard, Patient",
    title: "Carrying with Dignity and Optimism",
    meta: "Marlana Stoddard",
    excerpt:
      "Five years with ULMS--holding dignity and optimism. Pursuing art and passions creates balance and brings new friendships and partnerships each day.",
    details: [
      "\"Today I am going into my fifth year with ULMS. It has not been an easy path, but I do believe it can be carried with dignity and optimism. As an artist, I do find having a passion that takes me away from identifying with the disease so helpful. Each day I continue to follow a thread that was created the day before and new lessons about life come up; many about resilience and determination. Making time to do the things you love helps with the balance of appointments and therapies that are necessary now. I am finding new friendships and partnerships each day by holding onto this practice and this is a blessing!\" Marlana Stoddard Hayes",
    ],
    stripName: "Marlana Stoddard",
    stripSub: "Carrying with Dignity and Optimism",
  },
  {
    id: "pp-slide-8",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/andrea.jpg",
    imageAlt: "Photo of Andrea Brill, Patient",
    title: "Laughing All the Way",
    meta: "Andrea Brill",
    excerpt:
      "I bring humor to every part of life. After a major surgery and treatment, I remain cancer-free--kindness, resilience, and toughness carry me forward.",
    details: [
      "I love to \"bring the funny\" to almost every aspect of my life; whether it be a bumpy hiccup or a splendid joy. My faith in God, my devoted husband, a steadfast belief in kindness, and my giggly outlook make my earthly journey a paradise.",
      "My life with LMS took hold 6 August 2018 with a total pelvic exenteration. During my consultation about my vaginal cancer, my surgeon explained that during the 16-hour surgery, he, along with 17 additional surgeons would remove nearly every organ in my urinary, gastrointestinal, and gynecologic systems. He also explained surgery would mean, I'd have a permanent urostomy and a colostomy. My immediate response was, \"I don't care if you have to gut me like a deer. I got a lot of living left to do.\" When things go wrong, humor sets them right.",
      "God didn't promise me a life without rides on narrow, winding roads. For me, this side of eternity means a longstanding relationship with an unkind foe. LMS is my grace cloud. It's an angry storm cloud that hovers over me, yet reminds me to be graceful, thoughtful, kind, and to appreciate everything, God has given me. This includes those harrowing rides on my LMS bus to delightful adventures on fluffy white clouds",
      "I try to bring kindness to every situation. Kindness is memorable and brings comforting blanket hugs to the giver as well as to the receiver. It is my lesson in humility.",
      "Don't let LMS steal your thunder. It will hit you with some frightening punches. But as Rocky Balboa said about life, \"... it ain't how hard you hit; it's about how hard you can get hit, and keep moving forward.\" You are so very much stronger than any punch LMS throws.",
      "Twenty-five rounds of radiation after surgery, one year and nine months later, I remain cancer-free, smiling, and being the person I was meant to be.",
      "You can too. Stay kind, resilient, and tough. Never back down. You are meant to be the hero of your life story.",
    ],
    stripName: "Andrea Brill",
    stripSub: "Laughing All the Way",
  },
  {
    id: "pp-slide-9",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/anne.jpg",
    imageAlt: "Photo of Anne Markam, Patient",
    title: "Courage, Strength, Resilience",
    meta: "Anne Markam",
    excerpt:
      "You have what it takes to get through a challenging diagnosis. Keep your strength and resilience to stay focused on care decisions and quality of life.",
    details: [
      "\"HI - My name is Anne - and I want you to know that you have what it takes to get through a challenging diagnosis. If you keep your courage, strength, and resilience - your strength will be your lens to staying focused through important collaborative decision-making for selecting your sarcoma specialist, the best treatment protocol plan and maintaining quality of life in the treatment journey and after treatment is over. Stay strong!\"",
    ],
    stripName: "Anne Markam",
    stripSub: "Courage, Strength, Resilience",
  },
  {
    id: "pp-slide-10",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/09/vani.jpg",
    imageAlt: "Photo of Vani Way, Patient",
    title: "There Is Still Life",
    meta: "Vani Way",
    excerpt:
      "To the newly diagnosed: there is still life with this rare disease. Join support groups like NLMSF; stay positive and seek out positive people.",
    details: [
      "I am writing this to encourage newly diagnosed cancer patients that there is still life with this rare disease.",
      "I would encourage everyone to join a support group, like NLMSF because it's difficult to go through this journey alone.",
      "I was so lost when I was newly diagnosed with uterine LMS stage 1a and 4 months later stage 4. With 2 rounds of chemo and now 18 months from diagnosis, I do my best to lead a normal life. Stay positive and seek out positive people.",
      "I am lucky to have found this group NLMS. I benefitted from the webinars and a wealth of unbiased trust worthy information from professional and members of this group.",
      "Annie and her husband have organized these zoom calls. Both of them have been very approachable and helpful.",
      "This is my new extended family now. I welcome you all to this new family.",
      "V W",
    ],
    stripName: "Vani Way",
    stripSub: "There Is Still Life",
  },
  {
    id: "pp-slide-15",
    role: "Patient",
    roleClass: "patient",
    imageSrc: "https://media.nlmsf.org/wp-content/uploads/2025/12/cassandra-johnson.jpg",
    imageAlt: "Photo of Cassandra Johnson, Patient",
    title: "My Leiomyosarcoma Journey",
    meta: "Cassandra Johnson",
    excerpt:
      "Cassandra shares her resilient leiomyosarcoma journey, from an unexpected diagnosis to ongoing treatment and faith-filled perseverance.",
    details: [
      "I'm proud to share my resilient leiomyosarcoma journey that began on Mother's Day, May 14, 2023--a day I'll never forget. What I thought was a simple health scare turned into something much more. I went to the ER thinking I was just dehydrated and that my blood sugar was off, but that visit led to a series of tests that changed my life.",
      "On June 30, 2023, I had surgery to remove an adrenal mass--the size of a small child's basketball--along with my spleen. Just two weeks later, on July 14, I was diagnosed with leiomyosarcoma.",
      "I began treatment with five rounds of doxorubicin and trabectedin. After a short break, however, the progress we had made was lost--my metastases had increased in size. That was a tough moment.",
      "On April 1, 2025 I received encouraging news: the spots on my liver, lungs, and right pelvic bone had decreased since restarting chemotherapy with a new regimen--docetaxel (Taxotere) and gemcitabine (Gemzar). Now I'll continue to be monitored through CT scans every three months.",
      "This journey has not been easy, but I'm blessed to still be standing and making it through. I've learned that a positive outlook, a smile on your face, and a smile in your heart can carry you through the darkest moments. I'm not fighting cancer--cancer is fighting me. There have been many challenges and setbacks along the way, but I believe I'm getting through this because of my faith, my attitude, and the unwavering support of my loved ones.",
      "This is not just a chapter--it's a lifelong journey, and I walk it with faith over fear, one day at a time, lifted by grace, resilience, and the incredible people who continue to show up for me with prayers, love, and strength.",
      "I appreciate the National Leiomyosarcoma Foundation being at my side to help and support me with compassion, caring, and so much more.",
    ],
    stripName: "Cassandra Johnson",
    stripSub: "My Leiomyosarcoma Journey",
  },
];

const caregiverStoryFull = [
  "May 1989, I graduated high school and was set for college. Our family doctor who had previously diagnosed my dad had scheduled a hernia operation for myself. I lifted a lot of weights during football practice and apparently pushed it. June 19th, I awoke after surgery, all I remember is a couple of doctors looking for moles on my body and discussing my surgery with concern. Due to my father being an NIH patient I was put on a plane within a few days where I was given my LMS diagnosis.",
  "I was also informed that it had spread to my lungs, and I had 24 tumors in them. At that time due to my age, I was allowed to stay on the 13th floor pediatrics. There's a whole new level of scared when being told you have possibly 3 months left of your life. I recall sitting in a conference room with several doctors and this was the best outcome! How? Unless I wanted to start an intense treatment of chemotherapy. I knew at this time everything I had watched my father endure was now my only hope.",
  "I used to keep a journal of everything that was administered to myself and every test that I had done. I used that as a catalyst to how I was going to feel. I remember only a couple of the names of the chemotherapy treatments, mainly because they really left an impression. Adriamycin and Cytoxan, combined every 13 days. It always felt like death and would put me out for a couple of days. I would fly back home to KY in between treatments where I pretty much was taken straight from the airport to our local hospital and admitted. During that time, I would receive blood, platelets as well as a mild chemotherapy. About 4 months in NIH had not seen the results from the chemo that was desired. I was then put on a chemo/radiation protocol. This lasted for 3 months, luckily for myself and my family NIH had just opened The Children's Inn at NIH. I was amongst the 1st group of kids to stay there with my family. Most days I would receive radiation and then go tour around Washington, DC or take some of the family trips the hospital offered with my chemo pump constantly going.",
  "I will never say the road was easy in fact it was nothing but that. There was a social worker that I talked to that offered me the opportunity to donate semen in case I would like to have kids. \"Why would I want to put my kid though this?\" My kidneys had shut down from all the chemo at least twice. In 15 months, I spent 396 days in a hospital and had 169 blood transfusions. In the early 80's AIDS had become a pandemic. Luckily, I only contacted Hepatitis C.",
  "I never finished all my treatments. I believe I had 3 left when the doctors discovered a dormant tumor lodged in my left lung. The doctors wanted to remove some of the lungs and tissue around them. This was probably the biggest decision my father ever let me make in my life. Dad asked me what I wanted to do, and I was done. Mentally and physically.",
  "There are a lot of factors that contribute to 33 years LMS free. I attribute a lot of this to my family and knowing that a diagnosis of cancer does not mean death. I thank NIH for allowing myself to be a pediatric patient. When you see children that are younger than yourself struggling to walk down the hallway with their IV tree, or infants clinging to their mothers because they are scared. It changes you. The many doctors and nurses that consulted and comforted myself as well as my hospital counselor. I wish I remembered more of their names; they would be proud to see me now. The biggest factor is my attitude. When given the decision to either lay down and die or stand up and fight. I choose the fight. As a survivor, I will guarantee that you, and nobody else understands your body like yourself. You are your biggest advocate.",
  "I am now 51 years old. I do have complications from chemotherapy and radiation to this day. I have been treated for Hepatitis C and cured. I like everyone else that has been diagnosed with cancer no matter what kind constantly check for knots, bumps, or anything else that is questionable. I am happily married with 2 stepchildren. My wife and I decided in 2019 to find a simpler life and moved to a rural area of Georgia and live on a lake. Although LMS is a rare disease I have volunteered for several fundraisers, as well as being available to talk through organizations such as the LMS LifeLine Buddy and Inmerman Angels. I like all those before me fighting LMS are an inspiration, and a miracle. Nobody fights alone and we will get to the cure.",
];

export default function PatientPerspectivesClient() {
  const slides = useMemo(() => slidesData, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [caregiverExpanded, setCaregiverExpanded] = useState(false);

  const clampIndex = (index: number) =>
    Math.max(0, Math.min(index, slides.length - 1));

  const goTo = (index: number) => setActiveIndex(clampIndex(index));
  const goNext = () => setActiveIndex((idx) => clampIndex(idx + 1));
  const goPrev = () => setActiveIndex((idx) => clampIndex(idx - 1));

  return (
    <main>
      <div className="hero">
        <div className="badge-container">
          <div className="badge">
            <i className="fas fa-user-friends" aria-hidden />
            <span>Community Stories</span>
          </div>
        </div>
        <h1 className="hero-title">Patient &amp; Caregiver Perspectives</h1>
        <p className="hero-description">
          Real stories from patients and caregivers living with LMS, offering insight,
          hope, and guidance for your journey.
        </p>

        <div className="feature-tags">
          <div className="feature-tag">
            <span className="tag-icon">
              <i className="fas fa-comment-alt" aria-hidden />
            </span>
            <span className="tag-text">Experiences</span>
          </div>
          <div className="feature-tag">
            <span className="tag-icon">
              <i className="fas fa-heart" aria-hidden />
            </span>
            <span className="tag-text">Support</span>
          </div>
          <div className="feature-tag">
            <span className="tag-icon">
              <i className="fas fa-lightbulb" aria-hidden />
            </span>
            <span className="tag-text">Insights</span>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="intro-section" id="intro">
          <h2 className="section-title gradient-text">Patient &amp; Caregiver Perspectives</h2>
          <p className="intro-text">
            Click on the links to view the full articles or videos our members have
            provided to offer a patient or caregiver perspective and insight on how to
            live with LMS.
          </p>
          <div className="intro-banner">
            <p>
              These personal stories reflect individual experiences with LMS. Each
              patient's journey is unique, and these perspectives offer insights that may
              help others navigate their own path.
            </p>
          </div>
        </div>

        <div className="pp-carousel" role="region" aria-label="Patient Perspectives Carousel">
          <div className="pp-carousel-controls" role="group" aria-label="Carousel controls">
            <button className="pp-btn" aria-label="Previous slide" onClick={goPrev}>
              Prev
            </button>
            <div className="pp-dots" role="tablist" aria-label="Slides">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`pp-dot ${index === activeIndex ? "is-active" : ""}`}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls={slide.id}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <button className="pp-btn" aria-label="Next slide" onClick={goNext}>
              Next
            </button>
          </div>
          <div className="pp-carousel-viewport">
            <div
              className="pp-carousel-track"
              data-active-index={activeIndex}
              style={{ ["--pp-offset" as string]: `-${activeIndex * 100}%` }}
            >
              {slides.map((slide, index) => (
                <article
                  key={slide.id}
                  id={slide.id}
                  className="pp-slide"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slides.length}`}
                >
                  <div className="pp-slide-media">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="pp-slide-img"
                    />
                    <span className={`pp-role-badge ${slide.roleClass}`}>
                      {slide.role}
                    </span>
                  </div>
                  <div className="pp-slide-body">
                    <h3 className="pp-slide-title">{slide.title}</h3>
                    <p className="pp-slide-meta">{slide.meta}</p>
                    <p className="pp-slide-text">{slide.excerpt}</p>
                    <details className="pp-slide-details">
                      <summary>Read full story</summary>
                      <div>
                        {slide.details.map((paragraph, idx) => (
                          <p key={`${slide.id}-detail-${idx}`}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pp-strip" aria-label="Select a story">
            {slides.map((slide, index) => (
              <button
                key={`${slide.id}-strip`}
                className={`pp-strip-item ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goTo(index)}
              >
                <div className="pp-strip-name">{slide.stripName}</div>
                <div className="pp-strip-sub">{slide.stripSub}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="patient-perspectives-layout">
          <div className="patient-perspectives-main">
            <div id="caregiver-stories" className="stories-section">
              <div className="section-header purple">
                <h2>Caregiver to Caregiver Support</h2>
                <div className="section-divider" />
              </div>
              <div className="stories-content">
                <div className="stories-text">
                  <p className="emphasis">
                    CAREGIVERS SHARE THEIR THOUGHTS AND PERSPECTIVES IN SUPPORT...
                  </p>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Bobby Whitfield</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        Dad was diagnosed with a Rhabdomyosarcoma when I was just 12 years old.
                        I remember at the time it was the scariest thing that could happen to our
                        family. My father was admitted to NIH in Bethesda MD for a clinical trial.
                        During the same time another family from our hometown was getting the same
                        scary diagnosis. He too as well attended NIH on the same protocol. NIH
                        started both patients at the same time with 2 different treatment plans.
                        My dad always had a deep dislike of doctors, he always told me, "They call
                        it practicing medicine for a reason."
                      </p>
                      <p>
                        A few months later the other gentleman was beaten by Rhabdomyosarcoma. Dad's
                        treatment by no means was easy. He was administered chemotherapy and
                        radiation. Being raised Jehovah's Witness he also tried many herbal
                        remedies, and teas. I do not recall how long my father was treated; I do
                        remember the day he celebrated the word remission.
                      </p>
                      <div className="read-more">
                        <button
                          className="expand-button"
                          onClick={() => setCaregiverExpanded((prev) => !prev)}
                        >
                          {caregiverExpanded ? "Show Less" : "Read Full Story"}
                        </button>
                        {caregiverExpanded && (
                          <div className="expanded-content">
                            {caregiverStoryFull.map((paragraph, index) => (
                              <p key={`caregiver-full-${index}`}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="patient-stories" className="stories-section">
              <div className="section-header blue">
                <h2>Patient Stories</h2>
                <div className="section-divider" />
              </div>
              <div className="stories-content">
                <div className="stories-text">
                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Cassandra Johnson</h3>
                    </div>
                    <div className="story-content">
                      <p className="story-title">My Leiomyosarcoma Journey</p>
                      <p>
                        I'm proud to share my resilient leiomyosarcoma journey that began on
                        Mother's Day, May 14, 2023--a day I'll never forget. What I thought was a
                        simple health scare turned into something much more. I went to the ER
                        thinking I was just dehydrated and that my blood sugar was off, but that
                        visit led to a series of tests that changed my life.
                      </p>
                      <p>
                        On June 30, 2023, I had surgery to remove an adrenal mass--the size of a
                        small child's basketball--along with my spleen. Just two weeks later, on
                        July 14, I was diagnosed with leiomyosarcoma.
                      </p>
                      <p>
                        I began treatment with five rounds of doxorubicin and trabectedin. After a
                        short break, however, the progress we had made was lost--my metastases had
                        increased in size. That was a tough moment.
                      </p>
                      <p>
                        On April 1, 2025 I received encouraging news: the spots on my liver, lungs,
                        and right pelvic bone had decreased since restarting chemotherapy with a new
                        regimen--docetaxel (Taxotere) and gemcitabine (Gemzar). Now I'll continue to
                        be monitored through CT scans every three months.
                      </p>
                      <p>
                        This journey has not been easy, but I'm blessed to still be standing and
                        making it through. I've learned that a positive outlook, a smile on your
                        face, and a smile in your heart can carry you through the darkest moments.
                        I'm not fighting cancer--cancer is fighting me. There have been many
                        challenges and setbacks along the way, but I believe I'm getting through
                        this because of my faith, my attitude, and the unwavering support of my
                        loved ones.
                      </p>
                      <p>
                        This is not just a chapter--it's a lifelong journey, and I walk it with
                        faith over fear, one day at a time, lifted by grace, resilience, and the
                        incredible people who continue to show up for me with prayers, love, and
                        strength.
                      </p>
                      <p>
                        I appreciate the National Leiomyosarcoma Foundation being at my side to help
                        and support me with compassion, caring, and so much more.
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Dan</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        Hi Anne great to hear from you. You're not going to believe this or at least
                        I'm having a hard time believing it but my last pet scan showed no signs of
                        cancer. Praise the Lord and God bless you and Mitch for all you have done
                        and continue to do. I certainly will tell about you and Mitch. I meet with
                        my oncologist tomorrow to get next steps.
                      </p>
                      <p>
                        I'll be happy to share. That was a scary time When they told me it had
                        spread to my liver and lungs and go home and get your affairs in order but
                        you know what it was probably the best gift I had ever been given. Then
                        along came Mitch and told me about Lynparza and here I am today with a new
                        lease on life. We went out the other night to celebrate and I told the
                        waitress what I was celebrating and at the end of dinner they gave me a
                        birthday cake, I laughed until I cried how appropriate. Love To you both Dan
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Pamela Randall</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        I recommend that people that are newly diagnosed with any sarcoma, but
                        certainly LMS -- seek a Sarcoma Specialist immediately. Sarcomas are
                        difficult to diagnose in the first place, so if you have a lump or bump
                        anywhere - make sure to advocate for yourself to your primary care
                        physician that perhaps seeking a sarcoma specialist's opinion would be
                        wise. It certainly would be!
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Cathie Boyles</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        Hi All - I shared my story during the Mayo Clinic patient program with the
                        NLMSF and I wanted to reach out to newly diagnosed patients, and those
                        currently in treatment. Be your own best advocate by knowing as much as you
                        can, asking the right questions of your care team and embracing support
                        from those that love you. Be sure to let your care team know of any
                        problems during treatment as communicating with them is key to better
                        outcomes and it is also key to reducing your own anxiety.
                      </p>
                      <p>
                        Knowledge is Power = Patient Power A great line borrowed from the NLMSF! I
                        am a survivor and thriver, and I wish you the very same outcome. Together
                        are stronger!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="survivorship" className="stories-section">
              <div className="section-header teal">
                <h2>Survivorship Journey</h2>
                <div className="section-divider" />
              </div>
              <div className="stories-content">
                <div className="stories-text">
                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Marge Rudloff</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        Hi, I am a 27 year survivor of LMS - a true blessing . . . a beacon of hope
                        for others. I want to share my hope for all - my survivorship has been an
                        amazing journey, taking one day at a time, and making the most of it!
                        Taking small steps each day, sometimes trying to hold down anxiety and
                        stress when its time for a scan, doctors visit, even if I have a strange
                        feeling somewhere in my body. It's important to try to get through it all
                        as best as possible - to enhance positive outcomes.
                      </p>
                      <p>
                        Staying strong and hopeful is not easy to do, but it is something to always
                        strive for each step of this journey. I have been blessed- there is no
                        doubt. From a fellow LMS thriver, I reach out to you with my prayers for
                        the best outcomes for all, with great support behind you all the way . . .
                        and to know that everyone in this sarcoma community is pulling for you as I
                        am.
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Nikki Hughes</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        Hi, my name is Nikky, I was diagnosed with Leiomyosarcoma (LMS) a little
                        over a year ago. This diagnosis is incredibly overwhelming. When I was
                        first diagnosed I thought my life was over. I wish I knew then what I know
                        now, and that is why I am writing this letter. When you get online and look
                        up LMS, the information can be pretty negative. Be careful what you read, a
                        lot of information is outdated, and skewed in one direction. It is
                        important to find a medical team that is knowledgeable in sarcoma, positive
                        and supportive. I have found this, and with the help from my family,
                        friends, and medical team, I have so much hope for my future. I still have
                        cancer and I am currently undergoing treatment, but that does not mean my
                        life has to stop.
                      </p>
                      <p>
                        I am a wife, nurse, and mother of middle school aged twins. I live a very
                        active life. We just went on a vacation to Seattle, and Victoria B.C., I
                        volunteer at my kids school, do yoga, manage my Etsy craft site
                        (Crafts4CuringCancer), and have recently returned to work one day a week. I
                        wake up each morning thankful for every day. I thank my body for all the
                        hard work it is doing, and I say to myself "today is going to be a great
                        day," and they almost always are. And if they are not that is ok, your
                        entitled to feel like "this sucks," because sometimes it does. But don't
                        give up hope. There are a lot of great supports out there such as the
                        National Leiomyosarcoma Foundation. Hang in there, I know how you feel, and
                        you can do this!
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Marlana Stoddard</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        "Today I am going into my fifth year with ULMS. It has not been an easy
                        path, but I do believe it can be carried with dignity and optimism. As an
                        artist, I do find having a passion that takes me away from identifying with
                        the disease so helpful. Each day I continue to follow a thread that was
                        created the day before and new lessons about life come up; many about
                        resilience and determination. Making time to do the things you love helps
                        with the balance of appointments and therapies that are necessary now. I am
                        finding new friendships and partnerships each day by holding onto this
                        practice and this is a blessing!" Marlana Stoddard Hayes
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Andrea Brill</h3>
                    </div>
                    <div className="story-content">
                      <p className="story-title">Laughing All the Way</p>
                      <p>
                        I love to "bring the funny" to almost every aspect of my life; whether it be
                        a bumpy hiccup or a splendid joy. My faith in God, my devoted husband, a
                        steadfast belief in kindness, and my giggly outlook make my earthly journey
                        a paradise.
                      </p>
                      <p>
                        My life with LMS took hold 6 August 2018 with a total pelvic exenteration.
                        During my consultation about my vaginal cancer, my surgeon explained that
                        during the 16-hour surgery, he, along with 17 additional surgeons would
                        remove nearly every organ in my urinary, gastrointestinal, and gynecologic
                        systems. He also explained surgery would mean, I'd have a permanent urostomy
                        and a colostomy. My immediate response was, "I don't care if you have to gut
                        me like a deer. I got a lot of living left to do." When things go wrong,
                        humor sets them right.
                      </p>
                      <p>
                        God didn't promise me a life without rides on narrow, winding roads. For me,
                        this side of eternity means a longstanding relationship with an unkind foe.
                        LMS is my grace cloud. It's an angry storm cloud that hovers over me, yet
                        reminds me to be graceful, thoughtful, kind, and to appreciate everything,
                        God has given me. This includes those harrowing rides on my LMS bus to
                        delightful adventures on fluffy white clouds.
                      </p>
                      <p>
                        I try to bring kindness to every situation. Kindness is memorable and brings
                        comforting blanket hugs to the giver as well as to the receiver. It is my
                        lesson in humility.
                      </p>
                      <p>
                        Don't let LMS steal your thunder. It will hit you with some frightening
                        punches. But as Rocky Balboa said about life, "... it ain't how hard you hit;
                        it's about how hard you can get hit, and keep moving forward." You are so
                        very much stronger than any punch LMS throws.
                      </p>
                      <p>
                        Twenty-five rounds of radiation after surgery, one year and nine months
                        later, I remain cancer-free, smiling, and being the person I was meant to
                        be. You can too. Stay kind, resilient, and tough. Never back down. You are
                        meant to be the hero of your life story.
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Anne Markam</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        "HI - My name is Anne - and I want you to know that you have what it takes
                        to get through a challenging diagnosis. If you keep your courage, strength,
                        and resilience - your strength will be your lens to staying focused through
                        important collaborative decision-making for selecting your sarcoma
                        specialist, the best treatment protocol plan and maintaining quality of
                        life in the treatment journey and after treatment is over. Stay strong!"
                      </p>
                    </div>
                  </div>

                  <div className="story-card">
                    <div className="story-header">
                      <h3 className="story-author">Vani Way</h3>
                    </div>
                    <div className="story-content">
                      <p>
                        I am writing this to encourage newly diagnosed cancer patients that there
                        is still life with this rare disease. I would encourage everyone to join a
                        support group, like NLMSF because it's difficult to go through this journey
                        alone.
                      </p>
                      <p>
                        I was so lost when I was newly diagnosed with uterine LMS stage 1a and 4
                        months later stage 4. With 2 rounds of chemo and now 18 months from
                        diagnosis, I do my best to lead a normal life. Stay positive and seek out
                        positive people.
                      </p>
                      <p>
                        I am lucky to have found this group NLMS. I benefited from the webinars and
                        a wealth of unbiased trust worthy information from professional and members
                        of this group.
                      </p>
                      <p>
                        Annie and her husband have organized these zoom calls. Both of them have
                        been very approachable and helpful.
                      </p>
                      <p>
                        This is my new extended family now. I welcome you all to this new family.
                        V W
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <div className="cta-container">
                <h3>Your Story Matters</h3>
                <p>
                  Sharing your experience can provide hope and guidance to others facing an LMS
                  diagnosis. Your journey, challenges, and triumphs can make a significant
                  difference in someone else's life.
                </p>
                <Link href="/contact" className="cta-button">
                  Share Your Story
                </Link>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">
                <span className="sidebar-icon">
                  <i className="fas fa-bars" aria-hidden />
                </span>
                <span>Patient Perspectives</span>
              </h3>

              <ul className="nav-links">
                <li>
                  <a href="#intro" className="nav-link">
                    <span className="nav-icon">
                      <i className="fas fa-info-circle" aria-hidden />
                    </span>
                    <span>Introduction</span>
                  </a>
                </li>
                <li>
                  <a href="#patient-stories" className="nav-link">
                    <span className="nav-icon">
                      <i className="fas fa-user" aria-hidden />
                    </span>
                    <span>Patient Stories</span>
                  </a>
                </li>
                <li>
                  <a href="#caregiver-stories" className="nav-link">
                    <span className="nav-icon">
                      <i className="fas fa-hands-helping" aria-hidden />
                    </span>
                    <span>Caregiver Support</span>
                  </a>
                </li>
                <li>
                  <a href="#survivorship" className="nav-link">
                    <span className="nav-icon">
                      <i className="fas fa-medal" aria-hidden />
                    </span>
                    <span>Survivorship Journey</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="sidebar-image-card">
              <Image
                src="https://media.nlmsf.org/wp-content/uploads/2025/09/windows-of-hope.png"
                alt="Windows of Hope"
                width={640}
                height={480}
                className="sidebar-image"
                sizes="(min-width: 1024px) 320px, 100vw"
              />
            </div>

            <div className="sidebar-cta">
              <h4>Share Your Story</h4>
              <p>Your experience can provide hope and guidance to others on their LMS journey.</p>
              <Link href="/contact" className="cta-button">
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
