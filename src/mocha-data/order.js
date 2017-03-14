module.exports = {
    "orders": [
        {
            "orderId": 1,
            "from": "Shanghai",
            "to": "Australia",
            "tour": "1",
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
                    "arrive": "2017-08-21 15:20:00",
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