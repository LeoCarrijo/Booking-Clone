import { Skeleton } from "@/components/ui/skeleton"


export default function LoadingPage() {
    return (
        <div>
            <div className="flex justify-center py-2">
                <div className="w-10 h-10 bg-white rounded-full animate-bounce" />
            </div>
            <h1 className="flex gap-2 p-2 text-xl text-white justify-center items-center animate-pulse lg:text-2xl lg:pb-4">Buscando Resultados</h1>
            <div className="flex flex-col gap-2 md:max-w-3xl md:m-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-y-4 lg:gap-x-2 pb-10">
                {[...Array(10)].map((_, i) => {
                    return (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div key={i} className="grid grid-cols-adComponent grid-rows-1 p-2 gap-2 border-2 border-[#002bba] my-[-2px] duration-150 m-2 rounded-sm bg-white hover:bg-[#e4ebff]">
                            <Skeleton className="w-full shadow-sm shadow-[#1e40af58] rounded-sm h-[150px]" />
                            <div className="flex flex-col h-full">
                                <Skeleton className="h-4 w-full rounded-full" />
                                <div className="flex items-center gap-2">
                                    <div className="w-[35px] h-[35px] rounded-lg flex justify-center items-center">
                                        <Skeleton className="h-3/4 w-3/4 rounded-full" />
                                    </div>
                                    <Skeleton className="h-4 w-1/2 rounded-full" />
                                </div>
                                <Skeleton className="h-4 w-1/2 rounded-full mb-[2.65rem]" />
                                <div className="flex flex-col self-end w-full gap-2 justify-self-end">
                                    <Skeleton className="self-end h-4 w-4/5 rounded-full" style={{ minHeight: '1rem' }} />
                                    <Skeleton className="self-end h-4 w-1/2 rounded-full" style={{ minHeight: '1rem' }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}