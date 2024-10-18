let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

document.getElementById("Knapp_1").addEventListener("click", function() {
    this.style.backgroundColor = "Gold";
    count1++;
    document.getElementById("clickCount_1").textContent = "Klikk count: " + count1;
    this.textContent = "Takk for klikket!";
});

document.getElementById("Knapp_2").addEventListener("click", function() {
    this.style.backgroundColor = "Gold";
    count2++;
    document.getElementById("clickCount_2").textContent = "Klikk count: " + count2;
    this.textContent = "Takk for klikket!";
});

document.getElementById("Knapp_3").addEventListener("click", function() {
    this.style.backgroundColor = "Gold";
    count3++;
    document.getElementById("clickCount_3").textContent = "Klikk count: " + count3;
    this.textContent = "Takk for klikket!";
});

document.getElementById("Knapp_4").addEventListener("click", function() {
    this.style.backgroundColor = "Gold";
    count4++;
    document.getElementById("clickCount_4").textContent = "Klikk count: " + count4;
    this.textContent = "Takk for klikket!";
});

document.getElementById("Knapp_5").addEventListener("click", function() {
    this.style.backgroundColor = "Gold";
    count5++;
    document.getElementById("clickCount_5").textContent = "Klikk count: " + count5;
    this.textContent = "Takk for klikket!";
});
