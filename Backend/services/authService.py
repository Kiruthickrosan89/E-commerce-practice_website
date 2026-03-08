from config.DB import user_collection
from fastapi import HTTPException
from datetime import datetime, timedelta
from config.Env import ENVConfig
import bcrypt
import jwt
import bson


async def regiterService(data):

    check_exist = await user_collection.find_one({"email": data.email.lower()})


    if check_exist:
        raise HTTPException(status_code=404, detail=" User already exist")

    salt=bcrypt.gensalt()
    hash_pass = bcrypt.hashpw(data.password.encode('utf-8'), salt).decode('utf-8')  
    user_data = data.dict()
    user_data['password'] = hash_pass

    doc = await user_collection.insert_one(user_data)

    token = jwt.encode({
        "user_id":str(check_exist[doc.inserted_id]),
        "exp":datetime.utcnow()+timedelta(days=10),
        "iat":datetime.utcnow()
    },ENVConfig.JWT_AUTH_SECRET,algorithm="HS256")



    return {
             "message": " Login Sucess",
             "token" : token
    }


async def loginService(data):
        
    check_exist = await user_collection.find_one({"email": data.email.lower()})


    if not  check_exist:
        raise HTTPException(status_code=404, detail=" User not exist")
    

    
    is_match = bcrypt.checkpw(data.password.encode('utf-8'),check_exist['password'].encode('utf-8')) 

    if not is_match:
        raise HTTPException(status_code=404, detail=" Invalid Credential")
    
    token = jwt.encode({
        "user_id":str(check_exist['_id']),
        "exp":datetime.utcnow()+timedelta(days=10),
        "iat":datetime.utcnow()
    },ENVConfig.JWT_AUTH_SECRET,algorithm="HS256")

    return {
             "message": " Login Sucess",
             "token" : token
    }

async def profileService(userId: str):
    check_exist = await user_collection.find_one({"_id":bson.ObjectId(userId)})
    if not check_exist:
        raise HTTPException(status_code=404, detail="user not found")
    del check_exist['password']
    check_exist['_id'] = str(check_exist['_id'])
    return check_exist
