import { useId } from 'react';
import T from '@wojtekmaj/react-t';
import countryCodeToFlagEmoji from 'country-code-to-flag-emoji';

import { wrapper } from './Options.module.css';

import { supportedReactVersions } from './reactVersions.js';
import { supportedLocales } from './i18n/i18n.js';

import languages from './i18n/languages.json';

import type { ReactVersion } from './types.js';

function findLanguage(locale: string) {
  const [languageCode] = locale.split('-');

  return (
    languages.find((currentLanguage) => currentLanguage.code === locale) ||
    languages.find((currentLanguage) => currentLanguage.code === languageCode)
  );
}

const locales = supportedLocales
  .sort((a, b) => {
    const languageA = findLanguage(a);
    const languageB = findLanguage(b);

    if (!languageA || !languageB) {
      throw new Error('Language not found');
    }

    return languageA.name.localeCompare(languageB.name);
  })
  .map((locale) => {
    const language = findLanguage(locale);

    if (!language) {
      throw new Error('Language not found');
    }

    return {
      label: `${locale.startsWith('zh-') ? '🌏' : countryCodeToFlagEmoji(locale)} ${
        language.translated_name || language.name
      }`,
      value: locale,
    };
  });

type SelectOptionProps = {
  options: (string | { label: string; value: string })[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

function SelectOption({ onChange, options, value, ...otherProps }: SelectOptionProps) {
  return (
    <select onChange={onChange} value={value} {...otherProps}>
      {options.map((option) => (
        <option
          key={typeof option === 'object' ? option.value : option}
          value={typeof option === 'object' ? option.value : option}
        >
          {typeof option === 'object' ? option.label : option}
        </option>
      ))}
    </select>
  );
}

type OptionsProps = {
  advanced: boolean;
  locale: string;
  reactVersion: ReactVersion;
  toggleAdvanced: () => void;
  toggleLocale: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleReactVersion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Options({
  advanced,
  locale,
  reactVersion,
  toggleAdvanced,
  toggleLocale,
  toggleReactVersion,
}: OptionsProps) {
  const showAdvancedId = useId();
  const reactVersionId = useId();
  const languageId = useId();

  const reactVersionWithDefault = supportedReactVersions.includes(reactVersion)
    ? reactVersion
    : '16.4';
  const localeWithDefault = supportedLocales.includes(locale) ? locale : 'en-US';

  return (
    <fieldset className={wrapper}>
      <legend className="hidden">
        <T>Options</T>
      </legend>
      <div>
        <input type="checkbox" id={showAdvancedId} checked={advanced} onChange={toggleAdvanced} />
        <label htmlFor={showAdvancedId}>
          <T>Show less-common lifecycles</T>
        </label>
      </div>
      <div>
        <label htmlFor={reactVersionId}>
          <T>React version</T>
        </label>
        <SelectOption
          id={reactVersionId}
          options={supportedReactVersions.map((value) => ({
            label: value === '16.4' ? '≥16.4' : value,
            value,
          }))}
          onChange={toggleReactVersion}
          value={reactVersionWithDefault}
        />
      </div>
      <div>
        <label htmlFor={languageId}>
          <T>Language</T>
        </label>
        <SelectOption
          id={languageId}
          options={locales}
          onChange={toggleLocale}
          value={localeWithDefault}
        />
      </div>
    </fieldset>
  );
}
