"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { REDDIT_PIXEL_ID } from '@/config';

export default function RedditPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // @ts-expect-error rdt should exist on window
    window.rdt?.('track', 'PageVisit');
  }, [pathname]);

  return (
     <Script id="reddit-pixel" strategy="beforeInteractive">
        {`
!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
rdt('init','${REDDIT_PIXEL_ID}');
        `}
     </Script>
  );
};
