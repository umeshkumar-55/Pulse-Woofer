// ---------------------for disabiling right click  and selecting text-------------------------

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// document.addEventListener("selectstart", (e) => {
//   e.preventDefault();
// });

// ----------------------horizontal scrolling-----------------------------

let bollywood_left_arrow = document.querySelector("#bollywood_left_arrow");
let bollywood_right_arrow = document.querySelector("#bollywood_right_arrow");
let bollywood_songs = document.querySelector(".bollywood_songs");

bollywood_left_arrow.addEventListener("click", () => {
  bollywood_songs.scrollLeft -= 300;
});

bollywood_right_arrow.addEventListener("click", () => {
  bollywood_songs.scrollLeft += 300;
});

const songs = [
  {
    id: "1",
    songName: `JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar <br/>
    <div class="subtitle">Arijit S, Shilpa R</div>`,
    poster: "bollywood images/1.webp",
  },
  {
    id: "2",
    songName: `Tere Vaaste | Zara Hatke Zara Bachke | Vicky Kaushal, Sara Ali Khan, Varun J, Sachin-Jigar, <br/>
    <div class="subtitle"> Varun Jain, Sachin Jigar, Shadab Faridi, Altamash Faridi</div>`,
    poster: "bollywood images/2.webp",
  },
  {
    id: "3",
    songName: `Not Ramaiya Vastavaiya | Shah Rukh Khan | Atlee | Anirudh | Nayanthara | Vishal D | Shilpa R <br/>
    <div class="subtitle"> Anirudh Ravichander, Shilpa Rao, and Vishal Dadlani
    </div>`,
    poster: "bollywood images/3.webp",
  },
  {
    id: "4",
    songName: `Billi Billi - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan | Pooja Hegde | Venkatesh D | Sukhbir | Kumaar <br/>
    <div class="subtitle">Sukhbir</div>`,
    poster: "bollywood images/4.webp",
  },
  {
    id: "5",
    songName: `What Jhumka? | Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Jonita <br/>
    <div class="subtitle">Arijit Singh and Jonita Gandhi</div>`,
    poster: "bollywood images/5.webp",
  },
  {
    id: "6",
    songName: `Heeriye (Official ) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir <br/>
    <div class="subtitle">Arijit Singh and Jasleen Royal
    </div>`,
    poster: "bollywood images/6.webp",
  },
  {
    id: "7",
    songName: `Naiyo Lagda - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan & Pooja Hegde | Himesh R, Kamaal K, Palak M <br/>
    <div class="subtitle">Kamaal Khan and Palak Muchhal
    </div>`,
    poster: "bollywood images/7.webp",
  },
  {
    id: "8",
    songName: `Samayama Song | Hi Nanna | Nani,Mrunal Thakur | Shouryuv | Hesham Abdul Wahab<br/>
    <div class="subtitle">Anurag Kulkarni and Sithara</div>`,
    poster: "bollywood images/8.webp",
  },
  {
    id: "9",
    songName: `Mawaa Enthaina Lyrical Song |Guntur Kaaram | Mahesh Babu |Meenakshi Chaudhary | Trivikram | Thaman S <br/>
    <div class="subtitle">Thaman S, Sri Krishna, Ramachari, Rahul Sipligunj</div>`,
    poster: "bollywood images/9.webp",
  },
  {
    id: "10",
    songName: `Kurchi Madathapetti Lyrical  |Guntur Kaaram |Mahesh Babu| Sreeleela |Trivikram | Thaman S <br/>
    <div class="subtitle"> Mahesh Babu, Thaman S, Sri Krishna and Sahithi Chaganti</div>`,
    poster: "bollywood images/10.webp",
  },
  {
    id: "11",
    songName: `Heer Aasmani (Song) Hrithik, Deepika, Anil, Vishal-Sheykhar, Bpraak, Kumaar, Piyush-Shazia <br/>
    <div class="subtitle">Bpraak, Kumaar, Piyush-Shazia</div>`,
    poster: "bollywood images/11.webp",
  },
  {
    id: "12",
    songName: `ANIMAL:PEHLE BHI MAIN(Lyrical) | Ranbir Kapoor,Tripti Dimri | Sandeep V | Vishal M,Raj S | Bhushan K <br/>
    <div class="subtitle"> Raj Shekhar and Vishal Mishra
    </div>`,
    poster: "bollywood images/12.webp",
  },
  {
    id: "13",
    songName: `ANIMAL: ARJAN VAILLY | Ranbir Kapoor | Sandeep Vanga | Bhupinder B, Manan B | Bhushan K <br/>
    <div class="subtitle">Bhupinder Babbal
    </div>`,
    poster: "bollywood images/13.webp",
  },
  {
    id: "14",
    songName: `Hass Hass (Official ) Diljit X Sia <br/>
    <div class="subtitle">Diljit Dosanjh, Greg Kurstin, and Sia
    </div>`,
    poster: "bollywood images/14.webp",
  },
  {
    id: "15",
    songName: `Dil Jhoom (Song) | Vidyut Jammwal | Nora Fatehi | Vishal Mishra | Shreya Ghoshal | Tanishk <br/>
    <div class="subtitle">Arijit Singh and Mithoon
    </div>`,
    poster: "bollywood images/15.webp",
  },
  {
    id: "16",
    songName: `ANIMAL: SATRANGA(Song) Ranbir Kapoor,Rashmika|Sandeep V|Arijit,Shreyas P,Siddharth-Garima |Bhushan K <br/>
    <div class="subtitle">Arijit Singh
    </div>`,
    poster: "bollywood images/16.webp",
  },
  {
    id: "17",
    songName: `ANIMAL:Pehle Bhi Main | Ranbir Kapoor,Tripti Dimri |Sandeep V |Vishal M,Raj S |Bhushan K <br/>
    <div class="subtitle">Raj Shekhar and Vishal Mishra
    </div>`,
    poster: "bollywood images/17.webp",
  },
  {
    id: "18",
    songName: `Janiye | Music| Chor Nikal Ke Bhaga | Vishal Mishra, Rashmeet Kaur <br/>
    <div class="subtitle">Rashmeet Kaur and Vishal Mishra
    </div>`,
    poster: "bollywood images/18.webp",
  },
  {
    id: "19",
    songName: `Maan Meri Jaan | Official Music | Champagne Talk | King <br/>
    <div class="subtitle">King</div>`,
    poster: "bollywood images/19.webp",
  },
  {
    id: "20",
    songName: `Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K  <br/>
    <div class="subtitle">Arijit Singh,Sachin-Jigar,Amitabh</div>`,
    poster: "bollywood images/20.webp",
  },

  {
    id: "21",
    songName: `Pyaar Hota Kayi Baar Hai (Song) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam, Arijit, Amitabh<br />
        <div class="subtitle">Arijit Singh</div>`,
    poster: "bollywood images/21.webp",
  },
  {
    id: "22",
    songName: `O Bedardeya (Lyrical) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam | Arijit Singh |  <br />
        <div class="subtitle">Arijit Singh</div>`,
    poster: "bollywood images/22.webp",
  },
  {
    id: "23",
    songName: `Mahiye Jinna Sohna Official | Darshan Raval | Youngveer | Lijo George | Dard Album 2.0 <br />
        <div class="subtitle">Darshan Raval</div>`,
    poster: "bollywood images/23.webp",
  },
  {
    id: "24",
    songName: `ANIMAL:SAARI DUNIYA JALAA DENGE(Audio)|Ranbir K,Rashmika,Anil,Bobby|Sandeep|B Praak,Jaani|Bhushan K <br />
        <div class="subtitle">B Praak and Jaani
        </div>`,
    poster: "bollywood images/24.webp",
  },
  {
    id: "25",
    songName: `ANIMAL: HUA MAIN | Ranbir Kapoor,Rashmika M | Sandeep V | Raghav,Manoj M | Bhushan K <br />
        <div class="subtitle">Pritam Chakraborty and Raghav Chaitanya
        </div>`,
    poster: "bollywood images/25.webp",
  },
  {
    id: "26",
    songName: `Deewaane (Selfiee) - Akshay K | Jacqueline F | Emraan H | Aditya Y | Stebin B | Tanishk B | Kunaal V <br />
        <div class="subtitle"> Aaditya Yadav and Stebin Ben</div>`,
    poster: "bollywood images/26.webp",
  },
  {
    id: "27",
    songName: `LEO - Naa Ready| Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander <br />
        <div class="subtitle">Anirudh Ravichander, Asal Kolaar, and Vijay</div>`,
    poster: "bollywood images/27.webp",
  },
  {
    id: "28",
    songName: `Tere Pyaar Mein (Song) Tu Jhoothi Main Makkaar| Ranbir, Shraddha| Pritam| Arijit, Nikhita | Amitabh <br />
        <div class="subtitle">Arijit Singh and Nikhita Gandhi
        </div>`,
    poster: "bollywood images/28.webp",
  },
  {
    id: "29",
    songName: `Malang Sajna Sachet Tandon, Parampara Tandon | Adil Shaikh, Kumaar | Bhushan Kumar <br />
        <div class="subtitle">Parampara Thakur and Sachet Tandon
        </div>`,
    poster: "bollywood images/29.webp",
  },
  {
    id: "30",
    songName: `Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal & Sheykhar, Arijit Singh, Sukriti, Kumaar <br />
        <div class="subtitle">Arijit Singh, Sukriti Kakar, Vishal Dadlani and Shekhar Ravjiani</div>`,
    poster: "bollywood images/30.webp",
  },
  {
    id: "31",
    songName: `Kahani Suno 2.0 <br />
        <div class="subtitle">Kaifi Khalil</div>`,
    poster: "bollywood images/31.webp",
  },
  {
    id: "32",
    songName: `Tum Kya Mile - Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Shreya <br />
        <div class="subtitle"> Arijit Singh, Shreya Ghoshal, hattacharya, Pritam Chakraborty</div>`,
    poster: "bollywood images/32.webp",
  },
  {
    id: "33",
    songName: `LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander <br />
        <div class="subtitle">Anirudh Ravichander, Hanuman, and Raqueeb Alam</div>`,
    poster: "bollywood images/33.webp",
  },
  {
    id: "34",
    songName: `Chilla Chilla | Thunivu | Ajith Kumar | H Vinoth | Anirudh | Ghibran <br />
        <div class="subtitle">Anirudh Ravichander, Ghibran, and Vaisagh</div>`,
    poster: "bollywood images/34.webp",
  },
  {
    id: "35",
    songName: `Spain | Jassa Dhillon | thiarajxtt | VIBIN <br />
        <div class="subtitle">Jassa Dhillon and Thiarajxtt</div>`,
    poster: "bollywood images/35.webp",
  },
  {
    id: "36",
    songName: `Ranjha |Shershaah|Sidharth-Kiara|B Praak|Jasleen Royal|Anvita Dutt <br />
        <div class="subtitle">Prerna Arora and Ashwani Basoya </div>`,
    poster: "bollywood images/36.webp",
  },
  {
    id: "37",
    songName: `Manike : Thank God | Nora,Sidharth| Tanishk,Yohani,Jubin,Surya R |Rashmi Virag|Bhushan K <br />
        <div class="subtitle"> Jubin Nautiyal, Surya Ragunaathan, and Yohani
        </div>`,
    poster: "bollywood images/37.webp",
  },
  {
    id: "38",
    songName: `Apna Bana Le - Bhediya | Varun Dhawan, Kriti Sanon| Sachin-Jigar, Arijit Singh, hattacharya <br />
        <div class="subtitle">Arijit Singh, hattacharya</div>`,
    poster: "bollywood images/38.webp",
  },
  {
    id: "39",
    songName: `Ghodey Pe Sawaar | Official Music | Triptii Dimri | Qala <br />
        <div class="subtitle"> Amit Trivedi, hattacharya, and Sireesha Bhagavatula
        </div>`,
    poster: "bollywood images/39.webp",
  },
  {
    id: "40",
    songName: `Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar <br />
        <div class="subtitle">Caralisa Monteiro, Shilpa Rao, and Vishal Shekhar
        </div>`,
    poster: "bollywood images/40.webp",
  },
  {
    id: "41",
    songName: `King of Kotha - Kalapakkaara Lyric | Dulquer Salmaan | Abhilash Joshiy | Jakes Bejoy <br/>
    <div class="subtitle">Abhilash Joshiy | Jakes Bejoy</div>`,
    poster: "bollywood images/41.webp",
  },
  {
    id: "42",
    songName: `Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit Singh | hattacharya <br/>
    <div class="subtitle">Arijit Singh | hattacharya</div>`,
    poster: "bollywood images/42.webp",
  },
  {
    id: "43",
    songName: `Baarish Aayi Hai Javed-Mohsin | Stebin Ben, Shreya Ghoshal | Karan K, Tejasswi P | Kunaal V <br/>
    <div class="subtitle">Karan K, Tejasswi P | Kunaal V</div>`,
    poster: "bollywood images/43.webp",
  },
  {
    id: "44",
    songName: `Kushi Title Song - Lyrical | Vijay Deverakonda, Samantha | Hesham Abdul Wahab | Shiva Nirvana <br/>
    <div class="subtitle">Hesham Abdul Wahab and Shiva Nirvana
    </div>`,
    poster: "bollywood images/44.webp",
  },
  {
    id: "45",
    songName: `Ratchasa Maamaney | Ponniyin Selvan -1 | Tamil | AR Rahman | Karthi, Trisha| Shreya G <br/>
    <div class="subtitle">Mahesh Vinayakram, Palakkad Sreeram, and Shreya Ghoshal
    </div>`,
    poster: "bollywood images/45.webp",
  },
  {
    id: "46",
    songName: `Zaalima Coca Cola Song | Nora Fatehi | Tanishk Bagchi | Shreya Ghoshal | Vayu <br/>
    <div class="subtitle"Shreya Ghoshal, Taafu, and Tanishk Bagchi></div>`,
    poster: "bollywood images/46.webp",
  },
  {
    id: "47",
    songName: `manike:Thank God | Nora Fatehi, Sidharth M | Tanishk,Yohani,Jubin,Surya R | Rashmi Virag | Bhushan K <br/>
    <div class="subtitle">Jubin Nautiyal, Surya Ragunaathan, and Yohani
    </div>`,
    poster: "bollywood images/47.webp",
  },
  {
    id: "48",
    songName: `Ruaan Full Song | Tiger 3 | Salman Khan, Katrina Kaif | Pritam, Arijit Singh, Irshad Kamil, New Song <br/>
    <div class="subtitle">Arijit Singh
    </div>`,
    poster: "bollywood images/48.webp",
  },
  {
    id: "49",
    songName: `Arabic Kuthu | Halamithi Habibo | Beast| Thalapathy Vijay| Sun Pictures| Nelson| Anirudh <br/>
    <div class="subtitle">Anirudh Ravichander and Jonita Gandhi</div>`,
    poster: "bollywood images/49.webp",
  },
  {
    id: "50",
    songName: `pushpa: Oo Bolega ya Oo Oo Bolega (Lyrical) | Allu A, Rashmika | Kanika K | DSP | Sukumar | Samantha <br/>
    <div class="subtitle">Kanika Kapoor
    </div>`,
    poster: "bollywood images/50.webp",
  },
  {
    id: "51",
    songName: `THAA - VARINDER BRAR | Latest Punjabi Songs 2023 | New Punjabi Song 2023 <br/>
    <div class="subtitle"> Rav Dhaliwal, Ultra Beats, and Varinder Brar
    </div>`,
    poster: "bollywood images/51.webp",
  },
  {
    id: "52",
    songName: `Pushpa: Saami Saami - Full Song | Allu Arjun, Rashmika Mandanna | Sunidhi C | DSP | Sukumar
    <br/>
    <div class="subtitle">Mounika Yadav
    </div>`,
    poster: "bollywood images/52.webp",
  },
  {
    id: "53",
    songName: `Tur Kalleyan - Laal Singh Chaddha | Aamir | Kareena | Arijit, Shadab, Altamash | Pritam, 
     <br/>
    <div class="subtitle">Arijit, Shadab, Altamash | Pritam, </div>`,
    poster: "bollywood images/53.webp",
  },
  {
    id: "54",
    songName: `Arabic Kuthu - Song | Beast | Thalapathy Vijay | Pooja Hegde | Sun Pictures | Nelson | Anirudh <br/>
    <div class="subtitle">Anirudh Ravichander and Jonita Gandhi</div>`,
    poster: "bollywood images/54.webp",
  },
  {
    id: "55",
    songName: `VIKRAM – Pathala Pathala Lyric | Kamal Haasan | Vijay Sethupathi | Lokesh Kanagaraj | Anirudh <br/>
    <div class="subtitle"> Anirudh Ravichander and Kamal Haasan
    </div>`,
    poster: "bollywood images/55.webp",
  },
  {
    id: "56",
    songName: `Shaamat - Ek Villain Returns | John,Disha,Arjun,Tara | Ankit T,Prince D, Mohit S, Ektaa K |Bhushan K <br/>
    <div class="subtitle">Ankit Tiwari and Tara Sutaria</div>`,
    poster: "bollywood images/56.webp",
  },
  {
    id: "57",
    songName: `Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill <br/>
    <div class="subtitle">Ali Sethi and Shae Gill</div>`,
    poster: "bollywood images/57.webp",
  },
  {
    id: "58",
    songName: `Chola Chola | Ponniyin Selvan - 1 | Tamil | Vikram | AR Rahman | Sathya Prakash <br/>
    <div class="subtitle">AR Rahman | Sathya Prakash</div>`,
    poster: "bollywood images/58.webp",
  },
  {
    id: "59",
    songName: `Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Pritam, Tanishk, Neeraj, Anees B, Bhushan K <br/>
    <div class="subtitle">Anees B, Bhushan K</div>`,
    poster: "bollywood images/59.webp",
  },
  {
    id: "60",
    songName: `Kaathuvaakula Rendu Kaadhal - Dippam Dappam Lyric| Vijay Sethupathi, Anirudh, Vignesh Shivan <br/>
    <div class="subtitle">Anirudh, Vignesh Shivan</div>`,
    poster: "bollywood images/60.webp",
  },
  {
    id: "61",
    songName: `Mast Nazron Se | Rochak K ft Jubin Nautiyal, Nikita Dutta | Manoj M | Ashish P | Bhushan K <br/>
    <div class="subtitle">Jubin Nautiyal, Nasir Iqbal, and Rochak Kohl</div>`,
    poster: "bollywood images/61.webp",
  },
  {
    id: "62",
    songName: `Jai Shree Ram | Ram Setu Anthem | Akshay Kumar, Jacqueline F, Nushrratt B | Vikram M, Shekhar A <br/>
    <div class="subtitle">Vikram M, Shekhar A</div>`,
    poster: "bollywood images/62.webp",
  },
  {
    id: "63",
    songName: `Pathala Pathala | VIKRAM | Kamal Haasan | Anirudh Ravichander | Lokesh Kanagaraj <br/>
    <div class="subtitle">Lokesh Kanagaraj</div>`,
    poster: "bollywood images/63.webp",
  },
  {
    id: "64",
    songName: `Galliyan Returns Song: Ek Villain Returns | John,Disha,Arjun,Tara | Ankit T,Manoj M, Mohit S,Ektaa K <br/>
    <div class="subtitle">Ankit Tiwari
    </div>`,
    poster: "bollywood images/64.webp",
  },
  {
    id: "65",
    songName: `Jaan Hai Meri Song: Radhe Shyam | Prabhas, Pooja Hegde | Armaan M, Amaal M, Rashmi Virag, Bhushan K <br/>
    <div class="subtitle">Rashmi Virag, Bhushan K</div>`,
    poster: "bollywood images/65.webp",
  },
  {
    id: "66",
    songName: `Kusu Kusu Song Ft Nora Fatehi | Satyameva Jayate 2 | John A, Divya K | Tanishk B, Zahrah Khan, Dev N <br/>
    <div class="subtitle">Zahrah Khan, Dev N</div>`,
    poster: "bollywood images/66.webp",
  },
  {
    id: "67",
    songName: `Kuch Baatein Song | Payal Dev, Jubin Nautiyal | Kunaal Vermaa | Ashish Panda | Gurmeet C, Bhushan K <br/>
    <div class="subtitle">Gurmeet C, Bhushan K</div>`,
    poster: "bollywood images/67.webp",
  },
  {
    id: "68",
    songName: `Ik Tu Hai - Attack | John Abraham, Jacqueline Fernandez| Jubin Nautiyal, Shashwat S, Kumaar| Lakshya <br/>
    <div class="subtitle"> Shashwat S, Kumaar| Lakshya</div>`,
    poster: "bollywood images/68.webp",
  },
  {
    id: "69",
    songName: `Maiyya Mainu - Jersey | Shahid Kapoor, Mrunal T| Sachet-Parampara,Shellee| Gowtam T| 22nd April 2022 <br/>
    <div class="subtitle">Sachet Parampara</div>`,
    poster: "bollywood images/69.webp",
  },
  {
    id: "70",
    songName: `THE LAST RIDE | Sidhu Moose Wala | Wazir Patar <br/>
    <div class="subtitle">Sidhu Moose Wala</div>`,
    poster: "bollywood images/70.webp",
  },
  {
    id: "71",
    songName: `Aashiqui Aa Gayi Radhe Shyam | Prabhas, Pooja Hegde | Mithoon, Arijit Singh | Bhushan K <br/>
    <div class="subtitle">Arijit Singh | Bhushan K</div>`,
    poster: "bollywood images/71.webp",
  },
  {
    id: "72",
    songName: `Raataan Lambiyan | Shershaah | Sidharth – Kiara | Tanishk B| Jubin Nautiyal |Asees <br/>
    <div class="subtitle">Jubin Nautiyal |Asees</div>`,
    poster: "bollywood images/72.webp",
  },
  {
    id: "73",
    songName: `Dhokha Song | Arijit Singh | Khushalii Kumar, Parth, Nishant, Manan B, Mohan S V, Bhushan K <br/>
    <div class="subtitle">Arijit Singh and Manan Bhardwaj
    </div>`,
    poster: "bollywood images/73.webp",
  },
  {
    id: "74",
    songName: `Param Sundari | Mimi | Kriti Sanon, Pankaj Tripathi <br/>
    <div class="subtitle">A.R. Rahman and Shreya Ghoshal</div>`,
    poster: "bollywood images/74.webp",
  },
  {
    id: "75",
    songName: `Najaa (Full Song) | Sooryavanshi | Akshay Kumar,Katrina Kaif,Rohit Shetty,Tanishk,Pav Dharia,Nikhita <br/>
    <div class="subtitle">Nikhita Gandhi, Pav Dharia, and Tanishk Bagchi
    </div>`,
    poster: "bollywood images/75.webp",
  },
  {
    id: "76",
    songName: `Ghana Kasoota |@raftaarmusic | Surbhi Jyoti | @RashmeetKaur | Avvy Sra <br/>
    <div class="subtitle">Raftaar and Rashmeet Kaur
    </div>`,
    poster: "bollywood images/76.webp",
  },
  {
    id: "77",
    songName: `Sabki Baaratein Aayi | Zaara Yesmin | Parth Samthaan | Dev Negi, Seepi Jha | Raaj |Tips Official <br/>
    <div class="subtitle">Jaspinder Narula
    </div>`,
    poster: "bollywood images/77.webp",
  },
  {
    id: "78",
    songName: `Tenu Lehenga Song: Satyameva Jayate 2 | John A, Divya K |Tanishk B, Zahrah SK, Jass M <br/>
    <div class="subtitle">Jass Manak, Tanishk Bagchi, and Zara Khan</div>`,
    poster: "bollywood images/78.webp",
  },
  {
    id: "79",
    songName: `Srivalli | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar <br/>
    <div class="subtitle">Sid Sriram</div>`,
    poster: "bollywood images/79.webp",
  },
  {
    id: "80",
    songName: `Tip Tip Song: Sooryavanshi | Akshay Kumar, Katrina Kaif | Udit N, Alka Y, Tanishk | Rohit Shetty
     <br/>
    <div class="subtitle">Alka Yagnik and Udit Narayan
    </div>`,
    poster: "bollywood images/80.webp",
  },
  {
    id: "81",
    songName: `Dil Ko Karaar Aaya - Sidharth Shukla & Neha Sharma | Neha Kakkar & YasserDesai | Rajat Nagpal | Rana <br/>
    <div class="subtitle">Neha Kakkar and Yasser Desai
    </div>`,
    poster: "bollywood images/81.webp",
  },
  {
    id: "82",
    songName: `Thoda Thoda Pyaar | Sidharth Malhotra,Neha Sharma|Stebin Ben,Nilesh Ahuja,Kumaar|Zee Music <br/>
    <div class="subtitle">Kumaar, Nilesh Ahuja, and Stebin Ben
    </div>`,
    poster: "bollywood images/82.webp",
  },
  {
    id: "83",
    songName: `Sakhiyan2.0 | Akshay Kumar | Vaani Kapoor |BellBottom| Tanishk B | Babbu | Maninder Buttar| Zara K <br/>
    <div class="subtitle">Maninder Buttar and Zara Khan
    </div>`,
    poster: "bollywood images/83.webp",
  },
  {
    id: "84",
    songName: `Paani Paani | Jacqueline Fernandez | Aastha Gill | Trending Songs <br/>
    <div class="subtitle">Badshah </div>`,
    poster: "bollywood images/84.webp",
  },
  {
    id: "85",
    songName: `Mann Bharryaa 2.0 | Shershaah | Sidharth – Kiara | B Praak | Jaani <br/>
    <div class="subtitle">B Praak
    </div>`,
    poster: "bollywood images/85.webp",
  },
  {
    id: "86",
    songName: `Seeti Maar | Radhe - Your Most Wanted Bhai | Salman Khan, Disha Patani|Kamaal K, Iulia V|DSP|Shabbir <br/>
    <div class="subtitle">Iulia Vântur and Kamaal Khan</div>`,
    poster: "bollywood images/86.webp",
  },
  {
    id: "87",
    songName: `Bachpan Ka Pyaar Badshah, Sahdev Dirdo, Aastha Gill, Rico <br/>
    <div class="subtitle">Aastha Gill, Rico</div>`,
    poster: "bollywood images/87.webp",
  },
  {
    id: "88",
    songName: `8 Raflaan : Mankirt Aulakh Ft Gurlej Akhtar Ginni Kapoor Shree Brar Avvy Sra | New Punjabi Song 2021
     <br/>
    <div class="subtitle">Mankirt Aulakh</div>`,
    poster: "bollywood images/88.webp",
  },
  {
    id: "89",
    songName: `Barsaat Ki Dhun Song | Rochak K Ft. Jubin N | Gurmeet C, Karishma S |Rashmi V | Ashish P | Bhushan K <br/>
    <div class="subtitle">Anu Malik, Jubin Nautiyal, and Rochak Kohli
    </div>`,
    poster: "bollywood images/89.webp",
  },
  {
    id: "90",
    songName: `Dil Lauta Do Song | Jubin Nautiyal, Payal Dev | sunny k, Saiyami k<br/>
    <div class="subtitle">Navjit B | Bhushan K</div>`,
    poster: "bollywood images/90.webp",
  },
  {
    id: "91",
    songName: `Wafa Na Raas Aayee Song Jubin Nautiyal Ft.Himansh K,Arushi N, Meet Bros|Rashmi V|Ashish P| Bhushan K <br/>
    <div class="subtitle"> Jubin Nautiyal, Meet Bros, and Nikhil-Vinay
    </div>`,
    poster: "bollywood images/91.webp",
  },
  {
    id: "92",
    songName: `Lut Gaye (Full Song) Emraan Hashmi, Yukti | Jubin N, Tanishk B, Manoj M | Bhushan K | Radhika-Vinay <br/>
    <div class="subtitle">Jubin Nautiyal | Manoj</div>`,
    poster: "bollywood images/92.webp",
  },
  {
    id: "93",
    songName: `Nayan Song | Dhvani B Jubin N | Lijo G Dj Chetas Manoj M Manhar U | Radhika Vinay | Bhushan K <br/>
    <div class="subtitle">Dhvani Bhanushali, Jubin Nautiyal, and Lijo George
    </div>`,
    poster: "bollywood images/93.webp",
  },
  {
    id: "94",
    songName: `Saiyaan Ji ► Yo Yo Honey Singh, Neha Kakkar|Nushrratt Bharuccha| Lil G, Hommie D| Mihir G|Bhushan K <br/>
    <div class="subtitle"><Yo Yo Honey Singh/div>`,
    poster: "bollywood images/94.webp",
  },
  {
    id: "95",
    songName: `Jannat Ve | Darshan Raval | Nirmaan | Lijo George | Indie Music Label <br/>
    <div class="subtitle">Darshan Raval</div>`,
    poster: "bollywood images/95.webp",
  },
  {
    id: "96",
    songName: `O SAKI SAKI | Nora Fatehi, Tanishk B, Neha K, Tulsi K, B Praak, Vishal-Shekhar <br/>
    <div class="subtitle">Tulsi Kumar, Neha Kakkar, B Praak</div>`,
    poster: "bollywood images/96.webp",
  },
  {
    id: "97",
    songName: `Vaathi Coming | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj <br/>
    <div class="subtitle"> Anirudh Ravichander and Gana Balachander
    </div>`,
    poster: "bollywood images/97.webp",
  },
  {
    id: "98",
    songName: `Dil Bechara – Title Track | Sushant Singh Rajput | Sanjana Sanghi | A.R. Rahman |Mukesh C | <br/>
    <div class="subtitle">A.R. Rahman |Mukesh C |</div>`,
    poster: "bollywood images/98.webp",
  },
  {
    id: "99",
    songName: `Naach Meri Rani: Guru Randhawa Feat. Nora Fatehi | Tanishk Bagchi | Nikhita Gandhi | Bhushan Kumar <br/>
    <div class="subtitle">Guru Randhawa</div>`,
    poster: "bollywood images/99.webp",
  },
  {
    id: "100",
    songName: `Pagal Nahi Hona | O Mainu pata Mohabbat hud tu mainu nai <br/>
    <div class="subtitle">Avvy Sra, Sonu Sood, and Sunanda Sharma</div>`,
    poster: "bollywood images/100.webp",
  },
  {
    id: "101",
    songName: `Dil De Diya - Radhe |Salman Khan, Jacqueline Fernandez |Himesh Reshammiya|Kamaal K,Payal D|Shabbir A <br/>
    <div class="subtitle">Kamaal Khan and Payal Dev
    </div>`,
    poster: "bollywood images/101.webp",
  },
  {
    id: "102",
    songName: `Taaron Ke Shehar Song: Neha Kakkar, Sunny Kaushal | Jubin Nautiyal,Jaani | Bhushan Kumar | Arvindr K <br/>
    <div class="subtitle">Jubin Nautiyal and Neha Kakkar
    </div>`,
    poster: "bollywood images/102.webp",
  },
  {
    id: "103",
    songName: `KHAIRIYAT (BONUS TRACK) | CHHICHHORE | Sushant, Shraddha | Pritam |Arijit Singh <br/>
    <div class="subtitle">Arijit Singh</div>`,
    poster: "bollywood images/103.webp",
  },
  {
    id: "104",
    songName: `Tujhko Mirchi Lagi Toh Main Kya Karoon | Coolie No.1 | Varun Dhawan, Sara Ali Khan | Love Song <br/>
    <div class="subtitle">Alka Yagnik and Kumar Sanu</div>`,
    poster: "bollywood images/104.webp",
  },
  {
    id: "105",
    songName: `Dil Tod ke | song | Rochak Kohli<br/>
    <div class="subtitle">Bhushan Kumar | Kaashish V</div>`,
    poster: "bollywood images/105.webp",
  },
  {
    id: "106",
    songName: `Vaaste Song: Dhvani Bhanushali, Tanishk Bagchi | Nikhil D | Bhushan Kumar | Radhika Rao, Vinay Sapru <br/>
    <div class="subtitle">Dhvani Bhanushali, Nikhil D'Souza, and Tanishk Bagchi
    </div>`,
    poster: "bollywood images/106.webp",
  },
  {
    id: "107",
    songName: `Judaiyaan | Darshan Raval | Shreya Ghoshal | Surbhi Jyoti | Indie Music Label
    <br/>
    <div class="subtitle">Rajat Nagpal and Tanveer Evan</div>`,
    poster: "bollywood images/107.webp",
  },
  {
    id: "108",
    songName: `Kya Karu (Full Song) Millind Gaba Feat Ashnoor | Parampara Tandon | Asli Gold, Shabby, Bhushan Kumar <br/>
    <div class="subtitle">Millind Gaba and Parampara Thakur
    </div>`,
    poster: "bollywood images/108.webp",
  },
  {
    id: "109",
    songName: `Garmi Song | Street Dancer 3D | Varun D, Nora F, Shraddha K, Badshah, Neha K | Remo D <br/>
    <div class="subtitle">Badshah and Neha Kakkar</div>`,
    poster: "bollywood images/109.webp",
  },
  {
    id: "110",
    songName: `Teri Aankhon Mein Song: Divya K | Darshan R, Neha K | Pearl V Manan B | Radhika, Vinay | Bhushan K <br/>
    <div class="subtitle">Darshan Raval, Manan Bhardwaj, and Neha Kakkar
    </div>`,
    poster: "bollywood images/110.webp",
  },
  {
    id: "111",
    songName: `Tum Hi Aana | Marjaavaan | Riteish D, Sidharth M, Tara S |Jubin Nautiyal,Payal Dev,Kunaal V <br/>
    <div class="subtitle">Jubin Nautiyal and Payal Dev</div>`,
    poster: "bollywood images/111.webp",
  },
  {
    id: "112",
    songName: `Illegal Weapon 2.0 - Street Dancer 3D | Varun D, Shraddha K | Tanishk B,Jasmine Sandlas,Garry Sandhu <br/>
    <div class="subtitle"> Jasmine Sandlas and Garry Sandhu</div>`,
    poster: "bollywood images/112.webp",
  },
  {
    id: "113",
    songName: `Feelings | KHATRI | Deepesh Goyal | Haryanvi Song 2020 <br/>
    <div class="subtitle">Sumit Goswami</div>`,
    poster: "bollywood images/113.webp",
  },
  {
    id: "114",
    songName: `Genda Phool | Jacqueline Fernandez | Payal Dev | Hit Anthem of the Year 2021 <br/>
    <div class="subtitle">Badshah </div>`,
    poster: "bollywood images/114.webp",
  },
  {
    id: "115",
    songName: `Dheeme Dheeme - @TonyKakkar | Neha Sharma <br/>
    <div class="subtitle">Neha Kakkar, Tanishk Bagchi, and Tony Kakkar
    </div>`,
    poster: "bollywood images/115.webp",
  },
  {
    id: "116",
    songName: `8 Parche | Baani Sandhu | Gur Sidhu | Gurneet Dosanjh | Punjabi Song <br/>
    <div class="subtitle">Baani Sandhu and Gur Sidhu
    </div>`,
    poster: "bollywood images/116.webp",
  },
  {
    id: "117",
    songName: `Muqabla | Street Dancer 3D |A.R. Rahman, Prabhudeva, Varun D, Shraddha K, Tanishk B <br/>
    <div class="subtitle">Parampara Thakur and Yash Narvekar
    </div>`,
    poster: "bollywood images/117.webp",
  },
  {
    id: "118",
    songName: `Bana De | Sukh - E Muzical Doctorz | Aastha Gill | Jaani <br/>
    <div class="subtitle">Aastha Gill, Jaani, and Sukh-E</div>`,
    poster: "bollywood images/118.webp",
  },
  {
    id: "119",
    songName: `LAGDI LAHORE DI|Street Dancer 3D | Varun D,Shraddha K, Nora F |Guru Randhawa,Tulsi Kumar <br/>
    <div class="subtitle"> Guru Randhawa and Tulsi Kumar.</div>`,
    poster: "bollywood images/119.webp",
  },
  {
    id: "120",
    songName: `Caught Up (Official Music) <br/>
    <div class="subtitle">Usher</div>`,
    poster: "bollywood images/120.webp",
  },
];

// --------------------used for searching songs results -------------------------

let search_result = document.getElementsByClassName("search_result")[0];
// console.log(search_result);
songs.forEach((element) => {
  const { id, songName, poster } = element;
  // console.log(songName);
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;

  card.innerHTML = `<img src="${poster}" alt="" />
  <div class="content">
    ${songName}
  </div>`;

  search_result.appendChild(card);
});

let input = document.getElementsByTagName("input")[1];
// console.log(input);
input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_result.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let p = items[index].getElementsByClassName("content")[0];
    let text_value = p.textContent || p.innerText;
    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }
    if (input.value == 0) {
      search_result.style.display = "none";
    } else {
      search_result.style.display = "flex";
    }
  }
});

//  ----------play click song in search result-------------------

Array.from(document.getElementsByClassName("card")).forEach((element) => {
  element.addEventListener("click", () => {
    let songId = element.id;
    // console.log(songId);
    location.href = `#${songId}`;
    // console.log(songId);
  });
});

// ------------------used to update song poster and name---------------------
Array.from(document.getElementsByClassName("songItems")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);

// Array.from(document.getElementsByClassName("songItems")).forEach(
//   (element, i) => {
//     let imgElement = element.getElementsByTagName("img")[0];
//     let h5Element = element.getElementsByTagName("h5")[0];
//     if (imgElement && h5Element && songs[i]) {
//       imgElement.src = songs[i].poster;
//       h5Element.innerHTML = songs[i].songName;
//     } else {
//       console.error("Error updating song at index:", i);
//       console.log("imgElement:", imgElement);
//       console.log("h5Element:", h5Element);
//       console.log("song:", songs[i]);
//     }
//   }
// );

// ------------------used for playing and pausing music---------------------

let music = new Audio("bollywood songs/5.mp3");
let master_play_btn = document.querySelector("#master_play_btn");
let wave = document.getElementById("danceWave");

master_play_btn.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("waveActive");
    master_play_btn.classList.add("fa-pause");
    master_play_btn.classList.remove("fa-play");
  } else {
    music.pause();
    wave.classList.remove("waveActive");
    master_play_btn.classList.remove("fa-pause");
    master_play_btn.classList.add("fa-play");
  }
});

//
//
//
//

//------------------ used for make background active when clicked on song---------------------

let makePlay = () => {
  Array.from(document.getElementsByClassName("bi-play-circle")).forEach(
    (element) => {
      element.classList.remove("bi-pause-circle"); ////////////////////////////////for play and pause
      element.classList.add("bi-play-circle");
    }
  );
};
const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName("songItems")).forEach(
    (element) => {
      element.style.background = "rgb(105, 105, 105, 0)";
    }
  );
};

let Daku = document.getElementById("Daku");
let Main_play_title_Daku_h5 = document.getElementById(
  "Main_play_title_Daku_h5"
);
let index = 0;
let dwn_song = document.getElementById("dwn_song");

Array.from(document.getElementsByClassName("bi-play-circle")).forEach((e) => {
  e.addEventListener("click", (id_select) => {
    index = id_select.target.id;
    // console.log(index);
    music.src = `bollywood songs/${index}.mp3`;
    Daku.src = `bollywood images/${index}.webp`;
    music.play();
    master_play_btn.classList.add("fa-pause");
    master_play_btn.classList.remove("fa-play");
    wave.classList.add("waveActive");

    dwn_song.href = `bollywood songs/${index}.mp3`;

    let songTitle = songs.filter((ele) => {
      return ele.id == index;
    });
    songTitle.forEach((el) => {
      let { songName } = el;

      Main_play_title_Daku_h5.innerHTML = songName;
      // console.log(songName. substring(0, 10) + "...");
      // now_title = Main_play_title_Daku_h5.innerHTML;

      dwn_song.setAttribute(
        "download",
        songName.substring(0, 10) + "..." + ".mp3"
      );

      // makeAllBackgrounds();
      // Array.from(document.getElementsByClassName("songItems"))[
      //   index - 1
      // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
      // Array.from(document.getElementsByClassName("songItems"))[
      //   index - 1
      // ].style.borderRadius = "40px";

      makePlay();
      id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
      id_select.target.classList.add("bi-pause-circle");
    });
  });
});

music.addEventListener("loadedmetadata", () => {
  let song_total_duration = music.duration;

  let song_total_duration_minutes = Math.floor(song_total_duration / 60);
  let song_total_duration_seconds = Math.floor(song_total_duration % 60);

  if (
    !isNaN(song_total_duration_minutes) &&
    !isNaN(song_total_duration_seconds)
  ) {
    if (song_total_duration_seconds < 10) {
      song_total_duration_seconds = `0${song_total_duration_seconds}`;
    }
    if (song_total_duration_minutes < 10) {
      song_total_duration_minutes = `0${song_total_duration_minutes}`;
    }
    song_duration.innerText = `${song_total_duration_minutes}:${song_total_duration_seconds}`;
  }
});

//----------------------used for changing song duration-------------------------------------

let current_time = document.getElementById("current_time");
let song_duration = document.getElementById("song_duration");

let change_music_curr_time = document.querySelector(".change_music_curr_time");
let seek = document.querySelector("#seek");
let CMCT2 = document.querySelector(".CMCT2");
let CMCT3 = document.querySelector(".CMCT3");

music.addEventListener("timeupdate", () => {
  let running_time = music.currentTime;
  let song_total_duration = music.duration;

  let song_total_duration_minutes = Math.floor(song_total_duration / 60);
  let song_total_duration_seconds = Math.floor(song_total_duration % 60);

  let running_time_minutes = Math.floor(running_time / 60);
  let running_time_seconds = Math.floor(running_time % 60);

  if (running_time_seconds < 10) {
    running_time_seconds = `0${running_time_seconds}`;
  } else {
    running_time_seconds = running_time_seconds;
  }
  if (running_time_minutes < 10) {
    running_time_minutes = `0${running_time_minutes}`;
  } else {
    running_time_minutes = running_time_minutes;
  }

  current_time.innerText = `${running_time_minutes}:${running_time_seconds}`;

  if (song_total_duration_seconds < 10) {
    song_total_duration_seconds = `0${song_total_duration_seconds}`;
  } else {
    song_total_duration_seconds = song_total_duration_seconds;
  }
  if (song_total_duration_minutes < 10) {
    song_total_duration_minutes = `0${song_total_duration_minutes}`;
  } else {
    song_total_duration_minutes = song_total_duration_minutes;
  }
  song_duration.innerText = `${song_total_duration_minutes}:${song_total_duration_seconds}`;

  //-----------------------------for seek bar---------------------------------
  seek.addEventListener("click", () => {
    music.currentTime = (seek.value * music.duration) / 100;
  });
  seek.addEventListener("change", () => {
    music.currentTime = (seek.value * music.duration) / 100;
  });
  let progressBar = parseInt((running_time / song_total_duration) * 100);
  seek.value = progressBar;
  // console.log(seek.value);

  let seekbar = seek.value;
  CMCT2.style.width = `${seekbar}%`;
  CMCT3.style.left = `${seekbar}%`;
});

//----------------for change volume----------------

let vol = document.getElementById("vol");
let sui_inc = document.getElementsByClassName("sui_inc");
let sui_inc2 = document.getElementsByClassName("sui_inc2");
let volume_icon = document.getElementById("volume_icon");
let change_volume2 = document.getElementsByClassName("change_volume2");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    volume_icon.classList.remove("fa-volume-high");
    volume_icon.classList.add("fa-volume-xmark");
    volume_icon.classList.remove("fa-volume-low");
  }
  if (vol.value > 0 || vol.value <= 60) {
    volume_icon.classList.remove("fa-volume-high");
    volume_icon.classList.remove("fa-volume-xmark");
    volume_icon.classList.add("fa-volume-low");
  }
  if (vol.value > 60) {
    volume_icon.classList.remove("fa-volume-low");
    volume_icon.classList.add("fa-volume-high");
    volume_icon.classList.remove("fa-volume-xmark");
  }

  music.volume = vol.value / 100;
  vol.blur();

  let seekbar2 = vol.value;
  sui_inc[0].style.width = `${seekbar2}%`;
  sui_inc2[0].style.left = `${seekbar2}%`;
});

let previous_song_btn = document.getElementById("previous_song_btn");
let next_song_btn = document.getElementById("next_song_btn");

previous_song_btn.addEventListener("click", () => {
  index--;
  makePlay();
  // id_select.target.classList.remove("bi-play-circle");
  // id_select.target.classList.add("bi-pause-circle");

  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItems")).length;
  }

  music.src = `bollywood songs/${index}.mp3`;
  Daku.src = `bollywood images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  let songTitle = songs.filter((ele) => {
    return ele.id == index;
  });
  songTitle.forEach((el) => {
    let { songName } = el;

    Main_play_title_Daku_h5.innerHTML = songName;

    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.borderRadius = "40px";

    //   makePlay();
    //   id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
    //   id_select.target.classList.add("bi-pause-circle");
  });
});

next_song_btn.addEventListener("click", () => {
  index++;
  makePlay();
  // id_select.target.classList.remove("bi-play-circle");
  // id_select.target.classList.add("bi-pause-circle");

  if (index > Array.from(document.getElementsByClassName("songItems")).length) {
    index = 1;
  }
  music.src = `bollywood songs/${index}.mp3`;
  Daku.src = `bollywood images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  let songTitle = songs.filter((ele) => {
    return ele.id == index;
  });
  songTitle.forEach((el) => {
    let { songName } = el;

    Main_play_title_Daku_h5.innerHTML = songName;

    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.borderRadius = "40px";

    //   makePlay();
    //   id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
    //   id_select.target.classList.add("bi-pause-circle");
  });
});
music.volume = vol.value / 100;
vol.blur();

let seekbar2 = vol.value;

let volume_icon1 = document.getElementById("volume_icon");

volume_icon1.addEventListener("click", () => {
  if (volume_icon1.classList.contains("fa-volume-low")) {
    volume_icon1.classList.remove("fa-volume-low");
    volume_icon1.classList.add("fa-volume-xmark");
    music.volume = 0;
    sui_inc[0].style.width = `2%`;
    sui_inc2[0].style.left = `2%`;
  } else if (volume_icon1.classList.contains("fa-volume-high")) {
    volume_icon1.classList.remove("fa-volume-high");
    volume_icon1.classList.add("fa-volume-xmark");
    music.volume = 0;

    sui_inc[0].style.width = `2%`;
    sui_inc2[0].style.left = `2%`;
  } else if (volume_icon1.classList.contains("fa-volume-xmark")) {
    volume_icon1.classList.remove("fa-volume-xmark");
    volume_icon1.classList.add("fa-volume-high");
    music.volume = 1;

    sui_inc[0].style.width = `95%`;
    sui_inc2[0].style.left = `95%`;
  }
});

if (music.paused) {
  wave.classList.remove("waveActive");
  master_play_btn.classList.remove("fa-pause");
  master_play_btn.classList.add("fa-play");
}

let shuffle = document.getElementById("shuffle");

shuffle.addEventListener("click", () => {
  let a = shuffle.classList.value;
  // console.log(a);

  if (shuffle.style.color == "blue") {
    shuffle.style.color = "#b22262";
    // console.log("black");
  } else {
    switch (a) {
      case "fa-solid fa-shuffle":
        shuffle.style.color = "blue";
        // console.log("blue");
        break;
      default:
        break;
    }
  }
});

// music.addEventListener("ended", () => {
//   if (
//     index == Array.from(document.getElementsByClassName("songItems")).length
//   ) {
//     index = 1;
//   } else {
//     index++;
//   }

//   music.src = `bollywood songs/${index}.mp3`;
//   Daku.src = `bollywood images/${index}.webp`;
//   music.play();
//   master_play_btn.classList.add("fa-pause");
//   master_play_btn.classList.remove("fa-play");
//   wave.classList.add("waveActive");

//   dwn_song.href = `bollywood songs/${index}.mp3`;

//   let songTitle = songs.filter((ele) => {
//     return ele.id == index;
//   });
//   songTitle.forEach((el) => {
//     let { songName } = el;

//     Main_play_title_Daku_h5.innerHTML = songName;
//     // console.log(songName. substring(0, 10) + "...");
//     // now_title = Main_play_title_Daku_h5.innerHTML;

//     dwn_song.setAttribute(
//       "download",
//       songName.substring(0, 10) + "..." + ".mp3"
//     );

//     // makeAllBackgrounds();
//     // Array.from(document.getElementsByClassName("songItems"))[
//     //   index - 1
//     // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
//     // Array.from(document.getElementsByClassName("songItems"))[
//     //   index - 1
//     // ].style.borderRadius = "40px";

//     // makePlay();
//     // id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
//     // id_select.target.classList.add("bi-pause-circle");
//   });
// });

const shuffleOff = () => {
  if (
    index == Array.from(document.getElementsByClassName("songItems")).length
  ) {
    index = 1;
  } else {
    index++;
  }

  music.src = `bollywood songs/${index}.mp3`;
  Daku.src = `bollywood images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  dwn_song.href = `bollywood songs/${index}.mp3`;

  let songTitle = songs.filter((ele) => {
    return ele.id == index;
  });
  songTitle.forEach((el) => {
    let { songName } = el;

    Main_play_title_Daku_h5.innerHTML = songName;
    // console.log(songName. substring(0, 10) + "...");
    // now_title = Main_play_title_Daku_h5.innerHTML;

    dwn_song.setAttribute(
      "download",
      songName.substring(0, 10) + "..." + ".mp3"
    );

    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.borderRadius = "40px";

    // makePlay();
    // id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
    // id_select.target.classList.add("bi-pause-circle");
  });
};
const repeat_music = () => {
  index;

  music.src = `bollywood songs/${index}.mp3`;
  Daku.src = `bollywood images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  dwn_song.href = `bollywood songs/${index}.mp3`;

  let songTitle = songs.filter((ele) => {
    return ele.id == index;
  });
  songTitle.forEach((el) => {
    let { songName } = el;

    Main_play_title_Daku_h5.innerHTML = songName;
    // console.log(songName. substring(0, 10) + "...");
    // now_title = Main_play_title_Daku_h5.innerHTML;

    dwn_song.setAttribute(
      "download",
      songName.substring(0, 10) + "..." + ".mp3"
    );

    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.borderRadius = "40px";

    // makePlay();
    // id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
    // id_select.target.classList.add("bi-pause-circle");
  });
};

const shuffleOn = () => {
  if (
    index == Array.from(document.getElementsByClassName("songItems")).length
  ) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length) + 1;
  }

  music.src = `bollywood songs/${index}.mp3`;
  Daku.src = `bollywood images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  dwn_song.href = `bollywood songs/${index}.mp3`;

  let songTitle = songs.filter((ele) => {
    return ele.id == index;
  });
  songTitle.forEach((el) => {
    let { songName } = el;

    Main_play_title_Daku_h5.innerHTML = songName;
    // console.log(songName. substring(0, 10) + "...");
    // now_title = Main_play_title_Daku_h5.innerHTML;

    dwn_song.setAttribute(
      "download",
      songName.substring(0, 10) + "..." + ".mp3"
    );

    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.background = "rgba(26, 71, 95, 0.288)"; ///////////////////// // i change this line after making it work
    // Array.from(document.getElementsByClassName("songItems"))[
    //   index - 1
    // ].style.borderRadius = "40px";

    // makePlay();
    // id_select.target.classList.remove("bi-play-circle"); //////////// for play and pause
    // id_select.target.classList.add("bi-pause-circle");
  });
};

let repeat_btn = document.getElementsByClassName("repeat_btn")[0];

// console.log(repeat_btn.style.color == "#b22262");
repeat_btn.addEventListener("click", () => {
  if (repeat_btn.style.color == "blue") {
    repeat_btn.style.color = "#b22262";
  } else {
    repeat_btn.style.color = "blue";
  }
});

music.addEventListener("ended", () => {
  // let match = shuffle.classList.value;
  // console.log(match);

  if (repeat_btn.style.color == "blue") {
    repeat_music();
    // console.log("sugar");
  } else if (shuffle.style.color == "blue") {
    shuffleOn();
    // console.log("sugar");
  } else {
    shuffleOff();
    // console.log("normal");
  }
});

let footer = document.getElementsByClassName("footer")[0];
// console.log(footer);
let chan = document.getElementsByClassName("change_music_curr_time")[0];

music.addEventListener("play", () => {
  footer.style.display = "inline";
  footer.style.display = "flex";
  chan.style.display = "inline";
});

music.addEventListener("pause", () => {
  chan.style.display = "none";
});

let vol_icn = document.getElementById("volume_icon");
// console.log(vol_icn);
let cha_vol = document.getElementsByClassName("change_volume2")[0];
// console.log(cha_vol);

vol_icn.addEventListener("pointerover", () => {
  // console.log(vol_icn);
  cha_vol.style.display = "inline";
  cha_vol.style.display = "grid";
});
function setM_vol_icn() {
  setTimeout(function () {
    cha_vol.style.display = "none";
  }, 3000);
}


// --------------------------- for menu button---------------------

let for_menu_btn = document.getElementsByClassName("for_menu_btn")[0];
let menu_btn = document.getElementById("menu_btn");
let left_menu_side = document.getElementsByClassName("left_menu_side");
let main_body = document.getElementsByClassName("main_body");
// console.log(main_body);

for_menu_btn.addEventListener("click", () => {
  // left_menu_side[0].classList.toggle("left_menu_active");

  if (left_menu_side[0].style.display == "inline") {
    left_menu_side[0].style.display = "none";
    main_body[0].style.width = "100%";
    menu_btn.classList.remove("bi-x");
    menu_btn.classList.add("bi-list");
  } else {
    left_menu_side[0].style.display = "inline";
    // main_body[0].style.width = "calc(100% - 16rem)";
    menu_btn.classList.remove("bi-list");
    menu_btn.classList.add("bi-x");
  }
});


