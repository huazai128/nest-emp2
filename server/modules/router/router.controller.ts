import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { RouterGuard } from '@app/guards/router.guard';
import { Request } from 'express'
import { QueryParams } from '@app/decorators/params.decorator';
import { IRequest } from '@app/interfaces/request.interface';

@Controller()
export class RouterController {

    /**
   * 渲染页面
   * @param {Request} req
   * @return {*} 
   * @memberof AppController
   */
    @Get('login')
    @Render('index')
    login(@Req() req: IRequest) {
        if (req.isLogin) {
            // 重定向
            return { redirectUrl: '/' }
        } else {
            return { data: 121212 }
        }

    }

    /**
     * 错误页面
     * @return {*} 
     * @memberof AppController
     */
    @Get('error')
    @Render('../error')
    getError() {
        return { msg: '1212' }
    }

    /**
     * 渲染页面
     * @param {Request} req
     * @return {*} 
     * @memberof AppController
     */
    @UseGuards(RouterGuard)
    @Get('*')
    @Render('index')
    getTest(@Req() req: Request) {
        return { data: 12 }
    }

}
