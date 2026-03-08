from services import authService
from fastapi import HTTPException


async def registerController(data):
    try:
        res_obj =  await authService.regiterService(data)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"{e}")


async def loginController(data):
    try:
        res_obj= await authService.loginService(data)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"{e}")



async def profileContoller(data):
    try:
        res_obj = await authService.profileService(data)
        return res_obj
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"{e}")
