
import XDate from 'xdate';
export function sameDate(a, b) {
  return (
    a instanceof XDate &&
    b instanceof XDate &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
