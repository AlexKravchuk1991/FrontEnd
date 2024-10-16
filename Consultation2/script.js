const viewEpisodBtn = document.querySelector("#view-episod-btn");
const viewEpisodDescp = document.querySelector("#view-Episod-Desc");
const viewEpisodImg = document.querySelector("#view-episod-img");
const commentsMark1 = document.querySelector('#comments-mark1')
const commentsCard1 = document.querySelector('#comments-card1')
const commentsCard2 = document.querySelector('#comments-card2')
const commentsCard3 = document.querySelector('#comments-card3')

let isTitleCardShow = true;

const changeEpisodDesc = () => {

  if (isTitleCardShow) {
    viewEpisodDescp.textContent =
      "In this episode, host Mark interviews Dr. Rachel Hernandez, a leading engineer at NASA, about the role of artificial intelligence in space exploration. They discuss how AI is being used to analyze data from distant planets, assist in autonomous space missions, and even help design next-generation spacecraft. From the latest Mars rover advancements to the potential for AI-assisted human missions to the Moon and beyond, this conversation offers an exciting glimpse into the future of space technology.";
    viewEpisodBtn.textContent = "View Episode";
    viewEpisodImg.setAttribute(
      "src",
      "galaxy-background-with-sparkling-clouds_53876-104863.jpg"
    );
    isTitleCardShow = false;
  } else {
    viewEpisodDescp.textContent =
      "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.";
    viewEpisodBtn.textContent = "View Episode Detail";
    viewEpisodImg.setAttribute("src", "Mic.png");
    isTitleCardShow = true;
  }
  
};

const commentsCardMark = ()=>{
    commentsMark1.textContent = '5.0';
}

viewEpisodBtn.addEventListener("click", changeEpisodDesc);
commentsCard1.addEventListener('click',commentsCardMark);
commentsCard2.addEventListener('click',commentsCardMark);
commentsCard3.addEventListener('click',commentsCardMark)


