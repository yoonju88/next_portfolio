'use client'
import { useLocale } from 'next-intl';

export default function CalculateDays({ startDate, endDate, days }) {
    const locale = useLocale()
    const localeMap = {
        en: 'en-US',
        fr: 'fr-FR',
        ko: 'ko-KR',
    };
    const currentLocale = localeMap[locale] || 'en-US';
    const formatDate = (date) => {
        if (!date) return '';

        // Notion에서 오는 날짜는 "YYYY-MM-DD" 형태 → 직접 파싱
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            const [y, m, d] = date.split('-').map(Number);
            date = new Date(y, m - 1, d);
        } else {
            date = new Date(date);
        }
        return new Intl.DateTimeFormat(currentLocale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    }
    // 기간 계산
    const getDaysDiff = (start, end) => {
        if (!start || !end) return 0;
        const s = new Date(start);
        const e = new Date(end);
        const diff = Math.abs(e - s);
        return Math.round(diff / (1000 * 60 * 60 * 24));
    };

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const diffDays = getDaysDiff(startDate, endDate);

    return (
        <>
            <span className="ml-2 text-foreground/75">
                {formattedStartDate} - {formattedEndDate} ({diffDays} {days})
            </span>
        </>
    )
}
