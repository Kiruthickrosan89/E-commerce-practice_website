from fastapi import FastAPI
from routes.authRouter import router as AuthRouter 

app = FastAPI()
app.include_router(AuthRouter)

app.get("/", tags=["health"])
def home():
    return { "message" : "Server is working properly" }


