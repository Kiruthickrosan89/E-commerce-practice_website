from fastapi import APIRouter, HTTPException
from controllers.authController import registerController
from models.authModel import user as UserModel
from config.DB import user_collection
from typing import Any

router = APIRouter( prefix="/api/v1/auth", tags=['auth'])

@router.post("/register")
async def registerView(data: UserModel):
    result = registerController(data.model_dump())
    try:
       await user_collection.insert_one(result)
       return { "message" : " Data inserted Sucessfully" }
    except Exception as e:
        raise HTTPException( status_code=404, detail="Data is not inserted")
    r