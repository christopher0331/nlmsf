import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NLMSF",
  description: "React/Next.js site — URL parity, content parity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">
        <Script id="fundraiseup-widget" strategy="afterInteractive">
          {`(function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track,openCheckout'.split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o:function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a+'';t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=5;o.h=w.location.href;o.l=[];for(i=0;i<8;i++)o[l[i]]=o(l[i]);w[n]=o}})(window,document,'script','FundraiseUp','ACTMPZAG');`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
