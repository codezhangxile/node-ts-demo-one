import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import User from "../entity/user";
import { ResultMap } from "../utils/resultMap";
@Controller()
export  class UserController{
    @Get('/users')
    async getAll() {
        let users : Array<User> =[]
        users = await User.findAll({raw:true})
      
        if(users.length < 1){
            return  ResultMap.error(users,'暂无员工');

        }else{
            return  ResultMap.ok(users,'查询成功');
        }
    }

    @Get('/users/:id')
    getOne(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }
    @Post('/users')
    post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/users/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }
    @Delete('/users/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }
}