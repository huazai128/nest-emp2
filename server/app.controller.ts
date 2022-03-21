import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    /**
     * 错误页面
     * @return {*} 
     * @memberof AppController
     */
    @Get('error')
    @Render('error')
    getError() {
        return { msg: '1212' }
    }

}
