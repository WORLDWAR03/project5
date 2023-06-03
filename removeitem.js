function removeColor () {
    let selectinlist = document.getElementById("colorselect");
    let selected =selectinlist.selectedIndex;
    selectinlist.remove(selected);
} 