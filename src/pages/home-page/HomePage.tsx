import React, { useEffect } from 'react';
import './HomePage.css';
import i18n from "i18next";
import { initReactI18next, useTranslation } from 'react-i18next';
import { translationData } from '../../data/translation.data';
import { CustomSelect } from '../../components/custom-select/CustomSelect';
import { Language } from '../../models/enums';
import { languages, taxPayerCategories, taxZones } from '../../data/config-data';
import { Constants } from '../../data/constants';

i18n.use(initReactI18next)
    .init({
      resources: translationData,
      lng: Constants.defaultLanguage,
      fallbackLng: Constants.defaultLanguage,
      interpolation: { escapeValue: false }
    });

function HomePage() {
  const [category, setCategory] = React.useState(() => '');
  const [zone, setZone] = React.useState(() => '');
  const [zoneWidth, setZoneWidth] = React.useState(() => 480);
  const [language, setLanguage] = React.useState(() => Language.English as string);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(language);
    i18n.changeLanguage(language);
    setZoneWidth(language === Language.English ? 480 : 400);
  }, [language]);

  return (
    <>
      <CustomSelect
        titleKey = "category"
        options = { taxPayerCategories }
        optionsKey = "categories"
        value = { category }
        setValue = { setCategory }
        minWidth = { 260 }
        t = { t }
      />
      <CustomSelect
        titleKey = "zone"
        options = { taxZones }
        optionsKey = "zones"
        value = { zone }
        setValue = { setZone }
        minWidth = { zoneWidth }
        t = { t }
      />
      <CustomSelect
        titleKey = "language"
        options = { languages }
        optionsKey = "languages"
        value = { language }
        setValue = { setLanguage }
        minWidth = { 120 }
        cssClass = "right"
        t = { t }
      />
    </>
  );
}

export default HomePage;
