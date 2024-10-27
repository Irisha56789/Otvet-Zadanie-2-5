// Задание 1: Создание и работа с объектами

let user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
};

// Вывод информации о пользователе
console.log(`Имя: ${user.name}`);
console.log(`Возраст: ${user.age}`);
console.log(`Email: ${user.email}`);

// Задание 2: Обновление свойств объекта

let user1 = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
};

// Обновляем значение свойства age и добавляем новое свойство isAdmin
user.age = 30;
user.isAdmin = true;

// Выводим обновленный объект
console.log(user1);

// Задание 3: Удаление свойства из объекта

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
  };
  
  // Удаляем свойство email
  delete user.email;
  
  // Проверяем, что свойство действительно удалено, выводя объект в консоль
  console.log(user);

  // Задание 4: Преобразование объекта

  function transformUser(user) {
    // Создаем новый объект с необходимыми свойствами
    return {
      name: user.name.toUpperCase(), // Преобразуем name в верхний регистр
      email: user.email // Оставляем email без изменений
    };
  }
  
  let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
  };
  
  let transformedUser = transformUser(user);
  console.log(transformedUser); /

  // Задание 5: Копирование объектов

  let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
  };
  
  // Создаем копию и изменяем свойство name
  let userCopy = { ...user, name: "Jane Doe" };
  
  console.log(user); // Оригинальный объект
  console.log(userCopy); // Измененная копия

  // Задание 6: Преобразование объекта по условию

  function filterProperties(obj, keys) {
    // Создаем новый объект
    let filteredObj = {};
    
    // Перебираем массив ключей
    keys.forEach(key => {
      // Проверяем, существует ли свойство в объекте
      if (key in obj) {
        // Если да, добавляем его в новый объект
        filteredObj[key] = obj[key];
      }
    });
    
    return filteredObj; // Возвращаем новый объект
  }
  
  let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
  };
  
  let filteredUser = filterProperties(user, ["name", "email"]);
  console.log(filteredUser); 

  // Задание 7:  Изменение структуры данных объекта

  function convertUser(user) {
    // Создаем новый объект
    const convertedUser = {
      profile: {
        name: user.name,
        age: user.age,
      },
      email: user.email,
      isAdmin: user.isAdmin,
    };
  
    return convertedUser; // Возвращаем новый объект
  }
  
  let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
  };
  
  let convertedUser = convertUser(user);
  console.log(convertedUser);
  
// Задание 8: Объединение объектов

let user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  
  let details = {
    age: 30,
    isAdmin: true,
  };
  
  // Объединяем объекты
  let mergedUser = Object.assign({}, user, details);
  
  console.log(mergedUser);

// Задание 9: Динамическое создание свойств

let key1 = "name";
let key2 = "price";
let key3 = "category";

let product = {}; // Создаем объект

// Добавляем свойства динамически
product[key1] = "Laptop";
product[key2] = 1500;
product[key3] = "Electronics";

console.log(product);