export const requiredField = (value: string) =>
  value && value !== undefined ? undefined : 'Field is required';

export const maxLengthCreator = (maxLength: number) => (value: string) =>
  value && value.length > maxLength
    ? `Field should be shorter then ${maxLength} symbols`
    : undefined;
