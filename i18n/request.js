import { getRequestConfig } from 'next-intl/server';
import en from '../messages/en.json';
import fr from '../messages/fr.json';
import ko from '../messages/ko.json';

const MESSAGES = { en, fr, ko };

export default getRequestConfig(async ({ locale }) => {
    const normalized = typeof locale === 'string' ? locale.toLowerCase() : '';
    const l = normalized.startsWith('fr') ? 'fr' : normalized.startsWith('ko') ? 'ko' : 'en';
    return { locale: l, messages: MESSAGES[l] };
});