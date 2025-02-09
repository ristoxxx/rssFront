/*
 * File: Feed.jsx
 * Created Date: Tuesday February 4th 2025 01:38:56
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday February 9th 2025 05:48:36
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */
function openAndCloseTab(url, timeout = 5000) {
  alert('Ladataan...');
  const newTab = window.open(url, '_blank'); // Avaa uuden välilehden
  
  if (newTab) {
    setTimeout(() => {
      newTab.close(); // Sulkee välilehden määräajan jälkeen
    }, timeout);
  } else {
    alert('Popup-esto estää uuden välilehden avaamisen. Salli popupit selaimessa.');
  }
}
;
const Feed = ({ title, link }) => {

  return (
    <div>
      <h2>{title}</h2><br />
      <a href="#" onclick="openAndCloseTab('${link}', 5000); return false;">Lue lisää</a>
     
      <br></br>
      <br></br>
    </div>
  );
};
// <a href={link} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Lue lisää</a>
export default Feed;
