import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express'
import { HttpResponseSuccess, ResponseStatus } from '@app/interfaces/response.interface';

/**
 * 拦截
 * @export
 * @class TransformInterceptor
 * @implements {NestInterceptor<T, HttpResponse<T>>}
 * @template T
 */
@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, T | HttpResponseSuccess<T>>
{
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<T | HttpResponseSuccess<T>> | any {
        const req = context.switchToHttp().getRequest<Request>();
        const res = context.switchToHttp().getResponse<Response>()
        const isApi = req.url.includes('/api/')
        if (!isApi) {
            res.contentType('html')
        }
        return next.handle()
            .pipe(
                map((data: any) => {
                    if (data.redirectUrl) return res.status(301).redirect(data.redirectUrl)
                    const result = isApi ? {
                        status: ResponseStatus.Success,
                        message: '请求成功',
                        result: data,
                    } : ({ data })
                    return result
                })
            );
    }
}
