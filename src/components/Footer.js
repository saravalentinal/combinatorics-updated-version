import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="div-footer-box">

      <a target="_blank" rel="noopener noreferrer" href="https://github.com/saravalentinal/combinatorics">
        <i className="fa-brands fa-github"></i>
      </a>

      <p className="made-by">
        {t('footer.made')}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valentina-latyn/" className="valentina">
          Valentina
        </a>
      </p>

      <p className="contact-info">
        {t('footer.contact')}{" "}
        <a href="mailto:combinadosapp@gmail.com">combinadosapp@gmail.com</a>
      </p>

      <Link to="/privacy">{t('footer.privacy')}</Link>

      <p className="all-rights">
        {t('footer.rights')}
      </p>

    </div>
  );
}