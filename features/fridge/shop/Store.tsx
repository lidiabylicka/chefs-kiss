"use client";

import { useRef, useEffect } from "react";

declare global {
  interface Window {
    ecwid_script_defer: boolean;
    ecwid_dynamic_widgets: boolean;
    ec: any; // Add type declaration for 'ec' property
    _xnext_initialization_scripts: any;
  }
}

function Store() {
  const storeDiv = useRef(null);
  const scriptRef = useRef(null);

  window.localStorage.setItem("show_ecwid_logs", "true");
  window.ecwid_script_defer = true;
  window.ecwid_dynamic_widgets = true;
  window.ec = window.ec || {};
  window.ec.storefront = window.ec.storefront || {};
  window.ec.enable_catalog_on_one_page = true;
  window._xnext_initialization_scripts = [
    {
      widgetType: "ProductBrowser",
      id: "my-store-108134812",
      arg: ["id=productBrowser", "views=grid(20,3)"],
    },
    // More widgets can be added here
  ];

  var script = document.createElement("script");
  script.charset = "utf-8";
  script.type = "text/javascript";
  script.src = "https://app.ecwid.com/script.js?####";
  script.defer = true;
  script.setAttribute("ref", scriptRef.current || "");

  useEffect(() => {
    if (!scriptRef.current) {
      (storeDiv.current as unknown as HTMLElement)?.appendChild(script);
    }
  }, []); // Empty dependency array to ensure this only runs once on mount

  return (
    <div>
      <div id="my-search-####"></div>
      <div id="my-categories-####"></div>
      <div id="my-store-####" ref={storeDiv}></div>
      <div className="ec-cart-widget"></div>
    </div>
  );
}

export default Store;
