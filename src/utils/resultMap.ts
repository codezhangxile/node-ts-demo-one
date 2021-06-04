export  class ResultMap {
    code: number;
    data: any;
    msg: string

    constructor(code: number, data: any, msg: string) {
        this.code = code;
        this.data = data;
        this.msg = msg
    }

    static ok(data:any, msg: string) : ResultMap{
        return new ResultMap(200,data,msg);
    }

    static error(data:any, msg: string) : ResultMap{
        return new ResultMap(601,data,msg);
    }

}

