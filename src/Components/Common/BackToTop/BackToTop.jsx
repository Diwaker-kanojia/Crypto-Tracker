import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
const BackToTop = () => {
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div
      onClick={() => topFunction()}
      className="fixed bottom-20 right-5 flex justify-center items-center size-12 border-2 border-blue m-5 rounded-full cursor-pointer bg-white dark:bg-black "
      id="myBtn"
    >
      <ArrowUpwardRoundedIcon
        style={{
          color: "#3a80e9",
        }}
      />
    </div>
  );
};

export default BackToTop;
