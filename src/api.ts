import type { Ref } from 'vue'

export interface CurrencyInputValue {
  number: number | null
  formatted: string | null
}

export interface NumberRange {
  min?: number
  max?: number
}

export enum CurrencyDisplay {
  symbol = 'symbol',
  narrowSymbol = 'narrowSymbol',
  code = 'code',
  name = 'name',
  hidden = 'hidden'
}

export enum ValueScaling {
  precision = 'precision',
  thousands = 'thousands',
  millions = 'millions',
  billions = 'billions'
}

export interface CustomCurrency {
  prefix?: string
  suffix?: string
}

export interface CurrencyFormatOptions {
  locale?: string
  currency: string | CustomCurrency
  currencyDisplay?: CurrencyDisplay
  precision?: NumberRange | number
  accountingSign?: boolean
}

export interface CurrencyInputOptions extends CurrencyFormatOptions {
  hideCurrencySymbolOnFocus?: boolean
  hideGroupingSeparatorOnFocus?: boolean
  hideNegligibleDecimalDigitsOnFocus?: boolean
  autoDecimalDigits?: boolean
  valueRange?: NumberRange
  useGrouping?: boolean
  valueScaling?: ValueScaling
}

export interface UseCurrencyInput {
  inputRef: Ref
  numberValue: Ref<number | null>
  formattedValue: Ref<string | null>
  setValue: (number: number | null) => void
  setOptions: (options: CurrencyInputOptions) => void
}
