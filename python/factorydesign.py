class Parent:
    def __init__(self):
        self.name = "Parent"
        self.class_name = "Factory"

    def __str__(self):
        return self.name

class Child1(Parent):
    def __init__(self):
        super().__init__()
        self.name = "Child 1"

class Child2(Parent):
    def __init__(self):
        super().__init__()
        self.name = "Child 2"

class FactoryPattern:
    def getInstance(self, type):
        if type == 1:
            return Child1()
        else:
            return Child2()

if __name__ == "__main__":
    while True:
        try:
            typeOfChild = int(input("What type of child: 1 or 2\n"))
            if typeOfChild not in [1, 2]:
                raise ValueError
        except ValueError:
            print("Enter a valid input")
        else:
            break

    # Without using the design pattern
    # if typeOfChild == 1:
    #     child = Child1()
    # elif typeOfChild == 2:
    #     child = Child2()

    factory = FactoryPattern()
    child = factory.getInstance(typeOfChild)
    print(child)

