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
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const LOCALES = ['en', 'fr', 'ko']

const OPTIONS = [
    { code: 'en', label: 'locale.english', flagCode: "GB" },
    { code: 'fr', label: 'locale.french', flagCode: "FR" },
    { code: 'ko', label: 'locale.korean', flagCode: "KR" }
];

export default function LocaleSwitcher() {
    const { locale } = useParams();
    const [open, setOpen] = useState(false)
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const t = useTranslations();

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
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 text-sm sm:text-base px-2 py-1 sm:px-4 ">
                    <ReactCountryFlag countryCode={current.flagCode} svg style={{ width: "1.5em", height: "1.5em" }} />
                    <span>{t(current.label)}</span>
                    <ChevronDown className={`transform transition-all duration-500 text-foreground delay-150 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36 bg-background">
                {OPTIONS.map(opt => (
                    <DropdownMenuItem

                        key={opt.code}
                        onClick={() => switchTo(opt.code)}
                        className="flex items-center gap-2"
                    >
                        <ReactCountryFlag countryCode={opt.flagCode} svg style={{ width: "1.5em", height: "1.5em" }} title={opt.flagCode} />
                        <span>{t(opt.label)}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
