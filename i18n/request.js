import { getRequestConfig } from 'next-intl/server';
import en from '../messages/en.json';
import fr from '../messages/fr.json';

const MESSAGES = { en, fr };

export default getRequestConfig(async ({ locale }) => {
    const normalized = typeof locale === 'string' ? locale.toLowerCase() : '';
    const l = normalized.startsWith('fr') ? 'fr' : 'en';
    console.log('>>> FINAL locale =', locale, '=>', l);
    return { locale: l, messages: MESSAGES[l] };

});