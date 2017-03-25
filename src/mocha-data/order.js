module.exports = {
    "orders": [
        {
            "orderId": 1,
            "from": "Shanghai",
            "to": "Australia",
            "tour": "1",
            "orderTitle": "自定义数据",
            "totalPrice": "10000",
            "passengers": ['tester'],
            "travelBeginTime": "2017-08-16 21:12:00",
            "travelEndTime": "2017-08-25 08:30:00",
            "destinations": [
                {
                    "id": "1",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Sydney Opera House",
                    "address": "No2 street",
                    "date": "2017-08-17"
                },
                {
                    "id": "2",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Sydney Harbour Bridge",
                    "address": "No2 street",
                    "date": "2017-08-17"
                },
                {
                    "id": "3",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Sydney Harbour Bridge",
                    "address": "No2 street",
                    "date": "2017-08-18"
                },
                {
                    "id": "4",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Darling Harbour",
                    "address": "No2 street",
                    "date": "2017-08-19"
                },
                {
                    "id": "5",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Taronga Zoo",
                    "address": "No2 street",
                    "date": "2017-08-20"
                },
                {
                    "id": "6",
                    "type": "dest",
                    "city": "Melbourne",
                    "name": "Great Ocean Road",
                    "address": "Great Ocean Road",
                    "date": "2017-08-21"
                },
                {
                    "id": "7",
                    "type": "dest",
                    "city": "Melbourne",
                    "name": "Melbourne Cricket Ground",
                    "address": "Melbourne Cricket Ground",
                    "date": "2017-08-22"
                },
                {
                    "id": "8",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Bondi Beach",
                    "address": "No2 street",
                    "date": "2017-08-23"
                },
                {
                    "id": "9",
                    "type": "dest",
                    "city": "Sydney",
                    "name": "Sydney Tower",
                    "address": "No2 street",
                    "date": "2017-08-24"
                },
            ],
            "flight": [
                {
                    "id": "1",
                    "type": "flight",
                    "flightNo": "fx002",
                    "from": "Shanghai",
                    "to": "Sydney",
                    "departure": "2017-08-16 21:12:00",
                    "arrive": "2017-08-17 08:30:00",
                    "departureTerminal": "puDong international airport",
                    "arrivalTerminal": "Sydney international airport"
                },
                {
                    "id": "2",
                    "type": "flight",
                    "flightNo": "fx002",
                    "from": "Sydney",
                    "to": "Shanghai",
                    "departure": "2017-08-24 21:12:00",
                    "arrive": "2017-08-25 08:30:00",
                    "departureTerminal": "Sydney international airport",
                    "arrivalTerminal": "puDong international airport"
                }
            ],
            "train": [
                {
                    "id": "1",
                    "type": "train",
                    "trainNo": "D2001",
                    "from": "Sydney",
                    "to": "Melbourne",
                    "departure": "2017-08-20 12:20:00",
                    "arrive": "2017-08-20 15:20:00",
                    "departureTerminal": "Sydney Train Station",
                    "arrivalTerminal": "Melbourne Train Station"
                },
                {
                    "id": "2",
                    "type": "train",
                    "trainNo": "D2001",
                    "from": "Melbourne",
                    "to": "Sydney",
                    "departure": "2017-08-22 14:20:00",
                    "arrive": "2017-08-22 16:20:00",
                    "departureTerminal": "Melbourne Train Station",
                    "arrivalTerminal": "Sydney Train Station"
                }
            ],
            "hotel": [
                {
                    "id": "1",
                    "type": "hotel",
                    "hotel": "Sydney Mock Hotel1",
                    "city": "Sydney",
                    "address": "No2 street",
                    "checkIn": "2017-08-17 14:00:00",
                    "checkOut": "2017-08-20 12:00:00"
                },
                {
                    "id": "2",
                    "type": "hotel",
                    "hotel": "Melbourne Mock Hotel1",
                    "city": "Melbourne",
                    "address": "No1 street",
                    "checkIn": "2017-08-20 14:00:00",
                    "checkOut": "2017-08-22 12:00:00"
                },
                {
                    "id": "3",
                    "type": "hotel",
                    "hotel": "Sydney Mock Hotel2",
                    "city": "Sydney",
                    "address": "No2 street",
                    "checkIn": "2017-08-22 14:00:00",
                    "checkOut": "2017-08-24 12:00:00"
                }
            ]
        }
    ]
}