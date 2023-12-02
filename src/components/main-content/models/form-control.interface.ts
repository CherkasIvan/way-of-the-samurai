import { ReactNode } from 'react';

export interface IFormControl {
  children: ReactNode;
  meta: any;
  placeholder: string;
  type: string;
}
