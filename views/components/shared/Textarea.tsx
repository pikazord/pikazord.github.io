import * as React from "react"

import { cn } from "@/lib/utils"
import { Field, FieldProps } from "formik"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, ...props }, ref) => {
    return (
      <Field name={name}>
        {({ field }: FieldProps) => (
          <textarea
            className={cn(
              "flex min-h-[20px] max-h-[100px] w-full border-b  bg-transparent py-2 placeholder:text-secondary-40 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...field}
            {...props}
          />
        )}
      </Field>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
