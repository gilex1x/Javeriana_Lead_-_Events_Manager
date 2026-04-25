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


export type Item = BaseItem;

export interface DatabaseSchema {
  items: Item[];
}
