from config.Env import ENVConfig
import motor.motor_asyncio


client = motor.motor_asyncio.AsyncIOMotorClient(ENVConfig.MONGO_URI)
db = client[ENVConfig.MONGO_DB]


user_collection = db.users
