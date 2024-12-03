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

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`duration : ${result}`)
        return result;
    };

    return (
        <>
            <span class="text-secondary-foreground text-sm">Project duration</span>
            <span class="ml-auto text-xs text-secondary-foreground">{formattedStartDate} - {formattedEndDate} ({calculatedPeriod(startDate, endDate)} days) </span>
        </>
    )
}
