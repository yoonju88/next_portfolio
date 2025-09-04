import { getTranslations, setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export default async function DebugPage({ params }) {
    const { locale } = params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale });
    return (
        <div style={{ padding: 24 }}>
            <h2>RSC check</h2>
            <p>home.title: {t('home.title')}</p>
        </div>
    );
}