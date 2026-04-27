export type Category = 'evento' | 'academico';
export type Subcategory = 'pregrado' | 'posgrado' | 'educacion continua';

export interface BaseItem {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: Category;
  subcategory?: Subcategory;
}

export type Item = BaseItem | LeadItem;
export interface LeadItem{
  id:number;
  nombre:string;
  email: `${string}@javeriana.edu.co`;
  leadInterest?: Item[];
}

export interface DatabaseSchema {
  items: Item[];
}
