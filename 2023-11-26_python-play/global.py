def test():
  my_var = 10
  def hello():
    my_var += 1

  hello()

  return my_var

# print(test()) 


class SomeClass:
  def test(self):
    my_var = 10
    print(my_var)
    def hello():
      my_var += 1
    
    hello()

    return my_var
  
# print(SomeClass().test())

def another_test():
  result = []
  def test():
    result.append(1)

  test()

  return result

print(another_test())


x = 10
def something_test():
  global x 
  x+= 1
  return x

print(something_test())