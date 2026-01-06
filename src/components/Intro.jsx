import { info } from './data/smilebloom'

const Intro = () => {
  return (
    <>
      <h1>SMILEBLOOM</h1>
      <p>{info[0].content}</p>
      <div>
        <h3>{info[1].title}</h3>
        <p className="read-the-docs">
          {info[1].content}
        </p>
      </div>
      <div>
        <h4>{info[2].title}</h4>
        <p className="read-the-docs">
          {info[2].content}
        </p>
      </div>
      <button onClick={{}}>เข้าสู่เว็บไซต์</button>
    </>
  )
}

export default Intro
