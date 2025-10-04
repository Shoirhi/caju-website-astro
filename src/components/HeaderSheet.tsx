import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Coffee } from "lucide-react";

export default function HeaderSheet({ navigation }: {
    navigation: {
        name: string;
        href: string;
    }[]
}) {
    return (
        <div className="sm:hidden">
            <Sheet>
                <SheetTrigger className={cn(buttonVariants({ variant: "ghost" }))}><Coffee />メニュー</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="flex items-center gap-x-2"><Coffee />メニュー</SheetTitle>
                        <SheetDescription className="sr-only">
                            メニュー
                        </SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col px-2 gap-y-2">
                        {
                            navigation.map((item) => (
                                <a
                                    href={item.href}
                                    className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "justify-start")}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}