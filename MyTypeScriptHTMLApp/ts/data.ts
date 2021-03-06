﻿module DataAccess {
    export interface IPerson {
        name: string;
        age: number;
    }
    export class DataProvider {
        getPersonData(): IPerson[] {
            return [
                { name: 'Alonso Whippie', age: 52 },
                { name: 'Sherise Ingraffea', age: 55 },
                { name: 'Eli Alanis', age: 48 },
                { name: 'Dani Opdahl', age: 16 },
                { name: 'Bebe Knole', age: 49 },
                { name: 'Amalia Kirchmann', age: 21 },
                { name: 'Larhonda Stirgus', age: 20 },
                { name: 'Jae Tkacik', age: 17 },
                { name: 'Zona Romiro', age: 58 },
                { name: 'Holly Streett', age: 38 },
                { name: 'Lottie Langwith', age: 37 },
                { name: 'Marlena Pittillo', age: 32 },
                { name: 'Eugene Flecha', age: 49 },
                { name: 'Deadra Iwasko', age: 41 },
                { name: 'Susana Hinderer', age: 24 },
                { name: 'Anisha Kappa', age: 28 },
                { name: 'Julieta Buchinsky', age: 39 },
                { name: 'Gale Wampler', age: 57 },
                { name: 'Jani Fyles', age: 40 },
                { name: 'Boyd Dejaeger', age: 56 },
                { name: 'Charleen Guillary', age: 25 },
                { name: 'Jennell Cutshall', age: 17 },
                { name: 'Janita Hazeltine', age: 34 },
                { name: 'Brittany Chall', age: 22 },
                { name: 'Suzan Landolt', age: 42 },
                { name: 'Sau Bevel', age: 25 },
                { name: 'Cathy Milch', age: 30 },
                { name: 'Lizzette Wirth', age: 27 },
                { name: 'Lauryn Basket', age: 53 },
                { name: 'Marvin Hemley', age: 20 },
                { name: 'Tenisha Sabataso', age: 63 },
                { name: 'Bobette Lanzafame', age: 58 },
                { name: 'Roland Stringfellow', age: 24 },
                { name: 'Marcus Keledjian', age: 16 },
                { name: 'Leonel Fritter', age: 26 },
                { name: 'Verena Gettig', age: 34 },
                { name: 'Garland Deffibaugh', age: 42 },
                { name: 'Marcelene Boudle', age: 17 },
                { name: 'Alessandra Kleiboeker', age: 19 },
                { name: 'Betty Rigas', age: 41 },
                { name: 'Retha Robichard', age: 49 },
                { name: 'Junita Mcclenton', age: 18 },
                { name: 'Enda Feuss', age: 48 },
                { name: 'Shawnta Panak', age: 35 },
                { name: 'Amie Pettibone', age: 23 },
                { name: 'Linh Prill', age: 40 },
                { name: 'Laverna Tumlin', age: 26 },
                { name: 'Louise Fabert', age: 29 },
                { name: 'Magen Blansett', age: 43 },
                { name: 'Erma Dorne', age: 34 },
                { name: 'Winter Subramanian', age: 41 },
                { name: 'Yung Carmant', age: 16 },
                { name: 'Latricia Bertrano', age: 48 },
                { name: 'Andreas Hilb', age: 38 },
                { name: 'Karie Brafford', age: 64 },
                { name: 'Harris Nishiguchi', age: 49 },
                { name: 'Justina Wantland', age: 27 },
                { name: 'Lynette Chanco', age: 23 },
                { name: 'Riva Byler', age: 54 },
                { name: 'Carolann Klavon', age: 62 },
                { name: 'Bernetta Bienenstock', age: 18 },
                { name: 'Elfreda Steinfeldt', age: 51 },
                { name: 'Ray Griffel', age: 38 },
                { name: 'Caryl Hilyard', age: 40 },
                { name: 'Brooke Coldivar', age: 57 },
                { name: 'Violet Proby', age: 51 },
                { name: 'Roderick Defir', age: 46 },
                { name: 'Frank Brownwood', age: 36 },
                { name: 'Sanora Vilegas', age: 40 },
                { name: 'Johana Zweifel', age: 25 },
                { name: 'Tien Stallman', age: 22 },
                { name: 'Sammy Dolinar', age: 50 },
                { name: 'Yu Nitcher', age: 61 },
                { name: 'Clora Flugence', age: 35 },
                { name: 'Carolyne Croswell', age: 25 },
                { name: 'Teena Gounder', age: 55 },
                { name: 'Trula Boland', age: 39 },
                { name: 'Carin Bonamico', age: 16 },
                { name: 'Brice Dolphin', age: 43 },
                { name: 'Rivka Mcinturff', age: 64 },
                { name: 'Denny Hee', age: 20 },
                { name: 'Armandina Enwright', age: 51 },
                { name: 'Tabatha Rydberg', age: 25 },
                { name: 'Margy Weltha', age: 29 },
                { name: 'Jodie Kosky', age: 18 },
                { name: 'Sonny Catalli', age: 42 },
                { name: 'Charlene Marrison', age: 29 },
                { name: 'Ilana Puryear', age: 52 },
                { name: 'Lisette Polfer', age: 40 },
                { name: 'Ashlie Pav', age: 56 },
                { name: 'Bud Salamon', age: 27 },
                { name: 'Ena Rintharamy', age: 21 },
                { name: 'Queen Betti', age: 29 },
                { name: 'Reyes Enerson', age: 56 },
                { name: 'Miriam Strohman', age: 60 },
                { name: 'Young Lockey', age: 65 },
                { name: 'Belkis Winzelberg', age: 22 },
                { name: 'Lindsay Hagstrom', age: 35 },
                { name: 'Roni Ingle', age: 18 },
                { name: 'Marlana Vickers', age: 62 },
                { name: 'Phylicia Bonyai', age: 64 },
                { name: 'Tamekia Schreck', age: 16 },
                { name: 'Julianne Knotek', age: 16 },
                { name: 'Merry Goretti', age: 16 },
                { name: 'Michel Hammacher', age: 16 },
                { name: 'Trent Bournes', age: 52 },
                { name: 'Gilbert Cepeda', age: 41 },
                { name: 'Lenard Serramo', age: 37 },
                { name: 'Dusti Mcconnaughey', age: 30 },
                { name: 'Keven Guffin', age: 31 },
                { name: 'Glynda Cubillo', age: 17 },
                { name: 'Andra Knapko', age: 30 },
                { name: 'Josefina Herkstroeter', age: 26 },
                { name: 'Krissy Baransky', age: 27 },
                { name: 'Tanna Bax', age: 33 },
                { name: 'Marvel Trajillo', age: 57 },
                { name: 'Gary Pexton', age: 27 },
                { name: 'Kyla Benincasa', age: 35 },
                { name: 'Garrett Sherron', age: 28 },
                { name: 'Dana Wrotten', age: 56 },
                { name: 'Shandra Zarillo', age: 35 },
                { name: 'Summer Gies', age: 33 },
                { name: 'Caroll Kibbey', age: 25 },
                { name: 'Alanna Shiminski', age: 60 },
                { name: 'Kyra Weller', age: 47 },
                { name: 'Agnus Sedrakyan', age: 48 },
                { name: 'Marlys Farlin', age: 18 },
                { name: 'Shalanda Branch', age: 28 },
                { name: 'Lulu Birtwell', age: 50 },
                { name: 'Lacresha Cathey', age: 60 },
                { name: 'Perry Amborn', age: 25 },
                { name: 'Kina Iruegas', age: 52 },
                { name: 'Kristian Hapeman', age: 34 },
                { name: 'Earlean Lebahn', age: 21 },
                { name: 'Elizabet Rummel', age: 47 },
                { name: 'Isidro Otto', age: 34 },
                { name: 'Keira Ortmeyer', age: 59 },
                { name: 'Teodora Stathopoulos', age: 62 },
                { name: 'Sherlene Monzon', age: 44 },
                { name: 'Nicolle Kriston', age: 50 },
                { name: 'Fanny Baghdasarian', age: 32 },
                { name: 'Mariano Gloshen', age: 65 },
                { name: 'Fumiko Bushee', age: 18 },
                { name: 'Dusti Kader', age: 57 },
                { name: 'Tiffany Rigdon', age: 17 },
                { name: 'Eartha Dicaro', age: 22 },
                { name: 'Carlton Wargo', age: 46 },
                { name: 'Laci Prevost', age: 57 },
                { name: 'Rod Saverchenko', age: 63 },
                { name: 'Lauren Rimes', age: 33 },
                { name: 'Luana Hallett', age: 23 },
                { name: 'Dawna Lafata', age: 33 },
                { name: 'Fredia Souto', age: 38 },
                { name: 'Ettie Rutski', age: 49 },
                { name: 'Jessica Steiger', age: 55 },
                { name: 'Cherri Valle', age: 46 },
                { name: 'Christen Gobern', age: 19 },
                { name: 'Nerissa Zuziak', age: 56 },
                { name: 'Dominic Erlebach', age: 51 },
                { name: 'Michiko Clayton', age: 36 },
                { name: 'Nelson Touar', age: 43 },
                { name: 'Christie Mihalko', age: 27 },
                { name: 'Sharmaine Botelho', age: 57 },
                { name: 'Janella Nevel', age: 32 },
                { name: 'Matilde Juell', age: 59 },
                { name: 'Jean Breakey', age: 29 },
                { name: 'Veronique Obando', age: 46 },
                { name: 'Owen Aloan', age: 36 },
                { name: 'Mirna Bradt', age: 36 },
                { name: 'Miguel Gianandrea', age: 48 },
                { name: 'Chanda Nordling', age: 40 },
                { name: 'Coy Beckim', age: 40 },
                { name: 'Maragret Giaquinto', age: 32 },
                { name: 'Mara Schnobrich', age: 23 },
                { name: 'Shaneka Jackett', age: 19 },
                { name: 'Ann Tropiano', age: 43 },
                { name: 'Adelle Boeneke', age: 31 },
                { name: 'Stephen Carte', age: 39 },
                { name: 'Alisa Kleifgen', age: 48 },
                { name: 'Charise Fieldhouse', age: 34 },
                { name: 'Sylvester Nevis', age: 32 },
                { name: 'Jade Yuasa', age: 29 },
                { name: 'Kathie Triplett', age: 45 },
                { name: 'Keneth Hun', age: 18 },
                { name: 'Carey Yankey', age: 61 },
                { name: 'Socorro Kulkarni', age: 46 },
                { name: 'Carmon Wiesehan', age: 42 },
                { name: 'Dong Eke', age: 61 },
                { name: 'Juliane Tames', age: 61 },
                { name: 'Altha Hosten', age: 20 },
                { name: 'Pat Yoney', age: 43 },
                { name: 'Marline Killam', age: 63 },
                { name: 'Lindsey Macdonnell', age: 62 },
                { name: 'Dennise Duffel', age: 19 },
                { name: 'Lamont Moneaux', age: 48 },
                { name: 'Jenna Gruber', age: 31 },
                { name: 'Ranae Hainds', age: 34 },
                { name: 'Laverne Mccollum', age: 57 },
                { name: 'Kelsi Schayer', age: 41 },
                { name: 'Romeo Gaiser', age: 27 },
                { name: 'Pia Arnst', age: 63 },
                { name: 'Latoya Artiles', age: 39 },
                { name: 'Thad Rinaldi', age: 32 },
                { name: 'Reena Rigley', age: 38 },
                { name: 'Stuart Stepovich', age: 31 },
                { name: 'Jennifer Quicho', age: 36 },
                { name: 'Harlan Batesole', age: 58 },
                { name: 'Emilio Cease', age: 24 },
                { name: 'Jay Hakala', age: 54 },
                { name: 'Olimpia Guilfoos', age: 31 },
                { name: 'Starr Doan', age: 30 },
                { name: 'Viki Efaw', age: 52 },
                { name: 'Novella Trebil', age: 40 },
                { name: 'Rodolfo Sachleben', age: 40 },
                { name: 'Jodee Berzunza', age: 51 },
                { name: 'Raymond Ahsan', age: 38 },
                { name: 'Lakeshia Sapienza', age: 62 },
                { name: 'Marcela Luckett', age: 19 },
                { name: 'Aurelia Cring', age: 53 },
                { name: 'Dione Lench', age: 38 },
                { name: 'Yi Hartel', age: 16 },
                { name: 'James Kinnick', age: 21 },
                { name: 'Rigoberto Dolliver', age: 20 },
                { name: 'Marina Lowrimore', age: 54 },
                { name: 'Fairy Baxtor', age: 42 },
                { name: 'Audry Petrovic', age: 63 },
                { name: 'Carlena Zellous', age: 44 },
                { name: 'Kimberli Ridpath', age: 63 },
                { name: 'Maryann Rovere', age: 50 },
                { name: 'Jeanett Bawek', age: 38 },
                { name: 'Nobuko Moldovan', age: 60 },
                { name: 'Idella Jordahl', age: 26 },
                { name: 'Giovanni Kingdom', age: 50 },
                { name: 'Antone Shelley', age: 46 },
                { name: 'Libbie Draffen', age: 16 },
                { name: 'Carlie Zabek', age: 46 },
                { name: 'Catherina Dimario', age: 46 },
                { name: 'Coleman Schildt', age: 51 },
                { name: 'Paola Mckinny', age: 16 },
                { name: 'Isiah Arnsberger', age: 62 },
                { name: 'Tyron Raddatz', age: 20 },
                { name: 'Ronald Sierzenga', age: 44 },
                { name: 'Dorcas Mousseau', age: 54 },
                { name: 'Juan Worrell', age: 23 },
                { name: 'Felisa Teekasingh', age: 54 },
                { name: 'Cecelia Frusciante', age: 20 },
                { name: 'Cornelius Buesgens', age: 20 },
                { name: 'Luana Innamorato', age: 37 },
                { name: 'Lottie Haasch', age: 18 },
                { name: 'Lashonda Wokwicz', age: 58 },
                { name: 'Jasper Maves', age: 47 },
                { name: 'Shaina Dehombre', age: 54 },
                { name: 'Sha Willette', age: 51 },
                { name: 'Libby Shindler', age: 38 },
                { name: 'Shawna Girvin', age: 39 },
                { name: 'Willette Anglada', age: 27 },
                { name: 'Carri Menapace', age: 44 },
                { name: 'Nicole Phoeuk', age: 25 },
                { name: 'Melita Shimshak', age: 17 },
                { name: 'Dorian Craiger', age: 63 },
                { name: 'Shanon Chet', age: 35 },
                { name: 'Derek Aytes', age: 34 },
                { name: 'Stevie Dolbow', age: 58 },
                { name: 'Randa Klicka', age: 46 },
                { name: 'Brook Deierlein', age: 29 },
                { name: 'Leslee Sidoti', age: 42 },
                { name: 'Jacinta Milloway', age: 33 },
                { name: 'Annika Bingert', age: 51 },
                { name: 'Olimpia Whetten', age: 25 },
                { name: 'Wesley Martnez', age: 48 },
                { name: 'Harold Hoscheit', age: 63 },
                { name: 'Mariela Lavallie', age: 59 },
                { name: 'Dominique Maarx', age: 50 },
                { name: 'Joslyn Prock', age: 17 },
                { name: 'Selene Ellisor', age: 21 },
                { name: 'Oneida Escandon', age: 48 },
                { name: 'Julio Shellenberger', age: 36 },
                { name: 'Zack Shute', age: 27 },
                { name: 'Jean Ortic', age: 34 },
                { name: 'Cheree Spennicchia', age: 25 },
                { name: 'Nena Oehmig', age: 50 },
                { name: 'Corrie Diker', age: 22 },
                { name: 'Belkis Rairdon', age: 25 },
                { name: 'Denis Ganze', age: 20 },
                { name: 'Joel Mollett', age: 65 },
                { name: 'Mechelle Ader', age: 29 },
                { name: 'Samella Sampey', age: 41 },
                { name: 'Keshia Ableman', age: 53 },
                { name: 'Landon Jenkins', age: 47 },
                { name: 'Calista Mccalmont', age: 24 },
                { name: 'Willena Chalupa', age: 17 },
                { name: 'Lonnie Swihart', age: 62 },
                { name: 'Gema Haddan', age: 39 },
                { name: 'Trudi Pyeatt', age: 21 },
                { name: 'Keira Ehrler', age: 33 },
                { name: 'Danilo Lowery', age: 58 },
                { name: 'Angla Coarsey', age: 52 },
                { name: 'Pamela Tamas', age: 29 },
                { name: 'Dennis Stroop', age: 64 },
                { name: 'Jaye Levitsky', age: 63 }
            ];
        }
    };
}