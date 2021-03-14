import emojiList from "./emojiList.json";

export default function filterEmoji(searchText, maxResults) {
 // console.log(searchText+'fg'+maxResults);
  //console.log(emojiList.length+'r'+remove);
  /*if(remove === 'Y'){
    console.log("cs");
    return emojiList.forEach( function(x, index)  {
      //console.log(x);
      if (x.title === searchText) {
            console.log(index+'cfe');
            emojiList.splice(index,1);
          }
          console.log(emojiList.length);
      });
    
  }else{*/
    return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
  //}
}
