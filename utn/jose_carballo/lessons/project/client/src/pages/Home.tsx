import "./styles.scss";

export const Home = () => {
  return (
   <>
    <h1 className="title_main">
    Yo Te Elijo!!
  </h1>
  <div className="img_center">
  <img src="poke222.png" alt="img center" />
</div>
<div className="img_pokebola">
  <h1> </h1>
      {/* <router-link to="/store" class="w-full flex justify-center" style=""> */}
        <button className="btn_access">
          <img src="pokebola.png" className="item_pokebola" alt="image_2" />
        </button>
    </div>
   </>
  )
}
