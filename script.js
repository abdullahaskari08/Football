// 💥 Explosion Effect
function explode(element) {
    let rect = element.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    document.getElementById("back-btn").style.display = "block";

    let fragmentData = [
        { 
            text: "Basic Details", 
            color:" rgb(40, 135, 238)", 
            textcolor: "black", 
            detail: `🌟 **Prophet Muhammad (S.A.W) – Personal Information** 🌟
Full Name:
Muhammad ibn Abdullah ibn Abdul-Muttalib ibn Hashim
The full name of Prophet Muhammad (PBUH) signifies his lineage and noble
ancestry. He was a direct descendant of Hashim, a prominent member of the 
Quraysh tribe of Mecca.

Titles (Laqab):
Prophet Muhammad (PBUH) was bestowed with many honorable titles that reflect
his character, mission, and divine status:

Al-Sadiq (The Truthful): This title highlights the Prophet’s unwavering 
commitment to truthfulness and honesty. Throughout his life, he was known
 for his integrity, even before his Prophethood.

Al-Amin (The Trustworthy): Muhammad (PBUH) was called "Al-Amin" due to his
 reputation for being trustworthy. People, even those who opposed him,
  would leave their valuables in his care.

Khatam an-Nabiyyin (The Seal of the Prophets): This title means that
Prophet Muhammad (PBUH) is the last and final prophet in the line of
prophets sent by Allah to guide humanity. It signifies the completion
of the message of Islam.

Rahmatul-lil-Alameen (Mercy for the Worlds): Muhammad (PBUH) was sent
 as a mercy to all of creation. This title reflects his compassionate
  nature and his mission to bring guidance and peace to all mankind.

Father's Name:
Abdullah ibn Abdul-Muttalib
Abdullah was the father of Prophet Muhammad (PBUH) and a member of the
noble Hashim clan of the Quraysh tribe. He passed away before Muhammad
was born, making him an orphan at a very young age.

Mother's Name:
Amina bint Wahb
Amina was the mother of Prophet Muhammad (PBUH), and she belonged to the
noble Zuhra clan. She passed away when Muhammad (PBUH) was only six years
old, leaving him an orphan early in his life.

Date of Birth:
12 Rabi' al-Awwal (570 CE)
The birth of Muhammad (PBUH) is celebrated on the 12th day of Rabi' al-Awwal,
the third month of the Islamic calendar. This date marks the arrival of the
final Prophet, a momentous event in the history of humanity.

Place of Birth:
Mecca, Arabia
Prophet Muhammad (PBUH) was born in Mecca, which was, at the time,
 a bustling city in the Arabian Peninsula. Mecca holds immense significance
  in Islam, being the site of the Kaaba and the holiest city in Islam, 
  to which Muslims turn during daily prayers.
`        },
        { 
            text: "Family Life", 
            color: "rgb(107, 0, 0)", 
            textcolor: "black", 
            detail: `💖 **Family Life** 💖
🔹 Other Wives (Mothers of the Believers):

Aisha bint Abi Bakr (RA):
Daughter of Abu Bakr (RA), known for her sharp memory and intelligence. 
She narrated over 2,000 Hadith and was a key figure in Islamic scholarship
 after the Prophet ﷺ’s passing.

Hafsa bint Umar (RA):
Daughter of Umar ibn Al-Khattab (RA). Known for her piety and strength. 
She was entrusted with the original compilation of the Qur’an during the time of Abu Bakr and Uthman (RA).

Umm Salama (RA):
A wise and respected woman. She was previously married 
and widowed before marrying the Prophet ﷺ. Known for her sound advice and support in difficult times.

Zainab bint Jahsh (RA):
Cousin of the Prophet ﷺ. Her marriage was commanded by Allah and mentioned in the Qur’an (Surah Al-Ahzab). 
She was known for her generosity and devotion to prayer.

Juwayriya bint al-Harith (RA):
A captive from the Battle of Banu Mustaliq, she later married the Prophet ﷺ. Her marriage
led to the release of many of her tribe members and strengthened relations.

Safiyyah bint Huyayy (RA):
Of noble Jewish heritage, from the Banu Nadir tribe. She accepted Islam and married the 
Prophet ﷺ after the Battle of Khaybar. She was known for her dignity and wisdom.

Maria al-Qibtiyya:
A Coptic Christian gifted to the Prophet ﷺ by the ruler of Egypt. She bore him a son, Ibrahim. 
Though not always listed among the wives, she was honored and treated with respect.

Maymunah bint al-Harith (RA):
The last woman the Prophet ﷺ married. Her marriage took place after the Treaty of Hudaybiyyah and 
helped build ties with other tribes.

(Note: There were other wives, but these are the most commonly mentioned in historical records.)

🔹 Children:

Sons:

Qasim: First son, died in infancy.

Abdullah: Also known as Al-Tayyib or Al-Tahir, passed away in childhood.

Ibrahim: Son of Maria al-Qibtiyya, died at around 16–18 months old.

Daughters:

Zainab: Married to Abul-As ibn Rabi’. She accepted Islam early and endured great hardship.

Ruqayyah: Married to Uthman ibn Affan (RA). She migrated to Abyssinia and later to Madinah, 
where she passed away during the Battle of Badr.

Umm Kulthum: After Ruqayyah’s death, she also married Uthman ibn Affan (RA). She passed away in Madinah.

Fatimah: The closest to the Prophet ﷺ. Married to Ali ibn Abi Talib (RA). She was the mother of Hasan, Husayn, Zaynab, 
and Umm Kulthum. She passed away six months after the Prophet ﷺ.`
        },
        { 
            text: "Physical Appearance", 
            color: "rgb(255, 251, 0)", 
            textcolor: "black", 
            detail: `✨ **Physical Appearance & Personality** ✨
🔹 Build: Slim and athletic – he was neither too thin nor too muscular, 
but had a well-proportioned physique that reflected strength and grace.

🔹 Height: Medium – she has a balanced and graceful stature that blends 
seamlessly into any crowd, yet manages to stand out with her poise.

🔹 Complexion: Her fair skin carries a natural reddish glow, 
giving her cheeks a soft blush that adds warmth and charm to her appearance.

🔹 Hair: Her shoulder-length hair is slightly wavy, 
flowing gently around her face, sometimes playfully bouncing with her movements. 
It complements her gentle and feminine aura.

🔹 Eyes: Her large, dark eyes are mesmerizing – deep and soulful, 
framed by long, elegant eyelashes that flutter like the wings of a butterfly. 
They often seem to speak even when she doesn’t.

🔹 Smile: Her smile is bright and captivating – the kind that can light up a room and melt hearts. 
It reflects both innocence and confidence.

🔹 Overall Vibe: She exudes a soft elegance and kindness that draws people to her. 
Her presence is comforting and uplifting, and her natural beauty is 
enhanced by a radiant personality that shines through every gesture.
        `,},
        { 
            text: "Prophethood", 
            color: "rgb(240, 8, 201)", 
            textcolor: "black", 
            detail: `📖 Prophethood & Later Life 📖

This section provides an overview of the important phases in the life of Prophet Muhammad (PBUH) after he received prophethood. 
These events had a lasting impact on Islamic history and the development of the Muslim community.

🔹 First Revelation:
At the age of 40, Prophet Muhammad (PBUH) received the first revelation in the Cave of Hira near Mecca. 
The Angel Jibreel (Gabriel) conveyed the message of Allah, marking the beginning of his prophethood.

🔹 Migration (Hijrah):
In 622 CE, the Prophet and his followers migrated from Mecca to Medina to escape persecution. 
This event, known as the Hijrah, marks the beginning of the Islamic calendar and 
was a turning point in the spread of Islam.

🔹 Major Achievements:

Islamic State in Medina: He established the first Islamic state, 
promoting justice, equality, and community welfare.

Treaty of Hudaybiyyah: A peace agreement made with the Quraysh tribe, 
which allowed Muslims to practice their faith freely and marked a diplomatic victory.

Conquest of Mecca: In 630 CE, the Prophet returned to 
Mecca with a large following. The city was conquered peacefully, 
and he forgave his former enemies, setting an example of mercy and compassion.`
        },
        { 
            text: "Final Years", 
            color: "rgb(0, 243, 32)", 
            textcolor: "black", 

            detail: `🌿 Final Years & Legacy 🌿

🔹 Farewell Sermon:
Delivered in 632 CE during the Hajj pilgrimage, the sermon 
emphasized human rights, justice, equality, and the importance 
of following the Qur'an and Sunnah.

🔹 Date of Passing:
12 Rabi' al-Awwal, 11 AH (8 June 632 CE), 
marking the end of the Prophet’s earthly mission.

🔹 Burial Place:
He was buried in Al-Masjid an-Nabawi (the Prophet’s Mosque) 
in Medina, which remains a sacred site for Muslims around the worldہ`
        }
    ];

    let fragments = [];

    for (let i = 0; i < fragmentData.length; i++) {
        let fragment = document.createElement("button");
        fragment.classList.add("fragment-btn");
        fragment.innerText = fragmentData[i].text;
        fragment.style.background = fragmentData[i].color;
        fragment.style.color = fragmentData[i].textcolor;
        document.body.appendChild(fragment);
        fragments.push(fragment);

        let angle = (i / fragmentData.length) * (2 * Math.PI);
        let distance = Math.random() * 250 + 100;

        fragment.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        fragment.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        fragment.style.left = `${centerX}px`;
        fragment.style.top = `${centerY}px`;

        // ✅ Click event: Show full details
        fragment.addEventListener("click", function () {
            fragments.forEach(btn => btn.remove());

            let detailBox = document.getElementById("detail-box");
            if (!detailBox) {
                detailBox = document.createElement("div");
                detailBox.id = "detail-box";
                document.body.appendChild(detailBox);
            }
            detailBox.innerHTML = `<pre>${fragmentData[i].detail}</pre>`;
            detailBox.style.display = "block";
        });
    }

    element.style.display = "none";
}

// Function to reset page
function resetPage() {
    document.querySelectorAll(".fragment-btn").forEach(btn => btn.remove());
    let detailBox = document.getElementById("detail-box");
    if (detailBox) detailBox.style.display = "none";
    document.querySelector(".explode-btn").style.display = "block";
    document.getElementById("back-btn").style.display = "none";
}

// ✨ CSS for Details
const style = document.createElement("style");
style.innerHTML = `
#detail-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #003366; /* Dark blue for elegance */
    color:rgb(0, 0.00%, 0%); /* Black text for contrast */
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
    width: 80%;
    max-height: 75vh;
    text-align: left;
    white-space: pre-wrap;
    overflow: scroll; /* ✅ Fixed here */
    scrollbar-color: rgb(236, 240, 6) #333;
    scrollbar-width: thin;
}


// /* Custom scrollbar styling for Webkit browsers (Chrome, Edge, Safari) */
// #detail-box::-webkit-scrollbar {
//     width: 10px; /* Scrollbar ki width */
// }

// #detail-box::-webkit-scrollbar-thumb {
//     background: rgb(236, 240, 6); /* Scrollbar ka color */
//     border-radius: 5px;
// }

// #detail-box::-webkit-scrollbar-track {
//     background: #333; /* Scrollbar ka track color */
// }



`;
document.head.appendChild(style);
