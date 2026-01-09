import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-br from-teal-600 to-cyan-600 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* ロゴ */}
          <div className="mb-6">
            <img
              src={`${import.meta.env.BASE_URL}imgs/ookami-logo.png`}
              alt="OKAMICARD Logo"
              className="h-12 mx-auto"
            />
          </div>

          {/* コピーライト */}
          <p className="text-white text-sm">
            {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
