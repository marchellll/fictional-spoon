/**
 *         search_trip: ::RedBusConfiguration['host'] + '/rest/v2/availabletrips',
        seat_map: ::RedBusConfiguration['host'] + '/rest/v2/tripdetails',
        book_ticket: ::RedBusConfiguration['host'] + '/rest/v2/blockTicket',
        pay_book_ticket: ::RedBusConfiguration['host'] + '/rest/v2/bookticket',
        get_paid_book: ::RedBusConfiguration['host'] + '/rest/v2/ticket'
 */
var Koa = require('koa');
var Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

var app = new Koa();
app.use(bodyParser());

var router = new Router();

router.get('/rest/v2/availabletrips', (ctx, next) => {
    ctx.body = {
        "availableTrips": [
            {
                "id": 6285781147378,
                "travels": "PASTI GANTI",
                "vehicleType": "BUS",
                "busType": "Shuttle Toyota HiAce",
                "busTypeId": 101,
                "operator": 17919,
                "routeId": 6285781000378,
                "doj": "2020-07-27T00:00:00.000+0000",
                "departureTime": 1140,
                "arrivalTime": 1265,
                "boardingTimes": [
                    {
                        "bpId": 266660,
                        "bpName": "Balubur Town Square",
                        "location": "Balubur Town Square",
                        "time": 1140,
                        "prime": false
                    }
                ],
                "droppingTimes": [
                    {
                        "bpId": 266661,
                        "bpName": "Bojongherang",
                        "location": "Bojongherang",
                        "time": 1265,
                        "prime": false
                    }
                ],
                "availableSeats": 7,
                "fares": [
                    60000.0
                ],
                "fareDetails": [
                    {
                        "baseFare": 60000.0,
                        "totalFare": 60000.0,
                        "serviceTaxPercentage": 0,
                        "serviceTaxAbsolute": 0.0,
                        "operatorServiceChargePercentage": 0,
                        "operatorServiceChargeAbsolute": 0.0,
                        "partialFare": 0,
                        "remainingFare": 0,
                        "seatFares": [
                            {
                                "fare": 60000.0,
                                "baseFare": 60000.0,
                                "sourceFare": 60000.0,
                                "serviceTaxPercentage": 0,
                                "serviceTaxAbsolute": 0.0,
                                "passenger_type": "ALL"
                            }
                        ]
                    }
                ],
                "cancellationPolicy": "0:-1:100:0;",
                "partialCancellationAllowed": false,
                "idProofRequired": false,
                "mTicketEnabled": false,
                "currencyType": "IDR",
                "mandatoryFieldsRequiredForBookingSet": [
                    "PHONE",
                    "EMAILID",
                    "NAME"
                ],
                "useConfiguredMandatoryFields": false,
                "liveTrackingAvailable": false,
                "zeroCancellationTime": 0,
                "tatkalTime": 0,
                "categoryDetails": {
                    "categories": []
                },
                "seatLayoutDisabled": true,
                "quickBookingEnabled": false,
                "leftHandDrive": true,
                "eitherOneMandatoryIdType": [],
                "allMandatoryIdType": [],
                "additionalPassengerPreferenceEnabled": false,
                "boardingDroppingEnabled": false,
                "source": 27410,
                "destination": 41557,
                "exactSearch": false,
                "boAccount": 10011117,
                "boConfig": {
                    "account": 10011111,
                    "minFareDiscountRate": 5.0,
                    "maxFareDiscountRate": 10.0,
                    "percentDiscount": true,
                    "quickBookDiscountActive": false,
                    "quickBookDiscountPermissionByBO": false,
                    "passengerTypeList": []
                },
                "busAmenities": [],
                "fareFacilitiesDetail": [],
                "ac": true,
                "nonAC": false,
                "seater": true,
                "sleeper": false,
                "AC": true
            },
            {
                "id": 6281999001000,
                "travels": "Nggak ganti",
                "vehicleType": "BUS",
                "busType": "Shuttle Toyota HiAce",
                "busTypeId": 101,
                "operator": 17919,
                "routeId": 6281009001000,
                "doj": "2020-07-27T00:00:00.000+0000",
                "departureTime": 1020,
                "arrivalTime": 1145,
                "boardingTimes": [
                    {
                        "bpId": 266653,
                        "bpName": "Balubur Town Square",
                        "location": "Balubur Town Square",
                        "time": 1020,
                        "prime": false
                    }
                ],
                "droppingTimes": [
                    {
                        "bpId": 266655,
                        "bpName": "Bojongherang",
                        "location": "Bojongherang",
                        "time": 1145,
                        "prime": false
                    }
                ],
                "availableSeats": 7,
                "fares": [
                    60000.0
                ],
                "fareDetails": [
                    {
                        "baseFare": 60000.0,
                        "totalFare": 60000.0,
                        "serviceTaxPercentage": 0,
                        "serviceTaxAbsolute": 0.0,
                        "operatorServiceChargePercentage": 0,
                        "operatorServiceChargeAbsolute": 0.0,
                        "partialFare": 0,
                        "remainingFare": 0,
                        "seatFares": [
                            {
                                "fare": 60000.0,
                                "baseFare": 60000.0,
                                "sourceFare": 60000.0,
                                "serviceTaxPercentage": 0,
                                "serviceTaxAbsolute": 0.0,
                                "passenger_type": "ALL"
                            }
                        ]
                    }
                ],
                "cancellationPolicy": "0:-1:100:0;",
                "partialCancellationAllowed": false,
                "idProofRequired": false,
                "mTicketEnabled": false,
                "currencyType": "IDR",
                "mandatoryFieldsRequiredForBookingSet": [
                    "PHONE",
                    "EMAILID",
                    "NAME"
                ],
                "useConfiguredMandatoryFields": false,
                "liveTrackingAvailable": false,
                "zeroCancellationTime": 0,
                "tatkalTime": 0,
                "categoryDetails": {
                    "categories": []
                },
                "seatLayoutDisabled": true,
                "quickBookingEnabled": false,
                "leftHandDrive": true,
                "eitherOneMandatoryIdType": [],
                "allMandatoryIdType": [],
                "additionalPassengerPreferenceEnabled": false,
                "boardingDroppingEnabled": false,
                "source": 27410,
                "destination": 41557,
                "exactSearch": false,
                "boAccount": 10011117,
                "boConfig": {
                    "account": 10011111,
                    "minFareDiscountRate": 5.0,
                    "maxFareDiscountRate": 10.0,
                    "percentDiscount": true,
                    "quickBookDiscountActive": false,
                    "quickBookDiscountPermissionByBO": false,
                    "passengerTypeList": []
                },
                "busAmenities": [],
                "fareFacilitiesDetail": [],
                "ac": true,
                "nonAC": false,
                "seater": true,
                "sleeper": false,
                "AC": true
            }
        ]
    };
});

router.get('/rest/v2/tripdetails', (ctx, next) => {
    ctx.body = {
        "seats": [
            {
                "name": "1",
                "row": 2,
                "column": 0,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": false,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "11",
                "row": 2,
                "column": 4,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "12",
                "row": 1,
                "column": 4,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": false,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "13",
                "row": 0,
                "column": 4,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "2",
                "row": 2,
                "column": 1,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": false,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "3",
                "row": 1,
                "column": 1,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "4",
                "row": 0,
                "column": 1,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 0.0,
                "baseFare": 0.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": false,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "5",
                "row": 2,
                "column": 2,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "6",
                "row": 1,
                "column": 2,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": false,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "7",
                "row": 0,
                "column": 2,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "8",
                "row": 2,
                "column": 3,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "9",
                "row": 1,
                "column": 3,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": false,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            },
            {
                "name": "10",
                "row": 0,
                "column": 3,
                "zIndex": 0,
                "length": 1,
                "width": 1,
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxPercentage": 0,
                "serviceTaxAbsolute": 0.0,
                "available": true,
                "ladiesSeat": false,
                "operatorServiceChargePercent": 0,
                "operatorServiceChargeAbsolute": 0.0,
                "seatType": "SEATER"
            }
        ],
        "busAmenities": [],
        "categoryDetails": {
            "categories": []
        },
        "departureTime": 1140,
        "arrivalTime": 1265,
        "currencyType": "IDR"
    };
});

router.post('/rest/v2/blockTicket', (ctx, next) => {
    const body = ctx.request.body;

    ctx.body = {
        "blockKey": "QaRDiuPZSs",
        "currency": "IDR",
        "totalFare": "60000.00",
        "fareBreakupList": [
            {
                "fare": 60000.0,
                "baseFare": 60000.0,
                "serviceTaxAbsolute": 0.0,
                "passenger_type": "ALL"
            }
        ]
    };

    console.log('body.availableTripId', body.availableTripId)

    if (body.availableTripId === 6285781147378) {
        ctx.body = {
            "blockKey": "QaRDiuPZSs",
            "currency": "IDR",
            "totalFare": "61000.00",
            "fareBreakupList": [
                {
                    "fare": 61000.0,
                    "baseFare": 60000.0,
                    "serviceTaxAbsolute": 0.0,
                    "passenger_type": "ALL"
                }
            ]
        };
    }
});

router.post('/rest/v2/bookticket', (ctx, next) => {
    ctx.body = {"tin":"855KUB9C","seatWiseTin":{"1":"855KUB9C_1"}};
});

router.get('/rest/v2/ticket', (ctx, next) => {
    ctx.body = {
        "tin": "855KUB9C",
        "pnr": "855KUB9C",
        "inventoryItems": [
            {
                "seatName": "1",
                "fare": 60000.0,
                "serviceTax": 0.0,
                "operatorServiceCharge": 0.0,
                "ladiesSeat": false,
                "passenger": {
                    "name": "salis",
                    "mobile": "6281213604995",
                    "title": "Mr",
                    "email": "emailtix12345@gmail.com",
                    "age": 12,
                    "gender": "FEMALE",
                    "primary": true,
                    "idProofs": [],
                    "nationality": "INDONESIA",
                    "passengerType": "ALL"
                }
            }
        ],
        "inventoryId": 2077029534920048544,
        "doj": "2020-07-24T00:00:00.000+0000",
        "sourceCityId": 27410,
        "pickupLocationId": 121328,
        "pickupLocation": "Sarimanah 1",
        "pickUpLocationAddress": "Some Address",
        "pickupLocationLandmark": "dsasadas",
        "pickUpContactNo": "12543233",
        "pickupTime": 610,
        "dropLocationId": 118171,
        "dropLocation": "Terminal Pasar Jumat",
        "dropLocationAddress": "sdfg",
        "dropLocationLandmark": "sadf",
        "dropTime": 2400,
        "destinationCityId": 28715,
        "cancellationPolicy": "0:-1:100:0;",
        "partialCancellationAllowed": true,
        "status": "BOOKED",
        "dateOfIssue": "2020-07-21T16:17:01.000+0000",
        "travels": "testindonesia",
        "busType": "Mercedes Benz A/C Seater Regular (2+1)",
        "primeDepartureTime": 600,
        "sourceCity": "Bandung",
        "destinationCity": "Jakarta Selatan",
        "serviceCharge": 0.0,
        "agentCurrency": "IDR",
        "seatWiseTin": {
            "1": "855KUB9C_1"
        },
        "totalFare": 100.0,
        "otherDetails": {
            "DEVICE_TYPE": "API",
            "isNoSeatLayoutBooking": "true"
        },
        "subCompany": ""
    };
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8080);