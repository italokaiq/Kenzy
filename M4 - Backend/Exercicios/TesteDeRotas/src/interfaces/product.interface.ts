export interface IProducts {
    id: number;
    name: string;
    content: string;
}

export type TProductCreateBody = Omit<IProducts, "id">;
export type TUpdateProductBody = Partial<TProductCreateBody>;