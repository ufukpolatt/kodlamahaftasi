"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type WorkshopCardProps = {
  title: string;
  desc: string;
  level: string;
  capacity: string;
  image?: string;
  fullDesc?: string;
  instructor?: string;
  duration?: string;
  prerequisites?: string;
};

export function WorkshopCard({
  title,
  desc,
  level,
  capacity,
  image,
  fullDesc,
  instructor,
  duration,
  prerequisites,
}: WorkshopCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-3xl border border-codeweek-blue-200/40 bg-gradient-to-br from-codeweek-blue-50/80 to-white/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl hover:border-codeweek-blue-300/60">
          {image && (
            <div className="relative -mx-6 -mt-6 mb-4 h-32 w-full overflow-hidden rounded-t-3xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          )}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-codeweek-blue-600">
            <Calendar className="h-4 w-4 text-codeweek-primary" />
            {level} • {capacity}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-codeweek-primary">{title}</h3>
          <p className="mt-3 text-sm text-codeweek-blue-700 line-clamp-2">{desc}</p>
          <p className="mt-3 text-xs font-medium text-codeweek-secondary">Detaylar için tıklayın →</p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {image && (
            <div className="relative -mx-8 -mt-8 mb-6 h-48 w-full overflow-hidden rounded-t-3xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-codeweek-blue-600">
            <Calendar className="h-4 w-4 text-codeweek-primary" />
            {level} • {capacity}
          </div>
          <DialogTitle className="mt-2">{title}</DialogTitle>
          <DialogDescription className="text-base">{desc}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {fullDesc && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-codeweek-primary">Açıklama</h4>
              <p className="text-sm leading-relaxed text-codeweek-blue-700">{fullDesc}</p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {instructor && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-blue-600">
                  Eğitmen
                </p>
                <p className="mt-1 text-sm font-medium text-codeweek-primary">{instructor}</p>
              </div>
            )}
            {duration && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-blue-600">
                  Süre
                </p>
                <p className="mt-1 text-sm font-medium text-codeweek-primary">{duration}</p>
              </div>
            )}
            {prerequisites && (
              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-blue-600">
                  Ön Gereksinimler
                </p>
                <p className="mt-1 text-sm font-medium text-codeweek-primary">{prerequisites}</p>
              </div>
            )}
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}

