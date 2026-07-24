// Lógica principal e interactividad premium del Sitio Web AMDIM
// Enfoque: Single Page Application (SPA), persistencia en LocalStorage y simulación interactiva.

// --- 1. DATOS INICIALES DE PRUEBA (MOCK DATA) ---
const DISTRIBUIDORES_INICIALES = [
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
        "telefono": "529988811940",
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
        "telefono": "523414105605",
        "web": "https://mitsubishi-cdguzman.mx",
        "direccion": "Calz Madero y Carranza 485 Col, Centro, 49000 Cdad. Guzmán, Jal.",
        "estado": "Jalisco",
        "lat": 19.7031901,
        "lng": -103.4776408
    },
    {
        "id": "d11",
        "nombre": "MITSUBISHI CELAYA",
        "telefono": "524611599018",
        "web": "https://mitsubishi-celaya.mx",
        "direccion": "Nogal 818, Col, Primera Seccion, Jardines de Celaya 1ra Secc, 38080 Celaya, Gto.",
        "estado": "Guanajuato",
        "lat": 20.5169819,
        "lng": -100.7925115
    },
    {
        "id": "d12",
        "nombre": "MITSUBISHI CHIAPAS",
        "telefono": "529611212284",
        "web": "https://mitsubishi-chiapas.mx",
        "direccion": "Blvd. Belisario Domínguez 4000, Jardines de Tuxtla, 29020 Tuxtla Gutiérrez, Chis.",
        "estado": "Chiapas",
        "lat": 16.7564689,
        "lng": -93.1570249
    },
    {
        "id": "d13",
        "nombre": "MITSUBISHI CHIHUAHUA",
        "telefono": "526144422700",
        "web": "https://mitsubishi-chihuahua.mx",
        "direccion": "Blvrd Antonio Ortiz Mena 431 Col, Unidad Presidentes, 31210 Chihuahua, Chih.",
        "estado": "Chihuahua",
        "lat": 28.6451314,
        "lng": -106.1003711
    },
    {
        "id": "d14",
        "nombre": "MITSUBISHI COAPA",
        "telefono": "525510781315",
        "web": "https://mitsubishi-coapa.mx",
        "direccion": "Calz. del Hueso 975, Coapa, Granjas Coapa, Tlalpan, 14330 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.2994609,
        "lng": -99.1071897
    },
    {
        "id": "d15",
        "nombre": "MITSUBISHI COATZACOALCOS",
        "telefono": "529212131020",
        "web": "https://mitsubishi-coatzacoalcos.mx",
        "direccion": "Carretera Coatzacoalcos, 4 S/N, Heroes de Nacozari, 96599 Coatzacoalcos, Ver.",
        "estado": "Veracruz",
        "lat": 18.1226554,
        "lng": -94.4426708
    },
    {
        "id": "d16",
        "nombre": "MITSUBISHI COLIMA",
        "telefono": "523123307172",
        "web": "https://mitsubishi-colima.mx",
        "direccion": "Carlos de La Madrid Béjar 895, El Tecolote, 28090 Colima, Col.",
        "estado": "Colima",
        "lat": 19.2201068,
        "lng": -103.7220493
    },
    {
        "id": "d17",
        "nombre": "MITSUBISHI CÓRDOBA",
        "telefono": "522717129006",
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
        "telefono": "523321012100",
        "web": "https://mitsubishi-country.mx",
        "direccion": "Av. Manuel Ávila Camacho 2023- A, Country Club, 44610 Guadalajara, Jal.",
        "estado": "Jalisco",
        "lat": 20.7053545,
        "lng": -103.3647488
    },
    {
        "id": "d20",
        "nombre": "MITSUBISHI CUAUTITLÁN",
        "telefono": "525593314444",
        "web": "https://mitsubishi-cuautitlan.mx",
        "direccion": "Autopista México - Querétaro km 38.4, El Sabino, 54713 San Mateo Ixtacalco, Méx.",
        "estado": "Estado de México",
        "lat": 19.6730888,
        "lng": -99.2002018
    },
    {
        "id": "d21",
        "nombre": "MITSUBISHI CULIACÁN",
        "telefono": "526675495050",
        "web": "https://mitsubishi-culiacan.mx",
        "direccion": "Blvd. Pedro Infante 2301-L-2, Col. Jardines, Desarrollo Urbano Tres Ríos, 80100 Culiacán Rosales, Sin.",
        "estado": "Sinaloa",
        "lat": 24.8031889,
        "lng": -107.4124831
    },
    {
        "id": "d22",
        "nombre": "MITSUBISHI DURANGO",
        "telefono": "526188264434",
        "web": "https://mitsubishi-durango.mx",
        "direccion": "Blvd. Domingo Arrieta 1100 Col, Jalisco, 34170 Durango, Dgo.",
        "estado": "Durango",
        "lat": 24.0035783,
        "lng": -104.6619933
    },
    {
        "id": "d23",
        "nombre": "MITSUBISHI FLETEROS",
        "telefono": "528111584400",
        "web": "https://mitsubishi-fleteros.mx",
        "direccion": "Gral. Pablo A Gonzalez 124, San Jerónimo, 64640 Monterrey, N.L.",
        "estado": "Nuevo León",
        "lat": 25.6798251,
        "lng": -100.3535829
    },
    {
        "id": "d24",
        "nombre": "MITSUBISHI GONZALEZ GALLO",
        "telefono": "523324512800",
        "web": "https://mitsubishi-gonzalezgallo.mx",
        "direccion": "Calz. Jesús González Gallo 534, La Aurora, 44790 Guadalajara, Jal.",
        "estado": "Jalisco",
        "lat": 20.6540703,
        "lng": -103.3403645
    },
    {
        "id": "d25",
        "nombre": "MITSUBISHI HERMOSILLO CENTRO",
        "telefono": "526622135520",
        "web": "https://mitsubishi-hermosillocentro.mx",
        "direccion": "Blvr. Abelardo L. Rodríguez 110 Col, Centro, 06700 Hermosillo, Son.",
        "estado": "Sonora",
        "lat": 29.0907561,
        "lng": -110.9562331
    },
    {
        "id": "d26",
        "nombre": "MITSUBISHI INSURGENTES",
        "telefono": "525591839002",
        "web": "https://mitsubishi-insurgentes.mx",
        "direccion": "Av. Insurgentes Sur 1247, Extremadura Insurgentes, Benito Juárez, 03740 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.3755459,
        "lng": -99.1785957
    },
    {
        "id": "d27",
        "nombre": "MITSUBISHI INTERLOMAS",
        "telefono": "525530003430",
        "web": "https://mitsubishi-interlomas.mx",
        "direccion": "P.º de la Herradura 422, Interlomas, Parques de la Herradura, 52760 Naucalpan de Juárez, Méx.",
        "estado": "Estado de México",
        "lat": 19.4027652,
        "lng": -99.2681718
    },
    {
        "id": "d28",
        "nombre": "MITSUBISHI JUAREZ",
        "telefono": "526564786000",
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
        "telefono": "528717294900",
        "web": "https://mitsubishi-laguna.mx",
        "direccion": "Av. Juarez 3701 Col, Nuevo Torreón, 27060 Torreón, Coah.",
        "estado": "Coahuila",
        "lat": 25.5383475,
        "lng": -103.4087059
    },
    {
        "id": "d31",
        "nombre": "MITSUBISHI LEÓN",
        "telefono": "524777717800",
        "web": "https://mitsubishi-leon.mx",
        "direccion": "Blvd. Adolfo López Mateos 2710 Col, Industrial Julian de Obregon, 37290 León de los Aldama, Gto.",
        "estado": "Guanajuato",
        "lat": 21.0966622,
        "lng": -101.6290706
    },
    {
        "id": "d32",
        "nombre": "MITSUBISHI LINDA VISTA",
        "telefono": "528140024300",
        "web": "https://mitsubishi-lindavista.mx",
        "direccion": "Av. Constituyentes de Nuevo León 114, Col. Alamos Corregidora, 64590 Monterrey, N.L.",
        "estado": "Nuevo León",
        "lat": 25.6855713,
        "lng": -100.2621916
    },
    {
        "id": "d33",
        "nombre": "MITSUBISHI LÓPEZ MATEOS",
        "telefono": "523337704444",
        "web": "https://mitsubishi-lopezmateos.mx",
        "direccion": "Av. Adolfo López Mateos Sur 4221 Col, Loma Bonita, 45086 Zapopan, Jal.",
        "estado": "Jalisco",
        "lat": 20.6407104,
        "lng": -103.4094368
    },
    {
        "id": "d34",
        "nombre": "MITSUBISHI LOS FUERTES",
        "telefono": "522222230232",
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
        "telefono": "526699899090",
        "web": "https://mitsubishi-mazatlan.mx",
        "direccion": "Dr. Jesús Kumate 209 Col, Hacienda las Cruces, 82110 Mazatlán, Sin.",
        "estado": "Sinaloa",
        "lat": 23.2415146,
        "lng": -106.441345
    },
    {
        "id": "d37",
        "nombre": "MITSUBISHI MERIDA",
        "telefono": "529999449797",
        "web": "https://mitsubishi-merida.mx",
        "direccion": "Calle 6, Prol. Paseo Montejo 318 Col, Gonzalo Guerrero, 97118 Mérida, Yuc.",
        "estado": "Mérida",
        "lat": 21.0233978,
        "lng": -89.6224518
    },
    {
        "id": "d38",
        "nombre": "MITSUBISHI MEXICALI",
        "telefono": "526865615757",
        "web": "https://mitsubishi-mexicali.mx",
        "direccion": "Blvd. Lázaro Cárdenas 1598 Col, Ex-Ejido Zacatecas, 21090 Mexicali, B.C.",
        "estado": "Baja California",
        "lat": 32.6243493,
        "lng": -115.4566667
    },
    {
        "id": "d39",
        "nombre": "MITSUBISHI MONCLOVA",
        "telefono": "528666416847",
        "web": "https://mitsubishi-monclova.mx",
        "direccion": "Blvd Harold R. Pape 310 Col, Santa Isabel, 25732 Monclova, Coah.",
        "estado": "Coahuila",
        "lat": 26.9441053,
        "lng": -101.4131666
    },
    {
        "id": "d40",
        "nombre": "MITSUBISHI MORELIA",
        "telefono": "524431284338",
        "web": "https://mitsubishi-morelia.mx",
        "direccion": "Av Acueducto 2547, Col. Chapultepec Ote, 58260 Morelia, Mich.",
        "estado": "Michoacán",
        "lat": 19.6959156,
        "lng": -101.1610928
    },
    {
        "id": "d41",
        "nombre": "MITSUBISHI MORELOS",
        "telefono": "527779801300",
        "web": "https://mitsubishi-morelos.mx",
        "direccion": "José María Morelos 65 Col, Chipitlan, 62070 Cuernavaca, Mor.",
        "estado": "Morelos",
        "lat": 18.8934458,
        "lng": -99.2285599
    },
    {
        "id": "d42",
        "nombre": "MITSUBISHI OAXACA",
        "telefono": "529515016070",
        "web": "https://mitsubishi-oaxaca.mx",
        "direccion": "AV UNIVERSIDAD 553-A COL, Avenida Universidad 553-A, Exhacienda Candiani, 68120 Oaxaca de Juárez, Oax.",
        "estado": "Oaxaca",
        "lat": 17.0399427,
        "lng": -96.7111739
    },
    {
        "id": "d43",
        "nombre": "MITSUBISHI PACHUCA",
        "telefono": "527714541921",
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
        "telefono": "527821188080",
        "web": "https://mitsubishi-pozarica.mx",
        "direccion": "Av 20 de Noviembre 206 Col, Cazones, 93230 Poza Rica de Hidalgo, Ver.",
        "estado": "Veracruz",
        "lat": 20.5421321,
        "lng": -97.4511866
    },
    {
        "id": "d46",
        "nombre": "MITSUBISHI PUERTO VALLARTA",
        "telefono": "523223080777",
        "web": "https://mitsubishi-puertovallarta.mx",
        "direccion": "Boulevard Vallarta Tepic 5162A, Col. Las Juntas, Puerto Vallarta, Jalisco.",
        "estado": "Jalisco",
        "lat": 20.6671594,
        "lng": -105.2474564
    },
    {
        "id": "d47",
        "nombre": "MITSUBISHI REYNOSA",
        "telefono": "528992931300",
        "web": "https://mitsubishi-reynosa.mx",
        "direccion": "Blvd. Hidalgo 285 Col, Fuentes del Valle, 88746 Reynosa, Tamps.",
        "estado": "Tamaulipas",
        "lat": 26.0673665,
        "lng": -98.3371649
    },
    {
        "id": "d48",
        "nombre": "MITSUBISHI SALTILLO",
        "telefono": "528447979000",
        "web": "https://mitsubishi-saltillo.mx",
        "direccion": "Blvd. Venustiano Carranza 5586 Col, La Hacienda, 25256 Saltillo, Coah.",
        "estado": "Coahuila",
        "lat": 25.4731904,
        "lng": -100.9764998
    },
    {
        "id": "d49",
        "nombre": "MITSUBISHI SAN ÁNGEL",
        "telefono": "525553373000",
        "web": "https://mitsubishi-sanangel.mx",
        "direccion": "Av. Revolución 1321, Col. Tlacopac, Àlvaro Obregòn, Álvaro Obregón, 01049 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.358823,
        "lng": -99.189959
    },
    {
        "id": "d50",
        "nombre": "MITSUBISHI SAN LUIS POTOSÍ",
        "telefono": "524448635301",
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
        "telefono": "525553667833",
        "web": "https://mitsubishi-satelite.mx",
        "direccion": "Perif. Blvd. Manuel Ávila Camacho 2304 Col, San Lucas Tepetlacalco, 53240 Tlalnepantla, Méx.",
        "estado": "Estado de México",
        "lat": 19.5235222,
        "lng": -99.2292417
    },
    {
        "id": "d53",
        "nombre": "MITSUBISHI SENDERO",
        "telefono": "528141050000",
        "web": "https://mitsubishi-sendero.mx",
        "direccion": "Avenida Universidad 1003, Centro, 66400 San Nicolás de los Garza, N.L.",
        "estado": "Nuevo León",
        "lat": 25.7574614,
        "lng": -100.2966105
    },
    {
        "id": "d54",
        "nombre": "MITSUBISHI TABASCO",
        "telefono": "529933136666",
        "web": "https://mitsubishi-tabasco.mx",
        "direccion": "Ave Juan Estrada Torres s/n esq. Ciudad deportiva, Primero de Mayo, 86190 Villahermosa, Tab.",
        "estado": "Tabasco",
        "lat": 17.9767553,
        "lng": -92.9391475
    },
    {
        "id": "d55",
        "nombre": "MITSUBISHI TAMPICO",
        "telefono": "528331151600",
        "web": "https://mitsubishi-tampico.mx",
        "direccion": "Av. Miguel Hidalgo. 6303 Nvo. Aeropuerto, Lomas del Chairel, 89337 Tampico, Tamps.",
        "estado": "Tamaulipas",
        "lat": 22.277467,
        "lng": -97.8730488
    },
    {
        "id": "d56",
        "nombre": "MITSUBISHI TEHUACÁN",
        "telefono": "522383825199",
        "web": "https://mitsubishi-tehuacan.mx",
        "direccion": "Av Independencia Pte 1409-B, Arcadia, 75760 Tehuacán, Pue.",
        "estado": "Puebla",
        "lat": 18.4630827,
        "lng": -97.4058007
    },
    {
        "id": "d57",
        "nombre": "MITSUBISHI TEPIC",
        "telefono": "523112172202",
        "web": "https://mitsubishi-tepic.mx",
        "direccion": "Av Insurgentes 1997, Los Llanitos, 63170 Tepic, Nay.",
        "estado": "Nayarit",
        "lat": 21.4910761,
        "lng": -104.8787547
    },
    {
        "id": "d58",
        "nombre": "MITSUBISHI TIJUANA",
        "telefono": "526649691979",
        "web": "https://mitsubishi-tijuana.mx",
        "direccion": "Av. Vía Rápida Pte. 15471, La Cienega Poniente, 22114 Tijuana, B.C.",
        "estado": "Tijuana",
        "lat": 32.4951855,
        "lng": -116.9432667
    },
    {
        "id": "d59",
        "nombre": "MITSUBISHI TLAHUAC",
        "telefono": "525554266301",
        "web": "https://mitsubishi-tlahuac.mx",
        "direccion": "Av. Tlahuac 4799, El Vergel, Iztapalapa, 09880 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.3189859,
        "lng": -99.0794749
    },
    {
        "id": "d60",
        "nombre": "MITSUBISHI TLAXCALA",
        "telefono": "522464613435",
        "web": "https://mitsubishi-tlaxcala.mx",
        "direccion": "Autopista Tlaxcala - Apizaco, quinta sección, 90459 Santa María Atlihuetzian, Tlax.",
        "estado": "Tlaxcala",
        "lat": 19.3757692,
        "lng": -98.179451
    },
    {
        "id": "d61",
        "nombre": "MITSUBISHI TOLUCA",
        "telefono": "527221801888",
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
        "telefono": "525595506568",
        "web": "https://mitsubishi-vallejo.mx",
        "direccion": "Calz. Vallejo 1059, Nueva Vallejo II Secc, Gustavo A. Madero, 07720 Ciudad de México, CDMX",
        "estado": "Ciudad de México",
        "lat": 19.498831,
        "lng": -99.1552893
    },
    {
        "id": "d64",
        "nombre": "MITSUBISHI XALAPA",
        "telefono": "522281730244",
        "web": "https://mitsubishi-xalapa.mx",
        "direccion": "C. Lázaro Cárdenas 4107 Col, Sipeh Animas, 91190 Xalapa-Enríquez, Ver.",
        "estado": "Veracruz",
        "lat": 19.5243698,
        "lng": -96.8961656
    },
    {
        "id": "d65",
        "nombre": "MITSUBISHI ZACATECAS",
        "telefono": "524923072040",
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

const VACANTES_INICIALES = [
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

// --- 2. INICIALIZACIÓN DEL SITIO ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar bases de datos locales si no existen o tienen datos viejos
    const storedDists = localStorage.getItem('amdim_distribuidores');
    const parsedDists = storedDists ? JSON.parse(storedDists) : null;
    const hasEstadoField = parsedDists && parsedDists[0] && parsedDists[0].hasOwnProperty('estado');
    if (!storedDists || parsedDists.length < 71 || !hasEstadoField) {
        localStorage.setItem('amdim_distribuidores', JSON.stringify(DISTRIBUIDORES_INICIALES));
    }
    
    const storedVacancies = localStorage.getItem('amdim_vacantes');
    const parsedVacancies = storedVacancies ? JSON.parse(storedVacancies) : null;
    const hasJobEstadoField = parsedVacancies && parsedVacancies[0] && parsedVacancies[0].hasOwnProperty('estado');
    if (!storedVacancies || !hasJobEstadoField) {
        localStorage.setItem('amdim_vacantes', JSON.stringify(VACANTES_INICIALES));
    }

    initNavigation();
    initHeaderScroll();
    initMobileMenu();
    initDistribuidores();
    initBolsaTrabajo();
    initContacto();
    initLinkedInFeed();
    initLegales();
    initModelosFilter();
    initBlog();
});

// --- 3. NAVEGACIÓN Y COMPORTAMIENTO GENERAL ---

/**
 * Controla la barra de navegación del sitio (SPA)
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .bottom-nav-link');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeSection = document.getElementById(targetId);
        if (activeSection) {
            activeSection.style.display = 'flex'; // Usar flex para mantener layout de la sección
            
            // Auto-play del Hero Video si se activa la sección de inicio
            if (targetId === 'inicio') {
                const video = activeSection.querySelector('#hero-video');
                if (video) {
                    video.play().catch(() => console.log('El auto-play requiere interacción previa.'));
                }
            }

            // Invalidate size del mapa Leaflet al ir a Distribuidores
            if (targetId === 'distribuidores') {
                setTimeout(() => {
                    if (window.distribuidorLeafletMap) {
                        window.distribuidorLeafletMap.invalidateSize();
                    }
                }, 150);
            }

            // Recargar vacantes públicas al entrar a Bolsa de Trabajo
            if (targetId === 'bolsa-trabajo') {
                initBolsaTrabajo();
            }

            // Asegurar que el feed de LinkedIn se visualice en cuadrícula y cargue sus tarjetas
            if (targetId === 'noticias') {
                const feedContainer = document.getElementById('linkedin-feed-placeholder');
                if (feedContainer) {
                    feedContainer.style.display = 'grid';
                }
                initLinkedInFeed();
            }
            
            // Hacer scroll hacia arriba suave
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const activeLinks = document.querySelectorAll(`.nav-link[href="#${targetId}"], .bottom-nav-link[href="#${targetId}"]`);
        activeLinks.forEach(link => link.classList.add('active'));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            window.location.hash = targetId;

            // Cerrar menú móvil al hacer click
            const mainNav = document.getElementById('main-nav');
            const menuToggles = document.querySelectorAll('.menu-toggle');
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                menuToggles.forEach(t => t.classList.remove('open'));
            }
        });
    });

    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showSection(hash);
        } else {
            showSection('inicio');
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Ejecución inicial
}

/**
 * Añade sombra y reduce altura del Header al hacer scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Controla el menú responsivo móvil
 */
function initMobileMenu() {
    const menuToggles = document.querySelectorAll('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Crear el overlay dinámicamente si no existe
    let overlay = document.getElementById('nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    if (menuToggles.length > 0 && mainNav) {
        menuToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const isOpen = toggle.classList.toggle('open');
                // Sincronizar el estado en todos los toggles
                menuToggles.forEach(t => {
                    if (isOpen) t.classList.add('open');
                    else t.classList.remove('open');
                });
                mainNav.classList.toggle('open');
                overlay.classList.toggle('open');
            });
        });

        // Cerrar al dar click en el overlay (blur trasero)
        overlay.addEventListener('click', () => {
            menuToggles.forEach(t => t.classList.remove('open'));
            mainNav.classList.remove('open');
            overlay.classList.remove('open');
        });

        // Cerrar el menú al hacer click en cualquier enlace de navegación
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggles.forEach(t => t.classList.remove('open'));
                mainNav.classList.remove('open');
                overlay.classList.remove('open');
            });
        });
    }
}

function initDistribuidores() {
    const searchInput = document.getElementById('distribuidor-search');
    const stateSelect = document.getElementById('distribuidor-state-select');
    const searchStats = document.getElementById('search-stats');
    const directoryList = document.getElementById('directory-list');
    const btnUseLocation = document.getElementById('btn-use-location');
    const mapContainer = document.getElementById('distribuidores-map');

    let selectedDistId = null;
    let leafletMap = null;
    let leafletMarkers = {};
    let mexicoStatesGeoJSONData = null;
    let stateLayersGroup = null;
    let stateLayersByName = {};

    // Normaliza el nombre de un estado para poder comparar aunque haya
    // variaciones de acentos/mayúsculas entre el listado de distribuidores y el GeoJSON
    function cleanStateName(name) {
        return cleanText(name || '');
    }

    const STATE_POLYGON_DEFAULT_STYLE = {
        color: '#E2001A',
        weight: 0,
        opacity: 0,
        fillOpacity: 0,
        interactive: false
    };

    const STATE_POLYGON_ACTIVE_STYLE = {
        color: '#E2001A',
        weight: 3,
        opacity: 1,
        fillColor: '#E2001A',
        fillOpacity: 0.08,
        interactive: false
    };

    // Dibuja (una sola vez) los polígonos de los 32 Estados de forma invisible,
    // listos para resaltarse con borde rojo cuando el usuario selecciona un Estado
    function initStatePolygons() {
        if (!leafletMap || stateLayersGroup) return;
        mexicoStatesGeoJSONData = window.MEXICO_STATES_GEOJSON || null;
        if (!mexicoStatesGeoJSONData) return;

        stateLayersGroup = L.geoJSON(mexicoStatesGeoJSONData, {
            style: () => ({ ...STATE_POLYGON_DEFAULT_STYLE }),
            onEachFeature: (feature, layer) => {
                const name = feature.properties && feature.properties.name;
                if (name) {
                    stateLayersByName[cleanStateName(name)] = layer;
                }
            }
        }).addTo(leafletMap);
    }

    // Resalta con borde rojo el Estado seleccionado y hace zoom (fitBounds) a su contorno.
    // Si stateName es vacío, restaura todos los polígonos a invisibles.
    function highlightState(stateName) {
        if (!stateLayersGroup) return false;

        Object.values(stateLayersByName).forEach(layer => {
            layer.setStyle(STATE_POLYGON_DEFAULT_STYLE);
        });

        if (!stateName) return false;

        const layer = stateLayersByName[cleanStateName(stateName)];
        if (!layer) return false;

        layer.setStyle(STATE_POLYGON_ACTIVE_STYLE);
        layer.bringToFront();

        if (leafletMap) {
            leafletMap.flyToBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 8, animate: true, duration: 1.2 });
        }
        return true;
    }

    function getDistribuidores() {
        return JSON.parse(localStorage.getItem('amdim_distribuidores')) || [];
    }

    // Normalizar texto para búsqueda inteligente (quita acentos)
    function cleanText(text) {
        return text.toString().toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Extraer C.P. numérico de un texto de dirección
    function extractCP(dir) {
        const match = dir.match(/\b\d{5}\b/);
        return match ? parseInt(match[0], 10) : null;
    }

    // Coordenadas aproximadas por rango de C.P. en la República Mexicana
    function getCoordinatesFromCP(cpNum) {
        if (cpNum >= 1000 && cpNum <= 19999) return { lat: 19.4326, lng: -99.1332 }; // CDMX / EdoMex
        if (cpNum >= 20000 && cpNum <= 20999) return { lat: 21.8853, lng: -102.2916 }; // Aguascalientes
        if (cpNum >= 21000 && cpNum <= 22999) return { lat: 32.6245, lng: -115.4523 }; // Baja California
        if (cpNum >= 23000 && cpNum <= 23999) return { lat: 24.1426, lng: -110.3128 }; // Baja California Sur
        if (cpNum >= 24000 && cpNum <= 24999) return { lat: 19.8301, lng: -90.5349 }; // Campeche
        if (cpNum >= 25000 && cpNum <= 27999) return { lat: 25.4267, lng: -101.0014 }; // Coahuila
        if (cpNum >= 28000 && cpNum <= 28999) return { lat: 19.2452, lng: -103.7241 }; // Colima
        if (cpNum >= 29000 && cpNum <= 30999) return { lat: 16.7569, lng: -93.1292 }; // Chiapas
        if (cpNum >= 31000 && cpNum <= 33999) return { lat: 28.6330, lng: -106.0691 }; // Chihuahua
        if (cpNum >= 34000 && cpNum <= 35999) return { lat: 24.0277, lng: -104.6532 }; // Durango
        if (cpNum >= 36000 && cpNum <= 38999) return { lat: 21.0190, lng: -101.2574 }; // Guanajuato
        if (cpNum >= 39000 && cpNum <= 41999) return { lat: 17.5515, lng: -99.5005 }; // Guerrero
        if (cpNum >= 42000 && cpNum <= 43999) return { lat: 20.1011, lng: -98.7591 }; // Hidalgo
        if (cpNum >= 44000 && cpNum <= 49999) return { lat: 20.6597, lng: -103.3496 }; // Jalisco
        if (cpNum >= 50000 && cpNum <= 57999) return { lat: 19.2879, lng: -99.6532 }; // Estado de México
        if (cpNum >= 58000 && cpNum <= 61999) return { lat: 19.7060, lng: -101.1950 }; // Michoacán
        if (cpNum >= 62000 && cpNum <= 62999) return { lat: 18.9261, lng: -99.2308 }; // Morelos
        if (cpNum >= 63000 && cpNum <= 63999) return { lat: 21.5042, lng: -104.8947 }; // Nayarit
        if (cpNum >= 64000 && cpNum <= 67999) return { lat: 25.6866, lng: -100.3161 }; // Nuevo León
        if (cpNum >= 68000 && cpNum <= 71999) return { lat: 17.0732, lng: -96.7266 }; // Oaxaca
        if (cpNum >= 72000 && cpNum <= 75999) return { lat: 19.0414, lng: -98.2063 }; // Puebla
        if (cpNum >= 76000 && cpNum <= 76999) return { lat: 20.5888, lng: -100.3899 }; // Querétaro
        if (cpNum >= 77000 && cpNum <= 77999) return { lat: 21.1619, lng: -86.8515 }; // Quintana Roo
        if (cpNum >= 78000 && cpNum <= 79999) return { lat: 22.1565, lng: -100.9855 }; // San Luis Potosí
        if (cpNum >= 80000 && cpNum <= 82999) return { lat: 24.8091, lng: -107.3940 }; // Sinaloa
        if (cpNum >= 83000 && cpNum <= 85999) return { lat: 29.0729, lng: -110.9559 }; // Sonora
        if (cpNum >= 86000 && cpNum <= 86999) return { lat: 17.9892, lng: -92.9281 }; // Tabasco
        if (cpNum >= 87000 && cpNum <= 89999) return { lat: 23.7369, lng: -99.1411 }; // Tamaulipas
        if (cpNum >= 90000 && cpNum <= 90999) return { lat: 19.3182, lng: -98.2375 }; // Tlaxcala
        if (cpNum >= 91000 && cpNum <= 96999) return { lat: 19.5438, lng: -96.9103 }; // Veracruz
        if (cpNum >= 97000 && cpNum <= 97999) return { lat: 20.9674, lng: -89.5926 }; // Yucatán
        if (cpNum >= 98000 && cpNum <= 99999) return { lat: 22.7709, lng: -102.5832 }; // Zacatecas
        return { lat: 19.4326, lng: -99.1332 };
    }

    function calcularDistancia(lat1, lon1, lat2, lon2) {
        const R = 6371; // km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    // Inicializar el selector de estados dinámicamente
    function initStateSelect() {
        if (!stateSelect) return;
        const list = getDistribuidores();
        const states = [...new Set(list.map(d => d.estado))].filter(Boolean).sort();
        
        stateSelect.innerHTML = '<option value="">Todos los Estados</option>';
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }

    // Inicializar el Mapa de la República Mexicana (Leaflet.js)
    function initRepublicaMap() {
        if (!mapContainer || typeof L === 'undefined') return;
        
        // Evitar duplicar la instancia del mapa
        if (leafletMap) return;

        mapContainer.innerHTML = '';
        
        // Mapa centrado en la República Mexicana
        leafletMap = L.map(mapContainer, {
            center: [23.6345, -102.5528],
            zoom: 5,
            zoomControl: true
        });

        // Guardar referencia global para invalidadesize en SPA
        window.distribuidorLeafletMap = leafletMap;

        // Capa Oscura Premium CartoDB Dark Matter para coincidir con la estética de AMDIM
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(leafletMap);

        // Polígonos invisibles de los 32 Estados, listos para resaltarse en rojo al seleccionar un Estado
        initStatePolygons();

        // Icono de Pin Rojo Mitsubishi personalizado
        const redIcon = L.divIcon({
            className: 'mitsubishi-leaflet-pin',
            html: `<div style="background-color: #E2001A; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #FFFFFF; box-shadow: 0 0 10px rgba(226,0,26,0.8);"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });

        const activeRedIcon = L.divIcon({
            className: 'mitsubishi-leaflet-pin-active',
            html: `<div style="background-color: #E2001A; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #FFFFFF; box-shadow: 0 0 15px rgba(226,0,26,1); animation: pulsePin 1.5s infinite;"></div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11]
        });

        const list = getDistribuidores();
        leafletMarkers = {};

        list.forEach(dist => {
            if (dist.lat && dist.lng) {
                const marker = L.marker([dist.lat, dist.lng], { icon: redIcon }).addTo(leafletMap);
                
                const popupContent = `
                    <div style="font-family: inherit; color: #111; padding: 4px;">
                        <strong style="color: #E2001A; font-size: 0.95rem; display: block; margin-bottom: 4px;">${dist.nombre}</strong>
                        <span style="font-size: 0.8rem; color: #444; display: block; margin-bottom: 8px;">${dist.direccion}</span>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dist.direccion)}" target="_blank" style="display: inline-block; background: #E2001A; color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; text-decoration: none; font-weight: 600;">Cómo llegar &rarr;</a>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
                
                marker.on('click', () => {
                    selectDistributor(dist);
                });

                leafletMarkers[dist.id] = { marker, redIcon, activeRedIcon };
            }
        });
    }

    function renderDistribuidores() {
        const list = getDistribuidores();
        const rawText = searchInput ? searchInput.value.trim() : "";
        const filterText = cleanText(rawText);
        const filterState = stateSelect ? stateSelect.value : "";

        directoryList.innerHTML = "";

        // Detectar si el usuario escribió un Código Postal (5 dígitos o números)
        const isCPSearch = /^\d{2,5}$/.test(rawText);
        let closestDistId = null;
        let closestDistance = Infinity;

        let displayList = [];

        if (isCPSearch) {
            const userCP = parseInt(rawText, 10);
            const userCoords = getCoordinatesFromCP(userCP);

            // Calcular distancia a todos los distribuidores
            displayList = list.map(dist => {
                const distCP = extractCP(dist.direccion);
                let km = Infinity;

                if (dist.lat && dist.lng && (dist.lat !== 19.4326 || dist.lng !== -99.1332)) {
                    km = calcularDistancia(userCoords.lat, userCoords.lng, dist.lat, dist.lng);
                } else if (distCP) {
                    km = Math.abs(distCP - userCP) * 0.1; // fallback por diferencia numérica de C.P.
                }

                return { ...dist, distanciaKm: km };
            });

            // Ordenar por distancia (el más cercano primero)
            displayList.sort((a, b) => a.distanciaKm - b.distanciaKm);

            if (displayList.length > 0) {
                closestDistId = displayList[0].id;
                closestDistance = displayList[0].distanciaKm;
            }

            if (searchStats) {
                const closestName = displayList[0] ? displayList[0].nombre : "";
                const distFormatted = closestDistance < Infinity ? ` (a ${closestDistance.toFixed(1)} km)` : '';
                searchStats.innerHTML = `<span style="color: var(--color-red); font-weight: 700;">📍 Distribuidor más cercano al C.P. ${rawText}:</span> <strong>${closestName}</strong>${distFormatted}. Se muestra el listado nacional ordenado por cercanía.`;
            }
        } else {
            // Búsqueda normal por Texto (Nombre, Ciudad, Dirección, Estado)
            displayList = list.filter(dist => {
                const matchState = !filterState || dist.estado === filterState;
                
                const cleanName = cleanText(dist.nombre);
                const cleanDir = cleanText(dist.direccion);
                const cleanState = cleanText(dist.estado);
                
                const matchSearch = !filterText || 
                                    cleanName.includes(filterText) || 
                                    cleanDir.includes(filterText) ||
                                    cleanState.includes(filterText) ||
                                    dist.telefono.includes(filterText);
                                    
                return matchState && matchSearch;
            });

            if (searchStats) {
                if (displayList.length === 1) {
                    searchStats.textContent = "1 distribuidor encontrado";
                } else {
                    searchStats.textContent = `${displayList.length} distribuidores encontrados ${filterState ? `en ${filterState}` : ''}`;
                }
            }
        }

        if (displayList.length === 0) {
            directoryList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No se encontraron distribuidores.</p>`;
            actualizarMapa(null);
            return;
        }

        // Lógica de selección de mapa según tipo de filtro
        if (isCPSearch && displayList.length > 0) {
            // Búsqueda por C.P.: enfocar la sucursal más cercana
            selectedDistId = displayList[0].id;
        } else {
            // Filtro por Estado o vista general: no pre-seleccionar ninguna sucursal específica
            selectedDistId = null;
        }

        displayList.forEach((dist, index) => {
            const card = document.createElement('div');
            const isActive = selectedDistId && dist.id === selectedDistId;
            const isClosestCard = isCPSearch && index === 0;

            card.className = `distributor-card glass-card ${isActive ? 'active' : ''} ${isClosestCard ? 'closest-cp-card' : ''}`;
            card.dataset.id = dist.id;

            const closestBadge = isClosestCard ? `
                <div style="background: rgba(226, 0, 26, 0.2); border: 1px solid var(--color-red); color: var(--color-white); font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; display: inline-flex; align-items: center; gap: 5px; margin-bottom: 10px;">
                    <span class="material-symbols-outlined" style="font-size: 0.9rem; color: var(--color-red);">my_location</span>
                    MÁS CERCANO A TU C.P. ${rawText} ${dist.distanciaKm < Infinity ? `(${dist.distanciaKm.toFixed(1)} km)` : ''}
                </div>
            ` : '';
            
            card.innerHTML = `
                <div class="distributor-card-img">
                    <img src="assets/images/facades/real_facade.png" alt="${dist.nombre}" loading="lazy">
                </div>
                <div class="distributor-card-info">
                    ${closestBadge}
                    <div class="distributor-card-header">
                        <h4>${dist.nombre}</h4>
                        <span class="distributor-card-state-badge">${dist.estado}</span>
                    </div>
                    <div class="distributor-card-body">
                        <p style="display: flex; align-items: center; gap: 8px;">
                            <span class="material-symbols-outlined" style="font-size: 0.95rem; color: var(--color-red);">call</span>
                            <strong>Teléfono:</strong> 
                            <a href="tel:${dist.telefono.replace(/\s+/g, '')}" style="color: var(--color-text-secondary); text-decoration: none;" onclick="event.stopPropagation();">${dist.telefono}</a>
                        </p>
                        <p style="display: flex; align-items: flex-start; gap: 8px;">
                            <span class="material-symbols-outlined" style="font-size: 0.95rem; color: var(--color-red); margin-top: 2px;">location_on</span>
                            <span>${dist.direccion}</span>
                        </p>
                    </div>
                    <div class="distributor-card-actions">
                        <a href="${dist.web}" target="_blank" onclick="event.stopPropagation();">
                            <span class="material-symbols-outlined" style="font-size: 0.85rem;">language</span> Visitar Sitio
                        </a>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dist.direccion)}" target="_blank" onclick="event.stopPropagation();">
                            <span class="material-symbols-outlined" style="font-size: 0.85rem;">navigation</span> Cómo llegar
                        </a>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                selectDistributor(dist);
            });

            directoryList.appendChild(card);
        });

        // Actualizar vista del mapa Leaflet limpia
        if (selectedDistId) {
            highlightState(null);
            const activeDist = displayList.find(d => d.id === selectedDistId);
            if (activeDist) {
                actualizarMapa(activeDist);
            }
        } else if (filterState && displayList.length > 0 && leafletMap) {
            // Filtro por Estado: resaltar en rojo el contorno del Estado y hacer zoom a su borde
            const matchedPolygon = highlightState(filterState);

            Object.keys(leafletMarkers).forEach(id => {
                const item = leafletMarkers[id];
                item.marker.setIcon(item.redIcon);
                item.marker.closePopup();
            });

            if (!matchedPolygon) {
                // Estado sin polígono definido en el GeoJSON: encuadrar por las sucursales encontradas
                const bounds = L.latLngBounds();
                let hasCoords = false;
                displayList.forEach(dist => {
                    if (dist.lat && dist.lng) {
                        bounds.extend([dist.lat, dist.lng]);
                        hasCoords = true;
                    }
                });

                if (hasCoords) {
                    leafletMap.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
                }
            }
        } else {
            // Vista general panorámica de todo México sin selección activa
            highlightState(null);
            if (leafletMap) {
                leafletMap.setView([23.6345, -102.5528], 5);
                Object.keys(leafletMarkers).forEach(id => {
                    const item = leafletMarkers[id];
                    item.marker.setIcon(item.redIcon);
                    item.marker.closePopup();
                });
            }
        }
    }

    function selectDistributor(dist) {
        selectedDistId = dist.id;
        
        // Quitar clase active a todas las tarjetas y ponérsela a la seleccionada
        const cards = directoryList.querySelectorAll('.distributor-card');
        cards.forEach(card => {
            if (card.dataset.id === dist.id) {
                card.classList.add('active');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                card.classList.remove('active');
            }
        });

        actualizarMapa(dist);
    }

    function actualizarMapa(dist) {
        if (!mapContainer) return;

        // Si Leaflet está disponible, centrar la cámara del Mapa de la República
        if (leafletMap && dist && dist.lat && dist.lng) {
            leafletMap.flyTo([dist.lat, dist.lng], 12, { animate: true, duration: 1.2 });

            // Restaurar íconos anteriores y activar el seleccionado
            Object.keys(leafletMarkers).forEach(id => {
                const item = leafletMarkers[id];
                if (id === dist.id) {
                    item.marker.setIcon(item.activeRedIcon);
                    item.marker.openPopup();
                } else {
                    item.marker.setIcon(item.redIcon);
                }
            });
            return;
        }

        // Fallback a iframe de Google Maps si Leaflet no ha cargado
        if (dist) {
            const query = (dist.lat === 19.4326 && dist.lng === -99.1332) 
                ? encodeURIComponent(dist.nombre + ", " + dist.direccion) 
                : `${dist.lat},${dist.lng}`;
                
            mapContainer.innerHTML = `
                <iframe 
                    src="https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    allowfullscreen="" 
                    loading="lazy"
                    style="border:0;">
                </iframe>
            `;
        }
    }

    // Buscador interactivo por CP o Texto
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderDistribuidores();
        });
    }

    // Filtro por Estado
    if (stateSelect) {
        stateSelect.addEventListener('change', () => {
            renderDistribuidores();
        });
    }

    // Geolocalización real por GPS
    if (btnUseLocation) {
        btnUseLocation.addEventListener('click', () => {
            showToast("Solicitando tu ubicación actual...");
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLat = position.coords.latitude;
                        const userLng = position.coords.longitude;
                        
                        showToast("Buscando distribuidor más cercano...");
                        
                        setTimeout(() => {
                            const list = getDistribuidores();
                            let closestDist = null;
                            let minDistance = Infinity;
                            
                            list.forEach(dist => {
                                if (dist.lat && dist.lng) {
                                    const d = calcularDistancia(userLat, userLng, dist.lat, dist.lng);
                                    if (d < minDistance) {
                                        minDistance = d;
                                        closestDist = dist;
                                    }
                                }
                            });
                            
                            if (!closestDist && list.length > 0) closestDist = list[0];
                            
                            if (closestDist) {
                                selectedDistId = closestDist.id;
                                if (stateSelect) stateSelect.value = "";
                                if (searchInput) searchInput.value = "";
                                
                                renderDistribuidores();
                                selectDistributor(closestDist);
                                showToast(`Distribuidor más cercano: ${closestDist.nombre} (a ${minDistance.toFixed(1)} km)`);
                            }
                        }, 500);
                    },
                    (error) => {
                        console.warn("Geolocalización no disponible: ", error);
                        showToast("Ubicación denegada. Ingresa tu Código Postal en la barra de búsqueda.");
                    }
                );
            }
        });
    }

    const btnResetMap = document.getElementById('btn-reset-map');

    function resetToInitialState() {
        selectedDistId = null;
        if (searchInput) searchInput.value = "";
        if (stateSelect) stateSelect.value = "";
        renderDistribuidores();
        if (leafletMap) {
            leafletMap.flyTo([23.6345, -102.5528], 5, { animate: true, duration: 1.2 });
            Object.keys(leafletMarkers).forEach(id => {
                const item = leafletMarkers[id];
                item.marker.setIcon(item.redIcon);
                item.marker.closePopup();
            });
        }
        showToast("Vista panorámica de la República Mexicana restaurada.");
    }

    if (btnResetMap) {
        btnResetMap.addEventListener('click', resetToInitialState);
    }

    // Inicializar mapa de la República y lista
    initStateSelect();
    initRepublicaMap();
    renderDistribuidores();
}

function initBolsaTrabajo() {
    const vacantesList = document.getElementById('vacantes-list');
    const jobStateSelect = document.getElementById('job-state-select');
    
    const applyModal = document.getElementById('apply-job-modal');
    const formAplicar = document.getElementById('form-aplicar-vacante');
    const btnCloseApply = document.getElementById('btn-close-apply-modal');
    const btnCloseApplyIcon = document.getElementById('btn-close-apply-modal-icon');
    const applyJobTitle = document.getElementById('apply-job-title');
    const applyJobDesc = document.getElementById('apply-job-desc');
    const applyJobId = document.getElementById('apply-job-id');

    // --- CV Dropzone ---
    (function initCvDropzone() {
        const zone    = document.getElementById('cv-dropzone');
        const input   = document.getElementById('apply-cv');
        const preview = document.getElementById('cv-preview');
        const fname   = document.getElementById('cv-filename');
        const removeBtn = document.getElementById('cv-remove');
        if (!zone || !input) return;

        function showFile(file) {
            fname.textContent = file.name;
            preview.style.display = 'flex';
            zone.classList.add('has-file');
            // hide the prompt elements
            zone.querySelector('.cv-dropzone__icon').style.display = 'none';
            zone.querySelector('.cv-dropzone__text').style.display = 'none';
            zone.querySelector('.cv-dropzone__hint').style.display = 'none';
        }

        function clearFile() {
            input.value = '';
            preview.style.display = 'none';
            fname.textContent = '';
            zone.classList.remove('has-file');
            zone.querySelector('.cv-dropzone__icon').style.display = '';
            zone.querySelector('.cv-dropzone__text').style.display = '';
            zone.querySelector('.cv-dropzone__hint').style.display = '';
        }

        // Click on zone → open picker (but not if already has file)
        zone.addEventListener('click', (e) => {
            if (zone.classList.contains('has-file')) return;
            input.click();
        });

        // Click on "selecciona un archivo" link
        const link = zone.querySelector('.cv-dropzone__link');
        if (link) link.addEventListener('click', (e) => { e.stopPropagation(); input.click(); });

        // Native input change
        input.addEventListener('change', () => {
            if (input.files.length) showFile(input.files[0]);
        });

        // Remove button
        removeBtn.addEventListener('click', (e) => { e.stopPropagation(); clearFile(); });

        // Drag & Drop
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (!file) return;
            const allowed = ['.pdf', '.doc', '.docx'];
            const ext = '.' + file.name.split('.').pop().toLowerCase();
            if (!allowed.includes(ext)) {
                alert('Solo se permiten archivos PDF, DOC o DOCX.');
                return;
            }
            // Assign to input via DataTransfer
            const dt = new DataTransfer();
            dt.items.add(file);
            input.files = dt.files;
            showFile(file);
        });
    })();

    function getVacantes() {
        const stored = localStorage.getItem('amdim_vacantes');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            } catch (e) {}
        }

        // Vacantes iniciales predeterminadas en los distribuidores autorizados de México
        const initialJobs = [
            {
                id: "vac-001",
                titulo: "Asesor de Ventas Digitales & Vehículos Nuevos",
                distribuidor: "Mitsubishi Guadalajara",
                estado: "Jalisco",
                descripcion: "Buscamos profesional en ventas automotrices con experiencia en atención digital, CRM y prospección para integrarse al equipo comercial de la gama SUVs y Pick-Ups."
            },
            {
                id: "vac-002",
                titulo: "Técnico Especializado en Diagnóstico PHEV",
                distribuidor: "Mitsubishi Interlomas",
                estado: "Estado de México",
                descripcion: "Técnico certificado en sistemas eléctricos e híbridos enchufables (Outlander PHEV). Experiencia en uso de escáner MUT-III y mantenimiento especializado."
            },
            {
                id: "vac-003",
                titulo: "Gerente de Posventa y Servicio Técnico",
                distribuidor: "Mitsubishi Monterrey Norte",
                estado: "Nuevo León",
                descripcion: "Liderar las operaciones del taller de servicio y refacciones, manteniendo los estándares de calidad de la marca y satisfacción del cliente."
            },
            {
                id: "vac-004",
                titulo: "Asesor de Servicio y Atención a Clientes",
                distribuidor: "Mitsubishi Polanco",
                estado: "Ciudad de México",
                descripcion: "Recepción de unidades, diagnóstico primario, cotización de mantenimientos y seguimiento continuo con los propietarios."
            },
            {
                id: "vac-005",
                titulo: "Especialista en Financiamiento Automotriz",
                distribuidor: "Mitsubishi Puebla Angelópolis",
                estado: "Puebla",
                descripcion: "Gestión de solicitudes de crédito automotriz, trámite de pólizas de seguro y vinculación con instituciones financieras asociadas."
            },
            {
                id: "vac-006",
                titulo: "Técnico en Mantenimiento de Pick-Ups L200",
                distribuidor: "Mitsubishi Mérida",
                estado: "Yucatán",
                descripcion: "Técnico mecánico con experiencia en chasis, tracción 4WD y motores diésel/gasolina para flotillas y Pick-Ups."
            }
        ];

        localStorage.setItem('amdim_vacantes', JSON.stringify(initialJobs));
        return initialJobs;
    }

    // Populate job state select dropdown dynamically
    function populateJobStateSelect() {
        if (!jobStateSelect) return;
        const list = getVacantes();
        const states = [...new Set(list.map(job => job.estado).filter(Boolean))].sort();
        
        jobStateSelect.innerHTML = '<option value="">Todos los Estados</option>';
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            jobStateSelect.appendChild(option);
        });
    }

    // Render de Vacantes Públicas (Vista Candidato)
    function renderVacantesPublicas() {
        const list = getVacantes();
        vacantesList.innerHTML = "";

        const selectedState = jobStateSelect ? jobStateSelect.value : "";
        const filteredList = selectedState
            ? list.filter(job => job.estado === selectedState)
            : list;

        if (filteredList.length === 0) {
            vacantesList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No hay vacantes disponibles para el estado seleccionado.</p>`;
            return;
        }

        filteredList.forEach(job => {
            const card = document.createElement('div');
            card.className = 'vacante-card glass-card';
            card.innerHTML = `
                <h4>${job.titulo}</h4>
                <p class="vacante-distribuidor">${job.distribuidor} (${job.estado || 'México'})</p>
                <p class="vacante-desc">${job.descripcion}</p>
                <button class="btn btn--primary btn-apply-trigger" data-id="${job.id}">
                    Postularse
                </button>
            `;
            vacantesList.appendChild(card);
        });

        // Configurar botones de aplicar
        const applyButtons = vacantesList.querySelectorAll('.btn-apply-trigger');
        applyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const jobId = btn.getAttribute('data-id');
                const job = list.find(j => j.id === jobId);
                if (job) {
                    abrirModalAplicacion(job);
                }
            });
        });
    }

    // Modal de Aplicación
    function abrirModalAplicacion(job) {
        applyJobTitle.textContent = job.titulo;
        applyJobDesc.textContent = `Distribuidor: ${job.distribuidor}`;
        applyJobId.value = job.id;
        applyModal.style.display = 'flex';
    }

    if (jobStateSelect) {
        jobStateSelect.addEventListener('change', renderVacantesPublicas);
    }

    if (btnCloseApply) {
        btnCloseApply.addEventListener('click', () => {
            applyModal.style.display = 'none';
        });
    }

    if (btnCloseApplyIcon) {
        btnCloseApplyIcon.addEventListener('click', () => {
            applyModal.style.display = 'none';
        });
    }

    // Cerrar modal al hacer click en el fondo (overlay)
    if (applyModal) {
        applyModal.addEventListener('click', (e) => {
            if (e.target === applyModal) {
                applyModal.style.display = 'none';
            }
        });
    }

    if (formAplicar) {
        formAplicar.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('apply-name').value;
            applyModal.style.display = 'none';
            formAplicar.reset();
            showToast(`Postulación enviada. Tu CV se ha remitido al distribuidor.`);
        });
    }

    // Render inicial
    populateJobStateSelect();
    renderVacantesPublicas();
}

// --- 6. SECCIÓN NOTICIAS (LINKEDIN FEED) ---

function initLinkedInFeed() {
    const feedContainer = document.getElementById('linkedin-feed-placeholder');
    if (!feedContainer) return;

    feedContainer.style.display = 'grid';

    // Publicaciones reales de LinkedIn de la AMDIM (únicamente imágenes originales de media.licdn.com)
    const fallbackPosts = [
        {
            fecha: "Hace 2 semanas • Editado • 🌐",
            texto: "Un pequeño gesto puede hacer una gran diferencia. 🐾❤️\n\nNos sumamos a la difusión de Operación Patitas 2026, una iniciativa de Mitsubishi Motors de México y Zadrigman que busca recaudar alimento para perritos en situación vulnerable.\n\nCada donativo cuenta. Si tienes la oportunidad, súmate llevando croquetas nuevas y selladas a los distribuidores participantes del 6 al 21 de julio.\n\nMás información: https://lnkd.in/gS3ECScN\n\n#AMDIM #DistribuidoresMitsubishi #MitsubishiMotorsMéxico",
            imagen: "https://media.licdn.com/dms/image/v2/D5622AQECb_l9Qme_Gw/feedshare-shrink_800/B56Z9D4lqUGcAc-/0/1783550335882?e=1786579200&v=beta&t=t6XkDHYoT24rES_fPCeKDVM4Ahlz34S8N58uet9rK8Y",
            avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
            enlace: "https://www.linkedin.com/feed/update/urn:li:activity:7480752310281850880/",
            likes: 6,
            comentarios: 2
        },
        {
            fecha: "Hace 3 semanas • 🌐",
            texto: "El futuro de la movilidad se vive hoy con Mitsubishi Outlander PHEV. 🚗⚡\n\nCon su tecnología híbrida enchufable, amplio espacio y equipamiento, este modelo ofrece una conducción eficiente sin renunciar al confort y desempeño.\n\nAcércate a tu distribuidor autorizado Mitsubishi Motors y conoce las condiciones comerciales vigentes.\n\n#AMDIM #MitsubishiMotorsMéxico #OutlanderPHEV",
            imagen: "https://media.licdn.com/dms/image/v2/D5622AQFLzaZyegEWtA/feedshare-shrink_800/B56Z8VQW0IJoAc-/0/1782768037356?e=1786579200&v=beta&t=NAZw4W6PKkHZ50wPyxAfvhqSCAZyrgWV2PT4O4EeKmk",
            avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
            enlace: "https://www.linkedin.com/feed/update/urn:li:activity:7477471111908089856/",
            likes: 2,
            comentarios: 2
        }
    ];

    // Función encargada de inyectar CUALQUIER lista de publicaciones JSON en NUESTRO diseño de tarjetas
    function renderPostsInCustomCards(postsList) {
        feedContainer.innerHTML = "";
        postsList.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'mock-linkedin-post glass-card';
            
            postCard.addEventListener('click', () => {
                window.open(post.enlace || "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/", '_blank');
            });

            const imgHTML = post.imagen ? `
                <div class="post-image-container">
                    <img src="${post.imagen}" alt="Noticia AMDIM LinkedIn" class="post-image" onerror="this.style.display='none'">
                </div>
            ` : '';

            const avatarStyle = post.avatar 
                ? `background: url('${post.avatar}') center/cover no-repeat #111; border: 1px solid rgba(225,39,39,0.3);` 
                : `background: url('assets/images/logos/AMIDM_LOGO NUEVO solo rojo.png') center/contain no-repeat #111; border: 1px solid rgba(225,39,39,0.3);`;

            const postUrl = post.enlace || "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/";

            postCard.innerHTML = `
                <div class="post-header">
                    <div class="post-author-info">
                        <div class="post-avatar" style="${avatarStyle}"></div>
                        <div class="post-author-meta">
                            <strong class="post-author-name">Asociación Mexicana Distribuidores Mitsubishi, A.C.</strong>
                            <span class="post-date">${post.fecha || 'Reciente • 🌐'}</span>
                        </div>
                    </div>
                    <span class="material-symbols-outlined linkedin-icon-link">open_in_new</span>
                </div>
                <div class="post-content">
                    <p class="post-text">${(post.texto || '').replace(/\n/g, '<br>')}</p>
                    ${imgHTML}
                </div>
                <div class="post-footer" style="display: flex; flex-direction: column; gap: 14px;">
                    <div class="post-actions">
                        <span class="post-action-item">
                            <span class="material-symbols-outlined" style="color:#0A66C2;">thumb_up</span> ${post.likes || 6} Reacciones
                        </span>
                        <span class="post-action-item">
                            <span class="material-symbols-outlined">chat_bubble_outline</span> ${post.comentarios || 2} Comentarios
                        </span>
                    </div>
                    <a href="${postUrl}" target="_blank" class="btn btn--outline-red btn-linkedin-link" style="width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.82rem; padding: 10px 16px; border-radius: 8px; text-decoration: none;" onclick="event.stopPropagation();">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink: 0;">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                        Ver publicación en LinkedIn
                    </a>
                </div>
            `;
            feedContainer.appendChild(postCard);
        });
    }

    // Renderizado síncrono inmediato para asegurar visibilidad en cualquier entorno (incluyendo file:// local)
    renderPostsInCustomCards(fallbackPosts);

    // Intento de conexión dinámico a la API JSON / Endpoint de publicaciones
    // Si la API remota responde en servidor HTTP/HTTPS, se actualiza automáticamente con nuevos posts
    if (window.location.protocol.startsWith('http')) {
        const apiEndpoint = "assets/data/linkedin_posts.json";
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) throw new Error("Usando publicaciones pre-cargadas");
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    renderPostsInCustomCards(data);
                }
            })
            .catch(err => {
                // Silencioso: mantiene las publicaciones institucionales ya renderizadas
            });
    }
}

// --- 7. SECCIÓN CONTACTO ---

function initContacto() {
    const formContacto = document.getElementById('form-contacto');
    if (!formContacto) return;

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('contact-name').value;
        
        showToast("Enviando mensaje...");
        
        setTimeout(() => {
            formContacto.reset();
            showToast(`Gracias ${nombre}. Comentarios enviados a buzonamdim@amdim.com.mx.`);
        }, 1500);
    });
}

// --- 8. HELPER: TOAST NOTIFICATIONS ---

/**
 * Muestra un Toast flotante en pantalla con soporte de iconos de Google Fonts
 * @param {string} message Mensaje a mostrar
 */
function showToast(message) {
    const oldToast = document.querySelector('.toast-notification');
    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <span class="material-symbols-outlined" style="color: var(--color-red); font-size: 1.5rem;">notifications</span>
        <div style="font-size: 0.9rem; font-weight: 500; line-height: 1.3;">${message}</div>
    `;
    
    document.body.appendChild(toast);

    // Auto-descarte
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}

// --- 9. SECCIÓN DOCUMENTOS LEGALES (MODALES INTERACTIVOS) ---

const LEGALES_CONTENT = {
    privacidad: {
        titulo: "Aviso de Privacidad Integral",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. Identidad y Domicilio de los Responsables</h4>
            <p style="margin-bottom:15px;">La <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong> (RFC: AMD0404226K6) y sus Distribuidores Autorizados (en adelante, "Los Responsables"), reconocen la importancia del tratamiento legítimo, controlado e informado de sus datos personales conforme a la LFPDPPP.</p>
            <p style="margin-bottom:15px;"><strong>Domicilio de la Asociación:</strong> Juan Vázquez de Mella número 481, Piso 2, Oficina 203, Colonia Los Morales Polanco, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.</p>
            <p style="margin-bottom:15px;"><strong>Domicilio de Distribuidores:</strong> El domicilio de la agencia autorizada seleccionada por el usuario o más cercana a su domicilio, la cual actúa como corresponsable.</p>
            
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Datos Personales Recabados</h4>
            <p style="margin-bottom:15px;">Recabamos datos a través de formularios en el sitio web:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Identificación y Contacto:</strong> Nombre completo, correo electrónico, teléfono (fijo y móvil, incluyendo WhatsApp).</li>
                <li><strong>Intereses Comerciales:</strong> Modelo de interés, tipo de cotización (compra, arrendamiento, prueba de manejo), y datos de auto a cuenta.</li>
                <li><strong>Tecnológicos:</strong> Dirección IP, tipo de navegador, tiempo de navegación (a través de cookies y web beacons).</li>
            </ul>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">3. Finalidades del Tratamiento</h4>
            <p style="margin-bottom:10px;"><strong>A. Finalidades Primarias (Necesarias):</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Dar seguimiento a solicitudes de cotización, información o citas para prueba de manejo.</li>
                <li>Transferir sus datos al Distribuidor Autorizado de su elección para gestionar su proceso de compraventa.</li>
                <li>Prevenir y detectar actos de fraude, phishing o suplantación de identidad.</li>
            </ul>
            <p style="margin-bottom:10px;"><strong>B. Finalidades Secundarias (No Necesarias):</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Envío de publicidad, ofertas comerciales y promociones sobre productos y servicios de Mitsubishi Motors.</li>
                <li>Encuestas de satisfacción y medición de calidad de servicio.</li>
            </ul>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">4. Transferencia de Datos</h4>
            <p style="margin-bottom:15px;">Sus datos podrán ser transferidos sin necesidad de consentimiento (según Art. 37 LFPDPPP) a: Distribuidores Autorizados (para seguimiento comercial), Proveedores clave de CRM (Milestone, Seekop, SugarCRM) y autoridades competentes.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">5. Derechos ARCO</h4>
            <p style="margin-bottom:15px;">Usted puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos. Para ejercerlos, envíe una solicitud firmada por correo electrónico a: <strong>bit@amdim.com.mx</strong>.</p>
            <p style="margin-bottom:15px;">Cualquier modificación a este aviso será informada en: <strong>informacionamdim@amdim.com.mx</strong>.</p>
        `
    },
    legal: {
        titulo: "Aviso Legal",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. Información del Sitio</h4>
            <p style="margin-bottom:15px;">El titular de este portal web es la <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong> (AMDIM), con domicilio de operaciones en Juan Vázquez de Mella número 481, Piso 2, Oficina 203, Colonia Los Morales Polanco, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.</p>
            
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Propiedad Intelectual e Industrial</h4>
            <p style="margin-bottom:15px;">El usuario reconoce que todos los logotipos, marcas comerciales, isotipos (incluyendo los tres diamantes), nombres comerciales, textos y videos exhibidos en este portal son propiedad industrial e intelectual de <strong>Mitsubishi Motors de México, S.A. de C.V.</strong> (MMDM) o de terceros colaboradores que han licenciado su uso.</p>
            <p style="margin-bottom:15px;">Queda estrictamente prohibida la copia, reproducción, distribución, comunicación pública o alteración comercial de dichos elementos sin la previa autorización escrita de MMDM.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">3. Exclusión de Responsabilidad de Precios</h4>
            <p style="margin-bottom:15px;">La información relacionada con modelos de vehículos, equipamiento, precios y promociones es meramente ilustrativa e informativa. Los precios finales, especificaciones técnicas y condiciones de venta oficiales siempre deben validarse directamente de forma presencial o telefónica con el Distribuidor Autorizado de su elección.</p>
        `
    },
    cookies: {
        titulo: "Política de Cookies",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. ¿Qué son las Cookies?</h4>
            <p style="margin-bottom:15px;">Las Cookies son pequeños archivos de texto que los sitios web almacenan en su computadora o dispositivo móvil para recordar sus preferencias, historial de navegación o datos de formularios con el fin de optimizar su experiencia de usuario.</p>
            
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Cookies Utilizadas</h4>
            <p style="margin-bottom:15px;">Los portales web de AMDIM y sus distribuidores utilizan cookies con fines funcionales y analíticos:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Cookies de Rendimiento y Analítica:</strong> Google Analytics, Milestone y Seekop para recopilar datos anónimos de comportamiento de navegación y tráfico.</li>
                <li><strong>Cookies de Publicidad:</strong> Meta/Facebook Pixel para segmentar audiencias y mostrar publicidad relevante de Mitsubishi Motors.</li>
                <li><strong>Cookies Funcionales:</strong> Para mantener la sesión del usuario, recordar filtros de búsqueda e interacciones del chat.</li>
            </ul>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">3. Aceptación y Desactivación</h4>
            <p style="margin-bottom:15px;">Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies. En cualquier momento, usted puede bloquear, deshabilitar o borrar estas cookies cambiando la configuración de privacidad de su navegador web (Chrome, Edge, Firefox, Safari, etc.). Tenga en cuenta que deshabilitar cookies funcionales podría afectar el correcto funcionamiento de algunas secciones del portal.</p>
        `
    },
    terminos: {
        titulo: "Términos y Condiciones de Uso",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. Aceptación y Jurisdicción</h4>
            <p style="margin-bottom:15px;">Al acceder y hacer uso de este portal web, el usuario acepta de manera expresa y sin reservas los presentes Términos y Condiciones, así como el Aviso de Privacidad Integral de Los Responsables.</p>
            <p style="margin-bottom:15px;">Para la resolución de cualquier controversia derivada del uso del sitio, las partes se someten a las leyes aplicables de los Estados Unidos Mexicanos y a la jurisdicción de los Tribunales Competentes de la Ciudad de México, renunciando a cualquier otro fuero.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Responsabilidad Legal del Proceso de Venta</h4>
            <p style="margin-bottom:15px;"><strong>El usuario reconoce que la Asociación Mexicana de Distribuidores Mitsubishi, A.C. (AMDIM) actúa única y exclusivamente como un intermediario corporativo facilitador de información técnica y captador de interés (leads).</strong></p>
            <p style="margin-bottom:15px;">La responsabilidad legal definitiva sobre cualquier cotización, apartado de unidades, negociación económica, compraventa, facturación, entrega de vehículos, y garantías comerciales recae exclusiva y directamente en el <strong>Distribuidor Autorizado</strong> que gestione la transacción, deslindando por completo a la AMDIM.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0; background: rgba(237,0,0,0.1); padding: 10px; border-left: 3px solid var(--color-red);">3. Advertencia Oficial Anti-Fraude</h4>
            <p style="margin-bottom:15px; font-weight:700; color:var(--color-white);">“TODO DEPÓSITO O TRANSFERENCIA DEBERÁ SER REALIZADO ÚNICAMENTE EN LA CAJA FÍSICA AUTORIZADA DE LA AGENCIA Y/O A UNA CUENTA BANCARIA CORPORATIVA A NOMBRE DE LA COMPAÑÍA DEL DISTRIBUIDOR AUTORIZADO. BAJO NINGUNA CIRCUNSTANCIA SE DEBEN REALIZAR APARTADOS O DEPÓSITOS A NOMBRE DE UNA PERSONA FÍSICA (COMO ASESORES DE VENTAS).”</p>
            <p style="margin-bottom:15px;">La AMDIM y los Distribuidores no se hacen responsables de ninguna pérdida financiera, fraude o perjuicio derivado de transferencias realizadas a cuentas no oficiales o depósitos a cuentas personales.</p>
        `
    }
};

function initLegales() {
    const legalLinks = document.querySelectorAll('.legal-link');
    const legalModal = document.getElementById('legal-modal');
    const legalModalTitle = document.getElementById('legal-modal-title');
    const legalModalBody = document.getElementById('legal-modal-body');
    const btnCloseLegal = document.getElementById('btn-close-legal-modal');

    if (!legalModal || !legalModalTitle || !legalModalBody || !btnCloseLegal) return;

    legalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const docType = link.getAttribute('data-type');
            const docContent = LEGALES_CONTENT[docType];

            if (docContent) {
                // Configurar contenido del modal
                legalModalTitle.innerHTML = `
                    <span class="material-symbols-outlined" style="color: var(--color-red); font-size:1.6rem; vertical-align:middle; margin-right:8px;">gavel</span>
                    ${docContent.titulo}
                `;
                legalModalBody.innerHTML = docContent.cuerpo;
                
                // Mostrar Modal con animación
                legalModal.style.display = 'flex';
                legalModalBody.scrollTop = 0; // Reset scroll
            }
        });
    });

    btnCloseLegal.addEventListener('click', () => {
        legalModal.style.display = 'none';
    });

    // Cerrar modal al hacer click fuera del contenido
    legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) {
            legalModal.style.display = 'none';
        }
    });
}

// --- 9. SECCIÓN MODELOS (FILTRADO DINÁMICO) ---

/**
 * Controla el filtrado dinámico de vehículos por categoría
 */
// --- SECUENCIAS 360° OFICIALES DE MITSUBISHI MOTORS DE MÉXICO ---
const MODEL_360_SEQUENCES = {
    "mirage": [
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-1_706_VoEqGl8cOO.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-2_710_WiODj5XHV2.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-3_708_fXqQdHgqJH.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-4_704_FUhmdvDM1c.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-5_700_J8ipFiPbtF.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-6_702_RK9w4jsTAp.avif"
    ],
    "xpander": [
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-1_5046_H3n8HltPCe.avif",
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-2_5047_DIQN7NYvn3.avif",
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-3_5048_K84fF0Ng3D.avif",
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-4_5049_wiFuE1F3SG.avif",
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-5_5050_KKNgSex3yN.avif",
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-6_5051_1VGN2uYUs8.avif",
        "https://mitsubishi-motors.mx/assets/xpander-quartz-white-pearl-7_5052_14LIkMp4Dy.avif"
    ],
    "xpander-cross": [
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-1_4891_M7RsgObPeZ.avif",
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-2_5079_qjYrWVSnSW.avif",
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-3_5080_nn18NgfO37.avif",
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-4_5081_FPWA0iaTRj.avif",
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-5_5082_aGWgd7doju.avif",
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-6_5083_qQBZIbLih3.avif",
        "https://mitsubishi-motors.mx/assets/cross-quartz-white-pearl-7_5084_CzQmhP7qjK.avif"
    ],
    "outlander-sport": [
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-red-metallic-1_3702_CshYUBWD5U.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-red-metallic-2_2681_Tz1XNxsVy5.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-red-metallic-3_2652_A76IWHlSVD.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-red-metallic-4_3705_UJd27or6u9.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-red-metallic-5_3648_iISIpOIdui.avif"
    ],
    "outlander": [
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-1_3082_tsw2wTDutt.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-2_3033_YhFLLtG4Oo.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-3_3111_ARIs0VaZtZ.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-4_3112_yMm7LQUpoN.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-5_3366_z491wQEEcH.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-6_3371_6i56poa1Mk.avif"
    ],
    "outlander-phev": [
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-1_4955_IU5J4zFuKW.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-2_4956_3e2IGDuhUI.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-3_4957_ysxA0xhDYw.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-4_4958_U4K7W6geNv.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-5_4959_640067fCAb.avif"
    ],
    "montero": [
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-1_3780_R8tzr6hySx.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-2_3805_PuTg4P28ge.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-3_3806_6cSV9RtpqD.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-4_3783_AaN4Jm37RS.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-5_3808_uvm8Sb88Am.avif"
    ],
    "l200": [
        "https://mitsubishi-motors.mx/assets/l200-blade-silver-metallic-1_4272_0H6IBQKlhn.avif",
        "https://mitsubishi-motors.mx/assets/l200-blade-silver-metallic-2_4273_GFQN0xAsWS.avif",
        "https://mitsubishi-motors.mx/assets/l200-blade-silver-metallic-3_4226_z3TxIw1roX.avif",
        "https://mitsubishi-motors.mx/assets/l200-blade-silver-metallic-4_4275_5nOzyOF2Xw.avif",
        "https://mitsubishi-motors.mx/assets/l200-blade-silver-metallic-5_4251_EMlmk9P0Vb.avif"
    ],
    "l200-gsr": [
        "https://mitsubishi-motors.mx/assets/GSR-white-diamond-1_3914_Cu1HgyWbPr.avif",
        "https://mitsubishi-motors.mx/assets/GSR-white-diamond-2_3915_5oS5kUE099.avif",
        "https://mitsubishi-motors.mx/assets/GSR-white-diamond-3_3916_EU4zDhuFtU.avif",
        "https://mitsubishi-motors.mx/assets/GSR-white-diamond-4_3917_D6rfmRTytg.avif",
        "https://mitsubishi-motors.mx/assets/GSR-white-diamond-5_3918_JXstwwQd7X.avif"
    ]
};

function initModelosFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modelCards = document.querySelectorAll('.model-card');

    if (!filterButtons.length || !modelCards.length) return;

    // Precargar secuencias 360 en segundo plano para fluidez instantánea
    try {
        Object.values(MODEL_360_SEQUENCES).forEach(seq => {
            seq.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        });
    } catch(e) {}

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Activar botón clickeado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            modelCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    // Animación suave de aparición
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Visor Interactivo 360° mediante arrastre (manita) en Desktop y Slide en Móvil
    modelCards.forEach(card => {
        const modelKey = card.getAttribute('data-model');
        const container = card.querySelector('.model-image-container');
        const img = card.querySelector('img');
        if (!container || !img) return;

        const sequence = MODEL_360_SEQUENCES[modelKey];
        if (!sequence || sequence.length === 0) return;

        let isDragging = false;
        let startX = 0;
        let activeFrameIndex = 0;
        const totalFrames = sequence.length;

        const updateFrame = (deltaX) => {
            // Sensibilidad: píxeles de arrastre por marco
            const sensitivity = 22; 
            const frameOffset = Math.floor(-deltaX / sensitivity);
            let targetIndex = (activeFrameIndex + frameOffset) % totalFrames;
            if (targetIndex < 0) targetIndex += totalFrames;

            img.src = sequence[targetIndex];
        };

        // EVENTO CLICK EN EL BOTÓN 360° DEBAJO DEL AUTO
        const badge360 = container.querySelector('.badge-360-below');
        if (badge360) {
            badge360.addEventListener('click', (e) => {
                e.stopPropagation();
                // Avanzar al siguiente marco de ángulo 360°
                activeFrameIndex = (activeFrameIndex + 1) % totalFrames;
                img.src = sequence[activeFrameIndex];

                // Efecto de pulso en el botón
                badge360.style.transform = 'scale(0.92)';
                setTimeout(() => {
                    badge360.style.transform = '';
                }, 150);
            });
        }

        // EVENTOS DE RATÓN (DESKTOP DRAG CON MANITA)
        container.addEventListener('mousedown', (e) => {
            if (e.target.closest('.badge-360-below')) return; // No iniciar drag si clickea el botón 360
            isDragging = true;
            startX = e.clientX;
            container.classList.add('is-dragging');
            e.preventDefault();
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            updateFrame(deltaX);
        });

        window.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const sensitivity = 22;
            const frameOffset = Math.floor(-deltaX / sensitivity);
            activeFrameIndex = (activeFrameIndex + frameOffset) % totalFrames;
            if (activeFrameIndex < 0) activeFrameIndex += totalFrames;

            isDragging = false;
            container.classList.remove('is-dragging');
        });

        // EVENTOS TÁCTILES (MÓVIL SLIDE)
        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            container.classList.add('is-dragging');
        }, { passive: true });

        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const deltaX = e.touches[0].clientX - startX;
            updateFrame(deltaX);
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0] ? e.changedTouches[0].clientX : startX;
            const deltaX = endX - startX;
            const sensitivity = 22;
            const frameOffset = Math.floor(-deltaX / sensitivity);
            activeFrameIndex = (activeFrameIndex + frameOffset) % totalFrames;
            if (activeFrameIndex < 0) activeFrameIndex += totalFrames;

            isDragging = false;
            container.classList.remove('is-dragging');
        });
    });
}



/**
 * Controla y renderiza la sección de blog dinámico
 */
function initBlog() {
    const blogPlaceholder = document.getElementById('blog-feed-placeholder');
    if (!blogPlaceholder) return;

    blogPlaceholder.innerHTML = '';

    BLOG_POSTS.forEach(post => {
        const article = document.createElement('article');
        article.className = 'mock-linkedin-post';
        article.style.height = '100%';
        article.style.display = 'flex';
        article.style.flexDirection = 'column';

        article.innerHTML = `
            <div class="post-header">
                <div class="post-author-info">
                    <div class="post-avatar" style="background-color: var(--color-red); font-size: 0.8rem;">AD</div>
                    <div class="post-author-meta">
                        <span class="post-author-name">${post.autor}</span>
                        <span class="post-date">${post.fecha}</span>
                    </div>
                </div>
                <span class="material-symbols-outlined" style="color: var(--color-red);">rss_feed</span>
            </div>
            <div class="post-content">
                <h4 style="color: var(--color-white); font-size: 1.05rem; line-height: 1.4; margin-bottom: 10px; font-family: var(--font-main); font-weight: 700;">
                    ${post.titulo}
                </h4>
                <p class="post-text" style="margin-bottom: 15px;">
                    ${post.resumen}
                </p>
                <div class="post-image-container" style="height: 160px;">
                    <img src="${post.imagen}" alt="${post.titulo}" class="post-image">
                </div>
            </div>
            <div class="post-footer">
                <div class="post-actions">
                    <span class="post-action-item">
                        <span class="material-symbols-outlined">thumb_up</span> ${post.likes}
                    </span>
                    <span class="post-action-item">
                        <span class="material-symbols-outlined">comment</span> ${post.comments}
                    </span>
                </div>
                <button class="btn btn--ghost-light" style="padding: 4px 10px; font-size: 0.72rem; border-color: rgba(255,255,255,0.15);" onclick="showToast('Artículo: ${post.titulo}. Próximamente disponible en formato completo en nuestro nuevo Blog AMDIM.')">
                    Leer más
                </button>
            </div>
        `;

        blogPlaceholder.appendChild(article);
    });

    // Pestañas (Tab switcher) para alternar entre LinkedIn y Blog
    window.switchNewsTab = function(tab) {
        const btnLinkedin = document.getElementById('btn-tab-linkedin');
        const btnBlog = document.getElementById('btn-tab-blog');
        const feedLinkedin = document.getElementById('linkedin-feed-placeholder');
        const feedBlog = document.getElementById('blog-feed-placeholder');

        if (tab === 'linkedin') {
            btnLinkedin.classList.add('active');
            btnBlog.classList.remove('active');
            feedLinkedin.style.display = 'grid';
            feedBlog.style.display = 'none';
        } else {
            btnLinkedin.classList.remove('active');
            btnBlog.classList.add('active');
            feedLinkedin.style.display = 'none';
            feedBlog.style.display = 'grid';
        }
    };
}

