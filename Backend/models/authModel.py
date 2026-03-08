from pydantic import BaseModel, Field, field_validator
from typing import Optional
from enum import Enum
from datetime import datetime, timezone


class rolesEnum(str, Enum):
    seller = "seller"
    buyer = "buyer"

class user(BaseModel):
    name: str = Field(...)
    email: str = Field(...)
    password: str = Field(..., min_length=6)
    created_at: datetime = Field(default_factory= lambda:datetime.now( timezone.utc))
    updated_at: datetime = Field(
    default_factory=lambda: datetime.now(timezone.utc)
    )
    role: Optional[rolesEnum] = Field( default=rolesEnum.buyer)


@field_validator('name')
def validate_name(cls, value):
    if len(value) < 3:
        raise ValueError( " Value must be greater than 3 Characters")
    return value

class LoginUser(BaseModel):
    email: str = Field(...)
    password: str = Field(..., min_length=6)
