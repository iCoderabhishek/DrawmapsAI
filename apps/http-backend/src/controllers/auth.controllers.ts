// import { Request, Response } from "express"
// import {SignUpSchema, LoginSchema} from "@repo/schema-validations/types"
// import bcrypt from "bcrypt"
// import { prismaClient as prisma } from "@repo/db/schema"
// import jwt from "jsonwebtoken"
// import { JWT_SECRET } from "../config/index.js"

// export const getAuth = () => {}



// export const signup = async (req: Request, res: Response) => {
//     const parsedData = SignUpSchema.safeParse(req.body)
//     const userPassword = parsedData.data?.password as string;
    


//     if(!parsedData.success){
//         return res.status(400).json({
//             message: "All fields are needed",
//             errors: parsedData.error
//         })
//     }


//      try {
//     const saltRounds = 10;

//     const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

//     const user = await prisma.user.create({
//         data: {
//             email: parsedData.data?.email!,
//             password: hashedPassword,
//             username: parsedData.data?.username!
//         }
    
//     });

//     res.status(201).json({
//       userId: (await user)?.id,
//     });
//   } catch (error: any) {
//     res.status(411).json({
//       message: "user already exists with this email",
//       error: error?.message,
//     });
//   }
// }

// export const login = async (req: Request, res: Response) => {

//     const parsedData = LoginSchema.safeParse(req.body);
//     if(!parsedData.success){
//         return res.status(400).json({
//             message: "All fields are needed",
//             errors: parsedData.error
//         })
//     }

//     try {
        
//         const user = await prisma.user.findUnique({
//             where: {
//                 email: parsedData.data?.email!,
//             },
//         });
//         if (!user) {
//             return res.status(401).json({
//                 message: "Invalid Credentials",
//             });
//         }
//         const comparePassword = await bcrypt.compare(
//             parsedData.data?.password!,
//             user.password
//         );
//         if (!comparePassword) {
//             return res.status(401).json({
//                 message: "Invalid Credentials",
//             });
//         }
//         const token = await jwt.sign({ userId: user.id }, JWT_SECRET!);
//         res.status(200).json({
//             token,
//         });
//     } catch (error: any) {
//         res.status(500).json({
//             message: "Internal Server Error",
//             error: error?.message,
//         });
//     }
// }