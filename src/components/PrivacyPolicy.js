import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  return (
    <div className="privacy-policy-container">
      <Helmet>
        <html lang={lang} />
        <title>{t('privacy.seoTitle')}</title>
        <meta name="description" content={t('privacy.seoDescription')} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>{t('privacy.title')}</h1>
      <p>{t('privacy.intro')}</p>
      <p>{t('privacy.adsense')}</p>
      <p>{t('privacy.gdpr')}</p>
      <p>{t('privacy.nodata')}</p>
      <p>
        {t('privacy.googleMoreInfo')}{" "}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">
          Google Ads Policies
        </a>
      </p>
    </div>
  );
}