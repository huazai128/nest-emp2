import { IRequest } from '@app/interfaces/request.interface';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { get } from 'lodash';

/**
 * session 解析
 * @export
 * @class SessionPipe
 * @implements {PipeTransform<IRequest, IRequest>}
 */
@Injectable()
export class SessionPipe implements PipeTransform<IRequest, IRequest> {
    transform(req: IRequest, metadata: ArgumentMetadata): IRequest {
        const user = get(req, 'session.user') || {}
        req.isLogin = !!user.userId
        return req
    }
}