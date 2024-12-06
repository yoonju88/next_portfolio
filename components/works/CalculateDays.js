'use client'
export default function CalculateDays({ startDate, endDate }) {
    const formatDate = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-EU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    const formattedStartDate = formatDate(startDate)
    const formattedEndDate = formatDate(endDate)

    const calculatePeriod = (start, end) => {
        if (!start || !end) return 'Invalid Period'
        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        return result;
    };

    const caculatedPeriodWorksDays = calculatePeriod(startDate, endDate)

    return (
        <>
            <span className="text-secondary-foreground text-sm">Project duration</span>
            <span className="ml-auto text-xs text-secondary-foreground">{formattedStartDate} - {formattedEndDate} ({caculatedPeriodWorksDays} days) </span>
        </>
    )
}
