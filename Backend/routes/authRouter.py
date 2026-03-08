from fastapi import APIRouter, HTTPException,Request, Depends
from controllers import authController
from models.authModel import user as Registeruser, LoginUser
from Middleware.VerifyToken import VerifyToken
from config.DB import user_collection
from typing import Any

router = APIRouter( prefix="/api/v1/auth", tags=['auth'] )

@router.post("/register")
async def registerView(data: Registeruser):
    return await authController.registerController(data)
    

@router.post("/login")
async def loginView(data: LoginUser):
    return await authController.loginController(data)


@router.get("/profile")
async def getProgile(userId:Any = Depends(VerifyToken)):
    return await authController.profileController(userId)
    return{
        "msg":"profile route"
    }