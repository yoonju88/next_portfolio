import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './routing';

export default getRequestConfig(async ({ locale }) => {
    const safeLocale = locales.includes(locale) ? locale : defaultLocale;
    return {
        locale: safeLocale, // ✅ 이것이 꼭 필요!
        messages: (await import(`../messages/${safeLocale}.json`)).default
    };
});