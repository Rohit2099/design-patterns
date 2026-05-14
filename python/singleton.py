class Singleton():
    __instance = None
    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super(Singleton, cls).__new__(cls)
        return cls.__instance


new_obj = Singleton()
new_ob2 = Singleton()

print('Both the objects are same:', id(new_ob2) == id(new_obj))
