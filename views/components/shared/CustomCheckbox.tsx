import React from 'react'
import { Checkbox } from './Checkbox'
import { Field, FieldProps, FormikErrors, FormikValues } from 'formik'

interface CustomCheckboxProps {
  name: string;
  setFieldValue: (field: string, value: unknown, shouldValidate?: boolean) => Promise<void | FormikErrors<FormikValues>>;
  text?: string;
};
export default function CustomCheckbox({ name, text, setFieldValue }: CustomCheckboxProps) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <div className="flex items-center space-x-3">
          <Checkbox {...field} onClick={() => setFieldValue(name, !field.value)} />
          <label
            htmlFor={name}
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm md:text-base 2xl:text-lg capitalize"
          >
            {text || name}
          </label>
        </div>
      )}
    </Field>
  )
}
