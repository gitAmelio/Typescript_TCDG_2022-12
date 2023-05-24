import { Request, Response, NextFunction } from 'express';
// import { get, controller } from './decorators';
// import { use } from './decorators';

import { get } from './decorators/routes';
import { post } from './decorators/routes';
import { controller } from './decorators/controller';
import { bodyValidator } from './decorators/bodyValidator';


interface IRequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}



@controller('/auth')
class LoginController {
    testProps = 'TestProps';

    @get('/login')
    getLogin (req: Request, res: Response): void {
        res.send(`
            <form method="POST">
                <div> 
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
    }

    // postLogin(req: IRequestWit hBody, res: Response) {

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body; // thanks to body-parser
    
        if (email && password && email === 'hi@hi.com' && password === 'password'){
            // mark this person as logged in
            req.session = { loggedIn: true};
    
            // redirect them to the root route
            res.redirect('/')
        } else {
            res.send('Invalid email or password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }
}

console.log('parsed LoginController.ts ==> ', LoginController.prototype)

// import 'reflect-metadata'

type ClassDecorator = <T extends Function>(target: T) => T | void;

@printMetadata
class Plane {
    color: string = 'red';
    
    @markFunction('SECRET')
    fly(): void {
        console.log('vrrrrrrr');
        
    }
}

function markFunction(secretInfo: string) {
    console.log('Inside markFunction')
    return function (target: Plane, key: string) {

        Reflect.defineMetadata('secret', secretInfo, target, key);
        console.log(
        `
        [
            target >> ${JSON.stringify(target)}
            key >> ${key}
        ]
        `)

        // Reflect.set(target, key, 'secret', secretInfo   )
        // const secret = Reflect.get(target, key,'secret');
        // console.log(`[${secret}]`)
    }
}

function printMetadata(target: typeof Plane) {
    const keys = Object.getOwnPropertyNames(target.prototype)

    console.log(target)
    for (let key of keys){
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        if (secret) console.log(secret);
    }
}




  