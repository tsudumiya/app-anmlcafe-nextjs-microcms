import { DateTime } from 'luxon';

// 日付のフォーマット
export function dateFormat(date) {
    const valueDate = DateTime.fromISO(date);
    return valueDate.toFormat('yyyy.MM.dd');
}
