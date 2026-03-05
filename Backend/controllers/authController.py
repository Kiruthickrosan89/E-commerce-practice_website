from services.authService import regiterService


def registerController(data):
    res_obj = regiterService(data)
    return res_obj