import { Request, Response} from 'express';

class IndexController{
    public index (req: Request, res: Response){
        res.json({text: 'API esta aquí'})
    }
}

export const indexController =  new IndexController();