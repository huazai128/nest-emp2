import { ConfigServer } from "./config.interface";
import { Request } from 'express'
export interface HttpRequest {
    transformUrl: string
    transferData: Record<string, any>
    apiTransferType?: ConfigServer['apiPrefix']
}


export interface IRequest extends Request {
    isLogin: boolean
}