import IconLoading from '~icons/material-symbols/app-badging-outline'

function Loading() {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-stone-50/90">
      <div className="flex cursor-wait select-none flex-col items-center justify-center gap-1 motion-safe:animate-bounce">
        <IconLoading className="block animate-spin text-2xl text-teal-600" />
        <div className="text-sm text-teal-600">Loading</div>
      </div>
    </div>
  )
}

export { Loading }
