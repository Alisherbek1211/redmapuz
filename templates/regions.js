ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [41.765073,63.150127],
        zoom: 6,
        // type: 'yandex#map',
        controls: ['zoomControl']
    }, {
        // Ограничим область карты.
        // restrictMapArea: [[48, 11], [51.5, 20]]
    });
    map.controls.get('zoomControl').options.set({size: 'small'});

    // Загрузим регионы.
    ymaps.borders.load('001', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {

        // Создадим многоугольник, который будет скрывать весь мир, кроме заданной страны.
        var background = new ymaps.Polygon([
            [
                [85, -179.99],
                [85, 179.99],
                [-85, 179.99],
                [-85, -179.99],
                [85, -179.99]
            ]
        ], {}, {
            fillColor: '#ffffff',
            strokeWidth: 0,
            // Для того чтобы полигон отобразился на весь мир, нам нужно поменять
            // алгоритм пересчета координат геометрии в пиксельные координаты.
            coordRendering: 'straightPath'
        });

        // Найдём страну по её iso коду.

        gcode = {
            "response": {
              "GeoObjectCollection": {
                "metaDataProperty": {
                  "GeocoderResponseMetaData": {
                    "request": "fergana",
                    "results": "10",
                    "found": "10"
                  }
                },
                "featureMember": [
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "other",
                          "text": "Узбекистан, Фергана",
                          "kind": "locality",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Ферганская область"
                              },
                              {
                                "kind": "area",
                                "name": "Фергана"
                              },
                              {
                                "kind": "locality",
                                "name": "Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Ферганская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Фергана",
                                  "Locality": {
                                    "LocalityName": "Фергана"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "Фергана",
                      "description": "Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "71.72328 40.326527",
                          "upperCorner": "71.864513 40.46053"
                        }
                      },
                      "Point": {
                        "pos": "71.783009 40.38942"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "street",
                          "text": "Узбекистан, Фергана, улица Фергана",
                          "kind": "street",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Фергана, улица Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Ферганская область"
                              },
                              {
                                "kind": "area",
                                "name": "Фергана"
                              },
                              {
                                "kind": "locality",
                                "name": "Фергана"
                              },
                              {
                                "kind": "street",
                                "name": "улица Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Фергана, улица Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Ферганская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Фергана",
                                  "Locality": {
                                    "LocalityName": "Фергана",
                                    "Thoroughfare": {
                                      "ThoroughfareName": "улица Фергана"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "улица Фергана",
                      "description": "Фергана, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "71.770954 40.407675",
                          "upperCorner": "71.77911 40.442571"
                        }
                      },
                      "Point": {
                        "pos": "71.773199 40.424435"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "other",
                          "text": "Узбекистан, Сырдарьинская область, Акалтынский район, городской посёлок Фергана",
                          "kind": "locality",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Сырдарьинская область, Акалтынский район, городской посёлок Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Сырдарьинская область"
                              },
                              {
                                "kind": "area",
                                "name": "Акалтынский район"
                              },
                              {
                                "kind": "locality",
                                "name": "городской посёлок Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Сырдарьинская область, Акалтынский район, городской посёлок Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Сырдарьинская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Акалтынский район",
                                  "Locality": {
                                    "LocalityName": "городской посёлок Фергана"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "городской посёлок Фергана",
                      "description": "Акалтынский район, Сырдарьинская область, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "68.311703 40.571559",
                          "upperCorner": "68.347663 40.592716"
                        }
                      },
                      "Point": {
                        "pos": "68.328259 40.583032"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "street",
                          "text": "Узбекистан, Ташкент, Фергана Йули",
                          "kind": "street",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Ташкент, Фергана Йули",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Ташкент"
                              },
                              {
                                "kind": "locality",
                                "name": "Ташкент"
                              },
                              {
                                "kind": "street",
                                "name": "Фергана Йули"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Ташкент, Фергана Йули",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Ташкент",
                                "Locality": {
                                  "LocalityName": "Ташкент",
                                  "Thoroughfare": {
                                    "ThoroughfareName": "Фергана Йули"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "Фергана Йули",
                      "description": "Ташкент, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "69.290876 41.238026",
                          "upperCorner": "69.330896 41.300035"
                        }
                      },
                      "Point": {
                        "pos": "69.312417 41.269896"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "other",
                          "text": "Узбекистан, Фергана, Международный аэропорт Фергана",
                          "kind": "airport",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Фергана, Международный аэропорт Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Ферганская область"
                              },
                              {
                                "kind": "area",
                                "name": "Фергана"
                              },
                              {
                                "kind": "airport",
                                "name": "Международный аэропорт Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Фергана, Международный аэропорт Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Ферганская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Фергана",
                                  "Locality": {
                                    "DependentLocality": {
                                      "DependentLocalityName": "Международный аэропорт Фергана"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "Международный аэропорт Фергана",
                      "description": "Фергана, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "71.738102 40.335505",
                          "upperCorner": "71.76533 40.380366"
                        }
                      },
                      "Point": {
                        "pos": "71.75155 40.375798"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "other",
                          "text": "Узбекистан, Наманганская область, Чартакский район, населённый пункт Фергана",
                          "kind": "locality",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Наманганская область, Чартакский район, населённый пункт Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Наманганская область"
                              },
                              {
                                "kind": "area",
                                "name": "Чартакский район"
                              },
                              {
                                "kind": "locality",
                                "name": "населённый пункт Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Наманганская область, Чартакский район, населённый пункт Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Наманганская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Чартакский район",
                                  "Locality": {
                                    "LocalityName": "населённый пункт Фергана"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "населённый пункт Фергана",
                      "description": "Чартакский район, Наманганская область, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "71.868232 41.116386",
                          "upperCorner": "71.884024 41.124517"
                        }
                      },
                      "Point": {
                        "pos": "71.876568 41.119389"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "other",
                          "text": "Большой Ферганский канал имени Усмана Юсупова",
                          "kind": "hydro",
                          "Address": {
                            "formatted": "Большой Ферганский канал имени Усмана Юсупова",
                            "Components": [
                              {
                                "kind": "hydro",
                                "name": "Большой Ферганский канал имени Усмана Юсупова"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Address": "Большой Ферганский канал имени Усмана Юсупова"
                          }
                        }
                      },
                      "name": "Большой Ферганский канал имени Усмана Юсупова",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "69.649582 40.193372",
                          "upperCorner": "72.31456 40.854752"
                        }
                      },
                      "Point": {
                        "pos": "70.986428 40.506507"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "street",
                          "text": "Узбекистан, Фергана, улица Фергана",
                          "kind": "street",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Фергана, улица Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Ферганская область"
                              },
                              {
                                "kind": "area",
                                "name": "Фергана"
                              },
                              {
                                "kind": "locality",
                                "name": "Фергана"
                              },
                              {
                                "kind": "street",
                                "name": "улица Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Фергана, улица Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Ферганская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Фергана",
                                  "Locality": {
                                    "LocalityName": "Фергана",
                                    "Thoroughfare": {
                                      "ThoroughfareName": "улица Фергана"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "улица Фергана",
                      "description": "Фергана, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "71.820271 40.313765",
                          "upperCorner": "71.834905 40.33831"
                        }
                      },
                      "Point": {
                        "pos": "71.826613 40.325007"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "street",
                          "text": "Узбекистан, Хорезмская область, Ургенч, улица Фергана",
                          "kind": "street",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Хорезмская область, Ургенч, улица Фергана",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "province",
                                "name": "Хорезмская область"
                              },
                              {
                                "kind": "area",
                                "name": "Ургенч"
                              },
                              {
                                "kind": "locality",
                                "name": "Ургенч"
                              },
                              {
                                "kind": "street",
                                "name": "улица Фергана"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Хорезмская область, Ургенч, улица Фергана",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "AdministrativeArea": {
                                "AdministrativeAreaName": "Хорезмская область",
                                "SubAdministrativeArea": {
                                  "SubAdministrativeAreaName": "Ургенч",
                                  "Locality": {
                                    "LocalityName": "Ургенч",
                                    "Thoroughfare": {
                                      "ThoroughfareName": "улица Фергана"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "улица Фергана",
                      "description": "Ургенч, Хорезмская область, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "60.643872 41.542434",
                          "upperCorner": "60.670759 41.544331"
                        }
                      },
                      "Point": {
                        "pos": "60.657302 41.544243"
                      }
                    }
                  },
                  {
                    "GeoObject": {
                      "metaDataProperty": {
                        "GeocoderMetaData": {
                          "precision": "other",
                          "text": "Узбекистан, Кокандский региональный железнодорожный узел, станция Фергана-2",
                          "kind": "railway_station",
                          "Address": {
                            "country_code": "UZ",
                            "formatted": "Узбекистан, Кокандский региональный железнодорожный узел, станция Фергана-2",
                            "Components": [
                              {
                                "kind": "country",
                                "name": "Узбекистан"
                              },
                              {
                                "kind": "route",
                                "name": "Кокандский региональный железнодорожный узел"
                              },
                              {
                                "kind": "railway_station",
                                "name": "станция Фергана-2"
                              }
                            ]
                          },
                          "AddressDetails": {
                            "Country": {
                              "AddressLine": "Узбекистан, Кокандский региональный железнодорожный узел, станция Фергана-2",
                              "CountryNameCode": "UZ",
                              "CountryName": "Узбекистан",
                              "Country": {
                                "Locality": {
                                  
                                }
                              }
                            }
                          }
                        }
                      },
                      "name": "станция Фергана-2",
                      "description": "Кокандский региональный железнодорожный узел, Узбекистан",
                      "boundedBy": {
                        "Envelope": {
                          "lowerCorner": "71.799942 40.38172",
                          "upperCorner": "71.816399 40.394304"
                        }
                      },
                      "Point": {
                        "pos": "71.808171 40.388012"
                      }
                    }
                  }
                ]
              }
            }
        }
        // var region = ymaps.geoQuery(gcode);
        console.log(result.features);
        var region = result.features.filter(function (feature) { return feature.properties.iso3166 == 'KZ'; })[0];
        console.log(region);
        // Добавим координаты этой страны в полигон, который накрывает весь мир.
        // В полигоне образуется полость, через которую будет видно заданную страну.
        var masks = region.geometry.coordinates;
        masks.forEach(function(mask){
            background.geometry.insert(1, mask);
        });

        // Добавим многоугольник на карту.
        map.geoObjects.add(background);

        
    })
}