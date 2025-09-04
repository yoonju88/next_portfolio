'use client';

import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import ReactCountryFlag from 'react-country-flag';

const LOCALES = ['en', 'fr']

const OPTIONS = [
    { code: 'en', label: 'English', flagCode: "GB" },
    { code: 'fr', label: 'French', flagCode: "FR" }
];

export default function LocaleSwitcher() {
    const { locale } = useParams();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const current = OPTIONS.find(l => l.code === locale) || OPTIONS[0];

    function withLocale(path, nextLocale) {
        // path를 /{locale}/... 형태로 보정
        const seg = path.split('/');
        if (LOCALES.includes(seg[1])) {
            seg[1] = nextLocale;                      // 기존 로케일 교체
        } else {
            seg.splice(1, 0, nextLocale);            // 로케일 프리픽스 삽입
        }
        return seg.join('/');
    }

    function switchTo(target) {
        if (target === locale) return;
        const qs = searchParams.toString();
        const targetPath = withLocale(pathname, target);
        router.push(qs ? `${targetPath}?${qs}` : targetPath);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ReactCountryFlag countryCode={current.flagCode} svg style={{ width: "1.5em", height: "1.5em" }} />
                    <span>{current.code.toUpperCase()}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
                {OPTIONS.map(opt => (
                    <DropdownMenuItem
                        key={opt.code}
                        onClick={() => switchTo(opt.code)}
                        className="flex items-center gap-2"
                    >
                        <ReactCountryFlag countryCode={opt.flagCode} svg style={{ width: "1.5em", height: "1.5em" }} />
                        <span>{opt.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
