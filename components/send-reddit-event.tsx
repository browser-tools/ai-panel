/**
 * Reddit can not use pageview as lead event, so we use a custom event.
 */
"use client";

import { useEffect } from "react";

export default function SendRedditLead() {
    useEffect(() => {
        // See: https://business.reddithelp.com/s/article/manual-conversion-events-with-the-reddit-pixel
        // @ts-expect-error rdt should exist on window
        window.rdt?.('track', 'Lead');
        // to send custom event:
        // rdt('track', 'Custom', {customEventName:'{{Name}}'});
    }, []);

    return null;
}
