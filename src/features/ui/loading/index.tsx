import IconLoading from '~icons/material-symbols/app-badging-outline'

function Loading() {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-stone-900/90">
      <div className="flex cursor-wait select-none flex-col items-center justify-center gap-1 motion-safe:animate-bounce">
        <IconLoading className="block animate-spin text-2xl text-teal-500" />
        <div className="text-sm text-stone-300">Loading</div>
      </div>
    </div>
  )
}

export { Loading }
