export default function Page() {
  return (
    // <div className="hero">
    //   <div className="hero_container">
    //     <img
    //       src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,q_100,w_732/v1613926625/fitness/e45_wzebre.jpg"
    //       alt="hello"
    //       className="hero_img"
    //     />

    //     <div>
    //       <p className="fs-50">
    //         Avasta HIIT treeningute maailm meie rakendusega, mis on loodud sinu tervise ja vormi
    //         parandamiseks!
    //       </p>
    //       <button>HIIT Treeningud</button>
    //     </div>
    //   </div>

    //   <div className="hero_container">
    //     <img
    //       src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,q_100,w_732/v1613926625/fitness/e34_ri9ujc.jpg"
    //       alt="hello"
    //       className="hero_img"
    //     />
    //     <div>
    //       <p className="fs-50">
    //         Tugevda oma keha ja vaimu meie jõutreeningutega - saavuta oma parim vorm koos meiega!
    //       </p>
    //       <button>Jõutreeningud</button>
    //     </div>
    //   </div>

    //   <div></div>
    // </div>
    <div className="landing">
      <div className="landing-bg"></div>

      <center>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
          You can. <br /> Just Start Now.
        </h1>
      </center>

      <center>
        <p
          style={{
            maxWidth: '45ch',
            fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
            lineHeight: 1.5,
            margin: 'auto',
          }}
        >
          Free online training programs for everyone. No equipment needed. Start your fitness
          journey today!
        </p>
      </center>

      <center className="mt-200">
        <button>Start latest workout</button>
      </center>

      <div className="cards fx-a-center fx-j-center fx-g-x-100">
        <div className="card">
          <h2>How it works</h2>
          <p>
            Choose a workout program that fits your goals and schedule. Follow the guided exercises
            and track your progress.
          </p>
        </div>
        <div className="card">
          <h2>Why choose us?</h2>
          <p>
            Our programs are designed by fitness experts and tailored for all levels. Join our
            community and get support on your journey.
          </p>
        </div>

        <div className="card">
          <h2>Get started today</h2>
          <p>
            No signup needed. Free access to our full library of workouts. No equipment needed, just
            your body and determination.
          </p>
        </div>
      </div>
    </div>
  )
}
