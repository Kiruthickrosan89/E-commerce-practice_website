from fastapi import Request,HTTPException
import jwt
from config.Env import ENVConfig
xx
def VerifyToken(req: Request):
    authorization = req.headers.get("Authorization", "")
    
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Please Login First")
    
    parts = authorization.split(" ")
    if len(parts) != 2:
        raise HTTPException(status_code=401, detail="Invalid token format")
    
    token = parts[1]
    
    try:
        payload = jwt.decode(
            token, 
            ENVConfig.JWT_AUTH_SECRET, 
            algorithms=[ENVConfig.ALGORITHM]
        )
        print("Auth done")
        return payload['user_id']
    except jwt.ExpiredSignatureError:
        raise HTTPException(401, "Token has expired")
    except Exception as e:
        raise HTTPException(401, f"Token error: {str(e)}")