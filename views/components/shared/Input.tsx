import * as React from "react"
import { ErrorMessage, Field, FieldProps } from "formik";

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, ...props }, ref) => {

    const handleWheel = (event: any) => {
      if (type === "number") {
        event.target.blur();
      }
    };
    return (
      <Field name={name}>
        {({ field }: FieldProps) => (
          <>
            <input
              type={type}
              placeholder="Type here"
              autoComplete="off"
              className={cn(
                "flex h-9 w-full text-base md:text border-b bg-transparent py-1 transition-colors file:text-base file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-secondary-40 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              onWheel={handleWheel}
              ref={ref}
              {...field}
              {...props}
            />
            {/* <ErrorMessage name={name!} /> */}
          </>
        )}
      </Field>
    )
  }
)
Input.displayName = "Input"

export { Input }
