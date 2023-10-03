const dayNames: readonly string[] = [
    'maanantai', 'tiistai', 'keskiviikko',
    'torstai', 'perjantai', 'lauantai', 'sunnuntai'
];

const monthNames: readonly string[] = [
    'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä',
    'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'
];

/**
 * Formats and returns the given date as a Finnish date string, such as
 * 'maanantai 1. tammikuuta 2024'.
 *
 * @param date the date to format
 * @returns the formatted string, in Finnish
 */
export function finnishDateString(date: Date): string {
    let dayName;
    if(date.getDay() >= 1 && date.getDay() <=6){
    dayName = dayNames[date.getDay() - 1];
}else{
dayName = dayNames[date.getDay() +6];
}
    
    const monthName = monthNames[date.getMonth()];

    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName} ${day}. ${monthName}kuuta ${year}`;
}
