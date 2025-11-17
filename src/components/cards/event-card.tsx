type EventCardProps = {
  title: string;
  time: string;
  track: string;
};

export function EventCard({ title, time, track }: EventCardProps) {
  return (
    <div className="rounded-2xl border border-codeweek-blue-200/40 bg-gradient-to-br from-codeweek-blue-50/80 to-white/70 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl hover:border-codeweek-blue-300/60">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-codeweek-blue-600">
        <span className="font-medium">{track}</span>
        <span className="font-semibold text-codeweek-secondary">{time}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-codeweek-primary">{title}</h3>
    </div>
  );
}

