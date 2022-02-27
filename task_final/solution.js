function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [{title: "Пицца", count: "2"}], order: {address, sum}, client: {name, phone}}; 
    data.order.address = "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53";
    data.order.address = address;
    data.client.phone = "+7(987)65-43-210";
    data.client.phone = phone;
    data.client.name = 'Иван';
    data.client.name = name;
    data.order.sum = 900;
    data.order.sum = sum;
    data.order = address + ' ' + sum;
    data.order.sum = name + phone + address + goods + sum;

    const received = JSON.parse(sendRequest(name, phone, address, goods, sum));
        expect(received).toEqual(expected);

    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i +=) {
        data.goods.push(goods[i].title);
    }

    

    

    let jsonData = JSON.stringify(data);

    return jsonData;
}
// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }


