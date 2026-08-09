import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ਪੇਜੋਚੱਕ — ਮੇਰਾ ਸੋਹਣਾ ਪਿੰਡ",
  description: "ਪੰਜਾਬ ਦੇ ਸੋਹਣੇ ਪਿੰਡ ਪੇਜੋਚੱਕ ਦੀ ਕਹਾਣੀ—ਰੋਜ਼ਾਨਾ ਜੀਵਨ, ਖੇਤੀ, ਰੁੱਤਾਂ ਅਤੇ ਤਿਉਹਾਰ।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pa"><body>{children}</body></html>;
}
