import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    schema?: any;
    noIndex?: boolean;
    breadcrumbs?: { name: string; path: string }[];
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Creamos soluciones de ingeniería de software a medida que simplifican lo complejo y potencian el crecimiento de tu negocio.",
    keywords = "software, ingeniería, diseño, desarrollo web, el salvador, fantasma digital, ghost code, arquitectura escalable, marketing algorítmico, IA, automatización",
    ogTitle,
    ogDescription,
    ogImage = "/og-image.png",
    ogType = "website",
    twitterCard = "summary_large_image",
    schema,
    noIndex = false,
    breadcrumbs
}) => {
    const siteTitle = "Fantasma Digital";
    const baseUrl = "https://fantasmadigital.dev";
    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Ingeniería de Software & Diseño Web`;

    // Normalize canonical URL (strip trailing slashes for consistency)
    const rawPath = window.location.pathname;
    const cleanPath = rawPath.length > 1 && rawPath.endsWith('/') ? rawPath.slice(0, -1) : rawPath;
    const canonicalUrl = `${baseUrl}${cleanPath}`;

    // Build absolute image URL
    const absoluteOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${baseUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    // Generate BreadcrumbList Schema
    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": baseUrl
            },
            ...breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": crumb.name,
                "item": crumb.path.startsWith('http') ? crumb.path : `${baseUrl}${crumb.path.startsWith('/') ? '' : '/'}${crumb.path}`
            }))
        ]
    } : null;

    const finalSchemas = [schema, breadcrumbSchema].filter(Boolean);

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={ogDescription || description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />

            {/* Canonical Link */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={absoluteOgImage} />

            {/* JSON-LD Structured Data */}
            {finalSchemas.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(finalSchemas.length === 1 ? finalSchemas[0] : finalSchemas)}
                </script>
            )}
        </Helmet>
    );
};
