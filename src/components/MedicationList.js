import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Autocomplete from "./AutoComplete";

export default class MedicationList extends Component {
  constructor() {
    super();
    this.state = {
      product: "",
      medication: "test",
      message: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getMedicationResult = e => {
    e.preventDefault();
    const { product, medication } = this.state;
    axios
      .post("https://insurance-risk-assesment.herokuapp.com/api/meds/", { plan: product, med: medication })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  putMedOnState = (e, input) => {
    // e.preventDefault();
    e.persist();
    this.setState({ product: input });
    console.log("fired");
  };

  render() {
    return (
      <div className="med-list">
        <div className="back-button-container">
          <Link to="/">
            <button className="back-button">back</button>
          </Link>
        </div>
        <form className="input-container" onSubmit={this.getMedicationResult}>
          <label htmlFor="Product" />
          <select name="product" value={this.state.product} className="input" onChange={this.changeHandler}>
            <option value="" className="medication-select">
              Choose Product
            </option>
            <option value="CFG Dignified Choice" className="medication-select">
              CFG Dignified Choice
            </option>
            <option value="CFG Term" className="medication-select">
              CFG Term
            </option>
            <option value="Foresters PlanRight" className="medication-select">
              Foresters PlanRight
            </option>
            <option value="Foresters Strong Foundation" className="medication-select">
              Foresters Strong Foundation
            </option>
            <option value="MOO Living Promise" className="medication-select">
              MOO Living Promise
            </option>
            <option value="MOO Term" className="medication-select">
              MOO Term
            </option>
            <option value="Phoenix Remembrance" className="medication-select">
              Phoenix Remembrance
            </option>
            <option value="Phoenix Safe Harbor" className="medication-select">
              Phoenix Safe Harbor
            </option>
            <option value="Transameirica" className="medication-select">
              Transamerica Solutions
            </option>
            />
          </select>
          <Autocomplete
            suggestions={[
              "abilify",
              "amantadine hcl",
              "ambisome",
              "anastrozole",
              "antabuse",
              "aptivus",
              "aranesp",
              "aricept",
              "arimidex",
              "aromasin",
              "atamet",
              "atgam",
              "atripla",
              "avonex",
              "belbuca",
              "betaseron",
              "bidil",
              "buprenex",
              "calcijex",
              "calcitriol",
              "calcium acetate",
              "campath",
              "campral",
              "carbidopa",
              "carnitor",
              "casodex",
              "chlorpromazine",
              "clopidogrel",
              "clozapine",
              "clozaril",
              "cognex",
              "combivir",
              "copaxone",
              "crofelemer",
              "cyclosporine",
              "cystagon",
              "cytogam",
              "daliresp",
              "digoxin",
              "disulfiram",
              "donepezil",
              "dornase alpha",
              "emend",
              "emsam",
              "emtriva",
              "epivir",
              "epzicom",
              "evzio",
              "exelon",
              "femara",
              "filgrastim",
              "flutamide",
              "foscavir",
              "fosrenol",
              "fulyzaq",
              "galantamine",
              "ganciclovir",
              "gengraf",
              "geoden",
              "haldol",
              "haloperidol",
              "halperidone",
              "harvoni",
              "hectorol",
              "hydrea",
              "hydroxyurea",
              "insulin prior to age 50",
              "interferon",
              "intron-a",
              "invega",
              "invirase",
              "isosorbide",
              "lamivudine-zidovudine",
              "lanoxin",
              "larodopa",
              "latuda",
              "levodopa",
              "lexiva",
              "lupron",
              "megestrol",
              "memantine",
              "mercaptopurine",
              "methadone",
              "namenda",
              "narcan",
              "naloxone",
              "naltrexone",
              "navane",
              "neupogen",
              "nintedanib",
              "nitrostat",
              "nitro",
              "nitroglycerin",
              "norvir",
              "ofev",
              "pegintron",
              "peginterferon",
              "perphenazine",
              "prismasol",
              "prograf",
              "pulmozyme",
              "quetiapine",
              "rapamune",
              "razadyne",
              "rebif",
              "reminyl",
              "renagel",
              "renvela",
              "retrovir",
              "ribapak",
              "ribasphere",
              "ribavirin",
              "riluzole",
              "rilutek",
              "risperdal",
              "risperidone",
              "roferon-a",
              "sensipar",
              "seroquel",
              "sofosbuvir",
              "sovaldi",
              "spiriva",
              "stalevo",
              "stelazine",
              "stribild",
              "suboxone",
              "subutex",
              "sustiva",
              "tamoxifen",
              "targretin",
              "thiothixene",
              "tivicay",
              "trilafon",
              "trizivir",
              "viracept",
              "viramune",
              "viread",
              "zemplar",
              "zidovudine",
              "zyprexa",
              "zytiga",
              "amiodarone hcl",
              "anoro ellipta",
              "benlysta",
              "bevespi aerosphere",
              "carbidopa-levadopa",
              "donepezil hcl",
              "effient",
              "geodon",
              "hydralazine",
              "inspra",
              "lithium",
              "methyldopa",
              "pegasys",
              "plavix",
              "pletal",
              "ranexa",
              "risperdone",
              "serzone",
              "sinemet",
              "stiolto respimat",
              "trelegy ellipta",
              "utibron neohaler",
              "aripcept",
              "coumadin",
              "dexamethasone",
              "enbrel",
              "imuran",
              "methotrexate",
              "prochlorperazine",
              "remicade",
              "warfarin",
              "abacavir",
              "alkeran",
              "amiodarone",
              "ampyra",
              "azilect",
              "baraclude",
              "caprelsa",
              "cellcept",
              "chlorpromazine hcl",
              "aggrenox",
              "carvedilol",
              "crixivan",
              "cytoxan",
              "droxia",
              "eligard",
              "eminase",
              "epivir hbv",
              "ergoloid mesylates",
              "floxuridine",
              "fluorouracil",
              "hydrobromide",
              "gammagard",
              "gamunex",
              "coreg",
              "digitek",
              "infergen",
              "leucovorin calcium",
              "limbitrol",
              "megace",
              "megestrol acetate (megace)",
              "mitomycin",
              "mycophenolate mofetil",
              "myfortic",
              "naloxone hcl",
              "naltrexone hcl",
              "panretin",
              "eliquis",
              "enoxaparin sodium",
              "peg-intron",
              "pradaxa",
              "revia",
              "revlimid",
              "rituxan",
              "sandimmune",
              "saphris",
              "lovenox",
              "symbyax",
              "teslac",
              "truvada",
              "zenapax",
              "zerit",
              "ziagen",
              "zoladex",
              "xarelto",
              "adcirca",
              "dobutamine hcl",
              "hepsera",
              "humira",
              "kalydeco",
              "morphine sulfate",
              "nabi-hb",
              "tysabri",
              "xeljanz",
              "aprepitant",
              "armasin",
              "avenox",
              "baclofen",
              "belimumab",
              "calcium acetrate",
              "disufram",
              "esylate",
              "floscavir",
              "furosemide",
              "halperidol",
              "hectoral",
              "ribaviran",
              "isosorbide & hydralazine",
              "laradopa",
              "lasix",
              "lupton",
              "marijuana",
              "narcan/naloxone/naltrexone",
              "nitro-dur",
              "nitroquick",
              "navene",
              "olanzapine",
              "ondansetron",
              "roferon",
              "spironolactone",
              "sulfadiazine",
              "primasol",
              "thorazine"
            ]}
            putMedOnState={this.putMedOnState}
          >
            {/* <input
              type="text"
              value={this.state.medication}
              className="input"
              placeholder="Medication"
              onChange={this.changeHandler}
              name="medication"
            /> */}
          </Autocomplete>

          <button>Check Medication</button>
        </form>
      </div>
    );
  }
}
