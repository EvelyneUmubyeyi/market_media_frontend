export interface Category{
    id:number;
    name:string;
}

export interface Seller{
    name:string;
    location:string;
    category:string;
    rating:number;
    number_of_ratings:number
}
export interface Product{
    id:number;
    name:string;
    quality:string;
    quantity_measurement:string;
    quantity:number;
    categoryId:number;
    category:Object;
}
export interface APIResponse<T>{
    results:Array<T>;
}