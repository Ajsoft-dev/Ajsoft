import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import { PROFILE } from "@/data/content.js";

const SITE_URL = "https://ajsoft-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} | Web Developer & Designer in Lagos, Nigeria`,
    template: `%s | ${PROFILE.name}`,
  },
  description:
    "Portfolio of Sheriff Obasanjo Ajijolaanabi (Ajsoft) — a web developer and designer in Lagos, Nigeria specializing in HTML, CSS, JavaScript, PHP, React, and Next.js. View projects, skills, work experience, and get in touch.",
  keywords: [
    "Sheriff Obasanjo Ajijolaanabi",
    "Ajsoft",
    "web developer Nigeria",
    "web developer Lagos",
    "frontend developer Nigeria",
    "React developer Nigeria",
    "Next.js developer Nigeria",
    "PHP developer Lagos",
    "Joomla developer",
    "Nigerian software developer portfolio",
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${PROFILE.name} | Web Developer & Designer`,
    description:
      "Web developer and designer in Lagos, Nigeria. HTML, CSS, JavaScript, PHP, React, Next.js. View projects and get in touch.",
    siteName: `${PROFILE.name} — Portfolio`,
    images: [
      {
        url: "/images/profile/ajsoft.jpg",
        width: 1200,
        height: 1500,
        alt: PROFILE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Web Developer & Designer`,
    description: "Web developer and designer in Lagos, Nigeria. View my projects and get in touch.",
    images: ["/images/profile/ajsoft.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    alternateName: PROFILE.shortName,
    url: SITE_URL,
    image: `${SITE_URL}/images/profile/ajsoft.jpg`,
    jobTitle: "Web Developer & Designer",
    email: `mailto:${PROFILE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: Object.values(PROFILE.social),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = (stored === 'light' || stored === 'dark')
      ? stored
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <PersonJsonLd />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
