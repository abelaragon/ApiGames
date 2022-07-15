import { Request, Response} from 'express';
import pool from '../database'

class UserController{
    public async list (req: Request, res: Response){
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const users = await pool.query('SELECT * FROM users WHERE id = ?',[id]);
       
        if(users.length>0){
            return res.json(users[0]);
        }
        res.status(404).json({text: "El usuario no existe"});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO users set?',[req.body])
        res.json({message: 'Usuario guardado'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM users WHERE id=?',[id]);
        res.json({message: 'El usuario fue eliminado'});
    } 

    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE users set ? WHERE id = ?',[req.body, id]);
        res.json({message: 'El usuario ha sido editado'});
    } 
    
} 
const userController =  new UserController();
export default userController;