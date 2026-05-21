import { formatEventTimezoneTimesForDisplay } from "@/lib/event-datetime";

type EventScheduleDisplayProps = {
  eventDate: string;
  eventTime: string;
};

export default function EventScheduleDisplay({ eventDate, eventTime }: EventScheduleDisplayProps) {
  const { dateLine, times } = formatEventTimezoneTimesForDisplay(eventDate, eventTime);

  return (
    <div className="m-0">
      <p className="m-0 mb-1.5 text-[0.8rem] font-medium text-gray-700 leading-snug">{dateLine}</p>
      <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
        {times.map(({ code, label, time }) => (
          <li
            key={code}
            className="text-[0.78rem] text-gray-600 leading-snug flex items-baseline gap-2"
          >
            <span className="font-bold text-violet-700 shrink-0 w-7 tabular-nums">{code}</span>
            <span>
              <span className="text-gray-800 font-medium">{time}</span>
              <span className="text-gray-400"> · {label}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="m-0 mt-1.5 text-[0.68rem] text-gray-400 leading-snug">
        Scheduled in Eastern Time. Zoom may display your local time — match the row above to your zone.
      </p>
    </div>
  );
}
