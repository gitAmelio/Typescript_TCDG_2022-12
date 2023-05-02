export const dataStringToDate = (dateString: string): Date => {
    const [dayStr, monthStr, yearStr] = dateString.split('/');
    
    const year = parseInt(yearStr);
    const month = parseInt(monthStr);
    const day = parseInt(dayStr);

    return new Date(year, month, day);
}