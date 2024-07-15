function changeLang() {
    let selectBox = document.getElementById("selectLanguages");
    let selectedValue = selectBox.value;

    let japaneseRow = document.querySelector("table tr:nth-child(1)");
    let englishRow = document.querySelector("table tr:nth-child(2)");

    if (selectedValue === "jpn") {
        japaneseRow.style.display = "table-row";
        englishRow.style.display = "none";
    } else if (selectedValue === "en") {
        japaneseRow.style.display = "none";
        englishRow.style.display = "table-row";
    } else if (selectedValue === "all") {
        japaneseRow.style.display = "table-row";
        englishRow.style.display = "table-row";
    } else {
        japaneseRow.style.display = "none";
        englishRow.style.display = "none";
    }
}