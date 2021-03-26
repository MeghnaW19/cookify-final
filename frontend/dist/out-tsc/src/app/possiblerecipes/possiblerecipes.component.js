import * as tslib_1 from "tslib";
import { ENTER } from '@angular/cdk/keycodes';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
let PossiblerecipesComponent = class PossiblerecipesComponent {
    constructor(fservice, router, route) {
        this.fservice = fservice;
        this.router = router;
        this.route = route;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [ENTER];
        this.ingredientCtrl = new FormControl();
        this.ingredients = [];
        this.allIngredients = ['Saunf ', 'Variyali', 'Badishep', 'Sombu', 'Sopuginja', 'Perumjeerakam', 'Hing', 'Perungayam', 'Inguva',
            'Kayam', 'Tulsi', 'Thulasi', 'Thulasi Aakulu', 'Sivatulasi', 'Tej patta', 'Tamal patra', 'Tamal patri', 'Brinji elai', 'Talisapatri',
            'Karuva ela', 'Kali mirch', 'Kala mari', 'Kali miri', 'Milagu', 'Miriyalu', 'Krumulagu', 'Kala namak', 'Sanchal', 'Kale mitha',
            'Karuppu uppu', 'Nalla uppu', 'Karutha Uppu', 'Makkhan', 'Makhan', 'Loni', 'Vennai', 'Venna', 'Shahjeera', 'Shahi jeeru', 'Shajeera',
            'Karun Jeerakam', 'Seema Sopyginjale', 'Seemajeerakam', 'Badi elaichi', 'Moti elaychi', 'Veldoda', 'Periya elakkai', 'Yalakullu',
            'Karutta elam', 'Choti elaichi', 'Elaychi', 'Elakkai', 'Elam', 'Ajwain', 'Ajamo', 'Ova', 'Keram Vitai', 'Karom sid', 'Kaream viit',
            'Dalchini', 'Taj', 'Lavanga pattai', 'Dalchina Chekka', 'Karuva patta', 'Nimboo sat', 'Limbu na phool (Saji na phool)',
            'Limbacya rasamadhye sapadanare amla', 'Citrik amilam', 'Nimma uppu', 'Sitrik acid', 'Ghee', 'Tup', 'Nei', 'Neyyi', 'Ney',
            'Laung', 'Laving', 'Lavang', 'Krambu', 'Lavangalu', 'Grambu', 'Sabut dhaniya', 'Dhana', 'Dhanay', 'Kothamalliverai', 'Dhaniyalu',
            'Kothamalli', 'Hara Dhania', 'Kothmir (Dhana)', 'Kothimbir', 'Kothimeera', 'Jeera', 'Jiru', 'Jira', 'Jeeragam', 'Jeelakara', 'Jeerakam',
            'Kari patta', 'Mitho limdo', 'Kadhilimbachi pana', 'Karuvepillai', 'Karivepaku', 'Kariveppela', 'Suva bhaji', 'Sava ni bhaji', 'Shepu',
            'Sathakuppi Sompa', 'Soya Koora', 'Sathakuppa', 'Amchur', 'amchur', 'Mangai podi', 'Mamidikaya Pudi', 'Manga Podi', 'Anardana',
            'Dadam na dana', 'Dalimbache Dane', 'Maadhulai Vidhai', 'Daanimma Ginjalu', 'Madhalanaranga', 'Sukhi lal mirch', 'Suku lal marchu',
            'Mirchya', 'Vatral milagai', 'Erra Mirapa Kayalu', 'Vattalmulaku', 'Kasoori methi', 'kasoori methi', 'Valalelya methici pane',
            'Venthiya Keera', 'Menthikora', 'Unanniya uluva ilakal', 'Methi ke dane', 'Methi na dana', 'Methi', 'Vendayam', 'Menthulu', 'Uluva',
            'Saunth', 'Sunth', 'Suntha', 'Sukku', 'Sonti', 'Chukku', 'Shahad', 'Madh', 'Then', 'Theene', 'Thean', 'Gur', 'Gol (Gor)', 'Gul', 'Vellam',
            'Bellam', 'Sharkkara', 'Javitri', 'Javintri', 'Jaipatri', 'Jadipattri', 'Japathri', 'Jathipathri', 'Pudina', 'fudino', 'Pudina akku',
            'Pudinaa', 'Doodh', 'Dudh', 'Paal', 'Palu', 'Rai ,Sarso', 'Rai', 'Mohri', 'Kadugu', 'Aavaalu', 'Kaduku', 'Kalonji', 'Dungali bija',
            'Kanda biyane', 'Karuppu yel', 'Nalla vittanalu', 'karinjirakam', 'Jaiphal', 'Jhadhikkai', 'Jajikayi', 'Jathi', 'Lal mirch powder',
            'Lal marchu', 'Lal mirchya', 'Mulakupodi', 'Sendha namak', 'Sendhalu mithu', 'Saindhav meeth', 'Kal uppu', 'Ralu Uppu', 'Para upp',
            'Gulab jal', 'Gulab pani', 'Kulap jal', 'Kesar', 'Keshar', 'Kungumappu', 'Kukumpoovu', 'Kumkumappovu', 'Namak', 'Mithu', 'Meeth', 'Uppu',
            'Chakraphool', 'Cakraphala', 'Badian', 'Anashuppu', 'Anaspuvu', 'Takkolam', 'Shakkar', 'Khand', 'Saakhar', 'Chakkarai', 'Chakara',
            'Panjasara', 'Imli', 'Aambali', 'Chincha', 'Puli', 'Chinthapandu', 'Vaallan puli', 'Haldi', 'Haldar', 'Halad', 'Manjal', 'Pasupu', 'Sirka',
            'Sirko', 'Shirka', 'Pulikaadi', 'Vinegar', 'Chorukka', 'Chauli bhaji', 'Cauli bhaji', 'Lal math', 'Molaikeerai', 'Totakura',
            'Chuvanna cheera', 'Petha-', 'Petha', 'Kohla', 'Poosanikai (Pushini Kaiy)', 'Boodida gummadikaya', 'Kumbalanga', 'Kele ka phool',
            'kela na ful', 'Kelful', 'Vazhaipoo', 'Arati Puvvu', 'Pazham Vazhakudappan', 'Chukandar', 'Beet', 'Beetroot kijangu', 'Beetroot',
            'Shimla mirch', 'Bholak marchu', 'Bhopli/bhongi mirchi', 'Kudamilagai', 'Capsicum', 'Kuda mulagu', 'Karela', 'karelu', 'Karla',
            'Pavara kaiy', 'Kakara kayi', 'Pavakka', 'Lauki', 'Dudhi', 'Dudhi Bhopla', 'Sura kaiy', 'Sorakaya', 'Churakka', 'Sem ki phalli',
            'valpapdi', 'Avara kaiy', 'Pedda Chikkudu', 'Amarakka', 'Patta gobi', 'Kobi', 'Muttaikos', 'Cabbage', 'Muttakoos', 'Gajar', 'Gaajar',
            'Carrot', 'Gajjara gadda', 'Phool gobi', 'koli flower', 'Phulkobi', 'Kovippu', 'Cauliflower', 'Gawar ki phalli', 'Gavar',
            'Kothavarangai', 'Goruchikkudu', 'Kothamara', 'Nariyal', 'Naliyer', 'Naral', 'Thengai', 'Kobbari Kaaya', 'Thenga', 'Arbi patta',
            'Patra', 'Aluchi pana', 'Chepankizhangu', 'Chemagadda', 'Chembu', 'Arbi', 'Arvi', 'Alu', 'Makkai', 'Makai', 'Maka', 'Cholam',
            'Mokkajonna Kandelu', 'Kheera', 'Kakdi', 'Velleri Kaiy', 'Kheera Dosakaya', 'Vellarikka', 'Surjan ki phalli', 'Saragva ni singh',
            'Shevgyachya shenga', 'Murungaikkai', 'Mulakada', 'Muringakayi', 'Baingan', 'Ringan', 'Vanga', 'Kathirikai', 'Vankaya', 'Vazhuthananga',
            'Zimikand or Suran', 'Suran', 'Chenai kizhangu', 'Kanda gadda', 'Chena', 'Methi ni bhaji', 'Methi bhaji', 'Vendayakeerai',
            'Menthi kura', 'Farash beans', 'Fansi', 'Shravan ghevda', 'Beans', 'Lahsun', 'Lasan', 'Lassun', 'Poondu', 'Vellulli', 'Velluthulli',
            'Adrak', 'Aadu', 'Inji', 'Allam', 'Hari mirch', 'Lila marcha', 'Hirvya mirchya', 'Pachai Milagai', 'Pacchi Mirapakaya', 'Pachchamulaku',
            'Hari pyaz', 'Lili Dungri', 'Kanda path', 'Pallari Vengayam', 'Vulli Kada', 'Ulli Thal', 'Matar', 'Vatana', 'Pattani', 'Pachi batani',
            'Tendli', 'Tindora', 'Tondli', 'Kovaikkai', 'Dondakaya', 'Kovaykka', 'Kathal', 'Phanas', 'Pala Pazham', 'Panasakai', 'Chakka', 'Nimbu',
            'Limbu', 'Elumichampazham', 'Nimmakaya', 'Cherunaranga', 'Khumbh', 'Mushroom', 'Kaalan', 'Kukka Godugu', 'Koon', 'Sarso ka saag',
            'Rai limba', 'Rai chi paan', 'Katuku ilaikal', 'Aava aaku', 'Kaduguila', 'Bhindi', 'Bhinda', 'Bhendi', 'Vendaikkai', 'Bendakaya', 'Pyaaz',
            'Dungari (Kanda)', 'Kanda', 'Vengayam', 'Ullipaya', 'Ulli', 'kachha kela', 'Kacha kela', 'Kacca keli', 'Vazhaikkai', 'Pachi Aratikaya',
            'Kaya (Nenthrakaya)', 'Aloo', 'Batata (Bataka)', 'Batata', 'Urulaikizhangu', 'Bangala Dumpa (Alugadda)', 'Urulakhizhangu', 'Kaddu',
            'Kolu', 'Lal bhopla', 'Seetaphul', 'Gummadikaya', 'Mathanga', 'Mooli', 'Mula', 'Mullangi', 'Turai', 'Turia', 'Dodka', 'Peerkangai',
            'Beerakaya', 'Peechinga', 'Chota pyaaz or Sambar onion', 'Nani dungari', 'Chote kande', 'China (Sambar vebgayam)', 'Ullipaaya',
            'Cheriya ulli', 'Chirchinda', 'Parval', 'Padval', 'Pudalang kaiy', 'Potlakaya', 'Padavalanga', 'Pitwaa', 'Sorela pandada', 'Ambadi',
            'Pulicha keerai', 'Gongura', 'Palak', 'Pasala keerai', 'Palakura', 'Palak cheera', 'Shakarkandi', 'Shakkariya', 'Ratala',
            'Valli kijangu', 'Chilakada Dumpa', 'Madhura Kizhangue', 'Seb', 'Safarjan', 'Safarchand', 'Applepazham', 'Sema regu', 'Apple',
            'Khoobani', 'Jardalu', 'Jardaloo', 'Sarkkarai Badami', 'Seema badam', 'Sheema pazham', 'Makhanphal', 'Evokado', 'Alpukat',
            'Vennai pazham', 'Venna Pandu', 'Avocado', 'Kela', 'Arati pandu', 'Pazham', 'Kharbooja', 'Teti', 'Kharbooj', 'Parangi pazham', 'Kantlop',
            'Sitaphal', 'Sitafal', 'Sithaphal', 'Seetha pazham', 'Sitaphalam', 'Seethappazham', 'Amla', 'Ambala', 'Awalah', 'Nellikai', 'Usiri',
            'Neli', 'Angoor', 'Draksha', 'Draakshm', 'Dratchai pazham', 'Mundhiringa', 'Amrud', 'Jamfal', 'Peru', 'Koiya pazham', 'Jama', 'Perakka',
            'Litchee', 'Lichi', 'Laichi pazham', 'Litchi Pandu', 'Aam', 'Keri', 'Amba', 'Mambazham', 'Mamidi', 'Manga', 'Kachha aam', 'Kachi keri',
            'Kairi', 'Mangai', 'Narangi or Santra', 'Santra', 'Santre', 'Kichilipazham', 'Narinja', 'Narang', 'Papita', 'Papaiyu', 'Popai',
            'Papali kai', 'Bobbaya', 'Kappanga', 'Nashpati', 'Piyels', 'Berikkai', 'Peri pandu', 'Sabarjil', 'Ananas', 'Annanas', 'Annasi pazham',
            'Anasa', 'Kaitha Chakka', 'Anar', 'Daadam', 'Daalimb', 'Madhulai', 'Danimma', 'Maadhala naarnga', 'Chikku', 'Chikoo', 'Sapota', 'Ganna',
            'Sherdi', 'Usa', 'Karuppan Charu', 'Cheruku Gada', 'Karumbin Neeru', 'Mausambi', 'Mosambi', 'Mosumbi', 'Chaatukudi', 'Battaiah', 'Badam',
            'Baadam', 'Badham', 'Badam kayu', 'Khubani', 'Saara Paruppu', 'Mutta Pazham', 'Supari', 'Sopari', 'Pakku', 'Bettu ginja', 'Paakkatakka',
            'Kaju', 'Mundiri paruppu', 'Jeedi pappu', 'Kasuandi', 'Kopra', 'Koparu', 'Suka khobra', 'Coparai', 'Kobbari', 'Copra', 'Khajur',
            'Perichampazham', 'Kharjoora pandu', 'Eenthapazham', 'Chuhara', 'Kharek', 'Kharik', 'Pericham Pinju', 'Khajoora', 'Kaarakka', 'Anjeer',
            'Atti Pazham', 'Athi Pallu', 'Alsi', 'Alasi', 'Javasu', 'Ali Vidai', 'Cheruchana vithu', 'Phool makhana', 'Makhana', 'Kamal bee',
            'Tamarai vitai', 'Tamara vittanam', 'Thaamara vithu', 'Moongphali', 'Singdana', 'Shengdana', 'Verkadalai', 'Pallilu', 'kappalandi',
            'Khus-khus', 'Khaskhas', 'Khasa khasa', 'Gasagasaalu', 'Kasakasa', 'Pista', 'Pista pappu', 'Kishmish', 'Kismis', 'Trakshai', 'Kismiss',
            'Til', 'Tal', 'Ellu', 'Nuvvulu', 'Magaz', 'Tadabuca bija', 'Tarabuja biyane', 'Tarpucani vitai', 'Puccakaya vittanam',
            'Thanni mthan vithu', 'Rajgira', 'Rajgaro', 'Thenai', 'Jau', 'Jav', 'Satu', 'Barliarisi', 'Barli Biyyam', 'Barli', 'Dalia', 'Fada ghaum',
            'Gavache Satva', 'Godhumai Ravai', 'Godumalu Rawa', 'Gothumbu Nurukku', 'Sama ke chawal', 'Samo /Moraiyo', 'Bhagar /Varai',
            'Kuthirai valli', 'Odalu', 'Kavadapullu', 'Ragi', 'Nachani', 'Kezhvaragu', 'Ragulu', 'Panji pullu', 'Kangni', 'Kang', 'Rala', 'Thinai',
            'Korra biyam', 'Thina', 'Kodra', 'Kodri', 'Kutki', 'Kuri', 'Vari', 'Saamai', 'Sama', 'Chama', 'Bajra', 'Bajri', 'Kambu', 'Sajjalu', 'Kambam',
            'Jowar', 'Juvar', 'Jowari', 'Jonna', 'Chawal', 'Chokha', 'Tandul', 'Arisi', 'Biyam', 'Pachari', 'Poha', 'Pauva', 'Pohe', 'Aval', 'Atukulu',
            'Ukda chawal', 'Bhatabhata cokha', 'Bhata bhopala', 'Puzhungal Arisi', 'Uppudu biyam', 'Puzhungalari', 'Murmura', 'Mamra', 'Churmura',
            'Pori', 'Borugulu', 'Sooji', 'Soji (ravo)', 'Rava', 'Ravai', 'Bombai Rawa', 'Sago', 'Sabudana', 'Javvarisi', 'Saggubiyyam', 'Kappa',
            'Chana dal', 'Chana ni dal', 'Harbaryachi /chanyachi dal', 'Kadalai paruppu', 'Samaga Pappu', 'Kadala parippu', 'Kala chana',
            'desi chana', 'Harbhara', 'Konda kadalai', 'Sanagalu', 'Kadala', 'Chivda dal', 'Pottu kadalai', 'Putnalupappu', 'Varutha Kadala',
            'Lobia (Chawli)', 'Chola', 'Karamani', 'Bobbarlu', 'Payar', 'Urad dal, dhuli', 'Adad ni dal', 'Udid dal', 'Ulutham paruppu',
            'Minapa pappu', 'Uzhunnu parippu', 'Urad dal chilka', 'Fotrawali adad ni dal', 'Ulutham Paruppu', 'Sabut urad', 'Akha adad',
            'Udid', 'Muzhu ulundu', 'Minumulu', 'Uzhunnu', 'Hara cholia', 'Lila chana', 'Cikki', 'Cikpa', 'Cikkan', 'Kabuli chana, chole',
            'kabuli chana', 'Kothukadalai', 'Mudip Chenagulu', 'Vella Kadala', 'Lobia', 'Choli', 'Chawli', 'Karamani Payir', 'Alasandulu',
            'Vanpayar', 'Moong dal, dhuli', 'Mag ni dal', 'Mugachi dal', 'Payatham paruppu', 'Pesarapappu', 'Cheruparipu', 'Sabut moong',
            'Mag', 'Mug', 'Pachai payaru', 'Pesarlu', 'Cherupayar', 'Kulith (kulthi)', 'Kalathi', 'Kulthacha pith', 'Kutirai kiram',
            'Gurra? gr?ma', 'Muthira', 'Masoor dal', 'Masur ni dal', 'Masurachi dal', 'Massor Paruppu', 'Misur Pappu', 'Masoor Parippu',
            'Hara matar', 'Lila vatana', 'Matara', 'Kala matar', 'Kala vatana', 'Taad ka tel', 'Karuppu pattani', 'Karutta pis', 'Safed matar',
            'Safed vatana', 'Pandhara vatana', 'Arhar dal (Toor dal)', 'Tuver ni dal', 'Turichi dal', 'Tuvaram paruppu', 'kandi pappu', 'Thuvara',
            'sarason ka tel', 'Sarasava t?la', 'Moharice tela', 'Katuku enney', 'Ava nune', 'katuk enna', 'Soorjamukhi ka tel', 'Suryamukhi tela',
            'Suryaphula tela', 'Curiyakanti enney', 'Poddutirugu?u nune', 'suryakanti enna', 'Soyaabeen ka tel', 'Soyabin tela', 'Coyapin enney',
            'Soyabin nune', 'Seayabin enna', 'Jaitoon ka tel', 'Olive tela', 'Aliv enney', 'Aliv nune', 'Oliv oyil', 'Rais braan oil',
            'Cokha kothali tela', 'Tandula konda tela', 'Arici tavitu enney', 'Biyyam bran ka nune', 'Ari tavit enna', 'Alasee ka tel',
            'Phleksasida tela', 'Alvitai enney', 'Avise ginjala nune', 'Canavitt enna', 'Moongaphalee ka tel', 'Magaphalinum tela',
            'Sengadana tela', 'Nilakkatalai enney', 'Verusanaga nune', 'Nilakkatala enney', 'Khajura tela', 'Pama tela', 'Pamayil',
            'Tavu?u nune', 'Pana enna', 'til ka tel', 'Tala nu? tela', 'T?lace tela', 'El enney', 'Nuvvula nune', 'ellenna', 'baadaam tel',
            'Badamanum tela', 'Badama tela', 'Patam enney', 'Badam nune', 'badam enna', 'kaajoo ka tel', 'Kaju tela', 'Muntiri enmey', 'Jidipappu',
            'ka?uvanti', 'kanola tel', 'Kenola tela', 'Ka?uku e??ey', 'Avanune', 'kaneala oyil', 'makkhan', 'Venney', 'nakalee makkhan', 'Marjarina',
            'Ve??eyai', 'margarin', 'chhaachh', 'Chasa', 'Taka', 'Mor', 'Majjiga', 'Mattan', 'Instant Full Cream Milk Powder',
            'Instanta phula krima dudhaci pavadara', 'Utanati mulu kirim pal tul', 'Taksana purti krim milk paudar',
            'talksana purnna krim palppeati', 'malae nikala hua doodh kee paudar', 'Skimda dudha pavadara', 'Skimda dudhaci psvadara',
            'Atai nikkiya pal poti', 'Cilikina pala podi', 'skind milkk peati', 'malaee', 'Krima', 'Malai', 'Kirim', 'Krim', 'Paneer', 'Cijha',
            'Cija', 'Cis', 'Cij', 'gaadha doodh', 'Ghatta karelum dudha', 'Atavalele dudha', 'Cuntiya pal', 'Ghanikrta palu', 'baspikaricca pal',
            'Dahee', 'Dahim', 'Dahi', 'Tayir', 'Peregu', 'Tair', 'Murgee', 'Cikana', 'Kombadi', 'Koli', 'Ciken', 'Keali', 'bhede ka maans', 'Matana',
            'Attiraicci', 'mattan', 'jheenge', 'Prona', 'Kolambi', 'Iralkalin', 'Royyalu', 'cem\'min', 'Kekada', 'Karacalo', 'Khekada', 'Nantu', 'Pita',
            'Nant', 'seep', 'Oistara', 'Oyastara', 'Cippi', 'Ayistar', 'muttucippi', 'Katala', 'Ketala', 'Kendai', 'Botchi or Botcha', 'Karakatla, Karaka',
            'Rohoo', 'Rohu', 'Reahu', 'Shaark', 'Sarka', 'Cura', 'Sark', 'Srav', 'Panira', 'Pannir', 'Panir', 'Fennel seeds', 'Asafoetida', 'Basil, holy',
            'Bay leaf', 'Black peppercorns', 'Black salt', 'Butter', 'Caraway seed', 'Black Cardamom', 'Green cardamom', 'Carom seed',
            'Cinnamon stick', 'Citric acid', 'Clarified butter', 'Cloves', 'Coriander seed', 'Coriander leaves', 'Cumin seed', 'Curry leaf',
            'Dill leaves', 'Dried mango powder', 'Dry Pomegranate seeds', 'Dried red chili', 'Dried fenugreek leaves', 'Fenugreek seed',
            'Dried ginger powder', 'Honey', 'Jaggery', 'Mace', 'Mint leaves', 'Milk', 'Mustard seed', 'Nigella seed (Onion seed)', 'Nutmeg',
            'Red chili powder', 'Rock salt', 'Rose water', 'Saffron', 'Salt', 'Star anise', 'Sugar', 'Tamarind', 'Turmeric', 'Vinegar',
            'Amaranth leaves', 'Ash gourd', 'Banana flower', 'Beetroot', 'Bell Pepper (Capsicum)', 'Bitter gourd', 'Bottlegourd',
            'Broad beans (fava beans, lima beans, butter beans)', 'Cabbage', 'Carrot', 'Cauliflower', 'Cluster beans', 'Coconut (fresh)',
            'Colocasia leaves (Taro leaves)', 'Colocasia roots (Taro roots)', 'Coriander leaves (Cilantro)', 'Corn', 'Cucumber', 'Curry leaves',
            'Drumsticks', 'Eggplant (Brinjal or Aubergine)', 'Elephant Yam', 'Fenugreek leaves', 'French Beans (Green beans)', 'Garlic', 'Ginger',
            'Green chili', 'Green onion (Scallian or Spring onion)', 'Green peas', 'Ivy gourd', 'Jackfruit', 'Lemon (Lime)', 'Mushroom',
            'Mustard leaves', 'Okra (Ladies� finger)', 'Onion', 'Plantain (raw banana)', 'Potato', 'Pumpkin', 'Radish (Daikon)', 'Ridge gourd',
            'Shallot (pearl onion)', 'Snake gourd', 'Sorrel leaves', 'Spinach', 'Sweet potato', 'Apple', 'Apricot', 'Avocado (Butterfruit)',
            'Banana', 'Cantaloupe (Musk melon)', 'Custard apple', 'Gooseberry, Indian', 'Grapes', 'Guava', 'Lychee', 'Mango, ripe', 'Mango, unripe',
            'Orange', 'Papaya', 'Pears', 'Pineapple', 'Pomegranate', 'Sapota (Sapodilla)', 'Sugar cane', 'Sweet lime', 'Almond', 'Betel nut',
            'Cashew nut', 'Desiccated coconut', 'Dates', 'Dried date', 'Dried fig', 'Flax seed', 'Lotus seed', 'Peanut', 'Poppy seed', 'Pistachio',
            'Raisin', 'Sesame seed', 'Watermelon seeds', 'Amaranth grain', 'Barley', 'Broken wheat', 'Millet, Barnyard', 'Millet, finger',
            'Millet, foxtail', 'Millet, kodo', 'Millet, Little', 'Millet, pearl', 'Millet, Sorghum', 'Rice', 'Rice, beaten (rice flakes)',
            'Rice, parboiled', 'Rice, puffed', 'Semolina', 'Tapioca', 'Bengal gram, split and skinned', 'Bengal gram, whole (Black chickpeas)',
            'Bengal gram, roasted and split', 'Black eyed beans/peas', 'Black gram, split and skinned', 'Black gram, split and with skin',
            'Black gram, whole', 'Chickpea, green', 'Chickpea, white (Garbanzo beans)', 'Cowpeas, red', 'Green gram, split and skinned',
            'Green gram, whole', 'Horse gram', 'Lentil, pink and split', 'Peas, green', 'Peas, black', 'Peas, white', 'Pigeon peas', 'Mustard Oil',
            'SunflowerOil', 'Soybean Oil', 'Olive Oil', 'Rice Bran Oil', 'FlaxSeeds Oil', 'GroundNut Oil', 'Palm Oil', 'Sesame Oil',
            'Almond Oil (Edible)', 'Cashew Oil', 'Canola Oil', 'Margarine', 'Buttermilk', 'Instant Full Cream Milk Powder', 'Skimmed Milk Powder',
            'Cream', 'Cheese', 'Condensed Milk', 'Yogurt', 'Chicken ', 'Mutton', 'Prawns', 'Crab', 'Oyster', 'Katla', 'Rohu', 'Shark', 'Paneer'
        ];
        this.recipe = [];
        this.filteredIngredients = this.ingredientCtrl.valueChanges.pipe(startWith(null), map((ingredient) => ingredient ? this.filter(ingredient) : this.allIngredients.slice()));
        this.name = localStorage.getItem('name');
    }
    // add(event: MatChipInputEvent): void {
    //   const input = event.input;
    //   const value = event.value;
    //   // Add our fruit
    //   if ((value || '').trim()) {
    //     this.ingredients.push(value.trim());
    //   }
    //   // Reset the input value
    //   if (input) {
    //     input.value = '';
    //   }
    //   this.ingredientCtrl.setValue(null);
    // }
    remove(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        if (index >= 0) {
            this.ingredients.splice(index, 1);
        }
    }
    filter(name) {
        return this.allIngredients.filter(ingredient => ingredient.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    selected(event) {
        this.ingredients.push(event.option.viewValue);
        this.ingredientInput.nativeElement.value = '';
        this.ingredientCtrl.setValue(null);
    }
    showPossibleRecipes() {
        // console.log(this.ingredients);
        let list = '';
        for (let i = 0; i < this.ingredients.length; i++) {
            list += '_' + this.ingredients[i];
        }
        console.log(list);
        this.fservice.getallrecommendedrecipeByIngredients(list).subscribe((data) => { this.recipe = data; console.log(this.recipe); });
    }
    ngOnInit() {
        let username = localStorage.getItem('username');
        if (username == null) {
            this.router.navigateByUrl('/login');
        }
    }
};
tslib_1.__decorate([
    ViewChild('ingredientInput', { static: false })
], PossiblerecipesComponent.prototype, "ingredientInput", void 0);
PossiblerecipesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-possiblerecipes',
        templateUrl: './possiblerecipes.component.html',
        styleUrls: ['./possiblerecipes.component.css']
    })
], PossiblerecipesComponent);
export { PossiblerecipesComponent };
//# sourceMappingURL=possiblerecipes.component.js.map