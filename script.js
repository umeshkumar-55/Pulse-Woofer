// ---------------------for disabiling right click  and selecting text-------------------------

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// })
// document.addEventListener("selectstart", (e) => {
//   e.preventDefault();
// })

// ----------------------horizontal scrolling-----------------------------

let trending_left_arrow = document.querySelector("#trending_left_arrow");
let trending_right_arrow = document.querySelector("#trending_right_arrow");
let trending_songs = document.getElementsByClassName(".trending_songs");

trending_left_arrow.addEventListener("click", () => {
  trending_songs.scrollLeft -= 300;
});

trending_right_arrow.addEventListener("click", () => {
  trending_songs.scrollLeft += 300;
});

// let trending_songs1 = document.querySelector("trending_songs1");
// // console.log(trending_songs1);
// trending_left_arrow.addEventListener("click", () => {
//   trending_songs1.scrollLeft -= 300;
// });

// trending_right_arrow.addEventListener("click", () => {
//   trending_songs1.scrollLeft += 300;
// });

const songs = [
  {
    id: "1",
    songName: `8 Parche
     <br />
        <div class="subtitle">Baani Sandhu</div>`,
    poster: "songs images/1.webp",
  },
  {
    id: "2",
    songName: `Birthday Bash <br />
        <div class="subtitle">Yo Yo Honey Singh</div>`,
    poster: "songs images/2.webp",
  },
  {
    id: "3",
    songName: `Bombay To Punjab <br />
        <div class="subtitle">Deep Jandu & Divine</div>`,
    poster: "songs images/3.webp",
  },
  {
    id: "4",
    songName: `California Love <br />
        <div class="subtitle">Roger Troutman</div>`,
    poster: "songs images/4.webp",
  },
  {
    id: "5",
    songName: `Daku <br />
        <div class="subtitle">Chani Nattan</div>`,
    poster: "songs images/5.webp",
  },
  {
    id: "6",
    songName: `Dope Shope <br />
        <div class="subtitle">Yo Yo Honey Singh</div>`,
    poster: "songs images/6.webp",
  },
  {
    id: "7",
    songName: `Kaley Sheeshe <br />
        <div class="subtitle">Addy Nagar & Aniket Jain</div>`,
    poster: "songs images/7.webp",
  },
  {
    id: "8",
    songName: `One Bottle Down <br />
        <div class="subtitle">Yo Yo Honey Singh</div>`,
    poster: "songs images/8.webp",
  },
  {
    id: "9",
    songName: `We Rollin <br />
        <div class="subtitle">Shubh</div>`,
    poster: "songs images/9.webp",
  },
  {
    id: "10",
    songName: `Devil <br />
        <div class="subtitle">Sidhu Moose Wala</div>`,
    poster: "songs images/10.webp",
  },
  {
    id: "11",
    songName: `Aa  <br />
        <div class="subtitle">Walker Hayes</div>`,
    poster: "songs images/11.webp",
  },
  {
    id: "12",
    songName: `Na Na Na Na<br />
        <div class="subtitle">J Star</div>`,
    poster: "songs images/12.webp",
  },
  {
    id: "13",
    songName: `KALAASTAR <br />
        <div class="subtitle">Yo Yo Honey Singh</div>`,
    poster: "songs images/13.webp",
  },
  {
    id: "14",
    songName: `Prada<br />
        <div class="subtitle">Jass Manak  </div>`,
    poster: "songs images/14.webp",
  },
  {
    id: "15",
    songName: `Taki Taki ft Selena  <br />
        <div class="subtitle"> DJ Snake </div>`,
    poster: "songs images/15.webp",
  },
  {
    id: "16",
    songName: `YALGAAR <br />
        <div class="subtitle">CarryMinati, Wily Frenzy</div>`,
    poster: "songs images/16.webp",
  },
  {
    id: "17",
    songName: `BILLO  <br />
        <div class="subtitle"> J Star </div>`,
    poster: "songs images/17.webp",
  },
  {
    id: "18",
    songName: `Tuition Badmashi Kaa <br />
        <div class="subtitle">Manisha Sharma</div>`,
    poster: "songs images/18.webp",
  },
  {
    id: "19",
    songName: `Bacha Bacha Badmash Ho Gya   <br />
        <div class="subtitle">Sippy Gill </div>`,
    poster: "songs images/19.webp",
  },
  {
    id: "20",
    songName: `Age 18  <br />
        <div class="subtitle">Mankirt Aulakh </div>`,
    poster: "songs images/20.webp",
  },
  {
    id: "21",
    songName: `Pyaar Hota Kayi Baar Hai (Song) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam, Arijit, Amitabh<br />
        <div class="subtitle">Arijit Singh</div>`,
    poster: "songs images/21.webp",
  },
  {
    id: "22",
    songName: `O Bedardeya (Lyrical) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam | Arijit Singh | Amitabh B <br />
        <div class="subtitle">Arijit Singh</div>`,
    poster: "songs images/22.webp",
  },
  {
    id: "23",
    songName: `Mahiye Jinna Sohna Official | Darshan Raval | Youngveer | Lijo George | Dard Album 2.0 <br />
        <div class="subtitle">Darshan Raval</div>`,
    poster: "songs images/23.webp",
  },
  {
    id: "24",
    songName: `ANIMAL:SAARI DUNIYA JALAA DENGE(Audio)|Ranbir K,Rashmika,Anil,Bobby|Sandeep|B Praak,Jaani|Bhushan K <br />
        <div class="subtitle">B Praak and Jaani
        </div>`,
    poster: "songs images/24.webp",
  },
  {
    id: "25",
    songName: `ANIMAL: HUA MAIN | Ranbir Kapoor,Rashmika M | Sandeep V | Raghav,Manoj M | Bhushan K <br />
        <div class="subtitle">Pritam Chakraborty and Raghav Chaitanya
        </div>`,
    poster: "songs images/25.webp",
  },
  {
    id: "26",
    songName: `Deewaane (Selfiee) - Akshay K | Jacqueline F | Emraan H | Aditya Y | Stebin B | Tanishk B | Kunaal V <br />
        <div class="subtitle"> Aaditya Yadav and Stebin Ben</div>`,
    poster: "songs images/26.webp",
  },
  {
    id: "27",
    songName: `LEO - Naa Ready| Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander <br />
        <div class="subtitle">Anirudh Ravichander, Asal Kolaar, and Vijay</div>`,
    poster: "songs images/27.webp",
  },
  {
    id: "28",
    songName: `Tere Pyaar Mein (Song) Tu Jhoothi Main Makkaar| Ranbir, Shraddha| Pritam| Arijit, Nikhita | Amitabh <br />
        <div class="subtitle">Arijit Singh and Nikhita Gandhi
        </div>`,
    poster: "songs images/28.webp",
  },
  {
    id: "29",
    songName: `Malang Sajna Sachet Tandon, Parampara Tandon | Adil Shaikh, Kumaar | Bhushan Kumar <br />
        <div class="subtitle">Parampara Thakur and Sachet Tandon
        </div>`,
    poster: "songs images/29.webp",
  },
  {
    id: "30",
    songName: `Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal & Sheykhar, Arijit Singh, Sukriti, Kumaar <br />
        <div class="subtitle">Arijit Singh, Sukriti Kakar, Vishal Dadlani and Shekhar Ravjiani</div>`,
    poster: "songs images/30.webp",
  },
  {
    id: "31",
    songName: `Kahani Suno 2.0 <br />
        <div class="subtitle">Kaifi Khalil</div>`,
    poster: "songs images/31.webp",
  },
  {
    id: "32",
    songName: `Tum Kya Mile - Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Shreya <br />
        <div class="subtitle"> Arijit Singh, Shreya Ghoshal, Amitabh Bhattacharya, Pritam Chakraborty</div>`,
    poster: "songs images/32.webp",
  },
  {
    id: "33",
    songName: `LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander <br />
        <div class="subtitle">Anirudh Ravichander, Hanuman, and Raqueeb Alam</div>`,
    poster: "songs images/33.webp",
  },
  {
    id: "34",
    songName: `Chilla Chilla | Thunivu | Ajith Kumar | H Vinoth | Anirudh | Ghibran <br />
        <div class="subtitle">Anirudh Ravichander, Ghibran, and Vaisagh</div>`,
    poster: "songs images/34.webp",
  },
  {
    id: "35",
    songName: `Spain | Jassa Dhillon | thiarajxtt | VIBIN <br />
        <div class="subtitle">Jassa Dhillon and Thiarajxtt</div>`,
    poster: "songs images/35.webp",
  },
  {
    id: "36",
    songName: `DAKU | INDERPAL MOGA | CHANI NATTAN | NEW PUNJABI SONG | LATEST PUNJABI SONG 2022 |Daku Ik number da
        <br />
        <div class="subtitle">Siddhu Moose Wala</div>`,
    poster: "songs images/36.webp",
  },
  {
    id: "37",
    songName: `295 | Sidhu Moose Wala | The Kidd | Moosetape<br />
        <div class="subtitle">Siddhu Moose Wala</div>`,
    poster: "songs images/37.webp",
  },
  {
    id: "38",
    songName: `We Rollin (Official Audio) - Shubh<br />
        <div class="subtitle">Shubh</div>`,
    poster: "songs images/38.webp",
  },
  {
    id: "39",
    songName: `Imran Khan - Amplifier (Official Music)<br />
        <div class="subtitle">Yo Yo Honey Singh</div>`,
    poster: "songs images/39.webp",
  },
  {
    id: "40",
    songName: `DHAKKA : Sidhu Moose Wala ft Afsana Khan | The Kidd | Punjabi Songs 2020 | Gold Media<br />
        <div class="subtitle">Siddhu Moose Wala</div>`,
    poster: "songs images/40.webp",
  },
  {
    id: "41",
    songName: `Excuses (Official Music) | AP Dhillon | Gurinder Gill | Intense<br />
        <div class="subtitle">AP Dhillon | Gurinder Gill | Intense</div>`,
    poster: "songs images/41.webp",
  },
  {
    id: "42",
    songName: `INSANE - AP DHILLON | GURINDER GILL | SHINDA KAHLON<br />
        <div class="subtitle">AP DHILLON | GURINDER GILL | SHINDA KAHLON</div>`,
    poster: "songs images/42.webp",
  },
  {
    id: "43",
    songName: `DESIRES - AP DHILLON | GURINDER GILL<br />
        <div class="subtitle">AP DHILLON | GURINDER GILL</div>`,
    poster: "songs images/43.webp",
  },
  {
    id: "44",
    songName: `BROWN MUNDE - AP DHILLON | GURINDER GILL | SHINDA KAHLON<br />
        <div class="subtitle">AP DHILLON | GURINDER GILL | SHINDA KAHLON </div>`,
    poster: "songs images/44.webp",
  },
  {
    id: "45",
    songName: `FARAAR - GURINDER GILL | SHINDA KAHLON | AP DHILLON<br />
        <div class="subtitle">GURINDER GILL | SHINDA KAHLON | AP DHILLON</div>`,
    poster: "songs images/45.webp",
  },
  {
    id: "46",
    songName: `So High | Official Music | Sidhu Moose Wala ft. BYG BYRD <br />
        <div class="subtitle">Siddhu Moose Wala</div>`,
    poster: "songs images/46.webp",
  },
  {
    id: "47",
    songName: `GOAT Sidhu Moose Wala | Wazir Patar | Sukh Sanghera <br />
        <div class="subtitle">Siddhu Moose Wala</div>`,
    poster: "songs images/47.webp",
  },
  {
    id: "48",
    songName: `GOAT - AP DHILLON | GURINDER GILL | MONEY MUSIK<br />
        <div class="subtitle">AP DHILLON | GURINDER GILL | MONEY MUSIK</div>`,
    poster: "songs images/48.webp",
  },
  {
    id: "49",
    songName: `G.O.A.T. <br />
        <div class="subtitle">Diljit Dosanjh</div>`,
    poster: "songs images/49.webp",
  },
  {
    id: "50",
    songName: `8 Raflaan<br />
        <div class="subtitle">Mankirt Aulakh
        </div>`,
    poster: "songs images/50.webp",
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
    console.log(songId);
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

let music = new Audio("songs for Pulse Woofer/5.mp3");
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
    music.src = `songs for Pulse Woofer/${index}.mp3`;
    Daku.src = `songs images/${index}.webp`;
    music.play();
    master_play_btn.classList.add("fa-pause");
    master_play_btn.classList.remove("fa-play");
    wave.classList.add("waveActive");

    dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;

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

  music.src = `songs for Pulse Woofer/${index}.mp3`;
  Daku.src = `songs images/${index}.webp`;
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
    dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;
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
  music.src = `songs for Pulse Woofer/${index}.mp3`;
  Daku.src = `songs images/${index}.webp`;
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
    dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;
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

//   music.src = `songs for Pulse Woofer/${index}.mp3`;
//   Daku.src = `songs images/${index}.webp`;
//   music.play();
//   master_play_btn.classList.add("fa-pause");
//   master_play_btn.classList.remove("fa-play");
//   wave.classList.add("waveActive");

//   dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;

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

  music.src = `songs for Pulse Woofer/${index}.mp3`;
  Daku.src = `songs images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;

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

  music.src = `songs for Pulse Woofer/${index}.mp3`;
  Daku.src = `songs images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;

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

  music.src = `songs for Pulse Woofer/${index}.mp3`;
  Daku.src = `songs images/${index}.webp`;
  music.play();
  master_play_btn.classList.add("fa-pause");
  master_play_btn.classList.remove("fa-play");
  wave.classList.add("waveActive");

  dwn_song.href = `songs for Pulse Woofer/${index}.mp3`;

  let songTitle = songs.filter((ele) => {
    return ele.id == index;
  });
  s;
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
vol_icn.addEventListener("pointerleave", setM_vol_icn);

let listen_now = document.getElementsByClassName("listen_now")[0];
// console.log(listen_now);

listen_now.addEventListener("click", () => {
  // console.log(listen_now);
  music.play();
});

// document.addEventListener("DOMContentLoaded", function () {
//   let searchInput = document.getElementById("search_bar");
//   let searchButton = document.getElementById("search_button");
//   if (searchInput.placeholder == "") {
//     searchInput.placeholder = "Search";
//   } else {
//     searchInput.addEventListener("click", function () {
//       searchInput.placeholder = "";
//     });
//   }
// });

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