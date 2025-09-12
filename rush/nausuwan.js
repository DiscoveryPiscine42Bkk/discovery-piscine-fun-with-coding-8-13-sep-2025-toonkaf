const experiences = [
  {
    year: "2023",
    title: "การแข่งขันคิดเลขเร็วศิลปหัตกรรม",
    desc: "ผู้เข้าร่วมการแข่งขันและได้รับรางวัลชนะเลิศอันดับที่ 1 ระดับเขต",
    img: "math_2023.jpg"
  },
  {
    year: "2023",
    title: "AI Camp",
    desc: "ผู้เข้าร่วมกิจกรรมค่ายสอนการใช้งาน AI เพื่อใช้งานอย่างมีประสิทธิภาพ",
    img: "AI_2023.jpg"
  }
];

let currentIndex = 0;

function showExperience(index) {
    const exp = experiences[index];
    document.getElementById("exp-img").src = "img/"+exp.img;
    document.getElementById("exp-year").textContent = exp.year;
    document.getElementById("exp-title").textContent = exp.title;
    document.getElementById("exp-desc").innerHTML = exp.desc.replace(/\n/g, "<br>");
    }

document.addEventListener("DOMContentLoaded", () => {
    showExperience(currentIndex);

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
        showExperience(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % experiences.length;
        showExperience(currentIndex);
    });
});