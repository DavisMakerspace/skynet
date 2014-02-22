#!/usr/bin/env bash

# Delete database if it exists
curl -X DELETE http://localhost:5984/members

# Create the member database.
curl -X PUT http://localhost:5984/members

# Add some members.
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{ "first": "Austin","last": "Whitaker","email": "metus.Vivamus.euismod@eumetus.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Nora","last": "Gibson","email": "vitae.sodales.at@ridiculusmusProin.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Nigel","last": "Stanley","email": "fringilla@non.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Meredith","last": "Langley","email": "eu.ligula.Aenean@Maurisut.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Faith","last": "Bright","email": "magna@sodales.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Mallory","last": "Whitney","email": "in.aliquet@sodales.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Kermit","last": "Clements","email": "Nam@CuraeDonectincidunt.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Len","last": "Conley","email": "mollis@erat.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Joshua","last": "Mcfadden","email": "urna.convallis@metusvitaevelit.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Hedy","last": "Lott","email": "non.justo.Proin@eratvolutpat.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Remedios","last": "Hancock","email": "lorem@iaculisodio.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "David","last": "Bennett","email": "Mauris.eu@consequatdolorvitae.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Nero","last": "Travis","email": "dolor.dolor@eliteratvitae.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Kristen","last": "Wiggins","email": "orci.Ut.semper@ridiculus.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Griffin","last": "Baxter","email": "vitae@sagittisplaceratCras.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Lavinia","last": "Lynn","email": "sem.elit.pharetra@purusgravidasagittis.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Minerva","last": "Dotson","email": "enim@tinciduntaliquamarcu.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Hadley","last": "Fleming","email": "ultricies.ornare.elit@accumsan.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Laurel","last": "Conrad","email": "Donec.feugiat@Nullaeuneque.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Dante","last": "Irwin","email": "Nunc@elit.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Michael","last": "Park","email": "eget.laoreet.posuere@vitaesemperegestas.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Oscar","last": "Singleton","email": "enim.Etiam.gravida@Donecest.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Winifred","last": "Dalton","email": "non.ante.bibendum@ornaresagittisfelis.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Portia","last": "Vinson","email": "gravida@feliseget.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Iola","last": "Woodard","email": "lobortis.ultrices.Vivamus@Sedauctorodio.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Derek","last": "Kent","email": "imperdiet.ornare@Etiam.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Jerome","last": "Delaney","email": "a.malesuada.id@cursusIntegermollis.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Seth","last": "Osborne","email": "Morbi@vulputate.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Jocelyn","last": "Edwards","email": "vitae@Sedcongueelit.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Gabriel","last": "Ortega","email": "vitae@amet.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Daquan","last": "Middleton","email": "aliquam.enim.nec@nonummyutmolestie.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Tashya","last": "Dixon","email": "arcu@consequat.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Minerva","last": "Noble","email": "dapibus@augueSed.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Keefe","last": "Miller","email": "egestas@consectetuer.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Nero","last": "Gibbs","email": "tincidunt.adipiscing@odio.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Sigourney","last": "Foster","email": "laoreet.posuere.enim@Etiamlaoreetlibero.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Buffy","last": "Gomez","email": "malesuada.vel.venenatis@sem.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Cheyenne","last": "Dawson","email": "tempus.non.lacinia@enimcommodohendrerit.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "India","last": "Salazar","email": "In@pede.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Pascale","last": "Livingston","email": "sit@Curabiturut.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Scott","last": "Velasquez","email": "nulla.Donec.non@massaSuspendisse.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Orson","last": "Carrillo","email": "lobortis.tellus@Duisac.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Maile","last": "Gordon","email": "a.mi.fringilla@nislQuisque.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Asher","last": "Crane","email": "ultrices@sodalesat.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Burton","last": "Brennan","email": "tincidunt@tristique.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Alfreda","last": "Sandoval","email": "eu.lacus.Quisque@temporarcu.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Lenore","last": "Rowland","email": "malesuada.fringilla@Quisque.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Candace","last": "Browning","email": "nisl@dignissim.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Jin","last": "Pearson","email": "Nunc.mauris@dolor.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Harding","last": "Raymond","email": "mollis@nonummy.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Fleur","last": "Horn","email": "Nullam@hymenaeos.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Keely","last": "Pierce","email": "vel.lectus.Cum@auctorullamcorper.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Perry","last": "Holcomb","email": "mus.Donec.dignissim@Nullamfeugiatplacerat.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Shelley","last": "Parks","email": "Aenean@placerateget.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Dara","last": "Carrillo","email": "hymenaeos.Mauris@utnullaCras.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Camden","last": "Quinn","email": "ultricies.adipiscing@facilisis.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Iona","last": "Stein","email": "vitae.erat@nonummy.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Christen","last": "Bowen","email": "ornare.lectus@imperdietornare.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Yeo","last": "Sosa","email": "nec.quam@eu.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Margaret","last": "Fry","email": "Proin.nisl.sem@velsapien.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Caldwell","last": "Dawson","email": "amet.faucibus@Suspendissetristique.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Colby","last": "Campos","email": "Nunc@Curabiturconsequatlectus.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Colby","last": "Dickson","email": "euismod.ac.fermentum@vitae.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Priscilla","last": "Perry","email": "Integer.in@Duisdignissimtempor.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Hillary","last": "Parker","email": "at.fringilla@eu.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Ariel","last": "Flowers","email": "sapien.gravida@malesuada.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Wade","last": "Washington","email": "sem@risusDonecegestas.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Vaughan","last": "Malone","email": "metus.Vivamus@neque.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Diana","last": "Bender","email": "magna.a.neque@mollisnoncursus.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Michael","last": "Craig","email": "viverra@Vestibulum.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Sigourney","last": "Church","email": "Sed.nulla.ante@DonectinciduntDonec.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Nero","last": "Cooper","email": "Duis@faucibus.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Olga","last": "Sloan","email": "metus@fermentum.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Aiko","last": "Castillo","email": "massa@Proin.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Gloria","last": "Nelson","email": "dis@metus.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Samuel","last": "Leon","email": "dis@sit.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Jane","last": "Bentley","email": "ut@ipsumprimis.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Katelyn","last": "Cote","email": "dui@milorem.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Mollie","last": "Kirby","email": "dignissim@dis.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Tucker","last": "Potts","email": "a.arcu.Sed@ametconsectetuer.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Darius","last": "Lynch","email": "consequat@nec.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Risa","last": "Gibson","email": "in@mauris.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Dustin","last": "Berg","email": "massa.rutrum.magna@dolorQuisquetincidunt.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Shafira","last": "Fuentes","email": "ante.Vivamus@MorbivehiculaPellentesque.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Drake","last": "Glover","email": "nibh.Donec@turpisnon.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Quamar","last": "Simpson","email": "ut.molestie@Vivamus.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Wendy","last": "Evans","email": "condimentum.Donec.at@velsapien.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Kameko","last": "Wilcox","email": "dignissim.pharetra.Nam@metusVivamus.org"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Marsden","last": "Lynn","email": "purus.in.molestie@duiFuscealiquam.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Hedwig","last": "Irwin","email": "accumsan.neque@Namtempordiam.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Price","last": "Caldwell","email": "ac@eueleifend.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Yardley","last": "Garza","email": "non.dapibus@nonquam.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Uriel","last": "Hester","email": "consectetuer@eget.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Desiree","last": "Delgado","email": "Nam@non.edu"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Ishmael","last": "Berry","email": "porttitor@Curabitursed.com"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Linda","last": "Murphy","email": "Sed.molestie@Integervitaenibh.co.uk"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Katell","last": "Hyde","email": "ligula@eleifendnecmalesuada.ca"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Yetta","last": "Barnett","email": "diam.luctus.lobortis@lectusCumsociis.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Blaze","last": "Humphrey","email": "mattis.Integer@Suspendissealiquet.net"}'
curl -X POST http://localhost:5984/members/ -H "Content-Type: application/json" \
   -d '{"first": "Maia","last": "Gallegos","email": "sollicitudin@vehiculaPellentesquetincidunt.edu"}'

