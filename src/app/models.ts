export interface Category{
    id:number;
    name:string;
}
export interface APIResponse<T>{
    results:Array<T>;
}