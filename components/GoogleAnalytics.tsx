"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GA_ID } from '@/config';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // @ts-expect-error dataLayer should exist on window
    window.dataLayer?.push({
      event: "pageview",
      page: location.href,
    });
  }, [pathname]);

  return (
    <>
     <Script id="ga-script" async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="beforeInteractive"/>
     <Script id="ga" strategy="beforeInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_ID}');
        `}
     </Script>
     </>
  );
};
