(() => {
'use strict';
const PRODUCTS = {"dinner-0-0":{"id":"dinner-0-0","cents":250,"names":{"en":"Bread for 2 with sourdough","gr":"Ζυμωτό Ψωμί για 2 με προζύμι"},"variant":null},"dinner-1-0":{"id":"dinner-1-0","cents":1200,"names":{"en":"The Famous Greek Salad","gr":"Η φημισμένη Ελληνική Σαλάτα"},"variant":null},"dinner-2-0":{"id":"dinner-2-0","cents":1350,"names":{"en":"Green Salad with Chicken","gr":"Πράσινη Σαλάτα με κοτόπουλο"},"variant":null},"dinner-3-0":{"id":"dinner-3-0","cents":1300,"names":{"en":"Beetroot Salad","gr":"Παντζαροσαλάτα"},"variant":null},"dinner-4-0":{"id":"dinner-4-0","cents":2300,"names":{"en":"Cycladic Cheeses platter","gr":"Ποικιλία Κυκλαδίτικων Τυριών"},"variant":null},"dinner-5-0":{"id":"dinner-5-0","cents":2100,"names":{"en":"Charcuterie platter","gr":"Ποικιλία Αλλαντικών"},"variant":null},"dinner-6-0":{"id":"dinner-6-0","cents":1150,"names":{"en":"Bruschetta with Smoked Salmon","gr":"Μπρουσκέτα με Καπνιστό Σολομό"},"variant":null},"dinner-7-0":{"id":"dinner-7-0","cents":1050,"names":{"en":"Smoked Prosciutto Bruschetta","gr":"Μπρουσκέτα με Καπνιστό Prosciutto"},"variant":null},"dinner-8-0":{"id":"dinner-8-0","cents":1250,"names":{"en":"Grilled Feta cheese","gr":"Ψητό Κρασοτύρι Φέτας"},"variant":null},"dinner-9-0":{"id":"dinner-9-0","cents":1350,"names":{"en":"Pinsa Prosciutto","gr":"Πίνσα Προσούτο"},"variant":null},"dinner-10-0":{"id":"dinner-10-0","cents":1100,"names":{"en":"Pinsa Margarita","gr":"Πίνσα Μαργαρίτα"},"variant":null},"dinner-11-0":{"id":"dinner-11-0","cents":1300,"names":{"en":"Pinsa Syros","gr":"Πίνσα Syros"},"variant":null},"dinner-12-0":{"id":"dinner-12-0","cents":1100,"names":{"en":"Hot Dog with grilled pork","gr":"Hot Dog με ψητή Γουρουνοπούλα"},"variant":null},"dinner-13-0":{"id":"dinner-13-0","cents":1500,"names":{"en":"Wild Mushroom Risotto","gr":"Ριζότο Άγριων Μανιταριών"},"variant":null},"dinner-14-0":{"id":"dinner-14-0","cents":1450,"names":{"en":"Authentic Carbonara","gr":"Αυθεντική καρμπονάρα"},"variant":null},"dinner-15-0":{"id":"dinner-15-0","cents":1350,"names":{"en":"Skiouficto with Pesto","gr":"Σκιουφιχτό με Πέστο"},"variant":null},"dinner-16-0":{"id":"dinner-16-0","cents":2250,"names":{"en":"Fresh Sea-Bass Fillet","gr":"Φρέσκο Λαβράκι Φιλέτο"},"variant":null},"dinner-17-0":{"id":"dinner-17-0","cents":3300,"names":{"en":"Fresh Beef Fillet","gr":"Φρέσκο Μοσχαρίσιο Φιλέτο"},"variant":null},"dinner-18-0":{"id":"dinner-18-0","cents":1450,"names":{"en":"Pork Chops","gr":"Χοιρινό Καρέ"},"variant":null},"dinner-19-0":{"id":"dinner-19-0","cents":1450,"names":{"en":"Chicken Fillet","gr":"Φιλέτο Κοτόπουλο"},"variant":null},"dinner-20-0":{"id":"dinner-20-0","cents":2350,"names":{"en":"Tagliatelle with Lamb Carpaccio","gr":"Ταλιατέλες με Καρπάτσιο Αρνάκι"},"variant":null},"dinner-21-0":{"id":"dinner-21-0","cents":1450,"names":{"en":"Divine Beef Burger","gr":"Divine Beef Burger"},"variant":null},"dinner-22-0":{"id":"dinner-22-0","cents":1450,"names":{"en":"Vegan Burger","gr":"Vegan Burger Λαχανικών"},"variant":null},"dinner-23-0":{"id":"dinner-23-0","cents":1600,"names":{"en":"Vegan Moussaka","gr":"Vegan Μουσακάς"},"variant":null},"dinner-24-0":{"id":"dinner-24-0","cents":1200,"names":{"en":"Dark Chocolate Mousse","gr":"Μους Μαύρης Σοκολάτας"},"variant":null},"dinner-25-0":{"id":"dinner-25-0","cents":1100,"names":{"en":"Tiramisu","gr":"Τιραμισού"},"variant":null},"dinner-26-0":{"id":"dinner-26-0","cents":850,"names":{"en":"Tahini Ice Cream","gr":"Παγωτό από Ταχίνι"},"variant":null},"brunch-0-0":{"id":"brunch-0-0","cents":750,"names":{"gr":"Αυγά μάτια","en":"Fried Eggs"},"variant":null},"brunch-1-0":{"id":"brunch-1-0","cents":850,"names":{"gr":"Ομελέτα","en":"Omelette"},"variant":null},"brunch-2-0":{"id":"brunch-2-0","cents":900,"names":{"gr":"Αυγά scrambled","en":"Scrambled Eggs"},"variant":null},"brunch-3-0":{"id":"brunch-3-0","cents":800,"names":{"gr":"Αυγά σακσούκα","en":"Shakshuka Eggs"},"variant":null},"brunch-4-0":{"id":"brunch-4-0","cents":1050,"names":{"gr":"Αυγά Benedict","en":"Benedict Eggs"},"variant":null},"brunch-5-0":{"id":"brunch-5-0","cents":1350,"names":{"gr":"Smoked salmon avocado toast","en":"Smoked salmon avocado toast"},"variant":null},"brunch-6-0":{"id":"brunch-6-0","cents":700,"names":{"gr":"Το Σάντουιτς (Με αυγά +2€)","en":"The Sandwich (With Eggs +2€)"},"variant":null},"brunch-7-0":{"id":"brunch-7-0","cents":850,"names":{"gr":"Club sandwich","en":"Club sandwich"},"variant":null},"brunch-8-0":{"id":"brunch-8-0","cents":950,"names":{"gr":"Pancakes αλμυρά","en":"Savoury Pancakes"},"variant":null},"brunch-9-0":{"id":"brunch-9-0","cents":850,"names":{"gr":"Pancakes με σοκολάτα","en":"Pancakes with Chocolate"},"variant":null},"brunch-10-0":{"id":"brunch-10-0","cents":800,"names":{"gr":"Pancakes με μέλι","en":"Pancakes with Honey"},"variant":null},"brunch-11-0":{"id":"brunch-11-0","cents":750,"names":{"gr":"Γιαούρτι με φρούτα","en":"Greek Yogurt with Fruits"},"variant":null},"brunch-12-0":{"id":"brunch-12-0","cents":950,"names":{"gr":"Tahini Healthy Bowl","en":"Tahini Healthy Bowl"},"variant":null},"cocktails-0-0":{"id":"cocktails-0-0","cents":1000,"names":{"en":"Pornstar Martini"},"variant":null},"cocktails-1-0":{"id":"cocktails-1-0","cents":1000,"names":{"en":"Mojito"},"variant":null},"cocktails-2-0":{"id":"cocktails-2-0","cents":1000,"names":{"en":"Daiquiri"},"variant":null},"cocktails-3-0":{"id":"cocktails-3-0","cents":1000,"names":{"en":"Caipirinha"},"variant":null},"cocktails-4-0":{"id":"cocktails-4-0","cents":1000,"names":{"en":"Moscow Mule"},"variant":null},"cocktails-5-0":{"id":"cocktails-5-0","cents":1000,"names":{"en":"Old Fashioned"},"variant":null},"cocktails-6-0":{"id":"cocktails-6-0","cents":1100,"names":{"en":"Margarita"},"variant":null},"cocktails-7-0":{"id":"cocktails-7-0","cents":1100,"names":{"en":"Tommy’s Margarita"},"variant":null},"cocktails-8-0":{"id":"cocktails-8-0","cents":1100,"names":{"en":"Mai Tai"},"variant":null},"cocktails-9-0":{"id":"cocktails-9-0","cents":1100,"names":{"en":"Sour Cocktails"},"variant":null},"cocktails-10-0":{"id":"cocktails-10-0","cents":1200,"names":{"en":"Piña Colada"},"variant":null},"cocktails-11-0":{"id":"cocktails-11-0","cents":1300,"names":{"en":"Negroni"},"variant":null},"cocktails-12-0":{"id":"cocktails-12-0","cents":1400,"names":{"en":"Zombie"},"variant":null},"cocktails-13-0":{"id":"cocktails-13-0","cents":1400,"names":{"en":"Martini Dry/Dirty"},"variant":null},"cocktails-14-0":{"id":"cocktails-14-0","cents":1300,"names":{"en":"Crimson Kiss"},"variant":null},"cocktails-15-0":{"id":"cocktails-15-0","cents":1300,"names":{"en":"Basil Breeze"},"variant":null},"cocktails-16-0":{"id":"cocktails-16-0","cents":1400,"names":{"en":"Walkin’ On The Sun"},"variant":null},"cocktails-17-0":{"id":"cocktails-17-0","cents":1300,"names":{"en":"Metaxa Apricot Sour"},"variant":null},"cocktails-18-0":{"id":"cocktails-18-0","cents":1200,"names":{"en":"Irreale"},"variant":null},"cocktails-19-0":{"id":"cocktails-19-0","cents":1400,"names":{"en":"Velvet Bloom"},"variant":null},"cocktails-20-0":{"id":"cocktails-20-0","cents":1300,"names":{"en":"Bubble Trouble"},"variant":null},"cocktails-21-0":{"id":"cocktails-21-0","cents":1300,"names":{"en":"Theros"},"variant":null},"cocktails-22-0":{"id":"cocktails-22-0","cents":1300,"names":{"en":"Sunset Bliss"},"variant":null},"cocktails-23-0":{"id":"cocktails-23-0","cents":1600,"names":{"en":"Smoking Summer"},"variant":null},"cocktails-24-0":{"id":"cocktails-24-0","cents":1100,"names":{"en":"Jungle Siesta"},"variant":null},"cocktails-25-0":{"id":"cocktails-25-0","cents":1000,"names":{"en":"Strawberry Smash"},"variant":null},"cocktails-26-0":{"id":"cocktails-26-0","cents":800,"names":{"en":"Greenall's"},"variant":null},"cocktails-27-0":{"id":"cocktails-27-0","cents":800,"names":{"en":"Beefeater"},"variant":null},"cocktails-28-0":{"id":"cocktails-28-0","cents":900,"names":{"en":"Bombay Sapphire"},"variant":null},"cocktails-29-0":{"id":"cocktails-29-0","cents":900,"names":{"en":"Tanqueray"},"variant":null},"cocktails-30-0":{"id":"cocktails-30-0","cents":900,"names":{"en":"Tanqueray 0.0"},"variant":null},"cocktails-31-0":{"id":"cocktails-31-0","cents":1000,"names":{"en":"Votanikon"},"variant":null},"cocktails-32-0":{"id":"cocktails-32-0","cents":1200,"names":{"en":"Hendrick's"},"variant":null},"cocktails-33-0":{"id":"cocktails-33-0","cents":1200,"names":{"en":"Ophir"},"variant":null},"cocktails-34-0":{"id":"cocktails-34-0","cents":1200,"names":{"en":"Etsu"},"variant":null},"cocktails-35-0":{"id":"cocktails-35-0","cents":1500,"names":{"en":"Monkey 47"},"variant":null},"cocktails-36-0":{"id":"cocktails-36-0","cents":1500,"names":{"en":"Elephant"},"variant":null},"cocktails-37-0":{"id":"cocktails-37-0","cents":800,"names":{"en":"Barceló Blanco"},"variant":null},"cocktails-38-0":{"id":"cocktails-38-0","cents":900,"names":{"en":"Barceló Añejo"},"variant":null},"cocktails-39-0":{"id":"cocktails-39-0","cents":1000,"names":{"en":"Barceló Imperial"},"variant":null},"cocktails-40-0":{"id":"cocktails-40-0","cents":800,"names":{"en":"Bacardi White"},"variant":null},"cocktails-41-0":{"id":"cocktails-41-0","cents":900,"names":{"en":"Havana Especial"},"variant":null},"cocktails-42-0":{"id":"cocktails-42-0","cents":900,"names":{"en":"Sailor Jerry"},"variant":null},"cocktails-43-0":{"id":"cocktails-43-0","cents":1200,"names":{"en":"Diplomatico"},"variant":null},"cocktails-44-0":{"id":"cocktails-44-0","cents":1200,"names":{"en":"Papa's Pilar"},"variant":null},"cocktails-45-0":{"id":"cocktails-45-0","cents":1200,"names":{"en":"Chairman's Reserve"},"variant":null},"cocktails-46-0":{"id":"cocktails-46-0","cents":1400,"names":{"en":"Don Papa"},"variant":null},"cocktails-47-0":{"id":"cocktails-47-0","cents":1400,"names":{"en":"Don Papa Baroko"},"variant":null},"cocktails-48-0":{"id":"cocktails-48-0","cents":1400,"names":{"en":"Bumbu the Original"},"variant":null},"cocktails-49-0":{"id":"cocktails-49-0","cents":900,"names":{"en":"Rooster Blanco"},"variant":null},"cocktails-50-0":{"id":"cocktails-50-0","cents":900,"names":{"en":"Rooster Reposado"},"variant":null},"cocktails-51-0":{"id":"cocktails-51-0","cents":1200,"names":{"en":"Mezcal"},"variant":null},"cocktails-52-0":{"id":"cocktails-52-0","cents":1400,"names":{"en":"Patron Silver"},"variant":null},"cocktails-53-0":{"id":"cocktails-53-0","cents":1400,"names":{"en":"Patron Reposado"},"variant":null},"cocktails-54-0":{"id":"cocktails-54-0","cents":4500,"names":{"en":"Clase Azul Reposado"},"variant":null},"cocktails-55-0":{"id":"cocktails-55-0","cents":800,"names":{"en":"Stolichnaya"},"variant":null},"cocktails-56-0":{"id":"cocktails-56-0","cents":800,"names":{"en":"Smirnoff"},"variant":null},"cocktails-57-0":{"id":"cocktails-57-0","cents":800,"names":{"en":"Moskovskaya"},"variant":null},"cocktails-58-0":{"id":"cocktails-58-0","cents":1200,"names":{"en":"Grey Goose"},"variant":null},"cocktails-59-0":{"id":"cocktails-59-0","cents":1200,"names":{"en":"Ciroc"},"variant":null},"cocktails-60-0":{"id":"cocktails-60-0","cents":1200,"names":{"en":"Belvedere"},"variant":null},"cocktails-61-0":{"id":"cocktails-61-0","cents":1400,"names":{"en":"Beluga Transatlantic"},"variant":null},"cocktails-62-0":{"id":"cocktails-62-0","cents":800,"names":{"en":"Haig"},"variant":null},"cocktails-63-0":{"id":"cocktails-63-0","cents":800,"names":{"en":"Famous Grouse"},"variant":null},"cocktails-64-0":{"id":"cocktails-64-0","cents":800,"names":{"en":"Dewar's"},"variant":null},"cocktails-65-0":{"id":"cocktails-65-0","cents":800,"names":{"en":"Cutty Sark"},"variant":null},"cocktails-66-0":{"id":"cocktails-66-0","cents":800,"names":{"en":"Tullamore Dew"},"variant":null},"cocktails-67-0":{"id":"cocktails-67-0","cents":800,"names":{"en":"Johnnie Walker Red"},"variant":null},"cocktails-68-0":{"id":"cocktails-68-0","cents":900,"names":{"en":"Four Roses"},"variant":null},"cocktails-69-0":{"id":"cocktails-69-0","cents":1000,"names":{"en":"Jack Daniel's"},"variant":null},"cocktails-70-0":{"id":"cocktails-70-0","cents":1000,"names":{"en":"Buffalo Trace"},"variant":null},"cocktails-71-0":{"id":"cocktails-71-0","cents":1000,"names":{"en":"Chivas"},"variant":null},"cocktails-72-0":{"id":"cocktails-72-0","cents":1000,"names":{"en":"Dimple"},"variant":null},"cocktails-73-0":{"id":"cocktails-73-0","cents":1000,"names":{"en":"Johnnie Walker Black"},"variant":null},"cocktails-74-0":{"id":"cocktails-74-0","cents":1400,"names":{"en":"Nikka (from the barrel)"},"variant":null},"cocktails-75-0":{"id":"cocktails-75-0","cents":1600,"names":{"en":"Suntory"},"variant":null},"cocktails-76-0":{"id":"cocktails-76-0","cents":1800,"names":{"en":"Lagavulin"},"variant":null},"cocktails-77-0":{"id":"cocktails-77-0","cents":800,"names":{"en":"Metaxa 5*"},"variant":null},"cocktails-78-0":{"id":"cocktails-78-0","cents":1200,"names":{"en":"Metaxa 12*"},"variant":null},"cocktails-79-0":{"id":"cocktails-79-0","cents":1200,"names":{"en":"Bache XO"},"variant":null},"cocktails-80-0":{"id":"cocktails-80-0","cents":1400,"names":{"en":"Bache VSOP"},"variant":null},"wines-0-0":{"id":"wines-0-0","cents":500,"names":{"en":"Έρωχος Λευκός"},"variant":"glass"},"wines-0-1":{"id":"wines-0-1","cents":2200,"names":{"en":"Έρωχος Λευκός"},"variant":"bottle"},"wines-1-0":{"id":"wines-1-0","cents":600,"names":{"en":"Μαλαγουζιά"},"variant":"glass"},"wines-1-1":{"id":"wines-1-1","cents":2750,"names":{"en":"Μαλαγουζιά"},"variant":"bottle"},"wines-2-0":{"id":"wines-2-0","cents":2800,"names":{"en":"Φάμπρικα (Σύρος)"},"variant":null},"wines-3-0":{"id":"wines-3-0","cents":3400,"names":{"en":"Σαν τα Μάραθα (Σύρος)"},"variant":null},"wines-4-0":{"id":"wines-4-0","cents":2700,"names":{"en":"Viña Esmeralda"},"variant":null},"wines-5-0":{"id":"wines-5-0","cents":2850,"names":{"en":"Μπλέ Τρακτέρ"},"variant":null},"wines-6-0":{"id":"wines-6-0","cents":2850,"names":{"en":"Sauvignon Blanc"},"variant":null},"wines-7-0":{"id":"wines-7-0","cents":3750,"names":{"en":"Τέχνη Αλυπίας"},"variant":null},"wines-8-0":{"id":"wines-8-0","cents":3950,"names":{"en":"Βιβλία Χώρα"},"variant":null},"wines-9-0":{"id":"wines-9-0","cents":4100,"names":{"en":"Chateau Julia Chardonnay"},"variant":null},"wines-10-0":{"id":"wines-10-0","cents":4600,"names":{"en":"Μαλαγουζιά"},"variant":null},"wines-11-0":{"id":"wines-11-0","cents":7500,"names":{"en":"Όβηλος"},"variant":null},"wines-12-0":{"id":"wines-12-0","cents":9500,"names":{"en":"Τρία Αμπέλια"},"variant":null},"wines-13-0":{"id":"wines-13-0","cents":600,"names":{"en":"Άκρες"},"variant":"glass"},"wines-13-1":{"id":"wines-13-1","cents":2450,"names":{"en":"Άκρες"},"variant":"bottle"},"wines-14-0":{"id":"wines-14-0","cents":700,"names":{"en":"Τρεις Μάγισσες"},"variant":"glass"},"wines-14-1":{"id":"wines-14-1","cents":3100,"names":{"en":"Τρεις Μάγισσες"},"variant":"bottle"},"wines-15-0":{"id":"wines-15-0","cents":2850,"names":{"en":"Μπλέ Τρακτέρ"},"variant":null},"wines-16-0":{"id":"wines-16-0","cents":4500,"names":{"en":"Domain Costa Lazaridi Rosé"},"variant":null},"wines-17-0":{"id":"wines-17-0","cents":4500,"names":{"en":"Idylle d'Achinos"},"variant":null},"wines-18-0":{"id":"wines-18-0","cents":4700,"names":{"en":"Ξινόμαυρο"},"variant":null},"wines-19-0":{"id":"wines-19-0","cents":4200,"names":{"en":"Ουσύρα Ροζέ (Σύρος) bio"},"variant":null},"wines-20-0":{"id":"wines-20-0","cents":500,"names":{"en":"Έρωχος Ερυθρός"},"variant":"glass"},"wines-20-1":{"id":"wines-20-1","cents":2200,"names":{"en":"Έρωχος Ερυθρός"},"variant":"bottle"},"wines-21-0":{"id":"wines-21-0","cents":700,"names":{"en":"Πόρτες Merlot"},"variant":"glass"},"wines-21-1":{"id":"wines-21-1","cents":3100,"names":{"en":"Πόρτες Merlot"},"variant":"bottle"},"wines-22-0":{"id":"wines-22-0","cents":2850,"names":{"en":"Μπλέ Τρακτέρ"},"variant":null},"wines-23-0":{"id":"wines-23-0","cents":4800,"names":{"en":"Βιβλία Χώρα"},"variant":null},"wines-24-0":{"id":"wines-24-0","cents":5000,"names":{"en":"Chateau Julia Merlot"},"variant":null},"wines-25-0":{"id":"wines-25-0","cents":7100,"names":{"en":"Κτήμα Άλφα"},"variant":null},"wines-26-0":{"id":"wines-26-0","cents":10900,"names":{"en":"Μαυροτράγανο"},"variant":null},"wines-27-0":{"id":"wines-27-0","cents":900,"names":{"en":"Σπιτική Λευκή Sangria"},"variant":null},"wines-28-0":{"id":"wines-28-0","cents":600,"names":{"en":"Σπιτική Κόκκινη Sangria"},"variant":null},"wines-29-0":{"id":"wines-29-0","cents":700,"names":{"en":"Prosecco Extra Dry"},"variant":"glass"},"wines-29-1":{"id":"wines-29-1","cents":3500,"names":{"en":"Prosecco Extra Dry"},"variant":"bottle"},"wines-30-0":{"id":"wines-30-0","cents":700,"names":{"en":"Moscato D'Asti"},"variant":"glass"},"wines-30-1":{"id":"wines-30-1","cents":3500,"names":{"en":"Moscato D'Asti"},"variant":"bottle"},"wines-31-0":{"id":"wines-31-0","cents":350,"names":{"en":"Νύμφη Draft 250ml"},"variant":null},"wines-32-0":{"id":"wines-32-0","cents":600,"names":{"en":"Νύμφη Draft 500ml"},"variant":null},"wines-33-0":{"id":"wines-33-0","cents":450,"names":{"en":"Μάμος αφιλτράριστη / unfiltered"},"variant":null},"wines-34-0":{"id":"wines-34-0","cents":550,"names":{"en":"Νήσος Βιολογική"},"variant":null},"wines-35-0":{"id":"wines-35-0","cents":650,"names":{"en":"Νήσος 7 Μποφόρ"},"variant":null},"wines-36-0":{"id":"wines-36-0","cents":800,"names":{"en":"Septem 8η Μέρα"},"variant":null},"wines-37-0":{"id":"wines-37-0","cents":650,"names":{"en":"Erdinger"},"variant":null},"wines-38-0":{"id":"wines-38-0","cents":700,"names":{"en":"Guinness"},"variant":null},"wines-39-0":{"id":"wines-39-0","cents":600,"names":{"en":"Sol"},"variant":null},"wines-40-0":{"id":"wines-40-0","cents":800,"names":{"en":"Lagunitas IPA"},"variant":null},"wines-41-0":{"id":"wines-41-0","cents":450,"names":{"en":"Alfa"},"variant":null},"wines-42-0":{"id":"wines-42-0","cents":450,"names":{"en":"Heineken 0.0"},"variant":null},"wines-43-0":{"id":"wines-43-0","cents":500,"names":{"en":"Μηλοκλέφτης"},"variant":null},"coffee-0-0":{"id":"coffee-0-0","cents":220,"names":{"gr":"Ελληνικός (μονός)","en":"Greek coffee (single)"},"variant":null},"coffee-1-0":{"id":"coffee-1-0","cents":350,"names":{"gr":"Ελληνικός (διπλός)","en":"Greek coffee (double)"},"variant":null},"coffee-2-0":{"id":"coffee-2-0","cents":350,"names":{"gr":"Nescafé στιγμιαίος (κρύος ή ζεστός)","en":"Nescafé instant coffee (hot or cold)"},"variant":null},"coffee-3-0":{"id":"coffee-3-0","cents":380,"names":{"gr":"Φίλτρου ζεστός","en":"Filter coffee"},"variant":null},"coffee-4-0":{"id":"coffee-4-0","cents":450,"names":{"gr":"Φίλτρου κρύος","en":"Cold Brew"},"variant":null},"coffee-5-0":{"id":"coffee-5-0","cents":250,"names":{"gr":"Εσπρέσο (μονός)","en":"Espresso (single)"},"variant":null},"coffee-6-0":{"id":"coffee-6-0","cents":370,"names":{"gr":"Εσπρέσο (διπλός)","en":"Espresso (double)"},"variant":null},"coffee-7-0":{"id":"coffee-7-0","cents":400,"names":{"gr":"Καπουτσίνο (μονός)","en":"Cappuccino (single)"},"variant":null},"coffee-8-0":{"id":"coffee-8-0","cents":450,"names":{"gr":"Καπουτσίνο (διπλός)","en":"Cappuccino (double)"},"variant":null},"coffee-9-0":{"id":"coffee-9-0","cents":400,"names":{"gr":"Φρέντο Εσπρέσο","en":"Freddo Espresso"},"variant":null},"coffee-10-0":{"id":"coffee-10-0","cents":400,"names":{"gr":"Φρέντο Καπουτσίνο","en":"Freddo Cappuccino"},"variant":null},"coffee-11-0":{"id":"coffee-11-0","cents":330,"names":{"gr":"Εσπρέσο Αμερικάνο (μονός)","en":"Espresso Americano (single)"},"variant":null},"coffee-12-0":{"id":"coffee-12-0","cents":370,"names":{"gr":"Εσπρέσο Αμερικάνο (διπλός)","en":"Espresso Americano (double)"},"variant":null},"coffee-13-0":{"id":"coffee-13-0","cents":400,"names":{"gr":"Καπουτσίνο Λάτε","en":"Cappuccino Latte"},"variant":null},"coffee-14-0":{"id":"coffee-14-0","cents":450,"names":{"gr":"Φλατ Γουάιτ","en":"Flat White"},"variant":null},"coffee-15-0":{"id":"coffee-15-0","cents":30,"names":{"gr":"* Γάλα αμυγδάλου, βρώμης, καρύδας, αρακά","en":"* Almond, oat, coconut, pea Milk"},"variant":null},"coffee-16-0":{"id":"coffee-16-0","cents":430,"names":{"gr":"Σοκολάτα (ζεστή ή κρύα)","en":"Chocolate (hot or cold)"},"variant":null},"coffee-17-0":{"id":"coffee-17-0","cents":430,"names":{"gr":"Σοκολάτα Φουντούκι","en":"Hazelnut chocolate"},"variant":null},"coffee-18-0":{"id":"coffee-18-0","cents":430,"names":{"gr":"Σοκολάτα Καραμέλα","en":"Caramel chocolate"},"variant":null},"coffee-19-0":{"id":"coffee-19-0","cents":430,"names":{"gr":"Σοκολάτα Φράουλα","en":"Strawberry chocolate"},"variant":null},"coffee-20-0":{"id":"coffee-20-0","cents":430,"names":{"gr":"Λευκή Σοκολάτα","en":"White chocolate"},"variant":null},"coffee-21-0":{"id":"coffee-21-0","cents":50,"names":{"gr":"* Σαντιγί","en":"* Whipped Cream"},"variant":null},"coffee-22-0":{"id":"coffee-22-0","cents":350,"names":{"gr":"Ινδικό Παραμύθι","en":"Indian Fairy Tale"},"variant":null},"coffee-23-0":{"id":"coffee-23-0","cents":350,"names":{"gr":"Goji-Açaí","en":"Goji-Açaí"},"variant":null},"coffee-24-0":{"id":"coffee-24-0","cents":350,"names":{"gr":"Yogi Tea","en":"Yogi Tea"},"variant":null},"coffee-25-0":{"id":"coffee-25-0","cents":350,"names":{"gr":"Μυρωμένος Θάμνος","en":"Scented Bush"},"variant":null},"coffee-26-0":{"id":"coffee-26-0","cents":350,"names":{"gr":"Olympos Detox bio","en":"Olympos Detox bio"},"variant":null},"coffee-27-0":{"id":"coffee-27-0","cents":350,"names":{"gr":"Πράσινο","en":"Green"},"variant":null},"coffee-28-0":{"id":"coffee-28-0","cents":350,"names":{"gr":"Λεμόνι","en":"Lemon"},"variant":null},"coffee-29-0":{"id":"coffee-29-0","cents":350,"names":{"gr":"Φρούτα του Δάσους","en":"Forest Fruit"},"variant":null},"coffee-30-0":{"id":"coffee-30-0","cents":350,"names":{"gr":"Strong Breakfast","en":"Strong Breakfast"},"variant":null},"coffee-31-0":{"id":"coffee-31-0","cents":350,"names":{"gr":"Χαμομήλι","en":"Chamomile"},"variant":null},"coffee-32-0":{"id":"coffee-32-0","cents":450,"names":{"gr":"Feeju Τσάι του Βουνού","en":"Feeju Mountain Tea"},"variant":null},"coffee-33-0":{"id":"coffee-33-0","cents":450,"names":{"gr":"Feeju Πράσινο Τσάι","en":"Feeju Green Tea"},"variant":null},"coffee-34-0":{"id":"coffee-34-0","cents":450,"names":{"gr":"Feeju Τσάι Κεϋλάνης","en":"Feeju Ceylon Tea"},"variant":null},"coffee-35-0":{"id":"coffee-35-0","cents":450,"names":{"gr":"Feeju Τσάι Μάτσα","en":"Feeju Matcha Tea"},"variant":null},"coffee-36-0":{"id":"coffee-36-0","cents":350,"names":{"gr":"Πράσινο","en":"Green"},"variant":null},"coffee-37-0":{"id":"coffee-37-0","cents":350,"names":{"gr":"Λεμόνι","en":"Lemon"},"variant":null},"coffee-38-0":{"id":"coffee-38-0","cents":350,"names":{"gr":"Ροδάκινο","en":"Peach"},"variant":null},"coffee-39-0":{"id":"coffee-39-0","cents":450,"names":{"gr":"Πορτοκάλι","en":"Orange"},"variant":null},"coffee-40-0":{"id":"coffee-40-0","cents":550,"names":{"gr":"Πορτοκάλι, Μπανάνα, Μήλο ή Ροδάκινο","en":"Orange, Banana, Apple or Peach"},"variant":null},"coffee-41-0":{"id":"coffee-41-0","cents":600,"names":{"gr":"Ροζ Γκρέιπφρουτ, Πορτοκάλι, Καρότο","en":"Pink Grapefruit, Orange, Carrot"},"variant":null},"coffee-42-0":{"id":"coffee-42-0","cents":600,"names":{"gr":"Μπανάνα, Μάνγκο, Πορτοκάλι","en":"Banana, Mango, Orange"},"variant":null},"coffee-43-0":{"id":"coffee-43-0","cents":750,"names":{"gr":"Καρότο, Πράσινο Μήλο, Παντζάρι","en":"Carrot, Green Apple, Beet"},"variant":null},"coffee-44-0":{"id":"coffee-44-0","cents":450,"names":{"gr":"B-Fresh :","en":"B-Fresh:"},"variant":null},"coffee-45-0":{"id":"coffee-45-0","cents":500,"names":{"gr":"Three Cents:","en":"Three Cents:"},"variant":null},"coffee-46-0":{"id":"coffee-46-0","cents":600,"names":{"gr":"Red Bull","en":"Red Bull"},"variant":null},"coffee-47-0":{"id":"coffee-47-0","cents":850,"names":{"gr":"San Benedetto sparkling","en":"San Benedetto sparkling"},"variant":null},"coffee-48-0":{"id":"coffee-48-0","cents":250,"names":{"gr":"Φυσικό Μεταλλικό Νερό","en":"Mineral water"},"variant":null},"coffee-49-0":{"id":"coffee-49-0","cents":400,"names":{"gr":"Ανθρακούχο Νερό","en":"Sparkling water"},"variant":null},"coffee-50-0":{"id":"coffee-50-0","cents":350,"names":{"gr":"Αναψυκτικά","en":"Soft drinks"},"variant":null}};
const API = 'https://pdbdjiobvbxbjbqacpoy.supabase.co/functions/v1/fox-cart';
const KEY = 'fox-selection-v1', LIFE = 6*60*60*1000;
const $ = id => document.getElementById(id);
const en = () => document.getElementById('home').lang === 'en';
const t = (gr,eng) => en()?eng:gr;
const money = cents => new Intl.NumberFormat(en()?'en-IE':'el-GR',{style:'currency',currency:'EUR'}).format(cents/100);
const name = product => {
 const p=PRODUCTS[product];
 if(!p) return product;
 return (p.names[en()?'en':'gr']||p.names.gr||p.names.en) +
 (p.variant ? ' · '+(p.variant==='glass'?t('Ποτήρι','Glass'):t('Φιάλη','Bottle')):'');
};
let state={personal:[],expires:Date.now()+LIFE,token:crypto.randomUUID(),group:null};
try {
 const saved=JSON.parse(localStorage.getItem(KEY));
 if(saved && saved.expires>Date.now() && Array.isArray(saved.personal)) {
  state={...state,...saved};
  state.personal=state.personal.filter(r=>PRODUCTS[r.product]&&Number.isInteger(r.quantity)&&r.quantity>0&&r.quantity<=99);
 }
} catch {}
let groupData=null, busy=false, waiter=false, invite=false, editing=false, epoch=0, lastSnapshot='', returnFocus=null;
const party=new URL(location.href).searchParams.get('party');
let pendingParty=/^[0-9a-f-]{36}$/i.test(party||'')?party:null;
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state));}catch{}};
const rows=()=>state.group?(groupData?.items||[]):state.personal;
const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const button=(text,fn,cls)=>{const b=node('button',text,cls);b.type='button';b.addEventListener('click',fn);return b;};
const dialog=node('dialog',undefined,'selection-dialog');dialog.id='selection-dialog';
dialog.setAttribute('aria-labelledby','selection-title');
const head=node('div',undefined,'selection-head');
const title=node('h2');title.id='selection-title';
const close=button('×',()=>dialog.close(),'selection-close');close.setAttribute('aria-label',t('Κλείσιμο','Close'));
head.append(title,close);
const notice=node('p',undefined,'selection-notice');
const status=node('p',undefined,'selection-status');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
const content=node('div',undefined,'selection-content');
const foot=node('div',undefined,'selection-foot');
dialog.append(head,notice,status,content,foot);document.body.append(dialog);
const dock=button('',open,'selection-dock');dock.setAttribute('aria-haspopup','dialog');document.body.append(dock);
const toast=node('div',undefined,'selection-toast');toast.setAttribute('role','status');document.body.append(toast);
let toastTimer;
function announce(text){toast.textContent=text;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.hidden=true,2400);}
toast.hidden=true;
function showError(e) {
 status.textContent=e?.message||t('Δεν έγινε η αλλαγή. Δοκιμάστε ξανά.','The change was not saved. Please try again.');
 status.classList.add('is-error');
}
const errors=code=>({
 expired:t('Η παρέα έληξε ή έκλεισε. Οι παλιές επιλογές δεν είναι πλέον διαθέσιμες.','This group expired or was closed. Its selections are no longer available.'),
 forbidden:t('Δεν έχετε δικαίωμα να αλλάξετε αυτή την επιλογή.','You cannot change this selection.'),
 rate_limit:t('Έγιναν πολλές νέες παρέες. Δοκιμάστε αργότερα.','Too many new groups. Please try later.'),
 group_full:t('Η παρέα έχει φτάσει τα 20 άτομα.','This group has reached 20 members.'),
 cart_full:t('Η λίστα είναι πλήρης. Αφαιρέστε πρώτα κάποια επιλογή.','This list is full. Remove an item first.')
}[code]||t('Δεν υπάρχει σύνδεση με την παρέα. Η αλλαγή δεν αποθηκεύτηκε. Δοκιμάστε ξανά.','Cannot connect to the group. Your change was not saved. Please try again.'));
async function api(action,extra={}) {
 const controller=new AbortController(), timer=setTimeout(()=>controller.abort(),12000);
 try{
  const res=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',
   body:JSON.stringify({action,token:state.token,session:state.group?.session,...extra}),signal:controller.signal});
  const data=await res.json();
  if(!res.ok) {
   if(data.error==='expired'&&state.group&&(!extra.session||extra.session===state.group.session)) {
    state.group=null;groupData=null;save();render();
   }
   throw new Error(errors(data.error));
  }
  return data;
 }catch(e){if(e instanceof TypeError||e.name==='AbortError')throw new Error(errors('offline'));throw e;}
 finally{clearTimeout(timer);}
}
function renderDock(){
 const count=rows().reduce((s,r)=>s+r.quantity,0), total=rows().reduce((s,r)=>s+(PRODUCTS[r.product]?.cents||0)*r.quantity,0);
 dock.replaceChildren(node('span',state.group?t('Η επιλογή μας','Our selection'):t('Οι επιλογές μου','My selection')));
 dock.append(node('span',count?count+' · '+money(total):t('Προσθέστε με το +','Add items with +')));
 dock.setAttribute('aria-label',(state.group?t('Η επιλογή μας','Our selection'):t('Οι επιλογές μου','My selection'))+', '+count);
 document.querySelectorAll('.selection-add').forEach(b=>{
  b.setAttribute('aria-label',t('Προσθήκη: ','Add: ')+name(b.dataset.product));
  b.title=name(b.dataset.product);
  b.disabled=busy;
 });
}
function open(){
 editing=false;
 returnFocus=document.activeElement;
 if(!dialog.open)dialog.showModal();
 status.textContent='';status.classList.remove('is-error');
 render();
}
dialog.addEventListener('close',()=>{waiter=false;invite=false;editing=false;returnFocus?.focus({preventScroll:true});});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
async function run(fn){
 if(busy)return;
 epoch++;
 busy=true;status.textContent=t('Αποθήκευση…','Saving…');status.classList.remove('is-error');renderDock();
 dialog.querySelectorAll('button:not(.selection-close)').forEach(b=>b.disabled=true);
 try{await fn();status.textContent='';}
 catch(e){showError(e);}
 finally{busy=false;editing=false;epoch++;lastSnapshot='';render();}
}
async function change(row,delta){
 await run(async()=>{
  if(state.group){
   groupData=await api('change',{product:row.product,member:row.member,shared:!!row.shared,delta});
  }else{
   const i=state.personal.findIndex(r=>r.product===row.product&&!!r.shared===!!row.shared);
   if(i<0&&delta>0)state.personal.push({product:row.product,quantity:1,shared:!!row.shared,mine:true});
   else if(i>=0){
    state.personal[i].quantity=Math.min(99,state.personal[i].quantity+delta);
    if(state.personal[i].quantity<=0)state.personal.splice(i,1);
   }
   state.expires=Date.now()+LIFE;save();
  }
 });
}
function labelInput(text,type='text'){
 const label=node('label',text,'selection-label'),input=node('input');input.type=type;
 if(type==='text'){input.maxLength=32;input.autocomplete='given-name';input.placeholder=t('π.χ. Γιώργος','e.g. George');}
 label.append(input);return {label,input};
}
function renderInvite(){
 const url=new URL(location.pathname,location.origin);url.searchParams.set('party',state.group.session);url.hash='dinner-'+(en()?'en':'gr');
 const panel=node('div',undefined,'selection-invite');
 panel.append(node('h3',t('Σκανάρετε για να μπείτε στην παρέα','Scan to join the group')));
 const qr=node('div',undefined,'selection-qr');qr.setAttribute('role','img');qr.setAttribute('aria-label',t('QR πρόσκλησης παρέας','Group invitation QR'));
 panel.append(qr);
 if(typeof QRCode!=='undefined')new QRCode(qr,{text:url.href,width:192,height:192,correctLevel:QRCode.CorrectLevel.M});
 else qr.append(node('p',t('Χρησιμοποιήστε τον σύνδεσμο παρακάτω.','Use the invitation link below.')));
 const link=node('input');link.readOnly=true;link.value=url.href;link.setAttribute('aria-label',t('Σύνδεσμος πρόσκλησης','Invitation link'));
 link.addEventListener('click',()=>link.select());panel.append(link);
 panel.append(button(t('Αντιγραφή συνδέσμου','Copy link'),async()=>{
  try{await navigator.clipboard.writeText(url.href);announce(t('Ο σύνδεσμος αντιγράφηκε','Link copied'));}
  catch{link.focus();link.select();status.textContent=t('Κρατήστε πατημένο τον σύνδεσμο για αντιγραφή.','Press and hold the link to copy it.');}
 }));
 panel.append(node('p',t('Όποιος έχει τον σύνδεσμο μπορεί να μπει. Η παρέα λήγει σε 6 ώρες από τη δημιουργία της.','Anyone with this link can join. The group expires 6 hours after creation.')));
 content.append(panel);
}
function renderJoin(){
 title.textContent=t('Μπες στην παρέα','Join the group');
 content.append(node('p',t('Θα βλέπετε όλοι την ίδια λίστα. Αλλάζετε τις δικές σας επιλογές και ο δημιουργός διαχειρίζεται όλη την παρέα.','Everyone sees the same list. Edit your own items; the host can manage the whole group.')));
 if(state.group&&state.group.session!==pendingParty)content.append(node('p',t('Θα αποχωρήσετε από την τρέχουσα παρέα σε αυτή τη συσκευή.','You will leave the current group on this device.')));
 const field=labelInput(t('Το όνομά σας (προαιρετικό)','Your name (optional)'));content.append(field.label);
 foot.append(button(t('Συμμετοχή','Join'),()=>run(async()=>{
  const data=await api('join',{session:pendingParty,name:field.input.value.trim()||t('Επισκέπτης','Guest')});
  state.group={session:data.session,expires:data.expires};groupData=data;pendingParty=null;
  state.expires=Date.now()+LIFE;save();removeParty();invite=false;
 }),'selection-primary'));
 foot.append(button(t('Συνέχεια χωρίς συμμετοχή','Continue without joining'),()=>{pendingParty=null;removeParty();render();}));
}
function removeParty(){const u=new URL(location.href);u.searchParams.delete('party');history.replaceState(null,'',u.pathname+u.search+u.hash);}
function render(){
 renderDock();
 if(!dialog.open)return;
 if(editing)return;
 const scroll=content.scrollTop;
 content.replaceChildren();foot.replaceChildren();
 title.textContent=waiter?t('Για τον σερβιτόρο','For your waiter'):state.group?t('Η επιλογή μας','Our selection'):t('Οι επιλογές μου','My selection');
 notice.textContent=t('Οι επιλογές δεν αποστέλλονται στο κατάστημα. Παραγγείλτε στον σερβιτόρο.','Selections are not sent to the restaurant. Order with your waiter.');
 close.setAttribute('aria-label',t('Κλείσιμο','Close'));
 if(pendingParty){renderJoin();return;}
 if(state.group){
  content.append(node('p',(groupData?.members||1)+' '+t('άτομα στην παρέα · Λήξη ','in the group · Expires ')+new Date(state.group.expires).toLocaleTimeString(en()?'en-GB':'el-GR',{hour:'2-digit',minute:'2-digit'}),'selection-meta'));
 }
 if(!waiter){
  const scope=labelInput(t('Προσθήκη για τη μέση','Add for the table'),'checkbox');scope.input.id='selection-shared';
  scope.input.checked=state.shared===true;scope.input.addEventListener('change',()=>{state.shared=scope.input.checked;save();});
  content.append(scope.label);
 }
 let displayRows=rows();
 if(waiter){
  const merged=new Map();
  for(const r of displayRows){const k=r.product+'-'+!!r.shared;if(!merged.has(k))merged.set(k,{...r,quantity:0});merged.get(k).quantity+=r.quantity;}
  displayRows=[...merged.values()];
 }
 if(!displayRows.length)content.append(node('p',t('Η λίστα σας είναι άδεια. Περιηγηθείτε στον κατάλογο και πατήστε + σε ό,τι σας αρέσει.','Your list is empty. Browse the menu and tap + on anything you like.'),'selection-empty'));
 const list=node('div',undefined,'selection-list');
 displayRows.forEach(r=>{
  const item=node('div',undefined,'selection-row'),info=node('div',undefined,'selection-info');
  info.append(node('h3',name(r.product)));
  if(r.shared)info.append(node('span',t('Για τη μέση','For the table'),'selection-tag'));
  if(state.group&&!waiter)info.append(node('p',(r.mine?t('Εσείς','You'):r.name||t('Επισκέπτης','Guest'))));
  info.append(node('p',money(PRODUCTS[r.product].cents*r.quantity)));
  item.append(info);
  if(!waiter&&(r.mine||!state.group||groupData?.owner)){
   const controls=node('div',undefined,'selection-quantity');
   const minus=button('−',()=>change(r,-1)),plus=button('+',()=>change(r,1));
   minus.setAttribute('aria-label',t('Αφαίρεση ενός: ','Remove one: ')+name(r.product));
   plus.setAttribute('aria-label',t('Προσθήκη ενός: ','Add one: ')+name(r.product));
   minus.disabled=busy;plus.disabled=busy||r.quantity>=99;
   controls.append(minus,node('span',String(r.quantity)),plus);item.append(controls);
  }else item.append(node('strong','× '+r.quantity));
  list.append(item);
 });content.append(list);
 const total=rows().reduce((s,r)=>s+PRODUCTS[r.product].cents*r.quantity,0);
 const sum=node('div',undefined,'selection-total');sum.append(node('span',t('Ενδεικτικό σύνολο','Estimated total')),node('strong',money(total)));content.append(sum);
 content.append(node('p',t('Οι τελικές επιλογές, τυχόν αλλαγές και η τιμή επιβεβαιώνονται με τον σερβιτόρο.','Confirm your final choices, any changes and the price with your waiter.'),'selection-meta'));
 if(invite&&state.group&&!waiter)renderInvite();
 if(waiter){
  foot.append(button(t('Επιστροφή στις επιλογές','Back to selections'),()=>{waiter=false;render();},'selection-primary'));
 }else{
  if(rows().length)foot.append(button(t('Προβολή στον σερβιτόρο','Show your waiter'),()=>{waiter=true;invite=false;render();},'selection-primary'));
  if(state.group){
   foot.append(button(invite?t('Κλείσιμο πρόσκλησης','Hide invitation'):t('Πρόσκληση παρέας · QR','Invite friends · QR'),()=>{invite=!invite;render();}));
   foot.append(button(t('Αποχώρηση από την παρέα','Leave the group'),()=>confirmView(t('Να αποχωρήσετε; Οι επιλογές σας θα παραμείνουν στην παρέα.','Leave? Your items will remain in the group.'),()=>{
    state.group=null;groupData=null;invite=false;save();render();
   }),'selection-subtle'));
   if(groupData?.owner)foot.append(button(t('Κλείσιμο παρέας για όλους','Close group for everyone'),()=>confirmView(t('Να κλείσει η παρέα; Ο σύνδεσμος θα σταματήσει να λειτουργεί για όλους.','Close this group? The invitation will stop working for everyone.'),()=>run(async()=>{
    await api('close');state.group=null;groupData=null;invite=false;save();
   })),'selection-subtle'));
  }else{
   foot.append(button(t('Δημιουργία παρέας · QR','Create group · QR'),createView));
   if(rows().length)foot.append(button(t('Άδειασμα λίστας','Clear list'),()=>confirmView(t('Να αδειάσει η προσωπική σας λίστα;','Clear your personal list?'),()=>{state.personal=[];save();render();}),'selection-subtle'));
  }
 }
 content.scrollTop=scroll;
}
function confirmView(text,yes){
 editing=true;
 content.replaceChildren(node('p',text));foot.replaceChildren();
 foot.append(button(t('Επιβεβαίωση','Confirm'),()=>{editing=false;yes();},'selection-primary'),button(t('Πίσω','Back'),()=>{editing=false;render();}));
}
function createView(){
 editing=true;
 content.replaceChildren(node('p',t('Οι προσωπικές σας επιλογές θα μεταφερθούν στην κοινή λίστα. Η παρέα παραμένει ενεργή για 6 ώρες.','Your personal selections will move to the shared list. The group stays active for 6 hours.')));
 const field=labelInput(t('Το όνομά σας (προαιρετικό)','Your name (optional)'));content.append(field.label);foot.replaceChildren();
 foot.append(button(t('Δημιουργία και εμφάνιση QR','Create and show QR'),()=>run(async()=>{
  const data=await api('create',{name:field.input.value.trim()||t('Επισκέπτης','Guest'),initial:state.personal});
  state.group={session:data.session,expires:data.expires};groupData=data;state.personal=[];state.expires=Date.now()+LIFE;save();invite=true;
 }),'selection-primary'),button(t('Πίσω','Back'),()=>{editing=false;render();}));
 field.input.focus();
}
document.querySelectorAll('.screen').forEach(screen=>{
 const category=screen.id.split('-')[0];let i=0;
 screen.querySelectorAll('.dish').forEach(dish=>{
  if(!dish.querySelector('.price'))return;
  const base=category+'-'+i++;
  const tools=node('div',undefined,'selection-dish-tools');
  [0,1].forEach(v=>{
   const id=base+'-'+v;if(!PRODUCTS[id])return;
   const p=PRODUCTS[id];
   const b=button((p.variant?(p.variant==='glass'?t('Ποτήρι','Glass'):t('Φιάλη','Bottle'))+' ':'')+'+',async()=>{
    await change({product:id,shared:!!state.shared},1);
    if(!status.classList.contains('is-error'))announce(t('Προστέθηκε: ','Added: ')+name(id));
    else if(!dialog.open)openWithError();
   },'selection-add');
   b.dataset.product=id;
   if(p.variant)b.dataset.variant=p.variant;
   tools.append(b);
  });dish.append(tools);
 });
});
function openWithError(){const msg=status.textContent;open();status.textContent=msg;status.classList.add('is-error');}
function updateLanguage(){
 document.querySelectorAll('.selection-add[data-variant]').forEach(b=>b.textContent=(b.dataset.variant==='glass'?t('Ποτήρι','Glass'):t('Φιάλη','Bottle'))+' +');
 render();
}
new MutationObserver(updateLanguage).observe(document.getElementById('home'),{attributes:true,attributeFilter:['lang']});
async function refresh(){
 if(!state.group&&Date.now()>state.expires){state.personal=[];state.expires=Date.now()+LIFE;save();render();}
 if(!state.group||busy||document.hidden||pendingParty)return;
 const revision=epoch;
 try{
  const data=await api('read'),snapshot=JSON.stringify(data);
  if(busy||revision!==epoch||!state.group||data.session!==state.group.session)return;
  groupData=data;
  if(snapshot!==lastSnapshot){lastSnapshot=snapshot;render();}
  if(status.classList.contains('is-error')){status.textContent='';status.classList.remove('is-error');}
 }catch(e){showError(e);renderDock();}
}
window.addEventListener('online',refresh);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
setInterval(refresh,4000);
save();renderDock();
if(state.group)refresh();
if(pendingParty)open();
})();
