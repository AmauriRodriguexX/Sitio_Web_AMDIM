// Hardcoded initial data from legacy js/main.js
export interface Distribuidor {
  id: string;
  nombre: string;
  telefono: string;
  web: string;
  direccion: string;
  estado: string;
  lat: number;
  lng: number;
}

export interface Vacante {
  id: string;
  titulo: string;
  distribuidor: string;
  estado: string;
  email?: string;
  descripcion: string;
  vigencia?: string;
}

export const DISTRIBUIDORES_INICIALES: Distribuidor[] = [
  {
        "id": "d1",
        "nombre": "MITSUBISHI AEROPUERTO",
        "telefono": "5510781315",
        "web": "https://mitsubishi-aeropuerto.mx",
        "direccion": "Av. Fuerza Aérea #394, Colonia Federal, Alcaldía Venustiano Carranza, C.P. 15700, México, CDMX.",
        "estado": "Ciudad de México",
        "lat": 19.4223272,
        "lng": -99.0851668
    },
    {
        "id": "d2",
        "nombre": "MITSUBISHI AGUASCALIENTES",
        "telefono": "4495368840",
        "web": "https://mitsubishi-aguascalientes.mx",
        "direccion": "Blvd. Luis Donaldo Colosio Murrieta 791, Col, Trojes de Alonso, 20116 Aguascalientes, Ags.",
        "estado": "Aguascalientes",
        "lat": 21.9251749,
        "lng": -102.2920947
    },
    {
        "id": "d3",
        "nombre": "MITSUBISHI ANGELOPOLIS",
        "telefono": "2222257777",
        "web": "https://mitsubishi-angelopolis.mx",
        "direccion": "Atlixcáyotl 5310 A, Reserva Territorial Atlixcáyotl, Corredor Comercial Desarrollo Atlixcayotl, 72820 San Bernardino Tlaxcalancingo, Pue.",
        "estado": "Puebla",
        "lat": 19.0274641,
        "lng": -98.2336571
    },
    {
        "id": "d4",
        "nombre": "MITSUBISHI BOCA DEL RIO",
        "telefono": "2299229510",
        "web": "https://mitsubishi-bocadelrio.mx",
        "direccion": "Bv. Adolfo Ruíz Cortines S/N, Primera Sección, Costa de Oro, 94299 Boca del Río, Ver.",
        "estado": "Veracruz",
        "lat": 19.1518593,
        "lng": -96.1063268
    },
    {
        "id": "d5",
        "nombre": "MITSUBISHI CAMINO REAL",
        "telefono": "3338805610",
        "web": "https://mitsubishi-caminoreal.mx",
        "direccion": "Av. Ignacio L Vallarta 5091, Camino Real, 45040 Zapopan, Jal.",
        "estado": "Jalisco",
        "lat": 20.6764828,
        "lng": -103.4117324
    },
    {
        "id": "d6",
        "nombre": "MITSUBISHI CAMPECHE",
        "telefono": "8000028867",
        "web": "https://mitsubishi-campeche.mx",
        "direccion": "Av. Maestros Campechanos 377 Col, Multunchac, 24095 San Francisco de Campeche, Camp.",
        "estado": "Campeche",
        "lat": 19.8072217,
        "lng": -90.5282131
    },
    {
        "id": "d7",
        "nombre": "MITSUBISHI CAMPESTRE",
        "telefono": "4777114444",
        "web": "https://mitsubishi-campestre.mx",
        "direccion": "Blvd. Adolfo López Mateos 2511 Col, Jardines del Moral, 37160 León de los Aldama, Gto.",
        "estado": "Guanajuato",
        "lat": 21.1484703,
        "lng": -101.6854198
    },
    {
        "id": "d8",
        "nombre": "MITSUBISHI CANCUN",
        "telefono": "9988811940",
        "web": "https://mitsubishi-cancun.mx",
        "direccion": "Av. Bonampak Supermanzana 8, Zona Hotelera, 77500 Cancún, Q.R.",
        "estado": "Quintana Roo",
        "lat": 21.1424986,
        "lng": -86.822441
    },
    {
        "id": "d9",
        "nombre": "MITSUBISHI CD DEL CARMEN",
        "telefono": "8000028867",
        "web": "https://mitsubishi-cddelcarmen.mx",
        "direccion": "Av. Aviación #114, Col. Benito Juárez. 24180. Ciudad del Carmen, Campeche",
        "estado": "Campeche",
        "lat": 19.4326,
        "lng": -99.1332
    },
    {
        "id": "d10",
        "nombre": "MITSUBISHI CD GUZMÁN",
        "telefono": "3414105605",
        "web": "https://mitsubishi-cdguzman.mx",
        "direccion": "Calz Madero y Carranza 485 Col, Centro, 49000 Cdad. Guzmán, Jal.",
        "estado": "Jalisco",
        "lat": 19.7031901,
        "lng": -103.4776408
    },
    {
        "id": "d11",
        "nombre": "MITSUBISHI CELAYA",
        "telefono": "4611599018",
        "web": "https://mitsubishi-celaya.mx",
        "direccion": "Nogal 818, Col, Primera Seccion, Jardines de Celaya 1ra Secc, 38080 Celaya, Gto.",
        "estado": "Guanajuato",
        "lat": 20.5169819,
        "lng": -100.7925115
    },
    {
        "id": "d12",
        "nombre": "MITSUBISHI CHIAPAS",
        "telefono": "9611212284",
        "web": "https://mitsubishi-chiapas.mx",
        "direccion": "Blvd. Belisario Domínguez 4000, Jardines de Tuxtla, 29020 Tuxtla Gutiérrez, Chis.",
        "estado": "Chiapas",
        "lat": 16.7564689,
        "lng": -93.1570249
    },
    {
        "id": "d13",
        "nombre": "MITSUBISHI CHIHUAHUA",
        "telefono": "6144422700",
        "web": "https://mitsubishi-chihuahua.mx",
        "direccion": "Blvrd Antonio Ortiz Mena 431 Col, Unidad Presidentes, 31210 Chihuahua, Chih.",
        "estado": "Chihuahua",
        "lat": 28.6451314,
        "lng": -106.1003711
    },
    {
        "id": "d14",
        "nombre": "MITSUBISHI COAPA",
        "telefono": "5510781315",
        "web": "https://mitsubishi-coapa.mx",
        "direccion": "Calz. del Hueso 975, Coapa, Granjas Coapa, Tlalpan, 14330 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.2994609,
        "lng": -99.1071897
    },
    {
        "id": "d15",
        "nombre": "MITSUBISHI COATZACOALCOS",
        "telefono": "9212131020",
        "web": "https://mitsubishi-coatzacoalcos.mx",
        "direccion": "Carretera Coatzacoalcos, 4 S/N, Heroes de Nacozari, 96599 Coatzacoalcos, Ver.",
        "estado": "Veracruz",
        "lat": 18.1226554,
        "lng": -94.4426708
    },
    {
        "id": "d16",
        "nombre": "MITSUBISHI COLIMA",
        "telefono": "3123307172",
        "web": "https://mitsubishi-colima.mx",
        "direccion": "Carlos de La Madrid Béjar 895, El Tecolote, 28090 Colima, Col.",
        "estado": "Colima",
        "lat": 19.2201068,
        "lng": -103.7220493
    },
    {
        "id": "d17",
        "nombre": "MITSUBISHI CÓRDOBA",
        "telefono": "2717129006",
        "web": "https://mitsubishi-cordoba.mx",
        "direccion": "Zona Diez, 21 de Mayo 292.95, La Posta, 94570 Córdoba, Ver.",
        "estado": "Veracruz",
        "lat": 18.8843766,
        "lng": -96.9533777
    },
    {
        "id": "d18",
        "nombre": "MITSUBISHI BERNARDO QUINTANA",
        "telefono": "4421500600",
        "web": "https://www.mitsubishi-bernardoquintana.mx/",
        "direccion": "Prol. Bernardo Quintana 4099, Plaza Boulevares, 76160 Santiago de Querétaro, Qro.",
        "estado": "Querétaro",
        "lat": 20.6149857,
        "lng": -100.3880554
    },
    {
        "id": "d19",
        "nombre": "MITSUBISHI COUNTRY",
        "telefono": "3321012100",
        "web": "https://mitsubishi-country.mx",
        "direccion": "Av. Manuel Ávila Camacho 2023- A, Country Club, 44610 Guadalajara, Jal.",
        "estado": "Jalisco",
        "lat": 20.7053545,
        "lng": -103.3647488
    },
    {
        "id": "d20",
        "nombre": "MITSUBISHI CUAUTITLÁN",
        "telefono": "5593314444",
        "web": "https://mitsubishi-cuautitlan.mx",
        "direccion": "Autopista México - Querétaro km 38.4, El Sabino, 54713 San Mateo Ixtacalco, Méx.",
        "estado": "Estado de México",
        "lat": 19.6730888,
        "lng": -99.2002018
    },
    {
        "id": "d21",
        "nombre": "MITSUBISHI CULIACÁN",
        "telefono": "6675495050",
        "web": "https://mitsubishi-culiacan.mx",
        "direccion": "Blvd. Pedro Infante 2301-L-2, Col. Jardines, Desarrollo Urbano Tres Ríos, 80100 Culiacán Rosales, Sin.",
        "estado": "Sinaloa",
        "lat": 24.8031889,
        "lng": -107.4124831
    },
    {
        "id": "d22",
        "nombre": "MITSUBISHI DURANGO",
        "telefono": "6188264434",
        "web": "https://mitsubishi-durango.mx",
        "direccion": "Blvd. Domingo Arrieta 1100 Col, Jalisco, 34170 Durango, Dgo.",
        "estado": "Durango",
        "lat": 24.0035783,
        "lng": -104.6619933
    },
    {
        "id": "d23",
        "nombre": "MITSUBISHI FLETEROS",
        "telefono": "8111584400",
        "web": "https://mitsubishi-fleteros.mx",
        "direccion": "Gral. Pablo A Gonzalez 124, San Jerónimo, 64640 Monterrey, N.L.",
        "estado": "Nuevo León",
        "lat": 25.6798251,
        "lng": -100.3535829
    },
    {
        "id": "d24",
        "nombre": "MITSUBISHI GONZALEZ GALLO",
        "telefono": "3324512800",
        "web": "https://mitsubishi-gonzalezgallo.mx",
        "direccion": "Calz. Jesús González Gallo 534, La Aurora, 44790 Guadalajara, Jal.",
        "estado": "Jalisco",
        "lat": 20.6540703,
        "lng": -103.3403645
    },
    {
        "id": "d25",
        "nombre": "MITSUBISHI HERMOSILLO CENTRO",
        "telefono": "6622135520",
        "web": "https://mitsubishi-hermosillocentro.mx",
        "direccion": "Blvr. Abelardo L. Rodríguez 110 Col, Centro, 06700 Hermosillo, Son.",
        "estado": "Sonora",
        "lat": 29.0907561,
        "lng": -110.9562331
    },
    {
        "id": "d26",
        "nombre": "MITSUBISHI INSURGENTES",
        "telefono": "5591839002",
        "web": "https://mitsubishi-insurgentes.mx",
        "direccion": "Av. Insurgentes Sur 1247, Extremadura Insurgentes, Benito Juárez, 03740 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.3755459,
        "lng": -99.1785957
    },
    {
        "id": "d27",
        "nombre": "MITSUBISHI INTERLOMAS",
        "telefono": "5530003430",
        "web": "https://mitsubishi-interlomas.mx",
        "direccion": "P.º de la Herradura 422, Interlomas, Parques de la Herradura, 52760 Naucalpan de Juárez, Méx.",
        "estado": "Estado de México",
        "lat": 19.4027652,
        "lng": -99.2681718
    },
    {
        "id": "d28",
        "nombre": "MITSUBISHI JUAREZ",
        "telefono": "6564786000",
        "web": "https://mitsubishi-juarez.mx",
        "direccion": "Av de la Raza 6529, Del Futuro, 32320 Juárez, Chih.",
        "estado": "Chihuahua",
        "lat": 31.725192,
        "lng": -106.4270555
    },
    {
        "id": "d29",
        "nombre": "MITSUBISHI LA PAZ",
        "telefono": "Pendiente",
        "web": "https://mitsubishi-lapaz.mx",
        "direccion": "Lote 9, Av Luis Donaldo Colosio, entre Boulevard Constituyentes y Calle Aquiles Serdan. Colonia Sector Inalapa. C.P 23090. La Paz, B.C.S.",
        "estado": "Baja California",
        "lat": 19.4326,
        "lng": -99.1332
    },
    {
        "id": "d30",
        "nombre": "MITSUBISHI LAGUNA",
        "telefono": "8717294900",
        "web": "https://mitsubishi-laguna.mx",
        "direccion": "Av. Juarez 3701 Col, Nuevo Torreón, 27060 Torreón, Coah.",
        "estado": "Coahuila",
        "lat": 25.5383475,
        "lng": -103.4087059
    },
    {
        "id": "d31",
        "nombre": "MITSUBISHI LEÓN",
        "telefono": "4777717800",
        "web": "https://mitsubishi-leon.mx",
        "direccion": "Blvd. Adolfo López Mateos 2710 Col, Industrial Julian de Obregon, 37290 León de los Aldama, Gto.",
        "estado": "Guanajuato",
        "lat": 21.0966622,
        "lng": -101.6290706
    },
    {
        "id": "d32",
        "nombre": "MITSUBISHI LINDA VISTA",
        "telefono": "8140024300",
        "web": "https://mitsubishi-lindavista.mx",
        "direccion": "Av. Constituyentes de Nuevo León 114, Col. Alamos Corregidora, 64590 Monterrey, N.L.",
        "estado": "Nuevo León",
        "lat": 25.6855713,
        "lng": -100.2621916
    },
    {
        "id": "d33",
        "nombre": "MITSUBISHI LÓPEZ MATEOS",
        "telefono": "3337704444",
        "web": "https://mitsubishi-lopezmateos.mx",
        "direccion": "Av. Adolfo López Mateos Sur 4221 Col, Loma Bonita, 45086 Zapopan, Jal.",
        "estado": "Jalisco",
        "lat": 20.6407104,
        "lng": -103.4094368
    },
    {
        "id": "d34",
        "nombre": "MITSUBISHI LOS FUERTES",
        "telefono": "2222230232",
        "web": "https://mitsubishi-losfuertes.mx",
        "direccion": "Diag. Defensores de la República 872 Col, Adolfo López Mateos, 72240 Heroica Puebla de Zaragoza, Pue.",
        "estado": "Puebla",
        "lat": 19.0644556,
        "lng": -98.1808061
    },
    {
        "id": "d35",
        "nombre": "MITSUBISHI MANZANILLO",
        "telefono": "314 688 2679",
        "web": "https://mitsubishi-manzanillo.mx",
        "direccion": "Blvd. Miguel de la Madrid No.740 Col. Salagua, las brisas, C.P.28218, Manzanillo, Col.",
        "estado": "Colima",
        "lat": 19.0853676,
        "lng": -104.3080294
    },
    {
        "id": "d36",
        "nombre": "MITSUBISHI MAZATLÁN",
        "telefono": "6699899090",
        "web": "https://mitsubishi-mazatlan.mx",
        "direccion": "Dr. Jesús Kumate 209 Col, Hacienda las Cruces, 82110 Mazatlán, Sin.",
        "estado": "Sinaloa",
        "lat": 23.2415146,
        "lng": -106.441345
    },
    {
        "id": "d37",
        "nombre": "MITSUBISHI MERIDA",
        "telefono": "9999449797",
        "web": "https://mitsubishi-merida.mx",
        "direccion": "Calle 6, Prol. Paseo Montejo 318 Col, Gonzalo Guerrero, 97118 Mérida, Yuc.",
        "estado": "Mérida",
        "lat": 21.0233978,
        "lng": -89.6224518
    },
    {
        "id": "d38",
        "nombre": "MITSUBISHI MEXICALI",
        "telefono": "6865615757",
        "web": "https://mitsubishi-mexicali.mx",
        "direccion": "Blvd. Lázaro Cárdenas 1598 Col, Ex-Ejido Zacatecas, 21090 Mexicali, B.C.",
        "estado": "Baja California",
        "lat": 32.6243493,
        "lng": -115.4566667
    },
    {
        "id": "d39",
        "nombre": "MITSUBISHI MONCLOVA",
        "telefono": "8666416847",
        "web": "https://mitsubishi-monclova.mx",
        "direccion": "Blvd Harold R. Pape 310 Col, Santa Isabel, 25732 Monclova, Coah.",
        "estado": "Coahuila",
        "lat": 26.9441053,
        "lng": -101.4131666
    },
    {
        "id": "d40",
        "nombre": "MITSUBISHI MORELIA",
        "telefono": "4431284338",
        "web": "https://mitsubishi-morelia.mx",
        "direccion": "Av Acueducto 2547, Col. Chapultepec Ote, 58260 Morelia, Mich.",
        "estado": "Michoacán",
        "lat": 19.6959156,
        "lng": -101.1610928
    },
    {
        "id": "d41",
        "nombre": "MITSUBISHI MORELOS",
        "telefono": "7779801300",
        "web": "https://mitsubishi-morelos.mx",
        "direccion": "José María Morelos 65 Col, Chipitlan, 62070 Cuernavaca, Mor.",
        "estado": "Morelos",
        "lat": 18.8934458,
        "lng": -99.2285599
    },
    {
        "id": "d42",
        "nombre": "MITSUBISHI OAXACA",
        "telefono": "9515016070",
        "web": "https://mitsubishi-oaxaca.mx",
        "direccion": "AV UNIVERSIDAD 553-A COL, Avenida Universidad 553-A, Exhacienda Candiani, 68120 Oaxaca de Juárez, Oax.",
        "estado": "Oaxaca",
        "lat": 17.0399427,
        "lng": -96.7111739
    },
    {
        "id": "d43",
        "nombre": "MITSUBISHI PACHUCA",
        "telefono": "7714541921",
        "web": "https://mitsubishi-pachuca.mx",
        "direccion": "Blvd. Felipe Ángeles 400 Col, Parque Urbano, Pachoacan, 42083 Pachuca de Soto, Hgo.",
        "estado": "Hidalgo",
        "lat": 20.0684025,
        "lng": -98.779529
    },
    {
        "id": "d44",
        "nombre": "MITSUBISHI PLAYA DEL CARMEN",
        "telefono": "800 00 28867",
        "web": "https://www.mitsubishi-playadelcarmen.mx/",
        "direccion": "Calle Carr. Federal 6236, Zazil-ha, 77720 Playa del Carmen, Q.R.",
        "estado": "Quintana Roo",
        "lat": 19.4326,
        "lng": -99.1332
    },
    {
        "id": "d45",
        "nombre": "MITSUBISHI POZA RICA",
        "telefono": "7821188080",
        "web": "https://mitsubishi-pozarica.mx",
        "direccion": "Av 20 de Noviembre 206 Col, Cazones, 93230 Poza Rica de Hidalgo, Ver.",
        "estado": "Veracruz",
        "lat": 20.5421321,
        "lng": -97.4511866
    },
    {
        "id": "d46",
        "nombre": "MITSUBISHI PUERTO VALLARTA",
        "telefono": "3223080777",
        "web": "https://mitsubishi-puertovallarta.mx",
        "direccion": "Boulevard Vallarta Tepic 5162A, Col. Las Juntas, Puerto Vallarta, Jalisco.",
        "estado": "Jalisco",
        "lat": 20.6671594,
        "lng": -105.2474564
    },
    {
        "id": "d47",
        "nombre": "MITSUBISHI REYNOSA",
        "telefono": "8992931300",
        "web": "https://mitsubishi-reynosa.mx",
        "direccion": "Blvd. Hidalgo 285 Col, Fuentes del Valle, 88746 Reynosa, Tamps.",
        "estado": "Tamaulipas",
        "lat": 26.0673665,
        "lng": -98.3371649
    },
    {
        "id": "d48",
        "nombre": "MITSUBISHI SALTILLO",
        "telefono": "8447979000",
        "web": "https://mitsubishi-saltillo.mx",
        "direccion": "Blvd. Venustiano Carranza 5586 Col, La Hacienda, 25256 Saltillo, Coah.",
        "estado": "Coahuila",
        "lat": 25.4731904,
        "lng": -100.9764998
    },
    {
        "id": "d49",
        "nombre": "MITSUBISHI SAN ÁNGEL",
        "telefono": "5553373000",
        "web": "https://mitsubishi-sanangel.mx",
        "direccion": "Av. Revolución 1321, Col. Tlacopac, Àlvaro Obregòn, Álvaro Obregón, 01049 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.358823,
        "lng": -99.189959
    },
    {
        "id": "d50",
        "nombre": "MITSUBISHI SAN LUIS POTOSÍ",
        "telefono": "4448635301",
        "web": "https://mitsubishi-sanluispotosi.mx",
        "direccion": "Av. Benito Juarez 1110, Valle Dorado, 78399 San Luis Potosí, S.L.P.",
        "estado": "San Luis Potosí",
        "lat": 22.1440697,
        "lng": -100.947482
    },
    {
        "id": "d51",
        "nombre": "MITSUBISHI SANTA CLARA",
        "telefono": "55 5699 0390",
        "web": "https://mitsubishi-santaclara.mx",
        "direccion": "Avenida Via Morelos 439, Colonia Santa Clara, CP 55540, Ecatepec de Morelos, Edo de Mex.",
        "estado": "Estado de México",
        "lat": 19.5376404,
        "lng": -99.0622675
    },
    {
        "id": "d52",
        "nombre": "MITSUBISHI SATÉLITE",
        "telefono": "5553667833",
        "web": "https://mitsubishi-satelite.mx",
        "direccion": "Perif. Blvd. Manuel Ávila Camacho 2304 Col, San Lucas Tepetlacalco, 53240 Tlalnepantla, Méx.",
        "estado": "Estado de México",
        "lat": 19.5235222,
        "lng": -99.2292417
    },
    {
        "id": "d53",
        "nombre": "MITSUBISHI SENDERO",
        "telefono": "8141050000",
        "web": "https://mitsubishi-sendero.mx",
        "direccion": "Avenida Universidad 1003, Centro, 66400 San Nicolás de los Garza, N.L.",
        "estado": "Nuevo León",
        "lat": 25.7574614,
        "lng": -100.2966105
    },
    {
        "id": "d54",
        "nombre": "MITSUBISHI TABASCO",
        "telefono": "9933136666",
        "web": "https://mitsubishi-tabasco.mx",
        "direccion": "Ave Juan Estrada Torres s/n esq. Ciudad deportiva, Primero de Mayo, 86190 Villahermosa, Tab.",
        "estado": "Tabasco",
        "lat": 17.9767553,
        "lng": -92.9391475
    },
    {
        "id": "d55",
        "nombre": "MITSUBISHI TAMPICO",
        "telefono": "8331151600",
        "web": "https://mitsubishi-tampico.mx",
        "direccion": "Av. Miguel Hidalgo. 6303 Nvo. Aeropuerto, Lomas del Chairel, 89337 Tampico, Tamps.",
        "estado": "Tamaulipas",
        "lat": 22.277467,
        "lng": -97.8730488
    },
    {
        "id": "d56",
        "nombre": "MITSUBISHI TEHUACÁN",
        "telefono": "2383825199",
        "web": "https://mitsubishi-tehuacan.mx",
        "direccion": "Av Independencia Pte 1409-B, Arcadia, 75760 Tehuacán, Pue.",
        "estado": "Puebla",
        "lat": 18.4630827,
        "lng": -97.4058007
    },
    {
        "id": "d57",
        "nombre": "MITSUBISHI TEPIC",
        "telefono": "3112172202",
        "web": "https://mitsubishi-tepic.mx",
        "direccion": "Av Insurgentes 1997, Los Llanitos, 63170 Tepic, Nay.",
        "estado": "Nayarit",
        "lat": 21.4910761,
        "lng": -104.8787547
    },
    {
        "id": "d58",
        "nombre": "MITSUBISHI TIJUANA",
        "telefono": "6649691979",
        "web": "https://mitsubishi-tijuana.mx",
        "direccion": "Av. Vía Rápida Pte. 15471, La Cienega Poniente, 22114 Tijuana, B.C.",
        "estado": "Tijuana",
        "lat": 32.4951855,
        "lng": -116.9432667
    },
    {
        "id": "d59",
        "nombre": "MITSUBISHI TLAHUAC",
        "telefono": "5554266301",
        "web": "https://mitsubishi-tlahuac.mx",
        "direccion": "Av. Tlahuac 4799, El Vergel, Iztapalapa, 09880 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.3189859,
        "lng": -99.0794749
    },
    {
        "id": "d60",
        "nombre": "MITSUBISHI TLAXCALA",
        "telefono": "2464613435",
        "web": "https://mitsubishi-tlaxcala.mx",
        "direccion": "Autopista Tlaxcala - Apizaco, quinta sección, 90459 Santa María Atlihuetzian, Tlax.",
        "estado": "Tlaxcala",
        "lat": 19.3757692,
        "lng": -98.179451
    },
    {
        "id": "d61",
        "nombre": "MITSUBISHI TOLUCA",
        "telefono": "7221801888",
        "web": "https://mitsubishi-toluca.mx",
        "direccion": "Av. Lic. Benito Juárez García 1610 Col, San Francisco Coaxusco, 52158 Toluca de Lerdo, Méx.",
        "estado": "Estado de México",
        "lat": 19.2719477,
        "lng": -99.6307857
    },
    {
        "id": "d62",
        "nombre": "MITSUBISHI URUAPAN",
        "telefono": "452 502 0424",
        "web": "https://mitsubishi-uruapan.mx",
        "direccion": "Paseo de la Revolución 500 Jardines del Bosque Uruapan Michoacán CP 60190",
        "estado": "Michoacán",
        "lat": 19.4326,
        "lng": -99.1332
    },
    {
        "id": "d63",
        "nombre": "MITSUBISHI VALLEJO",
        "telefono": "5595506568",
        "web": "https://mitsubishi-vallejo.mx",
        "direccion": "Calz. Vallejo 1059, Nueva Vallejo II Secc, Gustavo A. Madero, 07720 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.498831,
        "lng": -99.1552893
    },
    {
        "id": "d64",
        "nombre": "MITSUBISHI XALAPA",
        "telefono": "2281730244",
        "web": "https://mitsubishi-xalapa.mx",
        "direccion": "C. Lázaro Cárdenas 4107 Col, Sipeh Animas, 91190 Xalapa-Enríquez, Ver.",
        "estado": "Veracruz",
        "lat": 19.5243698,
        "lng": -96.8961656
    },
    {
        "id": "d65",
        "nombre": "MITSUBISHI ZACATECAS",
        "telefono": "4923072040",
        "web": "https://mitsubishi-zacatecas.mx",
        "direccion": "Calz. Revolución Mexicana 1A, Col. Tierra y Libertad, Primera Sección, 98615 Guadalupe, Zac.",
        "estado": "Zacatecas",
        "lat": 22.7568321,
        "lng": -102.5133755
    },
    {
        "id": "d66",
        "nombre": "MITSUBISHI ZAMORA",
        "telefono": "3515170027",
        "web": "https://mitsubishi-zamora.mx",
        "direccion": "Carr. Zamora-La Barca KM 3, COLONIA, San Joaquín, 45086 Zamora de Hidalgo, Mich.",
        "estado": "Michoacán",
        "lat": 20.0147653,
        "lng": -102.2809723
    },
    {
        "id": "d67",
        "nombre": "MITSUBISHI RÍO MAYO",
        "telefono": "777 160 6600",
        "web": "https://mitsubishi-riomayo.mx",
        "direccion": "Av Río Mayo 403, Vista Hermosa, 62290 Cuernavaca, Mor.",
        "estado": "Morelos",
        "lat": 18.9337175,
        "lng": -99.2215857
    },
    {
        "id": "d68",
        "nombre": "MITSUBISHI CD VICTORIA",
        "telefono": "8343161600",
        "web": "https://Pendiente",
        "direccion": "C. Alberto Carrera Torres 920b, Zona Centro, 87000 Cdad. Victoria, Tamps.",
        "estado": "Tamaulipas",
        "lat": 23.7374233,
        "lng": -99.1439088
    },
    {
        "id": "d69",
        "nombre": "MITSUBISHI CORREGIDORA",
        "telefono": "4461392005",
        "web": "https://mitsubishi-corregidora.mx",
        "direccion": "PROLONGACIÓN AV, Calle Luis M. Vega 302, Cimatario, 76030 Santiago de Querétaro, Qro.",
        "estado": "Querétaro",
        "lat": 20.5767269,
        "lng": -100.3899282
    },
    {
        "id": "d70",
        "nombre": "MITSUBISHI JURIQUILLA",
        "telefono": "Pendiente",
        "web": "https://mitsubishi-juriquilla.mx",
        "direccion": "Pendiente",
        "estado": "Pendiente",
        "lat": 19.4326,
        "lng": -99.1332
    },
    {
        "id": "d71",
        "nombre": "MITSUBISHI DEL VALLE",
        "telefono": "55 9183 9002",
        "web": "https://mitsubishi-delvalle.mx",
        "direccion": "Ixcateopan, Av. División del Nte. 183 Esquina, Letran Valle, Benito Juárez, 03650 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.4326,
        "lng": -99.1332
    }
];

export const VACANTES_INICIALES: Vacante[] = [
  {
        id: "v1",
        titulo: "Asesor de Ventas Digitales",
        distribuidor: "Mitsubishi Polanco",
        estado: "Ciudad de México",
        email: "reclutamiento@mitspolanco.com.mx",
        descripcion: "Atención a leads de medios digitales, seguimiento en CRM y cierre de ventas de unidades nuevas. Experiencia mínima de 2 años en el ramo automotriz.",
        vigencia: "manual"
    },
    {
        id: "v2",
        titulo: "Técnico Mecánico Certificado",
        distribuidor: "Mitsubishi Guadalajara",
        estado: "Jalisco",
        email: "servicio@mitsgdl.com.mx",
        descripcion: "Realización de diagnósticos mecánicos, mantenimientos preventivos y correctivos bajo estándares de Mitsubishi Motors. Certificación técnica deseable.",
        vigencia: "1-mes"
    }
];
