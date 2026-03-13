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
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Evolucionamos la complejidad técnica en absoluta simplicidad estética. Ingeniería de vanguardia desde el vacío digital.",
    keywords = "software, ingeniería, diseño, desarrollo web, el salvador, fantasma digital, ghost code, arquitectura escalable",
    ogTitle,
    ogDescription,
    ogImage = "/og-image.png",
    ogType = "website",
    twitterCard = "summary_large_image",
    schema,
    noIndex = false
}) => {
    const siteTitle = "Fantasma Digital";
    const baseUrl = "https://fantasmadigital.dev";
    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Ingeniería de Software & Diseño Web`;

    // Build absolute image URL
    const absoluteOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${baseUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={ogDescription || description} />
            <meta name="keywords" content={keywords} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={absoluteOgImage} />

            {/* Canonical Link */}
            <link rel="canonical" href={`${baseUrl}${window.location.pathname}`} />

            {/* JSON-LD Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
