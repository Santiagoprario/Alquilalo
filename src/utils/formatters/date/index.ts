// eslint-disable-next-line import/no-duplicates
import { format, parse } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import locale from 'date-fns/locale/es';

import {
	SHORT_DATE_FORMAT,
	LONG_DATE_FORMAT,
	SERVICE_DATE_FORMAT,
	LONG_DATE_HOUR_FORMAT,
} from '@/constants/date';

export function formatShortDate(date: Date): string {
	return format(date, SHORT_DATE_FORMAT, { locale })
}

export function formatLongDate(date: Date): string {
	return format(date, LONG_DATE_FORMAT, { locale })
}

export function formatLongDateHour(date: Date): string {
	return format(date, LONG_DATE_HOUR_FORMAT, { locale })
}

export function formatServiceDate(date: Date): string {
	return format(date, SERVICE_DATE_FORMAT, { locale })
}

export function parseServiceDate(dateString: string): Date {
	return parse(dateString, SERVICE_DATE_FORMAT, new Date())
}

export function parseDate(dateString: string): Date {
	return parse(dateString, 'dd/MM/yyyy', new Date())
}
