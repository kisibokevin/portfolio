import { X } from "lucide-react"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

const sheetVariants = cva(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
    {
        variants: {
        side: {
            top: "inset-x-0 top-0 border-b animate-slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t animate-slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r animate-slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l animate-slide-in-from-right sm:max-w-sm",
        },
        },
        defaultVariants: {
        side: "right",
        },
    }
)

interface SheetProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

const Sheet: React.FC<SheetProps> = ({ open, onClose, children }) => {
    if (!open) return null
    return createPortal(
        <div className="fixed inset-0 z-50">
            <div
                className="fixed inset-0 bg-black/80"
                onClick={onClose}
            />
            {children}
        </div>,
        document.body
    )
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sheetVariants> {
    onClose: () => void
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
    ({ side = "right", className, children, onClose, ...props }, ref) => {
        return (
        <div
            ref={ref}
            className={cn(sheetVariants({ side }), className)}
            {...props}
        >
            {children}
            <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </button>
        </div>
        )
    }
)
SheetContent.displayName = "SheetContent"

const SheetHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
        {...props}
    />
)

const SheetFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
        {...props}
    />
)

const SheetTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h2
            ref={ref}
            className={cn("text-lg font-semibold text-foreground", className)}
            {...props}
        />
    )
)
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
)
SheetDescription.displayName = "SheetDescription"

const SheetTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
    <button {...props}>{children}</button>
)

const SheetClose: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
    <button {...props}>{children}</button>
)

export {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetClose,
}
