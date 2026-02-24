import type { FAQItem, BlogPost } from "@/lib/types";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// WebSite Schema
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GalvanoTrack",
    url: "https://galvanotrack.de",
    description: "Digitaler Laufzettel fuer Galvanik & Oberflaechentechnik",
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://galvanotrack.de/suche?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLd data={schema} />;
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GalvanoTrack",
    url: "https://galvanotrack.de",
    logo: "https://galvanotrack.de/logo.png",
    description:
      "Die SaaS-Loesung fuer Galvanik-Betriebe: Digitaler Laufzettel mit QR-Code, ISO-konforme Dokumentation und Automotive-Compliance.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
  };
  return <JsonLd data={schema} />;
}

// SoftwareApplication Schema (OHNE aggregateRating - UWG-Compliance!)
export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GalvanoTrack",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://galvanotrack.de",
    description:
      "Digitaler Laufzettel fuer Galvanik mit QR-Code, ISO-konformer Dokumentation und Automotive-Compliance (IATF 16949).",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Kostenlos testen - kein Kreditkarte erforderlich",
    },
    featureList: [
      "Digitaler Laufzettel mit QR-Code",
      "ISO-konforme Dokumentation",
      "IATF 16949 Compliance",
      "Batch-Verfolgung",
      "Schadteile-Verfolgung",
      "Automotive-Dokumentation",
    ],
  };
  return <JsonLd data={schema} />;
}

// FAQ Schema
export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return <JsonLd data={schema} />;
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://galvanotrack.de${item.href}`,
    })),
  };
  return <JsonLd data={schema} />;
}

// WebPage Schema
interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbItem[];
}

export function WebPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: WebPageSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `https://galvanotrack.de${url}`,
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      name: "GalvanoTrack",
      url: "https://galvanotrack.de",
    },
  };

  if (breadcrumb && breadcrumb.length > 0) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `https://galvanotrack.de${item.href}`,
      })),
    };
  }

  return <JsonLd data={schema} />;
}

// Article Schema
interface ArticleSchemaProps {
  post: BlogPost;
  url: string;
}

export function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `https://galvanotrack.de${url}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "GalvanoTrack",
      url: "https://galvanotrack.de",
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };
  return <JsonLd data={schema} />;
}
