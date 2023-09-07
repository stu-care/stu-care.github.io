
import { DateTime } from "luxon";
export const formattedDate = (
    dateStr,
    formatOutput = "EEE dd MMM, HH:mm"
) => {
    return DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm").toFormat(
        formatOutput
    );
};