export type Category = 'event' | 'academic';
export type Subcategory = 'pregrado' | 'posgrado' | 'educacion continua';

export interface BaseItem {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string | null;
  categoria: Category;
  subcategory?: Subcategory;
}

export interface LeadItem{
  nombre:string;
  email: `${string}@javeriana.edu.co`;
  leadInterest?: Item[];
}

export type Item = BaseItem;

export interface DatabaseSchema {
  items: Item[];
}
