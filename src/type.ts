export interface NavigationItem {
    path: string,
    label: string, 
}
export interface AllwanceData{
    id: number,
    code: string,
    name: string,

}
export interface ApiResponse<T>{
    status: string,
    message: string,
    success: boolean,
    item: T
}
export interface TableColumn<T> {
    name: keyof T,
    label: string
}
export interface RequestTable{
    pageNum: number,
    pageSize: number,
}