from fastapi import FastAPI
from routes.authRouter import router as AuthRouter 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(CORSMiddleware,
    allow_headers=["*"],
    allow_methods=["*"],
    allow_credentials=True,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ]
)

app.include_router(AuthRouter)

app.get("/", tags=["health"])
def home():
    return { "message" : "Server is working properly" }


