import { UserRound } from "lucide-react";

type SpeakerCardProps = {
  name: string;
  role: string;
  topic: string;
};

export function SpeakerCard({ name, role, topic }: SpeakerCardProps) {
  return (
    <div className="rounded-3xl border border-codeweek-blue-200/40 bg-gradient-to-br from-codeweek-blue-50/80 to-white/70 p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-xl hover:border-codeweek-blue-300/60">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-codeweek-primary to-codeweek-blue-700 text-white shadow-lg">
        <UserRound className="h-7 w-7" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-codeweek-primary">{name}</h3>
      <p className="text-sm text-codeweek-blue-600">{role}</p>
      <p className="mt-3 text-sm font-medium text-codeweek-blue-700">{topic}</p>
    </div>
  );
}

