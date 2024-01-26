import { useState } from "react";

function Kotak({ value, onKotakClick }) {
  const style = value === "X" ? "persegi x" : "persegi o";

  return (
    <button className={style} onClick={onKotakClick}>
      {value}
    </button>
  );
}

function Papan({ namaPemain1, namaPemain2, playClicked }) {
  const [kotak, setKotak] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [skor, setSkor] = useState({ xSkor: 0, oSkor: 0 });
  const [skorUpdate, setSkorUpdate] = useState(false);

  function handleClick(i) {
    if (kotak[i] || pemenangBermain(kotak)) return;

    const nextKotak = kotak.slice();

    nextKotak[i] = xIsNext ? "X" : "O";
    setKotak(nextKotak);
    setXIsNext(!xIsNext);
  }

  const Pemenang = pemenangBermain(kotak);

  let status = "";
  if (Pemenang) {
    status =
      "Selamat kepada " +
      (!xIsNext ? namaPemain1 : namaPemain2) +
      " telah memenangkan permainan";
    if (!skorUpdate) {
      setSkor((skorSebelumnya) =>
        !xIsNext
          ? { xSkor: skorSebelumnya.xSkor + 1, oSkor: skorSebelumnya.oSkor }
          : { xSkor: skorSebelumnya.xSkor, oSkor: skorSebelumnya.oSkor + 1 }
      );
      setSkorUpdate(!skorUpdate);
    }
  } else {
    status =
      "Giliran: " + (xIsNext ? namaPemain1 + "(X)" : namaPemain2 + "(O)");
    if (kotak.every((value) => value) && !Pemenang) {
      status = "Permainan sangat ketat berakhir imbang 👍";
    }
  }

  function Reset() {
    if (kotak.some((value) => value !== null)) {
      setKotak(Array(9).fill(null));
      setXIsNext(true);
      setSkorUpdate(!skorUpdate);
    }
  }
  const papanClassName = playClicked ? "game active" : "game";
  return (
    <>
      <div className={papanClassName}>
        <h1 className="judul">Tic-Tac-Toe Game</h1>
        <div className="skor">
          <p>
            Skor {namaPemain1} :{skor.xSkor}
          </p>
          <p>
            Skor {namaPemain2} :{skor.oSkor}
          </p>
        </div>
        <p className="status">{status}</p>
        <div className="papan">
          <Kotak value={kotak[0]} onKotakClick={() => handleClick(0)} />
          <Kotak value={kotak[1]} onKotakClick={() => handleClick(1)} />
          <Kotak value={kotak[2]} onKotakClick={() => handleClick(2)} />
          <Kotak value={kotak[3]} onKotakClick={() => handleClick(3)} />
          <Kotak value={kotak[4]} onKotakClick={() => handleClick(4)} />
          <Kotak value={kotak[5]} onKotakClick={() => handleClick(5)} />
          <Kotak value={kotak[6]} onKotakClick={() => handleClick(6)} />
          <Kotak value={kotak[7]} onKotakClick={() => handleClick(7)} />
          <Kotak value={kotak[8]} onKotakClick={() => handleClick(8)} />
        </div>
        <button className="reset" onClick={Reset}>
          Mulai ulang permainan
        </button>
      </div>
    </>
  );
}

export default function Game() {
  const [namaPemain1, setNamaPemain1] = useState("");
  const [namaPemain2, setNamaPemain2] = useState("");
  const [playClicked, setPlayClicked] = useState(false);

  function handlePlayer() {
    const inputValue1 = document.getElementById("Player-1").value;
    const inputValue2 = document.getElementById("Player-2").value;

    setNamaPemain1(inputValue1);
    setNamaPemain2(inputValue2);

    if (inputValue1 && inputValue2) setPlayClicked(true);
    else {
      alert("Nama pemain harus diisi");
    }
  }
  return (
    <>
      {!playClicked ? (
        <label className="namaPemain">
          <input
            className="player"
            type="text"
            placeholder="Masukkan Nama pemain ke-1"
            id="Player-1"
            required
          />
          <input
            className="player"
            type="text"
            placeholder="Masukkan Nama pemain ke-2"
            id="Player-2"
            required
          />
          <button onClick={handlePlayer} className="tombolPlay">
            Mulai
          </button>
        </label>
      ) : null}
      <Papan
        namaPemain1={namaPemain1}
        namaPemain2={namaPemain2}
        playClicked={playClicked}
      />
    </>
  );
}

function pemenangBermain(kotak) {
  const menang = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < menang.length; i++) {
    const [x, y, z] = menang[i];
    if (kotak[x] && kotak[x] === kotak[y] && kotak[x] === kotak[z]) {
      return kotak[x];
    }
  }
  return false;
}
