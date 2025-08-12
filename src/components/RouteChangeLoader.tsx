"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== lastPathname) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setLastPathname(pathname);
      }, 1000); // show loader at least 1s on route change

      return () => clearTimeout(timer);
    }
  }, [pathname, lastPathname]);

  return loading ? <PageLoader /> : null;
}
