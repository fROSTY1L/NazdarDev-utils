import { Box } from 'lucide-react'

export function BrandBadge() {
  return (
    <>
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-zinc-100">
        <Box className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">NazdarDev</span>
        <span className="truncate text-xs text-muted-foreground">Панель управления</span>
      </div>
    </>
  )
}