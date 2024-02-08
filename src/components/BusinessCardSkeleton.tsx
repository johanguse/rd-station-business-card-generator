import { Skeleton } from '@/components/ui/skeleton'

import { Icons } from './Icons'

export default function BusinessCardSkeleton() {
  return (
    <div
      className="rounded-3xl bg-white px-0 py-8 shadow-md md:px-6"
      data-testid="business-card-skeleton"
    >
      <div className="flex flex-row px-2 xs:px-6 md:px-8">
        <div className="self-center">
          <Icons.rdIcon className="w-16" data-testid="rd-icon" />
        </div>
        <div className="mx-4 flex w-1 bg-primary-superLight md:mx-6">
          &nbsp;
        </div>
        <div className="grid w-full grid-rows-1 gap-6 py-4 pl-2 pr-4 text-sm text-black sm:text-xl-sm">
          <Skeleton className="h-7 w-full sm:w-64" data-testid="skeleton" />
          <Skeleton className="h-7 w-full sm:w-64" data-testid="skeleton" />
          <Skeleton className="h-7 w-full sm:w-64" data-testid="skeleton" />
        </div>
      </div>
    </div>
  )
}
