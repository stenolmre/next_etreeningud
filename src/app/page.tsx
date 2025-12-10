export default function Page() {
  return (
    <div className="hero">
      <div className="hero_container">
        <img
          src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,q_100,w_732/v1613926625/fitness/e45_wzebre.jpg"
          alt="hello"
          className="hero_img"
        />

        <div>
          <p className="fs-50">
            Avasta HIIT treeningute maailm meie rakendusega, mis on loodud sinu tervise ja vormi
            parandamiseks!
          </p>
          <button>HIIT Treeningud</button>
        </div>
      </div>

      <div className="hero_container">
        <img
          src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,q_100,w_732/v1613926625/fitness/e34_ri9ujc.jpg"
          alt="hello"
          className="hero_img"
        />
        <div>
          <p className="fs-50">
            Tugevda oma keha ja vaimu meie jõutreeningutega - saavuta oma parim vorm koos meiega!
          </p>
          <button>Jõutreeningud</button>
        </div>
      </div>

      <div></div>
    </div>
  )
}
