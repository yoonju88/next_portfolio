'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';

export default function LocaleSwitcher() {
    const pathname = usePathname();      // 현재 경로 (/en/about)
    const { locale } = useParams();        // 현재 로케일 (en or fr)

    // 다른 언어 구하기
    const otherLocale = locale === 'en' ? 'fr' : 'en';

    // 현재 경로의 첫 세그먼트를 바꿔서 새로운 링크 만들기
    const segments = pathname.split('/');
    segments[1] = otherLocale;           // locale 부분 교체
    const targetPath = segments.join('/');

    return (
        <Link href={targetPath} className="px-3 py-1 border rounded">
            {otherLocale.toUpperCase()}
        </Link>
    );
}