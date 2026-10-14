interface DateRangeProps {
  start: string;
  end: string | null;
  label: string;
}

export function DateRange({ start, end, label }: DateRangeProps) {
  return (
    <div
      className="shrink-0 text-[13px] tabular-nums text-muted-foreground print:leading-none"
      title={`${label}: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}
