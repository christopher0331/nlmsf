import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

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
    <html lang="en" className={quicksand.variable}>
      <head>
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <Script id="load-fontawesome" strategy="afterInteractive">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';l.crossOrigin='anonymous';document.head.appendChild(l)})();`}
        </Script>
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
