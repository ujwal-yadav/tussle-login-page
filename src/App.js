import { useEffect, useState } from "react";
import "./App.css";
import bgVideo from "./assets/bgvideo.mp4";

function App() {
  let countryCodeLists = [
    {
      code: "+91",
      name: "in",
    },
    {
      code: "+93",
      name: "af",
    },
    {
      code: "+355",
      name: "al",
    },
    {
      code: "+213",
      name: "dz",
    },
    {
      code: "+184",
      name: "as",
    },
    {
      code: "+376",
      name: "ad",
    },
    {
      code: "+244",
      name: "ao",
    },
    {
      code: "+1-264",
      name: "ai",
    },
    {
      code: "+1-264",
      name: "ai",
    },
    {
      code: "+54",
      name: "ar",
    },
    {
      code: "+374",
      name: "am",
    },
    {
      code: "+297",
      name: "aw",
    },
    {
      code: "+61",
      name: "au",
    },
    {
      code: "+43",
      name: "at",
    },
    {
      code: "+994",
      name: "az",
    },
    {
      code: "+1-242",
      name: "bs",
    },
    {
      code: "+973",
      name: "bg",
    },
    {
      code: "+880",
      name: "bd",
    },
    {
      code: "+1-246",
      name: "bb",
    },
    {
      code: "+375",
      name: "by",
    },
    {
      code: "+32",
      name: "be",
    },
    {
      code: "+501",
      name: "bz",
    },
    {
      code: "+229",
      name: "bj",
    },
    {
      code: "+1-441",
      name: "bm",
    },
    {
      code: "+975",
      name: "bt",
    },
    {
      code: "+591",
      name: "bo",
    },
    {
      code: "+387",
      name: "ba",
    },
    {
      code: "+267",
      name: "bw",
    },
    {
      code: "+55",
      name: "br",
    },
    {
      code: "+246",
      name: "io",
    },
    {
      code: "+1-284",
      name: "vg",
    },
    {
      code: "+673",
      name: "bn",
    },
    {
      code: "+359",
      name: "bg",
    },
    {
      code: "+226",
      name: "vf",
    },
    {
      code: "+257",
      name: "bi",
    },
    {
      code: "+855",
      name: "kh",
    },
    {
      code: "+237",
      name: "cm",
    },
    {
      code: "+1",
      name: "ca",
    },
    {
      code: "+238",
      name: "cv",
    },
    {
      code: "+345",
      name: "ky",
    },
    {
      code: "+236",
      name: "cf",
    },
    {
      code: "+235",
      name: "td",
    },
    {
      code: "+56",
      name: "cl",
    },
    {
      code: "+86",
      name: "cn",
    },
    {
      code: "+61",
      name: "cx",
    },
    {
      code: "+61",
      name: "cc",
    },
    {
      code: "+57",
      name: "co",
    },
    {
      code: "+269",
      name: "km",
    },
    {
      code: "+242",
      name: "cd",
    },
    {
      code: "+243",
      name: "cd",
    },
    {
      code: "+682",
      name: "ck",
    },
    {
      code: "+506",
      name: "cr",
    },
    {
      code: "+385",
      name: "hr",
    },
    {
      code: "+53",
      name: "cu",
    },
    {
      code: "+599",
      name: "cw",
    },
    {
      code: "+537",
      name: "cy",
    },
    {
      code: "+420",
      name: "cz",
    },
    {
      code: "+45",
      name: "dk",
    },
    {
      code: "+253",
      name: "dj",
    },
    {
      code: "+1-767",
      name: "dm",
    },
    {
      code: "+1-809",
      name: "do",
    },
    {
      code: "+670",
      name: "tl",
    },
    {
      code: "+593",
      name: "ec",
    },
    {
      code: "+20",
      name: "eg",
    },
    {
      code: "+503",
      name: "sv",
    },
    {
      code: "+240",
      name: "gq",
    },
    {
      code: "+291",
      name: "er",
    },
    {
      code: "+372",
      name: "ee",
    },
    {
      code: "+251",
      name: "et",
    },
    {
      code: "+500",
      name: "fk",
    },
    {
      code: "+298",
      name: "fo",
    },
    {
      code: "+679",
      name: "fj",
    },
    {
      code: "+358",
      name: "fi",
    },
    {
      code: "+33",
      name: "fr",
    },
    {
      code: "+594",
      name: "French Guiana",
    },
    {
      code: "+689",
      name: "pf",
    },
    {
      code: "+241",
      name: "ga",
    },
    {
      code: "+220",
      name: "gm",
    },
    {
      code: "+995",
      name: "ge",
    },
    {
      code: "+49",
      name: "de",
    },
    {
      code: "+233",
      name: "gh",
    },
    {
      code: "+350",
      name: "gi",
    },
    {
      code: "+30",
      name: "gr",
    },
    {
      code: "+299",
      name: "gl",
    },
    {
      code: "+1-473",
      name: "gd",
    },
    {
      code: "+1-671",
      name: "gu",
    },
    {
      code: "+502",
      name: "gt",
    },
    {
      code: "+224",
      name: "gn",
    },
    {
      code: "+245",
      name: "gw",
    },
    {
      code: "+595",
      name: "gy",
    },
    {
      code: "+509",
      name: "ht",
    },
    {
      code: "+504",
      name: "hn",
    },
    {
      code: "+852",
      name: "hk",
    },
    {
      code: "+36",
      name: "hu",
    },
    {
      code: "+354",
      name: "is",
    },
    {
      code: "+62",
      name: "id",
    },
    {
      code: "+98",
      name: "ir",
    },
    {
      code: "+964",
      name: "iq",
    },
    {
      code: "+353",
      name: "ie",
    },
    {
      code: "+972",
      name: "il",
    },
    {
      code: "+39",
      name: "it",
    },
    {
      code: "+225",
      name: "ci",
    },
    {
      code: "+1-876",
      name: "jm",
    },
    {
      code: "+81",
      name: "jp",
    },
    {
      code: "+962",
      name: "jo",
    },
    {
      code: "+77",
      name: "kz",
    },
    {
      code: "+254",
      name: "ke",
    },
    {
      code: "+686",
      name: "ki",
    },
    {
      code: "+965",
      name: "kw",
    },
    {
      code: "+996",
      name: "kg",
    },
    {
      code: "+856",
      name: "la",
    },
    {
      code: "+371",
      name: "lv",
    },
    {
      code: "+961",
      name: "lb",
    },
    {
      code: "+266",
      name: "ls",
    },
    {
      code: "+231",
      name: "lr",
    },
    {
      code: "+218",
      name: "ly",
    },
    {
      code: "+423",
      name: "li",
    },
    {
      code: "+370",
      name: "lt",
    },
    {
      code: "+352",
      name: "lu",
    },
    {
      code: "+853",
      name: "mo",
    },
    {
      code: "+389",
      name: "mk",
    },
    {
      code: "+261",
      name: "mg",
    },
    {
      code: "+265",
      name: "mw",
    },
    {
      code: "+60",
      name: "my",
    },
    {
      code: "+960",
      name: "mv",
    },
    {
      code: "+223",
      name: "ml",
    },
    {
      code: "+356",
      name: "mt",
    },
    {
      code: "+692",
      name: "mh",
    },
    {
      code: "+222",
      name: "mr",
    },
    {
      code: "+230",
      name: "mu",
    },
    {
      code: "+262",
      name: "yt",
    },
    {
      code: "+52",
      name: "mx",
    },
    {
      code: "+691",
      name: "fm",
    },
    {
      code: "+373",
      name: "md",
    },
    {
      code: "+377",
      name: "mc",
    },
    {
      code: "+976",
      name: "mn",
    },
    {
      code: "+382",
      name: "me",
    },
    {
      code: "+1664",
      name: "ms",
    },
    {
      code: "+212",
      name: "ma",
    },
    {
      code: "+95",
      name: "mm",
    },
    {
      code: "+264",
      name: "na",
    },
    {
      code: "+674",
      name: "nr",
    },
    {
      code: "+977",
      name: "np",
    },
    {
      code: "+31",
      name: "nl",
    },
    {
      code: "+599",
      name: "an",
    },
    {
      code: "+1-869",
      name: "Nevis",
    },
    {
      code: "+687",
      name: "nc",
    },
    {
      code: "+64",
      name: "nz",
    },
    {
      code: "+505",
      name: "ni",
    },
    {
      code: "+227",
      name: "ne",
    },
    {
      code: "+234",
      name: "ng",
    },
    {
      code: "+683",
      name: "nu",
    },
    {
      code: "+850",
      name: "kp",
    },
    {
      code: "+1-670",
      name: "mp",
    },
    {
      code: "+47",
      name: "no",
    },
    {
      code: "+968",
      name: "om",
    },
    {
      code: "+92",
      name: "pk",
    },
    {
      code: "+680",
      name: "pw",
    },
    {
      code: "+970",
      name: "ps",
    },
    {
      code: "+507",
      name: "pa",
    },
    {
      code: "+675",
      name: "pg",
    },
    {
      code: "+595",
      name: "py",
    },
    {
      code: "+51",
      name: "pe",
    },
    {
      code: "+63",
      name: "ph",
    },
    {
      code: "+48",
      name: "pl",
    },
    {
      code: "+351",
      name: "pt",
    },
    {
      code: "+1-787",
      name: "pr",
    },
    {
      code: "+974",
      name: "qa",
    },
    {
      code: "+262",
      name: "re",
    },
    {
      code: "+40",
      name: "ro",
    },
    {
      code: "+7",
      name: "ru",
    },
    {
      code: "+250",
      name: "rw",
    },
    {
      code: "+685",
      name: "ws",
    },
    {
      code: "+378",
      name: "sm",
    },
    {
      code: "+966",
      name: "sa",
    },
    {
      code: "+221",
      name: "sn",
    },
    {
      code: "+381",
      name: "rs",
    },
    {
      code: "+248",
      name: "sc",
    },
    {
      code: "+232",
      name: "sl",
    },
    {
      code: "+65",
      name: "sg",
    },
    {
      code: "+421",
      name: "sk",
    },
    {
      code: "+386",
      name: "sl",
    },
    {
      code: "+677",
      name: "sb",
    },
    {
      code: "+82",
      name: "kr",
    },
    {
      code: "+34",
      name: "es",
    },
    {
      code: "+94",
      name: "lk",
    },
    {
      code: "+249",
      name: "sd",
    },
    {
      code: "+597",
      name: "sr",
    },
    {
      code: "+268",
      name: "sz",
    },
    {
      code: "+46",
      name: "sw",
    },
    {
      code: "+41",
      name: "ch",
    },
    {
      code: "+963",
      name: "sy",
    },
    {
      code: "+886",
      name: "tw",
    },
    {
      code: "+992",
      name: "tj",
    },
    {
      code: "+255",
      name: "tz",
    },
    {
      code: "+66",
      name: "th",
    },
    {
      code: "+228",
      name: "tg",
    },
    {
      code: "+690",
      name: "tk",
    },
    {
      code: "+676",
      name: "to",
    },
    {
      code: "+1-868",
      name: "tt",
    },
    {
      code: "+216",
      name: "tn",
    },
    {
      code: "+90",
      name: "Turkey",
    },
    {
      code: "+993",
      name: "tm",
    },
    {
      code: "+149",
      name: "tc",
    },
    {
      code: "+688",
      name: "tv",
    },
    {
      code: "+1-340",
      name: "vi",
    },
    {
      code: "+256",
      name: "ug",
    },
    {
      code: "+380",
      name: "ua",
    },
    {
      code: "+971",
      name: "ae",
    },
    {
      code: "+44",
      name: "gb",
    },
    {
      code: "+1",
      name: "us",
    },
    {
      code: "+598",
      name: "uy",
    },
    {
      code: "+998",
      name: "uz",
    },
    {
      code: "+678",
      name: "vu",
    },
    {
      code: "+58",
      name: "ve",
    },
    {
      code: "+84",
      name: "vn",
    },
    {
      code: "+681",
      name: "wf",
    },
    {
      code: "+967",
      name: "ye",
    },
    {
      code: "+260",
      name: "zm",
    },
    {
      code: "+263",
      name: "zw",
    },
  ];

  const [selectedCode, setSelectedCode] = useState("in");
  const handleOptionChange = (e) => {
    setSelectedCode(e.target.value);
  };

  useEffect(() => {
    let imgTag = document.querySelector("img");
    imgTag.src = `https://flagcdn.com/48x36/${selectedCode}.png`;
  }, [selectedCode]);

  return (
    <div className="app">
      <video autoPlay loop muted id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="header">
        <div className="sub-header">
          <i className="fab fa-tumblr"></i>
          <h1>TUSSLE.FIT</h1>
        </div>
        <p>Become your best self.</p>
      </div>
      <div className="main-div">
        <form action="#">
          <p>Log in</p>
          <div className="form-box">
            <div className="country-code-box">
              <img src="https://flagcdn.com/48x36/in.png" alt="flag" />
              <select defaultValue={selectedCode} onChange={handleOptionChange}>
                {countryCodeLists.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.code}
                  </option>
                ))}
              </select>
            </div>

            <div className="phone-no-box">
              <input
                type="number"
                placeholder="Enter your phone number"
              ></input>
            </div>
          </div>

          <button>login</button>
          <div className="contact">Contact Support</div>
        </form>
      </div>
      <p className="testo">Tussle.fit is currently in a closed Beta.</p>
    </div>
  );
}

export default App;
